<template>
  <div class="row">

    <span class="col img background">
				<div class="info">
						<div class="linha1" style="word-wrap: break-word;">
								<span>{{street}}</span>
								<div>
									<span style="color: #34a574; white-space:nowrap;">R$ {{price}}</span>
								</div>
						</div>
						<div class="linha2">
								<span>{{district}}</span>
						</div>
				</div>
		</span>

    <div class="col-sm" style="padding-right: 0px;">
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
                :config="{ allowInput: true, enableTime: true, dateFormat: 'd-m-Y H:i', minDate: new Date(), time_24hr: true,}"
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
	props: {
		street: {
			type: String,
			default: 'Rua Zurick'
		},
		district: {
			type: String,
			default: 'Nova Suica, Belo Horizonte'
		},
		price: {
			type: String,
			default: '150,00'
		},

		url:{
			types: String,
			default: '../../../assets/images/ap.jpg'
		}
	},
  data: () => {
    return {
      dates: {
        simple: "",
      },
    };
  },
	computed: {
      backgroundImage () {
        return 'background: ' + this.url;
      }
    },
};
</script>


<style scoped>
	.background{
		background: url('../../../assets/images/ap.jpg');
		width: 100%;
		margin: -24px;
		margin-left: -9px;
		margin-bottom: -25px;
		position: relative;
		background-size: auto 100%;
		background-repeat: no-repeat;
		background-position: left top;
		display: flex;
		flex-flow: column-reverse;
	}

	.info{
		height: fit-content;
		margin: 10px;
		margin-left: 0px;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.45);
		backdrop-filter: blur(20px);
		padding: 8px;
		line-height: 50px;
		border-radius: 6px;
	}
	.linha1 {
		font-size: 15px;
		line-height: 20px;
		padding-bottom: 5px;
		display: flex;
		justify-content: space-between;
	}
	.linha2 {
		font-size: 10px;
		line-height:1;
		width: 100%;
	}
</style>
