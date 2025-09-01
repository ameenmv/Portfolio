import { createApp } from "vue";
import "./style.css";
import router from "./Router";
import App from "./App.vue";
import { initPerformanceMonitoring, initErrorTracking } from "./utils/performance.js";

// Initialize performance monitoring
initPerformanceMonitoring();
initErrorTracking();

// Lazy load GSAP plugins for better performance
const initGSAP = async () => {
  const gsap = await import("gsap");
  const ScrollTrigger = await import("gsap/ScrollTrigger");
  gsap.default.registerPlugin(ScrollTrigger.default);
};

// Initialize GSAP after app is mounted
initGSAP();

const app = createApp(App);

// Use router
app.use(router);

// Mount app
app.mount("#app");
