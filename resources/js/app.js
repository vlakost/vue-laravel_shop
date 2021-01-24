// require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

import App from './views/App'



const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
