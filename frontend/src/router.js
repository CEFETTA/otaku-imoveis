import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import RegisterRent from "./views/RegisterRent.vue";
import Login from "./views/Login.vue";
import Logout from "./views/components/SessionForms/Logout.vue";
import Navbar from '@/views/components/Navbar/Navbar'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: Navbar,
        default: Home,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: Navbar,
        default: Register,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: Navbar,
        default: Login,
      },
    },
    {
      path: "/logout",
      name: "logout",
      components: {
        header: Navbar,
        default: Logout,
      },
    },
    {
      path: "/register-rent",
      name: "register rent",
      components: {
        header: Navbar,
        default: RegisterRent
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
