<template>
  <div>
    <!-- Header -->
    <div class="div-background" style="max-width: 100%; heigth: auto;">
      <div class="container">
        <div class="row mx-md-n5">
          <div class="col-sm p-5 m-5 text-right">
              <div style="justify-content: center;" class="col-sm col-md col-lg col-xl mb-2">
                <select placeholder="Selecione um bairro ..." class="form-control" v-model="neighborhood_name_filter" aria-placeholder="Selecione um Bairro ...">
                  <option disabled value="">Escolha um bairro ...</option>
                  <option v-for="(item, index) in this.neighborhood_name_array" :value="item" :key="index">{{item}}</option>
                </select>

              </div>
            <button type="button p-5" class="btn btn-primary" @click="filterByNbhood()">Encontrar</button>
          </div>
          <div class="col-sm m-3">
            <img class="div-img" src="../assets/images/logo.svg" />
          </div>
        </div>
      </div>
    </div>
    <!-- Cards -->
    <div
      class="row justify-content-center"
    >
      <div class="row d-flex flex-fill flex-wrap p-5 div-card-limits">
        <rent-card v-for="house in rentOptions.houses" :key="house.id" :card-data="house"></rent-card>
      </div>
    </div>
    <!-- Paginação -->
    <div class="row d-flex justify-content-center">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              <i class="fa fa-angle-left"></i>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
          <li class="page-item">
            <a class="page-link" href="#"
              >2</a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="fa fa-angle-right"></i>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import RentCard from "./components/RentComparison/RentCard";
import fetchOptions from "./components/RentComparison/js/fetchOptions";
import fetchNeighborhood from "./components/RentForms/js/fetchNeighborhood";

export default {
  name: "components",
  components: {
    RentCard,
  },
  created() {
    fetchOptions().then((options) => {
      this.rentOptions = options;    
    }).then(()=> {
      this.backup_houses = this.rentOptions.houses;

    })

    fetchNeighborhood().then((response) => {
        this.neighborhood_list = response.data;
        this.neighborhood_name_array = response.data.map((data) => data.neighborhood);
    });
    
  },
  data() {
    return {
      rentOptions: {
        houses: [],
        apartments: []
      },
      neighborhood_name_filter: "",
      neighborhood_list: [],
      neighborhood_name_array: [],
      backup_houses: []
    }
  },
  methods: {
    filterByNbhood() {
      const nbHoodIndex = this.neighborhood_name_array.indexOf(this.neighborhood_name_filter);
      if (nbHoodIndex >= 0) {
        console.log(nbHoodIndex)
        console.log(this.backup_houses)
        const filteredRents = this.backup_houses.filter((house) => {
          console.log(this.neighborhood_list[nbHoodIndex], house.neighborhood_id)
          return house.neighborhood_id === this.neighborhood_list[nbHoodIndex].id
        });
        if (filteredRents.length) {
          this.rentOptions.houses = filteredRents

        }
      }
    }
  }
};
</script>

<style>
.div-background {
  background-image: url(../assets/images/background.png);
  background-size: 100% 100%;
}

.div-img {
  max-width: 247px;
  max-height: 341px;
  width: auto;
  height: auto;
}

.div-card-limits {
  max-width: 908px;
}
</style>
