<template>
  <div class="col m-3">
    <div class="card card-border" style="width: 100%; height=auto;">
      <img v-if="!$props.cardData.filename" class="card-img-top" style="max-height: 197px;" src="../../../assets/images/not-found.svg" alt="" />
      <img v-if="$props.cardData.filename" class="card-img-top" style="max-height: 197px;" v-bind:src="`http://localhost:3333/files/${$props.cardData.filename}`">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ sub }}
        </p>
      </div>
      <div class="badge-row row">
        <div class="col-sm" style="flex-grow: 0;" v-for="label in labels" :key="label">
          <span class="col-sm badge badge-primary">{{label}}</span>
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
						<rent-modal-body :card-data="$props.cardData"/>
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
  created() {
    const cardData = this.$props.cardData;

    const address = cardData["address"];
    this.title = /rua/i.test(address) ? address : `Rua ${address}`;
    this.sub = `${cardData["neighborhood"]}, ${cardData["city"]}`;
    this.price = cardData["rental_price"];

    this.labels.push(`${cardData["rooms"]} quartos`);
    if(cardData["suites"]) this.labels.push(`${cardData["suites"]} suites`);
    if(cardData["parking_spaces"]) this.labels.push(`${cardData["parking_spaces"]} vagas`);
  },
  data: () => {
    return {
      title: "Card title",
      sub:
        "California",
      price: 1000,
      selected: false,
      labels: [],
      notFoundSrc: "../../../assets/images/not-found.svg"
    };
  },
  props: ["card-data"]
};
</script>

<style scoped>
	.card-border {
		box-shadow: 9px 11px 36px rgba(0, 0, 0, 0.21);
		border-radius: 6px;
	}
</style>
