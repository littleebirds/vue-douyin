<template>
    <div>
        <h1>{{msg}}</h1>
        <img src=imgSrc>
        <input type='text' v-model="msg">
    </div>
</template>
<script>
import getData from './utils/util.js';
export default {
    name:'app',
    data(){
        return {
            msg:'welcome to my home',
            imgSrc: './media/logo_png.png'
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        async fetchData(){
            const data = await getData();
            this.msg = data;
        }
    }
}
</script>
<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;

        h1 {
            color: green;
        }
    }
</style>