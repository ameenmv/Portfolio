<template>
  <div class="scroll-progress" :class="{ visible: show }">
    <!-- Progress line -->
    <div class="progress-track">
      <div class="progress-fill" :style="{ height: progress + '%' }"></div>
      <div class="progress-glow" :style="{ top: progress + '%' }"></div>
    </div>

    <!-- Section dots -->
    <div class="section-dots">
      <div
        v-for="(section, i) in sections"
        :key="section.id"
        class="section-dot"
        :class="{ active: activeSection === section.id }"
        :style="{ top: section.position + '%' }"
        @click="scrollToSection(section.id)"
      >
        <span class="dot-label">{{ section.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useWebGLStore } from "../stores/webgl.js";

const store = useWebGLStore();
const show = ref(false);

const progress = computed(() => store.scrollProgress * 100);
const activeSection = computed(() => store.activeSection);

const sections = [
  { id: "hero", label: "Home", position: 10 },
  { id: "about", label: "About", position: 32 },
  { id: "projects", label: "Work", position: 60 },
  { id: "contact", label: "Contact", position: 87 },
];

function scrollToSection(id) {
  const sectionMap = {
    hero: 0,
    about: 0.25,
    projects: 0.5,
    contact: 0.8,
  };
  const target = sectionMap[id] || 0;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo({ top: target * docHeight, behavior: "smooth" });
}

let showTimeout = null;

onMounted(() => {
  // Show after intro (delay)
  showTimeout = setTimeout(() => {
    show.value = true;
  }, 4000);
});

onBeforeUnmount(() => {
  if (showTimeout) clearTimeout(showTimeout);
});
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  opacity: 0;
  transition: opacity 0.8s ease;
  pointer-events: none;
}

.scroll-progress.visible {
  opacity: 1;
  pointer-events: auto;
}

.progress-track {
  width: 2px;
  height: 200px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 1px;
  position: relative;
  overflow: visible;
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(102, 68, 204, 0.3),
    rgba(102, 68, 204, 0.8)
  );
  border-radius: 1px;
  transition: height 0.1s ease-out;
}

.progress-glow {
  position: absolute;
  left: -4px;
  width: 10px;
  height: 10px;
  background: radial-gradient(
    circle,
    rgba(102, 68, 204, 0.6) 0%,
    transparent 70%
  );
  border-radius: 50%;
  transform: translateY(-50%);
  transition: top 0.1s ease-out;
}

.section-dots {
  position: absolute;
  top: 0;
  left: -3px;
  width: 8px;
  height: 200px;
}

.section-dot {
  position: absolute;
  left: 0;
  width: 8px;
  height: 8px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.section-dot::before {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  margin-left: -1px;
}

.section-dot.active::before {
  width: 6px;
  height: 6px;
  background: #6644cc;
  box-shadow: 0 0 8px rgba(102, 68, 204, 0.5);
  margin-left: -2px;
}

.dot-label {
  position: absolute;
  right: 16px;
  font-size: 10px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.3);
  white-space: nowrap;
  opacity: 0;
  transform: translateX(5px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.section-dot:hover .dot-label,
.section-dot.active .dot-label {
  opacity: 1;
  transform: translateX(0);
  color: rgba(255, 255, 255, 0.7);
}

/* Hide on mobile */
@media (max-width: 768px) {
  .scroll-progress {
    display: none;
  }
}
</style>
