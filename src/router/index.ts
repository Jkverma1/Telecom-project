import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Master.vue";
import about from "../views/pages/about.vue";
import api from "../views/api.vue";
import pricing from "../views/pricing.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/api",
    name: "api",
    component: api,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: pricing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
