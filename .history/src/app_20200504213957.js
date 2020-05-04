
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router.js';

Vue.use(VueRouter);

// new Vue({
//     el:'#app',
//     render: h => h(App)
// })
const app = new Vue({
    router
  }).$mount('#app')
