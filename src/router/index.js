import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../Views/HomeView.vue";
import loginView from "../Views/loginView.vue";
import RegisterView from "../Views/RegisterView.vue";
import AboutView from "../Views/AboutView.vue";
import ContactView from "../Views/ContactView.vue";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/login',
        component: loginView
    },
    {
        path: '/register',
        component: RegisterView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/contact',
        component: ContactView
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})