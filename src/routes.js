import { createRouter, createWebHistory } from "vue-router";
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

const routes = [
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "Login",
        component: Login,
        path: "/login"
    },
    {
        name: "Home",
        component: Home,
        path: "/"
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;