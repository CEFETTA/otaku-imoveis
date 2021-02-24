<template>
  <div>
    <!-- Header -->
    <div class="div-background" style="max-width: 100%; heigth: auto;">
      <div class="container">
        <div class="row mx-md-n5">
          <div class="col-sm p-5 m-5 text-right">
            <base-input
              alternative
              placeholder="Buscar Bairro"
              addon-left-icon="ni ni-zoom-split-in"
            ></base-input>
            <button type="button p-5" class="btn btn-primary">Encontrar</button>
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
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <a class="page-link" href="#"
              >2 <span class="sr-only">(current)</span></a
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

export default {
  name: "components",
  components: {
    RentCard,
  },
  created() {
    fetchOptions().then((options) => {
      this.rentOptions = options;    
    })
  },
  data() {
    return {
      rentOptions: {
        houses: [],
        apartments: []
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
