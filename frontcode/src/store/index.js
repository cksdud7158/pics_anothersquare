import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //data 를 넣는다.
        adStudioName: "줌이미지",
        ipAddress: "34.64.108.6",
        // ipAddress: "localhost",
        user: "",
        loginCheck: false,
    },
    mutations: {
        addUser: (state, payload) => {
            state.loginCheck = true;
            state.user = payload;
        },
    },
    actions: {},
    modules: {},
});