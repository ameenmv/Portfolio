<template>
  <TresPoints ref="pointsRef" :frustum-culled="false">
    <TresBufferGeometry />
    <TresPointsMaterial
      :size="3.0"
      :color="'#7755dd'"
      :transparent="true"
      :opacity="0.25"
      :blending="2"
      :depth-write="false"
      :size-attenuation="true"
    />
  </TresPoints>
</template>

<script setup>
/**
 * SimpleParticles — Lightweight fallback for mobile/reduced-motion.
 * No GPGPU, just a static point cloud with gentle rotation.
 */
import { ref, onMounted, watchEffect } from "vue";
import { useLoop } from "@tresjs/core";
import * as THREE from "three";

const pointsRef = ref(null);
const PARTICLE_COUNT = 800;

onMounted(() => {
  // Wait for the component to be available
  const checkAndSetup = () => {
    if (!pointsRef.value?.instance) {
      requestAnimationFrame(checkAndSetup);
      return;
    }

    const points = pointsRef.value.instance;
    const geometry = points.geometry;

    // Generate particle positions
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.5) * 10;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5;
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    geometry.computeBoundingSphere();
  };

  checkAndSetup();
});

// Gentle rotation in render loop
const { onBeforeRender } = useLoop();

onBeforeRender(({ elapsed }) => {
  if (pointsRef.value?.instance) {
    pointsRef.value.instance.rotation.y = elapsed * 0.02;
    pointsRef.value.instance.rotation.x = Math.sin(elapsed * 0.01) * 0.1;
  }
});
</script>
