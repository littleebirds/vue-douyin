import VueRouter from 'vue-router';

const app = ()=>import('./App.vue');
const home = ()=>import('./page/home.vue');
const city = ()=>import('./page/city.vue');
const message = ()=>import('./page/message.vue');
const me = ()=>import('./page/me.vue');

const router = new VueRouter({
    mode:'history',
    routers:[{
        path:'/',
        component: {
            default: app,
        },
    },{
        path:'/home',
        component: home,
    },{
        path:'/city',
        component: city,
    },{
        path:'/message',
        component: message,
    },{
        path:'/me',
        component: me,
    },]
})

export default router;