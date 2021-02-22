<template>
  <form role="form">
    <base-input
      alternative
      class="mb-3"
      placeholder="Email"
      addon-left-icon="ni ni-email-83"
    >
    </base-input>
    <base-input
      alternative
      type="password"
      placeholder="Senha"
      addon-left-icon="ni ni-lock-circle-open"
    >
    </base-input>
    <div class="text-center">
      <base-button type="primary" class="my-4">Entrar</base-button>
    </div>
  </form>
</template>
<script>
export default {
  name: "login-form",
};
</script>
