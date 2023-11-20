<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">
                            Cubos
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li class="nav-item" v-for="marca in marcas" :key="marca">
                                <router-link class="dropdown-item" :to="'/cubomarcas/' + marca">
                                    {{ marca }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/login">
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/registro">
                            Registro
                        </router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServiceCubos from '@/services/servicecubos';
const service = new ServiceCubos();

    export default {
        name: "MenuComponent",
        data(){
            return{
                marcas: [],
            }
        },
        mounted(){
            service.getMarcas().then(result =>{
                this.marcas = result;
            })
        }
    }
</script>

<style>

</style>