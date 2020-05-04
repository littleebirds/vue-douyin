<style lang="scss">
    #nav{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #000000;
        height: 40px;
        &>a{
            float: left;
            display: inline-block;
            width: 20%;
            line-height: 40px;
            text-align: center;
            color: gray;
            text-decoration: none;
            &:active{
                color: #FFFFFF;
            }
        }
        &>a:last-child{
            border: none;
        }
    }
</style>
<template>
    <div id="nav">
        <router-link to="home">首页</router-link>
        <router-link to="city">北京</router-link>
        <router-link to="add" class="add">+</router-link>
        <router-link to="message">消息</router-link>
        <router-link to="me">我</router-link>
    </div>
</template>