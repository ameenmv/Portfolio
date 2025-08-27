<template>
  <div class="smooth-wrapper">
    <div class="smooth-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollSmoother);
export default {
  name: "App",
  components: {
    // Add your components here
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
