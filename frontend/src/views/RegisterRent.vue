<template>
    <div class="section-background-img">
        <!-- Registro do imóvel -->
        <div class="row justify-content-center">
            <div class="col-sm col-md col-lg col-xl m-5">
                <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-xl-5 py-xl-5"
                    class="border-0">

                    <div class="container">
                        <div class="row justify-content-center">
                            <!-- Casa/Apartamento-->
                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <div class="form-check form-check-inline text-center">
                                    <input class="form-check-input mb-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="house" @click="changeSpace($event, 'type')">
                                    <label class="form-check-label" for="inlineRadio1"><p class="h6">Casa</p></label>
                                </div>
                                <div class="form-check form-check-inline text-center">
                                    <input class="form-check-input mb-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="apartment" @click="changeSpace($event, 'type')">
                                    <label class="form-check-label" for="inlineRadio2"><p class="h6">Apartamento</p></label>
                                </div>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl"></div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <!-- CEP -->
                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="CEP"
                                            addon-left-icon="ni ni-pin-3">
                                </base-input>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl"></div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <base-input alternative
                                            placeholder="Estado"
                                            addon-left-icon="ni ni-world">
                                </base-input>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <base-input alternative
                                            placeholder="Cidade"
                                            addon-left-icon="ni ni-world-2">
                                </base-input>
                            </div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <base-input alternative
                                            placeholder="Bairro"
                                            addon-left-icon="ni ni-map-big">
                                </base-input>
                            </div>
                            

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <base-input alternative
                                            placeholder="Rua/Avenida"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                            </div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <base-input alternative
                                            placeholder="Nº"
                                            addon-left-icon="ni ni-tag">
                                </base-input>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <base-input alternative
                                            placeholder="Complemento"
                                            addon-left-icon="ni ni-info">
                                </base-input>
                            </div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block" v-if="this.type == 'apartment'"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl" v-if="this.type == 'apartment'">
                                <base-input alternative
                                            placeholder="Andar"
                                            addon-left-icon="ni ni-building"
                                            >
                                </base-input>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl" v-if="this.type == 'apartment'"></div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <!-- Valor do aluguel -->
                                <base-input alternative
                                            placeholder="Valor do aluguel"
                                            addon-left-icon="ni ni-diamond">
                                </base-input>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <!-- Valor do condomínio -->
                                <base-input alternative
                                            placeholder="Valor do condomínio"
                                            addon-left-icon="ni ni-money-coins"
                                            v-if="this.type == 'apartment'">
                                </base-input>
                            </div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <!-- Área -->
                                <base-input alternative
                                            placeholder="Área (em metros quadrados)"
                                            addon-left-icon="ni ni-box-2">
                                </base-input>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl"></div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <!-- Quantidade de quartos -->
                                <label for="customRange2" class="form-label"><p class="h6">Quantidade de quartos: {{this.rooms}}</p></label><br>
                                <input type="range" class="form-range" min="0" max="10" id="customRange2" @change="changeSpace($event,'rooms')" value="0">
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <!-- Quantidade de suites -->
                                <label for="customRange2" class="form-label"><p class="h6">Quantidade de suites: {{this.suites}}</p></label><br>
                                <input type="range" class="form-range" min="0" max="10" id="customRange2" @change="changeSpace($event, 'suites')" value="0">
                            </div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>

                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <!-- Quantidade de salas de estar -->
                                <label for="customRange2" class="form-label"><p class="h6 text-nowrap">Quantidade de salas de estar: {{this.living_rooms}}</p></label><br>
                                <input type="range" class="form-range" min="0" max="10" id="customRange2" @change="changeSpace($event, 'living_rooms')" value="0">
                            </div>

                            <div class="px-5 col-sm col-md col-lg col-xl text-nowrap">
                                <!-- Quantidade de salas de jantar -->
                                <label v-if="this.type == 'apartment'" for="customRange2" class="form-label"><p class="h6">Quantidade de salas de jantar: {{this.living_rooms}}</p></label><br>
                                <input v-if="this.type == 'apartment'" type="range" class="form-range" min="0" max="10" id="customRange2" @change="changeSpace($event, 'living_rooms')" value="0">
                            </div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>
                            
                            <div class="px-5 col-sm col-md col-lg col-xl p-0">
                                <!-- Número de vagas na garagem -->
                                <label for="customRange2" class="form-label"><p class="h6">Nº de vagas na garagem: {{this.parking_spaces}}</p></label><br>
                                <input type="range" class="form-range" min="0" max="10" id="customRange2" @change="changeSpace($event, 'parking_spaces')" value="0">
                            </div>

                            <!-- Force next columns to break to new line at md breakpoint and up -->
                            <div class="w-100 d-none col-sm-block col-md-block col-lg-block d-md-block"></div>
                            
                            <div class="px-5 col-sm col-md col-lg col-xl p-0">
                                <!-- Possui armário embutido -->
                                <p class="h6">Possui armário embutido?</p>
                                <div class="form-check form-check-inline text-center">
                                    <input class="form-check-input mb-2" type="radio" name="inlineRadioOptions1" id="inlineRadio11" value="true" @click="changeSpace($event, 'has_wardrobe')">
                                    <label class="form-check-label" for="inlineRadio11"><p class="h6">Sim</p></label>
                                </div>
                                <div class="form-check form-check-inline text-center">
                                    <input class="form-check-input mb-2" type="radio" name="inlineRadioOptions1" id="inlineRadio22" value="false" @click="changeSpace($event, 'has_wardrobe')">
                                    <label class="form-check-label" for="inlineRadio22"><p class="h6">Não</p></label>
                                </div>
                            </div>
                            <div class="px-5 col-sm col-md col-lg col-xl">
                                <!-- Possui portaria 24 horas -->
                                <p class="h6">Possui portaria 24 horas?</p>
                                <div class="form-check form-check-inline text-center">
                                    <input class="form-check-input mb-2" type="radio" name="inlineRadioOptions2" id="inlineRadio111" value="true" @click="changeSpace($event, 'has_24h_concierge')">
                                    <label class="form-check-label" for="inlineRadio111"><p class="h6">Sim</p></label>
                                </div>
                                <div class="form-check form-check-inline text-center">
                                    <input class="form-check-input mb-2" type="radio" name="inlineRadioOptions2" id="inlineRadio222" value="false" @click="changeSpace($event, 'has_24h_concierge')">
                                    <label class="form-check-label" for="inlineRadio222"><p class="h6">Não</p></label>
                                </div>
                            </div>


                        </div>
                        <div class="text-center">
                            <base-button block type="primary" class="my-4">Anunciar</base-button>
                        </div>
                    </div>

                </card>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            type: "",
            rooms: 0,
            suites: 0,
            living_rooms: 0,
            parking_spaces: 0,
            has_wardrobe: null,
            has_24h_concierge: null
        }
    },
    methods: {
        changeSpace(evt, space) {
            var self = this;
            this[space] = evt.target.value;
        },
    }
};
</script>
<style>
    .section-background-img {
        background-image: url(../assets/images/background.png);
        background-size: 100% 100%;
    }
</style>
