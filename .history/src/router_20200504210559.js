import VueRouter from 'vue-router';

const home = ()=>import('./page/home.vue');
const city = ()=>import('./page/city.vue');

const router = new VueRouter({
    routers:[{
        path:'home',
        component: home,
    },{
        path:'city',
        component: city,
    },{
        path:'message',
        component: message,
    },{
        path:'me',
        component: me,
    },]
})

export default router;