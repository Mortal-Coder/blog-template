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
      children: [
        {
          path: "services",
          name: "services",
          component: () => import("@/views/Services/index.vue"),
        },
        {
          path: "resume",
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
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果有 savedPosition，直接返回，滚动到上次保存的位置
      return savedPosition;
    } else if (to.hash) {
      // 如果目标路由有 hash，滚动到 hash 对应的元素位置
      return { el: to.hash, top: 80, behavior: "smooth" };
    } else {
      // 默认滚动到页面顶部
      return { left: 0, top: 0, behavior: "smooth" };
    }
  },
});

export default router;
