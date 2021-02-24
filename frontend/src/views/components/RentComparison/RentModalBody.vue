<template>
  <div class="row" style="width: 100%; height: 100%;">

    <span class="col background">
				<div class="info">
						<div class="linha1" style="word-wrap: break-word;">
								<span>{{cardData.address}}</span>
								<div>
									<span class="price">R$ {{cardData.rental_price}}</span>
								</div>
						</div>
						<div class="linha2">
								<span>{{cardData.neighborhood}}, {{cardData.city}}</span>
						</div>
						<span class="linha3">
								sdfs
						</span>
				</div>
		</span>

    <div class="col-sm" style="margin-right: -30px;">
      <div class="d-block">
        <p class="h4 text-center">Seu próximo dojô está aqui!</p>
      </div>
      <div class="d-block">
        <form class="row d-flex">
          <div class="col-sm m-2">
            <base-input
              alternative
              class="mb-3"
              placeholder="seu e-mail"
              addon-left-icon="ni ni-email-83"
			  v-model="email"
            >
            </base-input>

            <base-input
              alternative
              class="mb-3"
              placeholder="seu nome"
              addon-left-icon="ni ni-circle-08"
			  v-model="username"
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
        </form>
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
		url: {
			types: String,
			default: '../../../assets/images/ap.jpg'
		},
		cardData: {
			types: Object
		}
	},
	created() {
		this.email = this.$store.getters.getEmail
		this.username = this.$store.getters.getUsername
	},
	data: () => {
		return {
			teste:"hey",
			email: "",
			username: "",
			dates: {
				simple: "",
			},
		};
	},
	computed: {
      backgroundImage () {
      	return 'background: ' + this.url;
      },
    },
};
</script>


<style scoped>
	.background{
		background: url('../../../assets/images/ap.jpg');
		width: 100%;
		position: relative;
		background-size: auto 100%;
		background-repeat: no-repeat;
		background-position: left top;
		display: flex;
		flex-flow: column-reverse;
		margin: -24px;
    margin-right: 0;
	}

	.info{
		height: fit-content;
		margin: 10px;
		margin-left: 0px;
    margin-right: 0px;
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
	.price{
		text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.38);
		color: #34a574;
		white-space:nowrap;
		font-weight: bold;
	}
	.linha2 {
		font-size: 10px;
		line-height:1;
		width: 100%;
	}
	.linha3 {
		height:20px;
		width: 100%;
		display: inline-block;
		background: #E8E8E8;
		margin-top: 5px;
  	line-height: normal;
	}
</style>
