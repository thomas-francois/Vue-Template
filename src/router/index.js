import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map((r) => ({
    ...r,
    component: () => import(`../${r.file}.vue`),
  })),
});

export default router;
