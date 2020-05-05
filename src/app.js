import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router.js';

import './scss/common.scss';

Vue.use(VueRouter);

new Vue({
    router
}).$mount('#app')
