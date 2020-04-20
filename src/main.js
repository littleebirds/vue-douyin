import say from './util';
say();
import './style/common.scss';
import Vue from 'vue';
import getData from './util';
import './style/common.scss';

import App from './App.vue';

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
// const app = new Vue({
//     el:'#app',
//     data:{
//         message: 'hello waterbaby'
//     },
//     methods:{
//         async fetchData(){
//             const data = await getData()
//             this.message = data;
//         }
//     },
//     created(){
//         this.fetchData();
//     }
// })
