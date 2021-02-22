<template>
  <div class="row">
    <div class="col-sm">
      <img class="mw-100" src="../../../assets/images/logo.svg" />
    </div>
    <div class="col-sm">
      <div class="d-block">
        <p class="h4 text-center text-prymary">Deseja realmente excluir?</p>
        <p class="h6 text-nowrap">Agendada em 24/02/2021 às 12:00</p>
      </div>
      <div class="d-block pt-3">
        <div class="text-center">
            <base-button type="danger">Excluir visita</base-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "visit-modal-body",
  components: {
    Modal,
  },
  data: () => {
    return {
      
    };
  },
};
</script>
