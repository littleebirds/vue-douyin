<style lang="scss">
@import '../scss/mixin.scss';

    #share{
        position: absolute;
        right: 10px;
        bottom: 60px;
        &>.headerInfo{
            text-align: center;
            &>.headerImg{
                width: 50px;
                height: 50px;
                border-radius: 100%;
                overflow: hidden;
                margin: auto;
                margin-bottom: -10px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            &>.plus{
                display: inline-block;
                width: 15px;
                height: 15px;
                background-color: $douyinColor-right;
                border-radius: 100%;
                font-size: 12px;
                line-height: 15px;
                color: #FFFFFF;
            }

        }
        &>.like,&>.comment,&>.share{
            text-align: center;
            font-size: 32px;
            color: #FFFFFF;
            margin: 10px 0;
            &>.number{
                font-size: 14px;
            }
        }
        &>.music{
            width: 60px;
            height: 60px;
            margin-left: -15px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
<template>
    <div id="share">
        <div class="headerInfo">
            <div class="headerImg">
                <img :src="HeaderImg"/>
            </div>
            <span class="plus">
                <font-awesome-icon icon="plus"  />
            </span>
        </div>
        <div class="like">
            <font-awesome-icon icon="heart"  />
            <div class="number">762</div>
        </div>
        <div class="comment">
            <font-awesome-icon icon="comment"  />
            <div class="number">8</div>
        </div>
        <div class="share">
            <font-awesome-icon icon="share"  />
            <div class="number">7</div>
        </div>
        <div class="music">
            <img :src="MusicImg"/>
        </div>
    </div>
</template>
<script>
import HeaderImg from '../media/headerImg.jpg';
import MusicImg from '../media/music.png';
export default {
    data(){
        return {
            HeaderImg,
            MusicImg,
        }
    }
}
</script>