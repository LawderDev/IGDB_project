import Home from "./views/Home.vue";
import All from "./views/All.vue";
import Quote from "./views/Quote.vue";
import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/all",
        name: "All",
        component: All
    },
    {
        path: "/quote/:id",
        name: "single quote",
        component: Quote
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;