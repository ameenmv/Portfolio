<template>
  <div
    ref="cursorRef"
    class="custom-cursor"
    :class="{ 'cursor-hover': isHovering, 'cursor-active': isActive }"
  >
    <div class="cursor-dot"></div>
    <div class="cursor-ring"></div>
    <div class="cursor-glow"></div>
  </div>
</template>

<script setup>
/**
 * CustomCursor — A glowing cosmic cursor that replaces the default.
 * Has three layers: dot (center), ring (following), glow (hover effect).
 * Responds to hover states for premium feel.
 */
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useWebGLStore } from "../stores/webgl.js";

const store = useWebGLStore();
const cursorRef = ref(null);
const isHovering = ref(false);
const isActive = ref(false);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let rafId = null;

function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function onMouseDown() {
  isActive.value = true;
}

function onMouseUp() {
  isActive.value = false;
}

function checkHover(e) {
  const target = e.target;
  const isInteractive =
    target.closest("a") ||
    target.closest("button") ||
    target.closest("[data-cursor-hover]") ||
    target.closest(".btnn") ||
    target.closest(".card");
  isHovering.value = !!isInteractive;
}

function animate() {
  // Smooth follow with damping
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;

  if (cursorRef.value) {
    cursorRef.value.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  }

  rafId = requestAnimationFrame(animate);
}

onMounted(() => {
  // Only on desktop
  if (window.matchMedia("(hover: hover)").matches) {
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    animate();
  }
});

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId);
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mousemove", checkHover);
  window.removeEventListener("mousedown", onMouseDown);
  window.removeEventListener("mouseup", onMouseUp);
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
  mix-blend-mode: difference;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease;
}

.cursor-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease,
    opacity 0.3s ease;
}

.cursor-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: radial-gradient(
    circle,
    rgba(102, 68, 204, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
}

/* Hover state */
.cursor-hover .cursor-ring {
  width: 50px;
  height: 50px;
  border-color: rgba(102, 68, 204, 0.6);
}

.cursor-hover .cursor-glow {
  opacity: 1;
  width: 80px;
  height: 80px;
}

.cursor-hover .cursor-dot {
  transform: translate(-50%, -50%) scale(1.5);
  background: #6644cc;
}

/* Active (click) state */
.cursor-active .cursor-ring {
  width: 28px;
  height: 28px;
  border-color: #e94560;
}

.cursor-active .cursor-dot {
  transform: translate(-50%, -50%) scale(0.7);
}

/* Hide on touch devices */
@media (hover: none) {
  .custom-cursor {
    display: none;
  }
}
</style>
