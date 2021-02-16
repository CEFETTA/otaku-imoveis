<template>
    <div class="container div-background">
      <div class="row">
        <div class="col-sm">
          <div class="col-md-6 input-color">
            <base-input alternative placeholder="Buscar Cidade" addon-left-icon="ni ni-zoom-split-in"></base-input>
            <base-input alternative placeholder="Buscar Bairro" addon-left-icon="ni ni-zoom-split-in"></base-input>
          </div>
        </div>
        <div class="col-sm">
          <img class="div-img" src="../assets/images/logo.svg">
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: "components",
  components: {

  }
};
</script>

<style>
  .div-background{
    background-image: url(../assets/images/background.png);
  }

  .div-img {
    max-width: 247px;
    max-height: 341px;
    width: auto;
    height: auto;
  }
</style>
