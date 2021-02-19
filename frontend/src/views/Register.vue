<template>
    <div>
        <!-- Navbar-->
        <base-nav 
            :key="menu.type"
            :type="menu.type"
            effect="dark"
            expand
            title="Otaku Andar"
            :content-id="`navbar-${menu.type}`">
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#">
                        <img src="../assets/images/logo-nav-toggle.svg">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu" :target="`navbar-${menu.type}`">

                    </close-button>
                </div>
            </div>
            <component :is="menu.menuComponent"></component>
        </base-nav>
        <!-- Registro -->
        <section class="section section-xl my-0 section-background-img">
            <div class="container ct-exemple-row">
                <div class="row">
                    <div class="col-xl col-xl col-md col-sm"><span></span></div>
                    <div class="col-xl col-xl col-md col-sm text-center">
                        <img class="section-div-img" src="../assets/images/logo.svg">
                    </div>
                    <div class="col-xl col-xl col-md col-sm"><span></span></div>
                </div>
            </div>
            <div class="container pt-xl-md mt-4">
                <div class="row justify-content-center">
                    <div class="col-xl-5">
                        <card type="secondary" shadow
                            header-classes="bg-white pb-5"
                            body-classes="px-xl-5 py-xl-5"
                            class="border-0">
                            <template>
                                <form role="form">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Email"
                                                addon-left-icon="ni ni-email-83">
                                    </base-input>
                                    <base-input alternative
                                                type="password"
                                                placeholder="Password"
                                                addon-left-icon="ni ni-lock-circle-open">
                                    </base-input>
                                    <div class="text-center">
                                        <base-button type="primary" class="my-4">Create</base-button>
                                    </div>
                                </form>
                            </template>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Menu2 from "./components/Navigation/Menu2";
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
    components: {
        Menu2,
        BaseNav,
        CloseButton
    },
    data() {
        return {
            menu: {
                type: "default", menuComponent: Menu2
            }
        }
    }
};
</script>
<style>
    .section-background-img {
        background-image: url(../assets/images/background.png);
    }

    .section-div-img {
        max-width: 247px;
        max-height: 341px;
        width: auto;
        height: auto;
    }
</style>
