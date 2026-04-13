<template>
  <!-- Central pulsing energy core visible in Contact section -->
  <TresGroup ref="coreGroupRef">
    <!-- Inner bright core -->
    <TresMesh :position="[0, 0, -8]" :scale="[coreScale, coreScale, coreScale]">
      <TresSphereGeometry :args="[0.8, 32, 32]" />
      <TresMeshBasicMaterial
        :color="'#aa44ff'"
        :transparent="true"
        :opacity="coreOpacity"
      />
    </TresMesh>

    <!-- Outer glow shell -->
    <TresMesh :position="[0, 0, -8]" :scale="[glowScale, glowScale, glowScale]">
      <TresSphereGeometry :args="[1.2, 16, 16]" />
      <TresMeshBasicMaterial
        :color="'#6644cc'"
        :transparent="true"
        :opacity="glowOpacity"
        :wireframe="true"
      />
    </TresMesh>

    <!-- Orbiting ring 1 -->
    <TresMesh
      :position="[0, 0, -8]"
      :rotation="[ringRotX1, ringRotY1, 0]"
      :scale="[ringScale, ringScale, ringScale]"
    >
      <TresTorusGeometry :args="[2, 0.01, 8, 64]" />
      <TresMeshBasicMaterial
        :color="'#e94560'"
        :transparent="true"
        :opacity="ringOpacity"
      />
    </TresMesh>

    <!-- Orbiting ring 2 -->
    <TresMesh
      :position="[0, 0, -8]"
      :rotation="[ringRotX2, ringRotY2, 0.5]"
      :scale="[ringScale * 0.8, ringScale * 0.8, ringScale * 0.8]"
    >
      <TresTorusGeometry :args="[2.5, 0.01, 8, 64]" />
      <TresMeshBasicMaterial
        :color="'#00d4ff'"
        :transparent="true"
        :opacity="ringOpacity * 0.7"
      />
    </TresMesh>

    <!-- Orbiting ring 3 -->
    <TresMesh
      :position="[0, 0, -8]"
      :rotation="[ringRotX3, 0, ringRotY3]"
      :scale="[ringScale * 1.2, ringScale * 1.2, ringScale * 1.2]"
    >
      <TresTorusGeometry :args="[1.8, 0.008, 8, 64]" />
      <TresMeshBasicMaterial
        :color="'#7755dd'"
        :transparent="true"
        :opacity="ringOpacity * 0.5"
      />
    </TresMesh>
  </TresGroup>
</template>

<script setup>
/**
 * EnergyCore — A pulsing cosmic energy sphere that appears in the Contact section.
 * Multiple orbiting rings and a glowing core that reacts to scroll and audio.
 */
import { ref } from "vue";
import { useLoop } from "@tresjs/core";
import { useWebGLStore } from "../../stores/webgl.js";

const store = useWebGLStore();
const coreGroupRef = ref(null);

// Core
const coreScale = ref(0);
const coreOpacity = ref(0);
const glowScale = ref(0);
const glowOpacity = ref(0);

// Rings
const ringScale = ref(0);
const ringOpacity = ref(0);
const ringRotX1 = ref(0);
const ringRotY1 = ref(0);
const ringRotX2 = ref(0.8);
const ringRotY2 = ref(0);
const ringRotX3 = ref(1.2);
const ringRotY3 = ref(0);

const { onBeforeRender } = useLoop();

onBeforeRender(({ elapsed }) => {
  const t = elapsed;
  const isContact = store.activeSection === "contact";
  const progress = isContact ? store.sectionProgress : 0;

  // Target values based on section
  const targetCoreScale = isContact ? 0.8 + Math.sin(t * 2) * 0.1 : 0;
  const targetCoreOpacity = isContact ? 0.3 + Math.sin(t * 1.5) * 0.1 : 0;
  const targetGlowScale = isContact ? 1.0 + Math.sin(t * 1.2) * 0.15 : 0;
  const targetRingScale = isContact ? 1.0 + progress * 0.3 : 0;
  const targetRingOpacity = isContact ? 0.12 + Math.sin(t) * 0.03 : 0;

  // Smooth interpolation
  coreScale.value += (targetCoreScale - coreScale.value) * 0.04;
  coreOpacity.value += (targetCoreOpacity - coreOpacity.value) * 0.04;
  glowScale.value += (targetGlowScale - glowScale.value) * 0.04;
  glowOpacity.value += (targetCoreOpacity * 0.4 - glowOpacity.value) * 0.04;
  ringScale.value += (targetRingScale - ringScale.value) * 0.04;
  ringOpacity.value += (targetRingOpacity - ringOpacity.value) * 0.04;

  // Rotate rings
  ringRotX1.value += 0.003;
  ringRotY1.value += 0.005;
  ringRotX2.value += 0.004;
  ringRotY2.value -= 0.003;
  ringRotX3.value -= 0.002;
  ringRotY3.value += 0.006;

  // Audio reactivity (subtle pulse)
  if (store.audioReactivity > 0) {
    coreScale.value += store.audioReactivity * 0.2;
    ringOpacity.value += store.audioReactivity * 0.05;
  }
});
</script>
