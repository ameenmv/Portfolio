import { createRouter, createWebHistory } from "vue-router";

// Lazy load components for better performance
const Home = () => import("../Pages/Home.vue");
const Projects = () => import("../Pages/Projects.vue");
const ProjectDetails = () => import("../Pages/ProjectDetails.vue");

// Lazy load GSAP plugins
let ScrollSmoother = null;

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  {
    path: "/projects/:name",
    name: "ProjectDetails",
    component: ProjectDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(async (to, from) => {
  // Lazy load ScrollSmoother if not already loaded
  if (!ScrollSmoother) {
    try {
      const gsap = await import("gsap");
      const ScrollSmootherModule = await import("gsap/ScrollSmoother");
      gsap.default.registerPlugin(ScrollSmootherModule.default);
      ScrollSmoother = ScrollSmootherModule.default;
    } catch (error) {
      console.warn("GSAP ScrollSmoother failed to load:", error);
      return;
    }
  }

  const smoother = ScrollSmoother.get();
  if (!smoother) return;

  if (to.name === "Home" && from.name && window.history.state.back) {
    return;
  }

  setTimeout(() => {
    smoother.scrollTo(0, true);
  }, 50);
});

export default router;
