import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game/path=:path",
    name: "game",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/GameView.vue"),
  },
  {
    path: "/game",
    redirect: "/game/path=0",
  },
  {
    path: "/admin-settings",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/AdminSettingsView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
