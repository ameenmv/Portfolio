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
      // Define your data properties here
    };
  },
  methods: {
    // Define your methods here
  },
  mounted() {
    // Scroll to top on page refresh
    window.scrollTo(0, 0);
    
    // Force scroll to top after a brief delay to ensure it works
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    // Listen for page visibility changes (when user returns to tab)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        window.scrollTo(0, 0);
      }
    });
    
    ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 1.5,
      effects: true,
    });
  },
};
</script>

<style lang="scss" scoped></style>
