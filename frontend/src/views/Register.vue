<template>
    <div>
        <!-- Navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#" target="_blank"><img src="../assets/images/logo-nav.svg"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="#" target="_blank">Home</a>
                <a class="nav-item nav-link active" href="#/register">Anunciar<span class="sr-only">(current)</span></a>
            </div>
            </div>
        </nav>
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
