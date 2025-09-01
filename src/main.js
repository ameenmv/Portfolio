import { createApp } from "vue";
import "./style.css";
import router from "./Router";
import App from "./App.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

createApp(App).use(router).use(gsap).mount("#app");
