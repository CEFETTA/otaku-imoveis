<template>
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
                    <img src="../../../assets/images/logo-nav-toggle.svg">
                </a>
            </div>
            <div class="col-6 collapse-close">
                <close-button @click="closeMenu" :target="`navbar-${menu.type}`">

                </close-button>
            </div>
        </div>
        <component :is="menu.menuComponent"></component>
    </base-nav>
</template>

<script>
import Menu2 from "../../components/Navigation/Menu2";
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
</style>
