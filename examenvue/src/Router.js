import { createRouter, createWebHistory } from "vue-router";
import CubosMarcas from './components/CubosMarcas.vue'
import CubosComponent from './components/CubosComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegistroComponent from './components/RegistroComponent.vue'
import DetallesCubo from './components/DetallesCubo.vue'

const myRoutes = [
    {
        path: "/cubomarcas/:marca", component: CubosMarcas
    },
    {
        path: "/detallescubo/:id", component: DetallesCubo
    },
    {
        path: "/", component: CubosComponent
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/registro", component: RegistroComponent
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;