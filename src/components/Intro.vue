<template>
  <div v-if="showIntro" class="intro-screen">
    <img src="/mv.png" alt="Logo" class="logo" />
  </div>
</template>
//alo
<script>
import gsap from "gsap";

export default {
  name: "Intro",
  data() {
    return {
      showIntro: true,
    };
  },
  mounted() {
    // Wait until the document DOM is ready before running the intro animation.
    // Use DOMContentLoaded to keep the intro visible until the DOM is parsed.
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      // DOM already loaded
      this.playIntro();
    } else {
      window.addEventListener("DOMContentLoaded", this.onAppDomLoaded);
    }
  },
  methods: {
    onAppDomLoaded() {
      window.removeEventListener("DOMContentLoaded", this.onAppDomLoaded);
      this.playIntro();
    },
    playIntro() {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          this.showIntro = false;
          document.body.style.overflow = "";
        },
      });

      tl.fromTo(
        ".logo",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1 }
      );

      tl.to(".logo", {
        scale: 0.8,
        duration: 0.8,
        delay: 1,
      });
    },

    showIntroAgain() {
      this.showIntro = true;
      this.playIntro();
    },
  },

  unmounted() {
    // cleanup listener if component is destroyed before DOMContentLoaded
    window.removeEventListener("DOMContentLoaded", this.onAppDomLoaded);
  },

  watch: {
    $route() {},
  },
};
</script>

<style scoped>
.intro-screen {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.logo {
  width: 200px;
  height: auto;
  max-width: 80vw;
  max-height: 80vh;
}

@media (max-width: 768px) {
  .logo {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 120px;
  }
}
</style>
