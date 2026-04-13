import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import router from "./Router";
import App from "./App.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";
import Draggable from "gsap/Draggable";

// Register all GSAP plugins
gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  Flip,
  Observer,
  CustomEase,
  Draggable
);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
