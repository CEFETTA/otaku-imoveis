<template>
  <form role="form">
    <base-input
      alternative
      class="mb-3"
      placeholder="Nome"
      addon-left-icon="ni ni-circle-08"
      v-model="name"
    >
    </base-input>
    <base-input
      alternative
      class="mb-3"
      placeholder="Email"
      addon-left-icon="ni ni-email-83"
      v-model="email"
    >
    </base-input>
    <base-input
      alternative
      type="password"
      placeholder="Senha"
      addon-left-icon="ni ni-lock-circle-open"
      v-model="password"
    >
    </base-input>

    <div class="text-center">
      <base-button type="primary" class="my-4" v-on:click="register"
        >Registrar</base-button
      >
    </div>
  </form>
</template>
<script>
import { performRegister } from "./js/session";

export default {
  name: "register-form",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      performRegister(this.name, this.email, this.password).then(
        (_response) => {
          this.$store
            .dispatch("retrieveToken", {
              email: this.email,
              password: this.password,
            })
            .then((_response) => {
              this.$router.push({ name: "home" });
            });
        }
      );
    },
  },
};
</script>
