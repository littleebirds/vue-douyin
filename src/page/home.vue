<style lang="scss">
#home{
    width: 100%;
    height: 100%;
    position: relative;
    &>.header{
        width: 100%;
        color: gray;
        position: absolute;
        left: 0;
        top: 0;
        &>span{
            float: left;            
            width: 25%;
            padding: 10px 15px;
            box-sizing: border-box;
        }

        &>.h_subscribe{
            text-align: right;
            font-weight: bolder;
        }
        &>.h_recommendation{
            text-align: left;
            color: #FFFFFF;
            font-weight: bolder;

        }
        &>.search{
            text-align: right;
        }
    }
    &>.content{
        width: 100%;
        height: 100%;
        &>.subscribe, &>.recommendation{
            height: 100%;
            width: 100%;
            float: left;
            &>img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
<template>
    <div id="home">
        <div class="content">
            <div class="subscribe">
                <img :src="content1Url1"/>
            </div>
            <div class="recommendation">
                <img :src="content1Url2"/>
            </div>
        </div>
        <div class="header">
            <span class="tv">
                <font-awesome-icon icon="tv"  />
            </span>
            <span class="h_subscribe">关注</span>
            <span class="h_recommendation">推荐</span>
            <span class="search">
                <font-awesome-icon icon="search"  />
            </span>
        </div>
        <div class="info"></div>
        <div class="footer"></div>
    </div>
</template>
<script>
import content1Url1 from '../media/content1.jpg';
import content1Url2 from '../media/content2.jpg';
export default {
    data () {
        return{
            content1Url1,
            content1Url2,
        }
    },
    components:{

    }
}
</script>