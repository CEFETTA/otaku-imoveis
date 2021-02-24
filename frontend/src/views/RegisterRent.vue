<template>
  <div class="section-background-img">
    <!-- Registro do imóvel -->
    <div class="row justify-content-center">
      <div class="col-sm col-md col-lg col-xl m-5">
        <card
          type="secondary"
          shadow
          header-classes="bg-white pb-5"
          body-classes="px-xl-5 py-xl-5"
          class="border-0"
        >
          <register-rent-form />
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import RegisterRentForm from "./components/RentForms/RegisterRentForm"

export default {
  components: {
    RegisterRentForm
  },
};
</script>
<style>
.section-background-img {
  background-image: url(../assets/images/background.png);
  background-size: 100% 100%;
}
</style>
