<template>
  <div class="app-root">
    <!-- ═══════════════════════════════════════════════ -->
    <!-- LAYER 0: Persistent 3D WebGL Canvas (Background) -->
    <!-- ═══════════════════════════════════════════════ -->
    <WebGLCanvas />

    <!-- ═══════════════════════════════════════════════ -->
    <!-- LAYER 1: Intro Overlay -->
    <!-- ═══════════════════════════════════════════════ -->
    <Intro />

    <!-- ═══════════════════════════════════════════════ -->
    <!-- LAYER 2: HTML Content (scrollable, transparent bg) -->
    <!-- ═══════════════════════════════════════════════ -->
    <div class="smooth-wrapper">
      <div class="smooth-content content-layer">
        <router-view></router-view>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- LAYER 3: UI Overlays -->
    <!-- ═══════════════════════════════════════════════ -->
    <ScrollProgress />
    <CustomCursor />
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Intro from "./components/Intro.vue";
import WebGLCanvas from "./components/webgl/WebGLCanvas.vue";
import CustomCursor from "./components/CustomCursor.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import { useHyperScroll } from "./composables/useHyperScroll.js";
import { useSceneOrchestrator } from "./composables/useSceneOrchestrator.js";

gsap.registerPlugin(ScrollSmoother);

export default {
  name: "App",
  components: {
    Intro,
    WebGLCanvas,
    CustomCursor,
    ScrollProgress,
  },
  setup() {
    // Initialize scroll tracking → feeds Pinia store → drives 3D scene
    const { calculateProgress } = useHyperScroll();

    return { calculateProgress };
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        window.scrollTo(0, 0);
      }
    });

    // Detect if device is mobile/tablet for performance optimization
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    // Only enable ScrollSmoother on desktop for better performance
    if (!isMobile) {
      ScrollSmoother.create({
        wrapper: ".smooth-wrapper",
        content: ".smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.app-root {
  position: relative;
  min-height: 100vh;
}

.content-layer {
  position: relative;
  z-index: 1;
  /* HTML content overlays the WebGL canvas with transparent backgrounds */
}
</style>
