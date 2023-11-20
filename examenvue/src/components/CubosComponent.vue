<template>
  <div class="container">
    <h1>Component Cubos</h1>
    <table class="table table-bordered table-dark">
        <thead>
            <tr>
                <th>ID Cubo</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Marca</th>
                <th>-</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cubo in cubos" :key="cubo">
                <td>{{ cubo.idCubo }}</td>
                <td>{{ cubo.nombre }}</td>
                <td>{{ cubo.imagen }}</td>
                <td>{{ cubo.marca }}</td>
                <td>
                    <router-link class="btn btn-primary" :to="'/detallescubo/' + cubo.idCubo">
                        Detalles
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCubos from '@/services/servicecubos';
const service = new ServiceCubos;

    export default {
        name: "CubosComponent",
        data(){
            return{
                cubos: [],
            }
        },
        mounted(){
            service.getCubos().then(result =>{
                this.cubos = result;
            })
        }
    }
</script>

<style>

</style>