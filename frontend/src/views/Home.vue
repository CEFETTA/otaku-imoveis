<template>
  <div>
    <!-- Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#"><img src="../assets/images/logo-nav.svg"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#/register">Anunciar</a>
        </div>
      </div>
    </nav>
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
      class="row d-flex justify-content-center p-xl"
      style="max-width: 100%; heigth: auto;"
    >
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <rent-card></rent-card>
        <rent-card></rent-card>
        <rent-card></rent-card>
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

export default {
  name: "components",
  components: {
    RentCard,
  },
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
</style>
