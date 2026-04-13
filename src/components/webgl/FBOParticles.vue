<template>
  <primitive :object="particlesMesh" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef } from "vue";
import { useLoop, useTresContext } from "@tresjs/core";
import * as THREE from "three";
import { GPUComputationRenderer } from "three/examples/jsm/misc/GPUComputationRenderer.js";
import { useWebGLStore } from "../../stores/webgl.js";

// Shader imports
import simulationFrag from "../../shaders/simulation.frag.glsl";
import particlesVert from "../../shaders/particles.vert.glsl";
import particlesFrag from "../../shaders/particles.frag.glsl";

const store = useWebGLStore();
const { renderer } = useTresContext();

// ── Configuration ──
const PARTICLE_COUNT_SQRT = 128; // 128x128 = 16,384 particles
const PARTICLE_COUNT = PARTICLE_COUNT_SQRT * PARTICLE_COUNT_SQRT;

// GPU Computation references
let gpuCompute = null;
let positionVariable = null;
let velocityVariable = null;
let positionUniforms = null;

// Particle mesh
const particlesMesh = shallowRef(new THREE.Points());

// ── Initialize GPGPU ──
function initGPGPU() {
  const glRenderer = renderer.value;
  if (!glRenderer) return;

  gpuCompute = new GPUComputationRenderer(
    PARTICLE_COUNT_SQRT,
    PARTICLE_COUNT_SQRT,
    glRenderer
  );

  // Check for float texture support
  if (!glRenderer.capabilities.isWebGL2) {
    console.warn("WebGL2 required for FBO particles");
    return;
  }

  // Create initial position texture
  const positionTexture = gpuCompute.createTexture();
  const velocityTexture = gpuCompute.createTexture();

  // Fill initial positions (sphere distribution)
  fillPositionTexture(positionTexture);
  fillVelocityTexture(velocityTexture);

  // Create original/target position textures for morphing
  const originalPositions = gpuCompute.createTexture();
  const targetPositions = gpuCompute.createTexture();
  fillPositionTexture(originalPositions); // Same as initial
  fillSphereFormation(targetPositions); // Target: sphere

  // Add position computation variable
  positionVariable = gpuCompute.addVariable(
    "texturePosition",
    simulationFrag,
    positionTexture
  );

  // Add velocity variable (simple passthrough)
  velocityVariable = gpuCompute.addVariable(
    "textureVelocity",
    `
    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      vec4 vel = texture2D(textureVelocity, uv);
      vel.xyz *= 0.97;
      gl_FragColor = vel;
    }
    `,
    velocityTexture
  );

  // Set dependencies
  gpuCompute.setVariableDependencies(positionVariable, [
    positionVariable,
    velocityVariable,
  ]);
  gpuCompute.setVariableDependencies(velocityVariable, [
    positionVariable,
    velocityVariable,
  ]);

  // Add uniforms to position shader
  positionUniforms = positionVariable.material.uniforms;
  positionUniforms.uTime = { value: 0 };
  positionUniforms.uDelta = { value: 0.016 };
  positionUniforms.uMouse = { value: new THREE.Vector2(0, 0) };
  positionUniforms.uMouseStrength = { value: 0.5 };
  positionUniforms.uScrollVelocity = { value: 0 };
  positionUniforms.uMorphProgress = { value: 0 };
  positionUniforms.uOriginalPositions = { value: originalPositions };
  positionUniforms.uTargetPositions = { value: targetPositions };
  positionUniforms.uCurlFrequency = { value: 0.25 };
  positionUniforms.uCurlAmplitude = { value: 0.5 };

  // Init GPU compute
  const error = gpuCompute.init();
  if (error !== null) {
    console.error("GPGPU Error:", error);
    return;
  }

  // Create particle mesh
  createParticleMesh();
}

// ── Fill texture with random positions (galaxy-like distribution) ──
function fillPositionTexture(texture) {
  const data = texture.image.data;
  for (let i = 0; i < data.length; i += 4) {
    // Gaussian-like distribution for galaxy effect
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.pow(Math.random(), 0.5) * 8;

    data[i] = r * Math.sin(phi) * Math.cos(theta); // x
    data[i + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.4; // y (flattened)
    data[i + 2] = r * Math.cos(phi); // z
    data[i + 3] = Math.random(); // life/age
  }
}

// ── Fill texture with sphere formation (morph target) ──
function fillSphereFormation(texture) {
  const data = texture.image.data;
  for (let i = 0; i < data.length; i += 4) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 3 + Math.random() * 0.5; // Sphere with slight thickness

    data[i] = r * Math.sin(phi) * Math.cos(theta);
    data[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    data[i + 2] = r * Math.cos(phi);
    data[i + 3] = Math.random();
  }
}

// ── Create the visual particle mesh ──
function createParticleMesh() {
  const geometry = new THREE.BufferGeometry();

  // Positions (will be overridden by shader, but needed for bounding)
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  // UV references to look up FBO texture
  const references = new Float32Array(PARTICLE_COUNT * 2);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (i % PARTICLE_COUNT_SQRT) / PARTICLE_COUNT_SQRT;
    const y = Math.floor(i / PARTICLE_COUNT_SQRT) / PARTICLE_COUNT_SQRT;
    references[i * 2] = x;
    references[i * 2 + 1] = y;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("reference", new THREE.BufferAttribute(references, 2));

  // Particle material with custom shaders
  const material = new THREE.ShaderMaterial({
    vertexShader: particlesVert,
    fragmentShader: particlesFrag,
    uniforms: {
      uPositionTexture: { value: null },
      uPointSize: { value: 1.5 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#1a0a3e") }, // Deep indigo (cool)
      uColorB: { value: new THREE.Color("#e94560") }, // Electric magenta (hot)
      uOpacity: { value: 0.6 },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  particlesMesh.value = new THREE.Points(geometry, material);
  particlesMesh.value.frustumCulled = false;
}

// ── Render loop ──
const { onBeforeRender } = useLoop();

let time = 0;
onBeforeRender(({ delta }) => {
  if (!gpuCompute || !positionUniforms) return;

  time += delta;

  // Update GPGPU uniforms from store
  positionUniforms.uTime.value = time;
  positionUniforms.uDelta.value = Math.min(delta, 0.05); // Cap delta
  positionUniforms.uMouse.value.set(
    store.mousePosition.x,
    store.mousePosition.y
  );
  positionUniforms.uScrollVelocity.value = store.scrollVelocity;
  positionUniforms.uMorphProgress.value = store.morphProgress;

  // Compute!
  gpuCompute.compute();

  // Pass computed position texture to render shader
  if (particlesMesh.value && particlesMesh.value.material) {
    particlesMesh.value.material.uniforms.uPositionTexture.value =
      gpuCompute.getCurrentRenderTarget(positionVariable).texture;
    particlesMesh.value.material.uniforms.uTime.value = time;
  }
});

// ── Lifecycle ──
onMounted(() => {
  // Wait a tick for renderer to be available
  setTimeout(() => {
    initGPGPU();
  }, 100);
});

onBeforeUnmount(() => {
  if (gpuCompute) {
    gpuCompute.dispose();
  }
  if (particlesMesh.value) {
    particlesMesh.value.geometry.dispose();
    particlesMesh.value.material.dispose();
  }
});
</script>
