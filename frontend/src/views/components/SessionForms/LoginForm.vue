<template>
  <form role="form" @submit.prevent="login">
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
      <base-button type="primary" class="my-4" v-on:click="login"
        >Entrar</base-button
      >
    </div>
  </form>
</template>
<script>
export default {
  name: "login-form",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password,
        })
        .then((_response) => {
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>
