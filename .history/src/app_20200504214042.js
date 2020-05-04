
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router.js';

Vue.use(VueRouter);

console.log(router)
const app = new Vue({
    router
  }).$mount('#app')
