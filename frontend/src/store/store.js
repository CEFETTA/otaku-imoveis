import Vue from "vue";
import Vuex from "vuex";
import { performLogin } from "../views/components/SessionForms/js/session";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    email: localStorage.getItem("email") || "",
    username: localStorage.getItem("username") || "",
    token: localStorage.getItem("token") || null,
  },
  getters: {
    checkLogin: (state) => !!state.token,
    getEmail: (state) => state.email,
    getUsername: (state) => state.username
  },
  mutations: {
    retrieveUser(state, payload) {
      state.token = payload.token;
      state.email = payload.email || "";
      state.username = payload.username || "";
    },
    destroyToken(state) {
      state.token = null;
      state.email = "";
    },
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        performLogin(credentials.email, credentials.password)
          .then((response) => {
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);
            localStorage.setItem("username", user.name);
            context.commit("retrieveUser", { token, email: user.email, username: user.name });

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout(context) {
      return new Promise((resolve, reject) => {
        // TODO: Destroy token on backend
        localStorage.removeItem("token");
        context.commit("destroyToken");
        resolve();
      });
    },
  },
});
