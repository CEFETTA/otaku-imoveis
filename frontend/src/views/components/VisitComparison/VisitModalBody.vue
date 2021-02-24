<template>
  <div class="row">
    <div class="col-sm">
      <img class="mw-100" src="../../../assets/images/logo.svg" />
    </div>
    <div class="col-sm">
      <div class="d-block">
        <p class="h4 text-center text-prymary">Deseja realmente cancelar?</p>
        <p class="h6 text-nowrap">{{ visitData.scheduled_to ? `Agendada em ${visitData.scheduled_to}` : `Agendamento a combinar`}}</p>
      </div>
      <div class="d-block pt-3">
        <div class="text-center">
            <base-button type="danger" v-on:click="submitCancelVisit">Cancelar visita</base-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import cancelVisit from "./js/cancelVisit";

export default {
  name: "visit-modal-body",
  components: {
    Modal,
  },
  created() {
    this.rentSubject = this.visitData.house || this.visitData.apartment;
  },
  data: () => {
    return {
      
    };
  },
  props: ["visit-data"],
  methods: {
    submitCancelVisit() {
      cancelVisit(this.$props.visitData.id).then(() => {
        this.$router.go();
      })
    }
  }
};
</script>
