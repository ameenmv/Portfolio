<template>
  <div class="webgl-canvas" v-if="canMount">
    <TresCanvas
      :clear-color="'#050510'"
      :alpha="true"
      :antialias="true"
      :dpr="dpr"
      window-size
    >
      <!-- Default camera -->
      <CameraController />

      <!-- Scene lighting & atmosphere -->
      <SceneEnvironment />

      <!-- Elegant floating cosmic dust -->
      <CosmicDust />

      <!-- Floating wireframe geometry -->
      <FloatingGeometry />

      <!-- Orbital project cards (visible in Projects section) -->
      <FloatingProjects />

      <!-- Energy core (visible in Contact section) -->
      <EnergyCore />

      <!-- Minimal post-processing -->
      <Suspense>
        <PostProcessing />
      </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { TresCanvas } from "@tresjs/core";
import { useWebGLStore } from "../../stores/webgl.js";
import CameraController from "./CameraController.vue";
import SceneEnvironment from "./SceneEnvironment.vue";
import CosmicDust from "./CosmicDust.vue";
import FloatingGeometry from "./FloatingGeometry.vue";
import FloatingProjects from "./FloatingProjects.vue";
import EnergyCore from "./EnergyCore.vue";
import PostProcessing from "./PostProcessing.vue";

const store = useWebGLStore();
const canMount = ref(false);

const isMobile =
  typeof window !== "undefined" &&
  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768);

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

onMounted(() => {
  store.init();
  if (!reducedMotion) {
    requestAnimationFrame(() => {
      canMount.value = true;
      store.setReady();
    });
  }
});
</script>

<style scoped>
.webgl-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.webgl-canvas :deep(canvas) {
  pointer-events: none;
  display: block;
  width: 100% !important;
  height: 100% !important;
}
</style>
