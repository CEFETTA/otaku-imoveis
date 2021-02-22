<template>

	<div class="pop-up container">
		<span class="img background">
				<div class="info">
						<div class="linha1">
								<span>{{street}}</span>
								<span style="color: #34a574;">R$ {{price}}</span>
						</div>
						<div class="linha2">
								<span>{{district}}</span>
						</div>
				</div>
		</span>
		<span class="">
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
									:config="{ allowInput: true }"
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
		</span>
	</div>

</template>

<style scoped>

.background{
	background: url('../../../assets/images/ap.jpg') center no-repeat;
	width: 100%;
	position: relative;
}

.pop-up{
	background-color: white;
	width: 700px;
	height: 500px;
	margin: auto;
	display: flex;
	background: aquamarine;
}

.img{
	width: 400px;
	height: 500px;
	display: flex;
	flex-flow: column-reverse;
}

.info{
	height: 100px;
	margin: 10px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.45);
	backdrop-filter: blur(20px);
	padding: 8px;
	line-height: 50px;
	border-radius: 6px;
}
.linha1 {
	font-size: 20px;
	line-height: 50px;
	display: flex;
	justify-content: space-between;
}
.linha2 {
	font-size: 14px;
	line-height: 50px;
	width: 100%;
}

.form {
	background-color: blue;
	width: 200px;
	height: 500px;
}
</style>

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
