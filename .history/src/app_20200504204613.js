import Vue from 'vue';
import VueRouter from 'vue-router'

import './scss/common.scss';

import router from './App.vue';

Vue.use(VueRouter)

const app = new Vue({
    router
}).$mount('#app')

