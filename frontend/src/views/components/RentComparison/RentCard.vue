<template>
  <div class="col card-border p-3 m-3">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../../assets/images/logo.svg" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ sub }}
        </p>
      </div>
      <div class="badge-row row">
        <div class="col-sm" style="flex-grow: 0;">
          <span class="col-sm badge badge-primary">4 Quartos</span>
        </div>
        <div class="col-sm" style="flex-grow: 0;">
          <span class="col-sm badge badge-primary">Aceita Animais</span>
        </div>
      </div>
      <div class="card-body row">
        <div class="p-3">
          <p class="col-sm h6">R$ {{ price.toFixed(2) }}</p>
        </div>
        <div>
          <button type="button" class="btn btn-primary col-sm">
            Alugar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rent-card",
  data: () => {
    return {
      title: "Card title",
      sub:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 1000,
    };
  },
};
</script>

<style scoped>
.card-border {
  box-shadow: 9px 11px 36px rgba(0, 0, 0, 0.21);
  border-radius: 6px;
}
</style>
