<template>
  <div class="section-transition" :class="variant">
    <div class="transition-line"></div>
    <div class="transition-gradient"></div>
  </div>
</template>

<script setup>
/**
 * SectionTransition — Smooth gradient divider between portfolio sections.
 * Adds a subtle "portal" effect between dark ↔ light areas.
 */
defineProps({
  variant: {
    type: String,
    default: "dark-to-light", // 'dark-to-light' | 'light-to-dark'
  },
});
</script>

<style scoped>
.section-transition {
  position: relative;
  height: 120px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}

.transition-line {
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(102, 68, 204, 0.3) 30%,
    rgba(102, 68, 204, 0.5) 50%,
    rgba(102, 68, 204, 0.3) 70%,
    transparent 100%
  );
  transform: translateY(-50%);
}

.transition-gradient {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 2px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse,
    rgba(102, 68, 204, 0.4) 0%,
    transparent 70%
  );
  filter: blur(8px);
}

.dark-to-light {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.03) 50%,
    rgba(255, 255, 255, 0.92) 100%
  );
}

.light-to-dark {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.92) 0%,
    rgba(255, 255, 255, 0.03) 50%,
    transparent 100%
  );
}

.dark-to-dark {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(102, 68, 204, 0.03) 50%,
    transparent 100%
  );
}
</style>
