<style lang="scss">
    #desc{
        position: absolute;
        bottom: 40px;
        left: 10px;
        color: #FFFFFF;
        &>.name{
            font-weight: 900;
            font-size: 16px;
        }
        &>.content{
            font-size: 14px;
        }
    }
</style>
<template>
    <div id="desc">
        <div class="name">@{{name}}</div>
        <div class="content">{{content}}</div>
    </div>
</template>
<script>
export default {
    props:{
        name: {type: String },
        content: {type: String },
    }
}
</script>