import VueRouter from 'vue-router';

const App = ()=>import('./App.vue');
const Home = ()=>import('./page/home.vue');
const City = ()=>import('./page/city.vue');
const Message = ()=>import('./page/message.vue');
const Me = ()=>import('./page/me.vue');

const router = new VueRouter({
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