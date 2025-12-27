<template>
  <div class="smooth-wrapper">
    <!-- Intro component - shows on all pages -->
    <Intro />
    <div class="smooth-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Intro from "./components/Intro.vue";

gsap.registerPlugin(ScrollSmoother);

export default {
  name: "App",
  components: {
    Intro,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        window.scrollTo(0, 0);
      }
    });
    
    // Detect if device is mobile/tablet for performance optimization
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.innerWidth < 768;
    
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

<style lang="scss" scoped></style>
