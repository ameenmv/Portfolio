<template>
  <EffectComposerPmndrs>
    <!-- Subtle bloom only on bright orbs -->
    <BloomPmndrs
      :intensity="0.4"
      :luminance-threshold="0.8"
      :luminance-smoothing="0.6"
      :radius="0.4"
    />
    <!-- Vignette for cinema feel -->
    <VignettePmndrs
      :offset="0.35"
      :darkness="vignetteIntensity"
    />
  </EffectComposerPmndrs>
</template>

<script setup>
/**
 * PostProcessing — Minimal, clean post-processing.
 * Only subtle bloom on bright elements and vignette for depth.
 * NO noise, NO chromatic aberration (those created the TV static look).
 */
import { ref } from "vue";
import { useLoop } from "@tresjs/core";
import {
  EffectComposerPmndrs,
  BloomPmndrs,
  VignettePmndrs,
} from "@tresjs/post-processing";
import { useWebGLStore } from "../../stores/webgl.js";

const store = useWebGLStore();

const baseVignette = 0.35;
const vignetteIntensity = ref(baseVignette);

const { onBeforeRender } = useLoop();

onBeforeRender(() => {
  // Vignette gets slightly darker during fast scroll
  const targetVignette = baseVignette + Math.abs(store.scrollVelocity) * 0.3;
  vignetteIntensity.value += (targetVignette - vignetteIntensity.value) * 0.03;
  vignetteIntensity.value = Math.min(vignetteIntensity.value, 0.7);
});
</script>
