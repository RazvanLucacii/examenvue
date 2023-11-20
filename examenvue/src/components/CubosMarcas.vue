<template>
  <div class="container text-center">
    <h1>Cubos de la marca {{ this.marca.marca }}</h1>
    <div class="card" style="width: 18rem;">
        <img :src="this.marca.imagen" class="card-img-top" alt="Imagen">
        <div class="card-body">
            <p class="card-title" style="color: orange">{{ this.marca.nombre }}</p>
            <p class="card-text" style="color: orange">{{ this.marca.precio }} €</p>
        </div>
    </div>
    
  </div>
</template>

<script>
import ServiceCubos from '@/services/servicecubos';
const service = new ServiceCubos;

    export default {
        name: "CubosMarcas",
        data(){
            return{
                marca: {},
            }
        },
        mounted(){
            service.findMarcas(this.$route.params.marca).then(result =>{
                this.marca = result;
            })
        },
    }
</script>

<style>

</style>