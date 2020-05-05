<style lang="scss">

    @import '../scss/mixin.scss';

    #nav{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #000000;
        height: 40px;
        &>a{
            float: left;
            width: 20%;
            line-height: 40px;
            text-align: center;
            color: gray;
            text-decoration: none;
        }
        &>a:last-child{
            border: none;
        }
        .add{
            line-height: 37px;
            &>span{
                display: inline-block;
                height: 20px;
                width: 50%;
                line-height: 20px;
                vertical-align: middle;
                background-color: #FFFFFF;
                border-radius: 5px;
                border-left: 2px $douyinColor-left solid;
                border-right: 2px $douyinColor-right solid;
            }
        }
    }
</style>
<template>
    <div id="nav">
        <router-link to="home">首页</router-link>
        <router-link to="city">北京</router-link>
        <router-link to="add" class="add">
            <span>+</span>
        </router-link>
        <router-link to="message">消息</router-link>
        <router-link to="me">我</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>