import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({
    menuOpen: false,
    introComplete: false,
    currentProject: null, // For Flip transitions
    projectDetailOpen: false,
    audioMuted: true,
    cursorState: "default", // 'default' | 'hover' | 'drag' | 'view'
    loadingProgress: 0,
    allAssetsLoaded: false,
  }),

  actions: {
    completeIntro() {
      this.introComplete = true;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    openProject(project) {
      this.currentProject = project;
      this.projectDetailOpen = true;
    },
    closeProject() {
      this.projectDetailOpen = false;
      setTimeout(() => {
        this.currentProject = null;
      }, 600); // Wait for exit animation
    },
    setCursor(state) {
      this.cursorState = state;
    },
    updateLoading(progress) {
      this.loadingProgress = Math.max(0, Math.min(1, progress));
      if (progress >= 1) this.allAssetsLoaded = true;
    },
  },
});
