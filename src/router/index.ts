import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import Services from "@/views/Services/index.vue";
import Resume from "@/views/Resume/index.vue";
import Projects from "@/views/Projects/index.vue";
import Blog from "@/views/Blog/index.vue";
import Contact from "@/views/Contact/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/Services/index.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/Resume/index.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/Projects/index.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/Blog/index.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact/index.vue"),
    },
  ],
});

export default router;
