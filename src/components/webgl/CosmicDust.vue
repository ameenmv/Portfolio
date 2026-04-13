<template>
  <TresGroup ref="groupRef">
    <!-- Large, soft nebula blobs (background layer) -->
    <TresMesh
      v-for="(nebula, i) in nebulae"
      :key="'neb-' + i"
      :position="[nebula.x, nebula.y, nebula.z]"
      :scale="[nebula.scale, nebula.scale, nebula.scale]"
    >
      <TresSphereGeometry :args="[1, 24, 24]" />
      <TresMeshBasicMaterial
        :color="nebula.color"
        :transparent="true"
        :opacity="nebula.opacity"
      />
    </TresMesh>

    <!-- Medium accent particles (mid layer) -->
    <TresMesh
      v-for="(particle, i) in particles"
      :key="'part-' + i"
      :position="[particle.x, particle.y, particle.z]"
      :scale="[particle.scale, particle.scale, particle.scale]"
    >
      <TresSphereGeometry :args="[1, 8, 8]" />
      <TresMeshBasicMaterial
        :color="particle.color"
        :transparent="true"
        :opacity="particle.opacity"
      />
    </TresMesh>

    <!-- Tiny star points (foreground sparkle) -->
    <TresPoints ref="starsRef" :frustum-culled="false">
      <TresBufferGeometry />
      <TresPointsMaterial
        :size="1.8"
        :color="'#b8a9e8'"
        :transparent="true"
        :opacity="0.5"
        :blending="2"
        :depth-write="false"
        :size-attenuation="true"
      />
    </TresPoints>
  </TresGroup>
</template>

<script setup>
/**
 * CosmicDust — Premium 3-layer cosmic atmosphere:
 *   Layer 1: Large soft nebula blobs (dreamy background glow)
 *   Layer 2: Medium glowing particles (floating cosmic dust) 
 *   Layer 3: Tiny star points (sparkle/shimmer)
 */
import { ref, reactive, onMounted } from "vue";
import { useLoop } from "@tresjs/core";
import * as THREE from "three";
import { useWebGLStore } from "../../stores/webgl.js";

const store = useWebGLStore();
const groupRef = ref(null);
const starsRef = ref(null);

// ═══════════════════════════════════════════
// LAYER 1: Nebula blobs (very large, very transparent)
// ═══════════════════════════════════════════
const nebulaColors = ["#2a1155", "#1a0a3e", "#0d0633", "#3d1a6e", "#150940"];
const NEBULA_COUNT = 6;
const nebulae = reactive([]);

for (let i = 0; i < NEBULA_COUNT; i++) {
  nebulae.push({
    x: (Math.random() - 0.5) * 35,
    y: (Math.random() - 0.5) * 25,
    z: -15 - Math.random() * 10,
    ox: 0, oy: 0,
    scale: 3 + Math.random() * 5,
    color: nebulaColors[i % nebulaColors.length],
    opacity: 0.04 + Math.random() * 0.04,
    floatSpeed: 0.02 + Math.random() * 0.04,
    phase: Math.random() * Math.PI * 2,
  });
}
nebulae.forEach(n => { n.ox = n.x; n.oy = n.y; });

// ═══════════════════════════════════════════
// LAYER 2: Medium particles (visible floating specks)
// ═══════════════════════════════════════════
const particleColors = [
  "#7755dd", "#8866ee", "#6644cc", "#9977ff",
  "#aa88ff", "#5533bb", "#e94560", "#00d4ff",
];
const PARTICLE_COUNT = 45;
const particles = reactive([]);

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const isAccent = Math.random() > 0.88;
  particles.push({
    x: (Math.random() - 0.5) * 30,
    y: (Math.random() - 0.5) * 22,
    z: (Math.random() - 0.5) * 20 - 3,
    ox: 0, oy: 0, oz: 0,
    scale: 0.03 + Math.random() * 0.08,
    color: isAccent
      ? particleColors[6 + Math.floor(Math.random() * 2)]
      : particleColors[Math.floor(Math.random() * 6)],
    opacity: 0.3 + Math.random() * 0.5,
    floatSpeed: 0.08 + Math.random() * 0.2,
    floatAmp: 0.5 + Math.random() * 2.5,
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
  });
}
particles.forEach(p => { p.ox = p.x; p.oy = p.y; p.oz = p.z; });

// ═══════════════════════════════════════════
// LAYER 3: Stars (tiny points setup)
// ═══════════════════════════════════════════
const STAR_COUNT = 200;

onMounted(() => {
  const trySetup = () => {
    if (!starsRef.value?.instance) {
      requestAnimationFrame(trySetup);
      return;
    }
    const geo = starsRef.value.instance.geometry;
    const positions = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25 - 5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.computeBoundingSphere();
  };
  trySetup();
});

// ═══════════════════════════════════════════
// ANIMATION LOOP
// ═══════════════════════════════════════════
const { onBeforeRender } = useLoop();

onBeforeRender(({ elapsed }) => {
  const t = elapsed;
  const mx = store.mousePosition.x;
  const my = store.mousePosition.y;
  const sv = store.scrollVelocity;

  // Animate nebulae (very slow, dreamy drift)
  for (const n of nebulae) {
    n.x = n.ox + Math.sin(t * n.floatSpeed + n.phase) * 2;
    n.y = n.oy + Math.cos(t * n.floatSpeed * 0.7 + n.phase) * 1.5;
    // Subtle breathing
    n.opacity = 0.04 + Math.sin(t * 0.3 + n.phase) * 0.015;
  }

  // Animate particles (organic float + mouse parallax)
  for (const p of particles) {
    p.x = p.ox + Math.sin(t * p.floatSpeed + p.phaseX) * p.floatAmp;
    p.y = p.oy + Math.cos(t * p.floatSpeed * 0.8 + p.phaseY) * p.floatAmp * 0.7;
    p.z = p.oz + Math.sin(t * p.floatSpeed * 0.5) * p.floatAmp * 0.3;

    // Mouse parallax (depth-based)
    const depth = (p.oz + 15) / 30;
    p.x += mx * depth * 1.2;
    p.y += my * depth * 0.8;

    // Scroll turbulence
    p.x += Math.sin(t * 2 + p.phaseX) * Math.abs(sv) * 1.5;
  }

  // Stars rotate very slowly
  if (starsRef.value?.instance) {
    starsRef.value.instance.rotation.y = t * 0.003;
    starsRef.value.instance.rotation.x = Math.sin(t * 0.002) * 0.05;
  }
});
</script>
