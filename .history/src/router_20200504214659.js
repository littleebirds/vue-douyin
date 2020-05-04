import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './page/home.vue';
// const App = ()=>import('./App.vue');
// const Home = ()=>import('./page/home.vue');
const City = ()=>import('./page/city.vue');
const Message = ()=>import('./page/message.vue');
const Me = ()=>import('./page/me.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path:'/',
        component: App,
    },{
        path:'/home',
        component: Home,
    },{
        path:'/city',
        component: City,
    },{
        path:'/message',
        component: Message,
    },{
        path:'/me',
        component: Me,
    },]
})

export default router;