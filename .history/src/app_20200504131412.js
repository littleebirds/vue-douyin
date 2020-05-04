import say from './util';
say();
import './style/common.scss';
import Vue from 'vue';
import VueRouter from 'vue-router'
import getData from './util';
import './style/common.scss';

import App from './App.vue';
Vue.use(VueRouter)

Vue.component('my-component',{
    template:'<img :src="url">',
    data(){
        return{
            url:require('./media/logo_png.png'),
        }
    }
})
new Vue({
    el:'#app',
    template:'<App />',
    components: {App}
})
