<style lang="scss">
    #nav{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        color: #FFFFFF;
        background-color: #000000;
        height: 40px;
        &>span{
            float: left;
            display: inline-block;
            width: 20%;
            line-height: 40px;
            text-align: center;
            border-right: 1px solid gray;
            box-sizing: border-box;
        }
        &>span:last-child{
            border: none;
        }
    }
</style>
<template>
    <div id="nav">
        <span>首页</span>
        <span>北京</span>
        <span>+</span>
        <span>消息</span>
        <span>我</span>
    </div>
</template>