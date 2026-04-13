/**
 * useSceneOrchestrator — Section-based 3D scene state machine.
 *
 * Controls what the 3D scene displays based on the active section:
 * - Hero: Cosmic dust idle formation
 * - About: Particles morph toward sphere formation
 * - Projects: Particles scatter, objects float
 * - Contact: Particles converge into pulsing core
 */
import { watch, onMounted } from "vue";
import { useWebGLStore } from "../stores/webgl.js";

export function useSceneOrchestrator() {
  const store = useWebGLStore();

  // Section-specific configuration
  const sectionConfigs = {
    hero: {
      particleMode: "idle",
      morphProgress: 0,
      fogDensity: 0.02,
      ambientColor: [0.02, 0.01, 0.04],
      bloomIntensity: 0.4,
    },
    about: {
      particleMode: "morph",
      morphProgress: 1,
      fogDensity: 0.015,
      ambientColor: [0.03, 0.02, 0.05],
      bloomIntensity: 0.6,
    },
    projects: {
      particleMode: "scatter",
      morphProgress: 0,
      fogDensity: 0.01,
      ambientColor: [0.01, 0.02, 0.04],
      bloomIntensity: 0.5,
    },
    contact: {
      particleMode: "attract",
      morphProgress: 0.8,
      fogDensity: 0.025,
      ambientColor: [0.04, 0.01, 0.03],
      bloomIntensity: 0.8,
    },
  };

  // Current interpolated config
  let currentConfig = { ...sectionConfigs.hero };

  /**
   * Interpolate between section configs based on section progress
   */
  function getInterpolatedConfig(section, progress) {
    const config = sectionConfigs[section];
    if (!config) return currentConfig;
    return config;
  }

  /**
   * Called every frame — updates scene state based on current section
   */
  function update() {
    const config = getInterpolatedConfig(
      store.activeSection,
      store.sectionProgress
    );

    // Update particle mode
    if (store.particleMode !== config.particleMode) {
      store.setParticleMode(config.particleMode);
    }

    // Smoothly update morph progress
    const targetMorph = config.morphProgress;
    const currentMorph = store.morphProgress;
    store.setMorphProgress(
      currentMorph + (targetMorph - currentMorph) * 0.03
    );
  }

  // Watch for section changes
  watch(
    () => store.activeSection,
    (newSection, oldSection) => {
      console.log(`🌌 Scene transition: ${oldSection} → ${newSection}`);
      store.isTransitioning = true;
      setTimeout(() => {
        store.isTransitioning = false;
      }, 1200);
    }
  );

  return {
    update,
    sectionConfigs,
  };
}
