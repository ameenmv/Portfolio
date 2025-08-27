import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Projects from "../Pages/Projects.vue";
import ProjectDetails from "../Pages/ProjectDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
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

export default router;
