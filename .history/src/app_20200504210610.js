
import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

new Vue({
    el:'#app',
    template:'<App />',
    components: {App}
})
new Vue({
    router
  }).$mount('#app')
