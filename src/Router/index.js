import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Projects from "../Pages/Projects.vue";
import ProjectDetails from "../Pages/ProjectDetails.vue";
import gsap from "gsap"; 
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

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

router.afterEach((to, from) => {
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
