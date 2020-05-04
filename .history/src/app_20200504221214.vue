<template>
    <div>
        <router-view></router-view>
        <my-nav></my-nav>
    </div>
</template>
<script>
    import MyNav from './components/my-nav.vue';

    export default {
        components:{
            MyNav
        }
    }
</script>
