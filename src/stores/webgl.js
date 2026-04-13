import { defineStore } from "pinia";
import * as THREE from "three";

export const useWebGLStore = defineStore("webgl", {
  state: () => ({
    // Scroll state
    scrollProgress: 0, // 0-1 global scroll percentage
    scrollVelocity: 0, // Speed of scroll (for post-processing)
    targetScrollProgress: 0, // Smoothed target

    // Section state
    activeSection: "hero", // 'hero' | 'about' | 'projects' | 'contact'
    sectionProgress: 0, // 0-1 within current section

    // Camera targets
    cameraTarget: new THREE.Vector3(0, 0, 0),
    cameraPosition: new THREE.Vector3(0, 0, 15),
    cameraLookAt: new THREE.Vector3(0, 0, 0),

    // Particle system mode
    particleMode: "idle", // 'idle' | 'explode' | 'attract' | 'morph' | 'scatter'
    morphProgress: 0,

    // Mouse interaction
    mousePosition: { x: 0, y: 0 }, // Normalized -1 to 1
    mouseSpeed: 0,

    // State flags
    isTransitioning: false,
    isReady: false,
    isMobile: false,
    reducedMotion: false,

    // Audio
    audioReactivity: 0, // 0-1 from audio analyzer
    audioEnabled: false,

    // Performance
    quality: "high", // 'high' | 'medium' | 'low'
    dpr: 1, // Device pixel ratio (capped)
  }),

  getters: {
    /** Normalized camera offset from mouse for parallax */
    mouseParallax: (state) => ({
      x: state.mousePosition.x * 0.5,
      y: state.mousePosition.y * 0.3,
    }),

    /** Whether WebGL effects should be active */
    effectsEnabled: (state) => !state.reducedMotion && !state.isMobile,

    /** Post-processing intensity based on scroll speed */
    postProcessIntensity: (state) =>
      Math.min(Math.abs(state.scrollVelocity) * 2, 1),
  },

  actions: {
    /** Initialize store with device detection */
    init() {
      this.isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768;

      this.reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Adaptive quality
      if (this.isMobile) {
        this.quality = "low";
        this.dpr = Math.min(window.devicePixelRatio, 1.5);
      } else {
        this.quality = window.devicePixelRatio > 2 ? "medium" : "high";
        this.dpr = Math.min(window.devicePixelRatio, 2);
      }
    },

    /** Update mouse position (normalized -1 to 1) */
    updateMouse(x, y) {
      const prevX = this.mousePosition.x;
      const prevY = this.mousePosition.y;
      this.mousePosition = { x, y };
      this.mouseSpeed = Math.sqrt(
        (x - prevX) ** 2 + (y - prevY) ** 2
      );
    },

    /** Update scroll progress from scroll handler */
    updateScroll(progress, velocity) {
      this.scrollProgress = Math.max(0, Math.min(1, progress));
      this.scrollVelocity = velocity;

      // Determine active section based on progress
      if (progress < 0.2) {
        this.activeSection = "hero";
        this.sectionProgress = progress / 0.2;
      } else if (progress < 0.45) {
        this.activeSection = "about";
        this.sectionProgress = (progress - 0.2) / 0.25;
      } else if (progress < 0.75) {
        this.activeSection = "projects";
        this.sectionProgress = (progress - 0.45) / 0.3;
      } else {
        this.activeSection = "contact";
        this.sectionProgress = (progress - 0.75) / 0.25;
      }
    },

    /** Set particle system mode */
    setParticleMode(mode) {
      this.particleMode = mode;
    },

    /** Set morph progress for particle formations */
    setMorphProgress(progress) {
      this.morphProgress = Math.max(0, Math.min(1, progress));
    },

    /** Signal that WebGL is ready */
    setReady() {
      this.isReady = true;
    },

    /** Toggle audio */
    toggleAudio() {
      this.audioEnabled = !this.audioEnabled;
    },
  },
});
