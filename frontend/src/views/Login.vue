<template>
    <section class="section section-xl my-0 section-background-img">
        <div class="container">
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
                                    <base-button type="primary" class="my-4">Sign in</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
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
