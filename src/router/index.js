import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import User from "../views/User.vue";
import Error from "../views/Error.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
  {
    path: "/user/:id",
    name: "User",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: User,
  },
  {
    path: "/404",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "User" && !store.state.authenticated) {
    next({ name: "Search" });
  } else {
    next();
  }
});

export default router;
