<template>
  <div class="col card-border p-3 m-3">
    <div class="card" style="width: 100%; height=auto;">
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
          <base-button block type="primary" class=" mb-3" @click="modals.modal = true">
                Alugar
          </base-button>
          <modal :show.sync="modals.modal">
            <p class="h6" slot="header" id="modal-title-default">Agendar</p>

            
            <div class="row">
              <div class="col-sm">
                <img class="mw-100" src="../../../assets/images/logo.svg">
              </div>
              <div class="col-sm">
                <div class="d-block">
                  <p class="h4 text-center">Seu próximo dojô está aqui!</p>
                </div>
                <div class="d-block">
                  <div class="row d-flex">
                    <div class="col-sm m-2">

                        <base-input alternative
                                    class="mb-3"
                                    placeholder="seu e-mail"
                                    addon-left-icon="ni ni-email-83">
                        </base-input>

                        <base-input alternative
                                    class="mb-3"
                                    placeholder="seu nome"
                                    addon-left-icon="ni ni-circle-08">
                        </base-input>

                        <base-input addon-left-icon="ni ni-calendar-grid-58">
                            <flat-picker slot-scope="{focus, blur}"
                                          placeholder="Selecione uma data"
                                          @on-open="focus"
                                          @on-close="blur"
                                          :config="{allowInput: true}"
                                          class="form-control datepicker"
                                          v-model="dates.simple"
                                          >
                            </flat-picker>
                        </base-input>

                        <div class="text-right" >
                          <base-button type="primary">Agendar visita</base-button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "rent-card",
  components: {
    Modal,
    flatPicker
  },
  data: () => {
    return {
      title: "Card title",
      sub:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 1000,
      modals: {
        modal: false
      },
      dates: {
        simple: '',
      }
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
