/**
 * useHyperScroll — Smooth scroll normalization and velocity tracking.
 *
 * Captures scroll events (wheel, touch, keyboard), normalizes them to a 0→1
 * progress value, computes velocity, and sends everything to the Pinia store.
 * Does NOT hijack scroll — the HTML content still scrolls naturally.
 */
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useWebGLStore } from "../stores/webgl.js";

export function useHyperScroll() {
  const store = useWebGLStore();

  let scrollY = 0;
  let prevScrollY = 0;
  let velocity = 0;
  let ticking = false;
  let rafId = null;
  let smoothVelocity = 0;

  /**
   * Calculate scroll progress based on document height
   */
  function calculateProgress() {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return 0;
    return Math.max(0, Math.min(1, window.scrollY / docHeight));
  }

  /**
   * Smooth update loop running on RAF
   */
  function tick() {
    scrollY = window.scrollY;

    // Calculate instantaneous velocity
    const rawVelocity = (scrollY - prevScrollY) / window.innerHeight;
    prevScrollY = scrollY;

    // Smooth velocity with exponential decay
    smoothVelocity += (rawVelocity - smoothVelocity) * 0.15;

    // Decay velocity toward zero
    if (Math.abs(smoothVelocity) < 0.0001) smoothVelocity = 0;

    // Update store
    const progress = calculateProgress();
    store.updateScroll(progress, smoothVelocity);

    rafId = requestAnimationFrame(tick);
  }

  /**
   * Initialize scroll tracking
   */
  function init() {
    prevScrollY = window.scrollY;
    tick();
  }

  /**
   * Track mouse position for 3D parallax
   */
  function handleMouseMove(e) {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    store.updateMouse(x, y);
  }

  onMounted(() => {
    init();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
  });

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", handleMouseMove);
  });

  return {
    velocity: ref(0),
    calculateProgress,
  };
}
