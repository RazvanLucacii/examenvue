<template>
    <div class="container text-center">
        <h2>Login</h2>
        <p>Introduzca su email y su contraseña</p>
        <form @submit.prevent="handleLogin">
            <label class="form-control" for="email">Email:</label>
            <input class="form-control" type="text" id="email" v-model="email" required>
            <br/>
            <label class="form-control" for="password">Password:</label>
            <input class="form-control" type="password" id="password" v-model="pass" required>
            <br/>
            <button type="submit" class="btn btn-success">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';

    export default {
        name: "LoginComponent",
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            async handleLogin() {
                try {
                    var request = "api/manage/login";
                    var url = Global.apiUrls + request;
                    const response = await axios.post(url, {
                        email: this.email,
                        password: this.password,
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
                        console.error('Error en el login: Respuesta incorrecta del servidor');
                    }
                } catch (error) {
                    console.error('Error en el login:', error);
                    // Puedes manejar el error aquí, por ejemplo,
                    // mostrar un mensaje de error al usuario.
                }
            },
        },
    }
</script>

<style>

</style>