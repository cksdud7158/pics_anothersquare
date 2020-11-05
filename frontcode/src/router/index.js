import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ma002 from "@/components/ma/ma002.vue";
import Me001 from "@/components/me/me001.vue";
import Me002 from "@/components/me/me002.vue";
import Me003 from "@/components/me/me003.vue";
import Me004 from "@/components/me/me004.vue";
import Me005 from "@/components/me/me005.vue";
import Me006 from "@/components/me/me006.vue";
import Me007 from "@/components/me/me007.vue";
import Se001 from "@/components/se/se001.vue";
import Se002 from "@/components/se/se002.vue";
import Fi001 from "@/components/fi/fi001.vue";
import Fi002 from "@/components/fi/fi002.vue";
import Pa001 from "@/components/pa/pa001.vue";
import Pa002 from "@/components/pa/pa002.vue";
import Pa003 from "@/components/pa/pa003.vue";
import Bo001 from "@/components/bo/bo001.vue";
import Bo002 from "@/components/bo/bo002.vue";
import Bo003 from "@/components/bo/bo003.vue";
import Da001 from "@/views/da001.vue";

import MapView from "@/views/map.vue";
import Test from "@/views/test.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "Home",
    component: Home,
}, {
    path: "/ma002",
    name: "ma002",
    component: Ma002,
}, {
    path: "/me001",
    name: "me001",
    component: Me001,
}, {
    path: "/me002",
    name: "me002",
    component: Me002,
}, {
    path: "/me003",
    name: "me003",
    component: Me003,
}, {
    path: "/me004",
    name: "me004",
    component: Me004,
}, {
    path: "/me005",
    name: "me005",
    component: Me005,
}, {
    path: "/me006",
    name: "me006",
    component: Me006,
}, {
    path: "/me007",
    name: "me007",
    component: Me007,
}, {
    path: "/se001",
    name: "se001",
    component: Se001,
}, {
    path: "/fi001/:stuName",
    name: "fi001",
    component: Fi001,
}, {
    path: "/pa001",
    name: "pa001",
    component: Pa001,
}, {
    path: "/map/:addr",
    name: "map",
    component: MapView,
}, {
    path: "/test",
    name: "test",
    component: Test,
}, {
    path: "/pa002",
    name: "pa002",
    component: Pa002,
}, {
    path: "/pa003",
    name: "pa003",
    component: Pa003,
}, {
    path: "/bo001",
    name: "bo001",
    component: Bo001,
}, {
    path: "/bo002",
    name: "bo002",
    component: Bo002,
}, {
    path: "/bo003",
    name: "bo003",
    component: Bo003,
}, {
    path: "/fi002",
    name: "fi002",
    component: Fi002,
}, {
    path: "/se002",
    name: "se002",
    component: Se002,
}, {
    path: "/",
    name: "da001",
    component: Da001,
}, ];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;