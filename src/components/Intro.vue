<template>
  <div v-if="showIntro" class="intro-screen" ref="introScreen">
    <!-- Clip mask wrapper for logo reveal -->
    <div class="logo-mask" ref="logoMask">
      <img src="/mv.png" alt="Logo" class="logo" ref="logo" />
    </div>

    <!-- Minimal loader line -->
    <div class="loader" ref="loader">
      <div class="loader-track" ref="loaderTrack"></div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Intro",
  data() {
    return {
      showIntro: true,
      pageReady: false,
      animationDone: false,
    };
  },
  mounted() {
    document.body.style.overflow = "hidden";
    this.playIntro();
    this.waitForResources();
  },
  methods: {
    waitForResources() {
      const promises = [];

      if (document.fonts && document.fonts.ready) {
        promises.push(document.fonts.ready);
      }

      if (document.readyState !== "complete") {
        promises.push(
          new Promise((resolve) => {
            window.addEventListener("load", resolve, { once: true });
          })
        );
      }

      document.querySelectorAll("img[src]").forEach((img) => {
        if (!img.complete) {
          promises.push(
            new Promise((resolve) => {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            })
          );
        }
      });

      // Minimum time so animation always plays
      promises.push(new Promise((resolve) => setTimeout(resolve, 1800)));

      Promise.all(promises).then(() => {
        this.pageReady = true;
        this.tryDismiss();
      });
    },

    tryDismiss() {
      if (this.pageReady && this.animationDone) {
        this.playExit();
      }
    },

    playIntro() {
      const { logo, logoMask, loaderTrack } = this.$refs;

      // Initial states
      gsap.set(logo, { scale: 0.7, opacity: 0, y: 20 });
      gsap.set(logoMask, { clipPath: "inset(50% 50% 50% 50% round 8px)" });
      gsap.set(loaderTrack, { scaleX: 0, transformOrigin: "left" });

      const tl = gsap.timeline({
        onComplete: () => {
          this.animationDone = true;
          this.tryDismiss();
        },
      });

      // 1. Clip-path reveals outward while logo fades + scales in
      tl.to(logoMask, {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        duration: 1.2,
        ease: "power4.inOut",
      });

      tl.to(
        logo,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<0.1"
      );

      // 2. Loader line progresses
      tl.to(
        loaderTrack,
        {
          scaleX: 0.7,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      );

      // 3. Quick subtle scale pulse on the logo
      tl.to(logo, {
        scale: 1.06,
        duration: 0.5,
        ease: "sine.inOut",
      });
      tl.to(logo, {
        scale: 1,
        duration: 0.5,
        ease: "sine.inOut",
      });

      // 4. Loader completes
      tl.to(
        loaderTrack,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      );
    },

    playExit() {
      const tl = gsap.timeline({
        onComplete: () => {
          this.showIntro = false;
          document.body.style.overflow = "";
        },
      });

      // Logo scales up slightly and fades
      tl.to(this.$refs.logo, {
        scale: 1.2,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });

      // Loader fades
      tl.to(
        this.$refs.loader,
        {
          opacity: 0,
          duration: 0.3,
        },
        "<"
      );

      // Screen wipes up
      tl.to(this.$refs.introScreen, {
        yPercent: -100,
        duration: 0.6,
        ease: "power4.inOut",
      });
    },

    showIntroAgain() {
      this.showIntro = true;
      this.pageReady = false;
      this.animationDone = false;
      this.$nextTick(() => {
        this.playIntro();
        this.waitForResources();
      });
    },
  },

  unmounted() {
    document.body.style.overflow = "";
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
  background: var(--bg-solid);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.logo-mask {
  will-change: clip-path;
}

.logo {
  width: 200px;
  height: auto;
  max-width: 80vw;
  display: block;
  will-change: transform, opacity;
}

.loader {
  position: absolute;
  bottom: 60px;
  width: 100px;
  height: 1.5px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}

.loader-track {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 2px;
  will-change: transform;
}

@media (max-width: 768px) {
  .logo { width: 150px; }
  .loader { width: 80px; bottom: 50px; }
}

@media (max-width: 480px) {
  .logo { width: 120px; }
  .loader { width: 60px; bottom: 40px; }
}
</style>
