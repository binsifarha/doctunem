import home from './components/home.vue';
import signup from './components/signup.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import login from './components/login.vue';



const routes = [
    {
        name: 'home',
        component: home,
        path: "/"

    },
    {
        name: 'signup',
        component: signup,
        path: "/signup"


    },
    {
        name: 'login',
        component: login,
        path: "/login"

    },




];

const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

export default router





