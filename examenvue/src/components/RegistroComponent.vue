<template>
    <div class="container text-center">
        <h2>Registro</h2>
        <form @submit.prevent="handleRegister">
            <label class="form-control" for="nombre">Nombre:</label>
            <input class="form-control" type="text" id="nombre" v-model="nombre" required>
            <br/>
            <label class="form-control" for="email">Email:</label>
            <input class="form-control" type="text" id="email" v-model="email" required>
            <br/>
            <label class="form-control" for="pass">Password:</label>
            <input class="form-control" type="password" id="pass" v-model="pass" required>
            <br/>
            <label class="form-control">Repetir Password:</label>
            <input class="form-control" type="password" required>

            <button type="submit" class="btn btn-success">Registro</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';

    export default {
        name: "RegistroComponent",
        data() {
            return {
                idUsuario: null,
                nombre: '',
                email: '',
                pass: '',
            };
        },
        methods: {
            async handleRegister() {
                try{
                    var request = "api/manage/registrousuario";
                    var url = Global.apiUrls + request;
                    const response = await axios.post(url, {
                        idUsuario: this.idUsuario,
                        nombre: this.nombre,
                        email: this.email,
                        pass: this.pass,
                    });

                    console.log('Respuesta del servidor:', response);
                        if (response.data && response.data.response) {
                            const token = response.data.response;
                            console.log("Token:", token);

                            // Almacena el token en el localStorage
                            // y el nombre que le pones es el mismo en los dos componentes
                            localStorage.setItem("token", token);

                            // Redirige a la página que requiere el token
                            this.$router.push('/cubos');
                        } else {
                            console.error('Error en el registro: Respuesta incorrecta del servidor');
                        }
                } catch (error) {
                    console.error('Error en el registro:', error);
                    // Puedes manejar el error aquí, por ejemplo,
                    // mostrar un mensaje de error al usuario.
                }
    
            },
        },
    }
</script>

<style>

</style>