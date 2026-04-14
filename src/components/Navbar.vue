<template>
  <div
    class="sm:pl-10 sm:pr-10 pl-4 pr-4 flex justify-between items-center absolute top-0 left-0 right-0 h-20 z-50 navbar-glass"
  >
    <router-link to="/"
      ><img class="w-15 nav-logo" src="../assets/mv.png" alt="Ameen Mohamed Logo"
    /></router-link>
    <div class="flex gap-2 items-center sm:gap-6 nav-links">
      <router-link to="/projects"
        ><p
          class="text-[var(--white)] opacity-80 tracking-[-.5px] font-semibold text-base kalam nav-link"
        >
          Projects
        </p></router-link
      >
      <a
        href="https://github.com/ameenmv/CV/raw/main/ameen.pdf"
        aria-label="Download CV"
        ><div class="btnn ml-5 relative">
          <div class="btn">my cv ?</div>
          <div class="btn2"></div>

          <img src="../assets/star.svg" class="onesvg svgg" alt="" />
          <img src="../assets/star.svg" class="twosvg svgg" alt="" />
          <img src="../assets/star.svg" class="threesvg svgg" alt="" />
          <img src="../assets/star.svg" class="foursvg svgg" alt="" />
          <img src="../assets/star.svg" class="fivesvg svgg" alt="" />
          <img src="../assets/star.svg" class="sixsvg svgg" alt="" /></div
      ></a>
      <!-- Audio Toggle -->
      <button
        class="audio-toggle ml-3"
        @click="toggleAudio"
        :aria-label="isAudioEnabled ? 'Mute audio' : 'Enable audio'"
      >
        <svg v-if="isAudioEnabled" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 5L6 9H2v6h4l5 4V5z"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 5L6 9H2v6h4l5 4V5z"/>
          <line x1="23" y1="9" x2="17" y2="15"/>
          <line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAudioReactive } from "../composables/useAudioReactive.js";
import { useWebGLStore } from "../stores/webgl.js";

const store = useWebGLStore();
const audio = useAudioReactive();

const isAudioEnabled = computed(() => store.audioEnabled);
const toggleAudio = () => audio.toggle();
</script>

<style lang="scss" scoped>
.navbar-glass {
  background: rgba(5, 5, 16, 0.4);
  backdrop-filter: blur(12px) saturate(1.4);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.nav-logo {
  min-width: 50px;
  min-height: 44px;
  object-fit: contain;
}

.nav-link {
  min-height: 44px; /* Better touch target */
  display: flex;
  align-items: center;
}

p {
  position: relative;
  height: fit-content;
}
p::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: var(--white);
  left: 0;
  bottom: -5px;
  transition: width 0.3s ease-in-out;
}
p:hover::after {
  width: 100%;
}

.audio-toggle {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}
.audio-toggle:hover {
  background: rgba(102, 68, 204, 0.2);
  border-color: rgba(102, 68, 204, 0.4);
  box-shadow: 0 0 15px rgba(102, 68, 204, 0.2);
}
/* Mobile improvements */
@media (max-width: 600px) {
  .nav-links {
    gap: 8px;
  }
  
  .nav-link {
    font-size: 14px;
  }
  
  .btnn {
    margin-left: 8px !important;
  }
}

@media (max-width: 400px) {
  .nav-logo {
    width: 50px;
  }
  
  .nav-link {
    font-size: 13px;
  }
}
</style>
