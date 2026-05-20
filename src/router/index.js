import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map((r) => ({
    path: r.path || `/${r.name.toLowerCase()}`,
    name: r.name,
    component: () => import(
      r.file
      ? `../${r.file}.vue`
      : `../pages/${r.name}.vue`
    ),
  })),
});

export default router;
