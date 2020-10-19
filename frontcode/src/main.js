import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios' // import axios

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui';

Vue.use(VueOnsen);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios; // prototype에 axios 추가

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");