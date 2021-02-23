<template>
  <div class="col card-border m-3">
    <div class="card" style="width: 100%; height=auto;">
      <img class="card-img-top" style="max-height: 197px;" src="../../../assets/images/logo.svg" alt="" />
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
          <base-button
            block
            type="primary"
            class=" mb-3"
            v-on:click="selected = true"
          >
            Alugar
          </base-button>
          <modal :show.sync="selected">
			<rent-modal-body/>
            <button
              class="close"
              v-on:click="selected = false"
              aria-label="Close"
            >
              <span style="position:absolute; top:0; padding-top:10px;" aria-hidden="true">&times;</span>
            </button>

          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import RentModalBody from "./RentModalBody.vue";

export default {
  name: "rent-card",
  components: {
    Modal,
    RentModalBody,
  },
  data: () => {
    return {
      title: "Card title",
      sub:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 1000,
      selected: false,
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
