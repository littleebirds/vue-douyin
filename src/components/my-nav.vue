<style lang="scss">

    @import '../scss/mixin.scss';

    #nav{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: transparent;  //transparent
        height: 40px;
        @include clearFloat;
        &>span{
            font-size: 15px;
            font-weight: bolder;
            float: left;
            width: 20%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            &>a{
                display: inline-block;
                height: 100%;
                color: gray;
                text-decoration: none;
                box-sizing: border-box;
            }
        }
        & .add{
            width: 50%;
            line-height: 37px;
            &>span{
                display: inline-block;
                height: 20px;
                width: 100%;
                line-height: 20px;
                vertical-align: middle;
                background-color: #FFFFFF;
                border-radius: 5px;
                border-left: 2px $douyinColor-left solid;
                border-right: 2px $douyinColor-right solid;
            }
        }
        & .active{
            color: #FFFFFF;
            border-bottom: 3px solid #FFFFFF;
        }
    }
</style>
<template>
    <div id="nav">
        <span>
            <router-link to="home" class="nav" active-class="active">首页</router-link>
        </span>
        <span>
            <router-link to="city" class="nav" active-class="active">北京</router-link>
        </span>
        <span>
            <router-link to="add" class="add">
                <span>+</span>
            </router-link>
        </span>
        <span>
            <router-link to="message" class="nav" active-class="active">消息</router-link>
        </span>
        <span>
            <router-link to="me" class="nav" active-class="active">我</router-link>
        </span>
    </div>
</template>