import Vue from "vue";
import Vuex from "vuex";
import { performLogin } from "../views/components/SessionForms/js/session";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    email: "",
    token: localStorage.getItem("token") || null,
  },
  getters: {
    checkLogin: (state) => !!state.login,
  },
  mutations: {
    retrieveUser(state, payload) {
      state.token = payload.token;
      state.email = payload.email || "";
    },
    destroyToken(state) {
      state.token = null;
    },
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        performLogin(credentials.email, credentials.password)
          .then((response) => {
            const token = response.data.token;
            localStorage.setItem("token", token);
            context.commit("retrieveUser", { token, email: credentials.email });

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout(context) {
      return new Promise((resolve, reject) => {
        if (context.getters.checkLogin()) {
          localStorage.removeItem("token");
          resolve();
        }
      });
    },
  },
});
