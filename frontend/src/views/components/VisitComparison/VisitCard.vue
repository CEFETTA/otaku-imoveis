<template>
  <div class="col m-3" style="max-width: 300px; min-width: 200px">
    <div class="card card-border" style="width: 100%; height=auto;">
      <img v-if="!rentSubject.filename" class="card-img-top" style="max-height: 197px;" src="../../../assets/images/not-found.svg" alt="" />
      <img v-if="rentSubject.filename"  style="max-height: 197px;" v-bind:src="`http://localhost:3333/files/${rentSubject.filename}`">
      <div class="card-body">
        <h5 class="card-title">{{ rentSubject.address }}</h5>
        <p class="card-text">
          {{ `${rentSubject.neighborhood}, ${rentSubject.city}` }}
        </p>
      </div>
      <div class="d-flex text-center pt-3 px-3">
          <p class="h6">{{ visitData.scheduled_to ? `Agendada em ${visitData.scheduled_to}` : `Agendamento a combinar`}}</p>
      </div>
      <div class="card-body row">
        <div class="p-3">
          <p class="col-sm h6">R$ {{ rentSubject.rental_price.toFixed(2) }}</p>
        </div>
        <div>
          <base-button
            block
            type="danger"
            class="mb-3"
            v-on:click="selected = true"
          >
            Cancelar
          </base-button>
          <modal :show.sync="selected">
            <button
              class="close"
              v-on:click="selected = false"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <visit-modal-body :visit-data="visitData" />
          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import VisitModalBody from "./VisitModalBody.vue";

export default {
  name: "visit-card",
  components: {
    Modal,
    VisitModalBody,
  },
  created() {
    this.rentSubject = this.visitData.house || this.visitData.apartment;
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
  props: ["visit-data"]
};
</script>

<style scoped>
.card-border {
  box-shadow: 9px 11px 36px rgba(0, 0, 0, 0.21);
  border-radius: 6px;
}
</style>
