import Vue from 'vue';
import VueRouter from 'vue-router'

import './scss/common.scss';

import App from './App.vue';

Vue.use(VueRouter)

new Vue({
    el:'#app',
    template:'<App />',
    components: {App}
})
