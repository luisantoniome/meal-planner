import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Foods from "./views/Foods.vue";
import Settings from "./views/Settings.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/foods",
      name: "foods",
      component: Foods
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});
