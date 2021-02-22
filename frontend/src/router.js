import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Logout from "./views/components/SessionForms/Logout.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        default: Register,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
      },
    },
    {
      path: "/logout",
      name: "logout",
      components: {
        default: Logout,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
