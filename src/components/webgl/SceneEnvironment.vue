<template>
  <!-- Very subtle ambient for base illumination -->
  <TresAmbientLight :intensity="0.08" :color="'#1a0a2e'" />

  <!-- Key light: soft purple from above-right -->
  <TresDirectionalLight
    :position="[8, 10, 5]"
    :intensity="0.3"
    :color="'#6644cc'"
  />

  <!-- Fill light: warm accent from lower-left -->
  <TresDirectionalLight
    :position="[-5, -3, 8]"
    :intensity="0.1"
    :color="'#e94560'"
  />

  <!-- Mouse-following point light for interactivity -->
  <TresPointLight
    :position="[lightX, lightY, 12]"
    :intensity="0.15"
    :color="'#7755dd'"
    :distance="25"
    :decay="2"
  />

  <!-- Depth fog -->
  <TresFog :args="['#050510', 15, 45]" />
</template>

<script setup>
import { ref } from "vue";
import { useLoop } from "@tresjs/core";
import { useWebGLStore } from "../../stores/webgl.js";

const store = useWebGLStore();

const lightX = ref(0);
const lightY = ref(0);

const { onBeforeRender } = useLoop();

onBeforeRender(() => {
  // Smooth mouse follow for point light
  lightX.value += (store.mousePosition.x * 5 - lightX.value) * 0.02;
  lightY.value += (store.mousePosition.y * 4 - lightY.value) * 0.02;
});
</script>
