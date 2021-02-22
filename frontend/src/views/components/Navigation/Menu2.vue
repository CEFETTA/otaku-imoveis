<template>
  <ul class="navbar-nav ml-lg-auto">
    <li class="nav-item">
      <a class="nav-link" href="./#"
        >Home
        <span class="sr-only">(current)</span>
      </a>
    </li>
    <li class="nav-item" v-if="!loggedIn">
      <a class="nav-link" href="./#/login">Entrar</a>
    </li>
    <li class="nav-item" v-if="!loggedIn">
      <a class="nav-link" href="./#/register">Registrar</a>
    </li>
    <li class="nav-item" v-if="!!loggedIn">
      <a class="nav-link" href="./#/logout">Sair</a>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.checkLogin;
    },
  },
};
</script>
<style></style>
