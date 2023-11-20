<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-if="cubos!= undefined">
        <img :src="this.cubos.imagen" class="card-img-top" alt="Cubo">
        <div class="card-body">
            <h5 class="card-title">{{ this.cubos.nombre }}</h5>
            <p class="card-text">{{ this.cubos.marca }}</p>
            <router-link to="/" class="btn btn-success">Volver</router-link>
            <div v-for="comentario in comentarios" :key="comentario">
                <p>{{ comentario.comentario }}</p>
                <p>{{ comentario.fechaComentario }}</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import ServiceCubos from '@/services/servicecubos';
const service = new ServiceCubos();
    export default {
        name: "DetallesCubo",
        data(){
            return{
                cubos: [],
                comentarios: [],
            }
        },
        mounted(){
            service.findCubo(this.$route.params.id).then(result =>{
                this.cubos = result;
            })
            service.comentarios(this.$route.params.id).then(result =>{
                this.comentarios = result;
            })
        },
    }
</script>

<style>

</style>