<template>
  <div class="row">
    <div class="col-sm">
      <img class="mw-100" src="../../../assets/images/logo.svg" />
    </div>
    <div class="col-sm">
      <div class="d-block">
        <p class="h4 text-center">Seu próximo dojô está aqui!</p>
      </div>
      <div class="d-block">
        <div class="row d-flex">
          <div class="col-sm m-2">
            <base-input
              alternative
              class="mb-3"
              placeholder="seu e-mail"
              addon-left-icon="ni ni-email-83"
            >
            </base-input>

            <base-input
              alternative
              class="mb-3"
              placeholder="seu nome"
              addon-left-icon="ni ni-circle-08"
            >
            </base-input>

            <base-input addon-left-icon="ni ni-calendar-grid-58">
              <flat-picker
                slot-scope="{ focus, blur }"
                placeholder="Selecione uma data"
                @on-open="focus"
                @on-close="blur"
                :config="{ allowInput: true, enableTime: true, dateFormat: 'd-m-Y H:i' }"
                class="form-control datepicker"
                v-model="dates.simple"
              >
              </flat-picker>
            </base-input>

            <div class="text-right">
              <base-button type="primary">Agendar visita</base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import "flatpickr/dist/flatpickr.css";
import FlatPicker from "vue-flatpickr-component";

export default {
  name: "rent-modal-body",
  components: {
    Modal,
    FlatPicker,
  },
  data: () => {
    return {
      dates: {
        simple: "",
      },
    };
  },
};
</script>
