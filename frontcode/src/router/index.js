import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ma002 from "@/components/ma/ma002.vue"
import Me001 from "@/components/me/me001.vue"
import Se001 from "@/components/se/se001.vue"
import Fi001 from "@/components/fi/fi001.vue"
import Pa001 from "@/components/pa/pa001.vue"
import MapView from "@/views/map.vue"


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/ma002',
        name: 'ma002',
        component: Ma002,
    },
    {
        path: '/me001',
        name: 'me001',
        component: Me001,
    },
    {
        path: '/se001',
        name: 'se001',
        component: Se001,
    }, {
        path: '/fi001/:stuName',
        name: 'fi001',
        component: Fi001,
    }, {
        path: '/pa001',
        name: 'pa001',
        component: Pa001,
    }, {
        path: '/map/:addr',
        name: 'map',
        component: MapView,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;