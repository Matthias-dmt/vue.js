import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/satisfaction-form",
    name: "SatisfactionForm",
    // route level code-splitting
    // this generates a separate chunk (SatisfactionForm.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "SatisfactionForm" */ "../views/SatisfactionForm.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
