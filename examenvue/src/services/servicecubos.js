import axios from "axios";
import Global from "@/Global";

export default class ServiceCubos {
    getMarcas(){
        return new Promise(function(resolve){
            var request = "api/cubos/marcas";
            var url = Global.apiUrls + request;
            var marcas = [];
            axios.get(url).then(response =>{
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    findMarcas(marca){
        return new Promise(function(resolve){
            var request = "api/cubos/cubosmarca/" + marca;
            var url = Global.apiUrls + request;
            var cubo = {};
            axios.get(url).then(response =>{
                cubo = response.data;
                resolve(cubo);
            })
        })
    }

    getCubos(){
        return new Promise(function(resolve){
            var request = "api/cubos";
            var url = Global.apiUrls + request;
            var cubos = [];
            axios.get(url).then(response =>{
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    findCubo(id){
        return new Promise(function(resolve){
            var request = "api/cubos/cubosmarca/" + id;
            var url = Global.apiUrls + request;
            var cubos = [];
            axios.get(url).then(response =>{
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    comentarios(id){
        return new Promise(function(resolve){
            var request = "api/comentarioscubo/getcomentarioscubo/" + id;
            var url = Global.apiUrls + request;
            var comentarios = [];
            axios.get(url).then(response =>{
                comentarios = response.data;
                resolve(comentarios);
            })
        })
    }
}