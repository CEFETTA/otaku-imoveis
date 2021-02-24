<template>
  <div>
    <!-- Header -->
    <div class="div-background" style="max-width: 100%; heigth: auto;">
      <div class="container">
        <div class="row mx-md-n5 justify-content-center">
          <div class="col-sm col-md col-lg col-xl m-3 text-center">
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
        <visit-card v-for="visit in visits" :key="visit.id" :visit-data="visit" />
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
import VisitCard from "./components/VisitComparison/VisitCard";
import fetchVisits from "./components/VisitComparison/js/fetchVisits"

export default {
  name: "visits",
  components: {
    VisitCard,
  },
  created() {
    fetchVisits().then((response) => {
      this.visits = response.data.filter((visit) => visit.user_id == localStorage.getItem("userid"));
    })
  },
  data() {
    return {
      visits: []
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
