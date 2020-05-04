
import Vue from 'vue';
import App from './App.vue';
import router from './router.vue';

new Vue({
    el:'#app',
    template:'<App />',
    components: {App}
})
new Vue({
    router
  }).$mount('#app')
