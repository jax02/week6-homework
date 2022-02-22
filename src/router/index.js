import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    component: () => import("../views/FrontView.vue"),
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "products",
        component: () => import("../views/ProductsView.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/CartView.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/DashboardView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
