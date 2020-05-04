import say from './util';
say();
import './style/common.scss';
import Vue from 'vue';
import getData from './util';
import './style/common.scss';

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
