<template>
    <div class="goods">
        <p>公司工单统计</p>
        <div class="main">
            <div class="left">
                <div class="top">
                    <div>
                        <p>已办理完成数</p>
                        <p>1280件</p>
                    </div>
                    <div class="recent">
                        <div class="count">
                            占比<br />
                            0.8%
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div>
                        <p>未办理完成件数</p>
                        <p>1000件</p>
                    </div>
                    <div class="recent">
                        <div class="count">
                            占比<br />
                            0.8%
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="text">
                    当前等待件数：
                    <span>
                        236
                    </span>
                    件
                </div>
                <div class="text">
                    已办件数统计：
                    <span>
                        3520
                    </span>
                    件
                </div>
                <div class="text">
                    已办业务累计：
                    <span>
                        3600
                    </span>
                    件
                </div>
                <div class="message">
                    <div class="text">
                    满意度统计
                    </div>
                    <div class="grid">
                           <div class="love">
                              <div>满意: 70%
                              </div>
                              <div>
                              不满意: 10%
                               </div>
                           </div>
                           <div class="title">
                            未评价 <br/>20%
                           </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

</script>

<style lang='less' scoped>
.goods {
    height: 160px;
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 5px;
    border-left: 1px solid #d5ffff;

    p {
        margin: 10px 0 5px 0;
        height: 20px;
        font-size: 16px;
        color: #fff;
    }

    .main {
        width: 100%;
        height: 143px;
        display: flex;

        .recent {
            margin-left: 3px;
            margin-top: 8px;
            width: 60px;
            height: 60px;
            border: 1px solid #d5ffff;
            border-radius: 50%;

            .count {
                margin: 5px auto;
                font-size: 14px;
                color: rgb(30, 149, 196);
                line-height: 25px;
                text-align: center;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                background-color: #d5ffff;
            }
        }

        p {
            font-size: 13px;
        }

        .left {
            display: flex;
            flex-direction: column;

            .top {
                display: flex;
            }

            .bottom {
                display: flex;
            }
        }

        .right {
            margin-left:9px;
            font-size: 13px;
            color: #fff;
            .text {
                margin-bottom:3px;
                span {
                    display: inline-block;
                    width: 73px;
                    height: 20px;
                    line-height: 20px;
                    text-indent: 2em;
                    background-color: rgb(45, 163, 157);
                    text-align: center;
                    font-size: 16px;
                }
                &:nth-child(1){
                    span{  
                        background-color:rgb(218, 108, 119);
                    }
                }
                &:nth-child(2){
                     span{
                        background-color: rgb(25, 135, 188);
                     }
                }
            }
            .message{
                margin-top:10px;
                .grid{
                    display:grid;
                    grid:auto-flow dense / 30px 30px 1fr;
                    grid-template-columns: 100px 1fr;
                    grid-template-rows: auto-flow dense;
                    .love{
                        div{
                            width: 105px;
                            height: 23px;
                            text-align: center;
                            line-height: 23px;
                            background-color: rgb(18, 144, 194);
                            &:nth-child(2){
                                background-color: rgb(12, 159, 79);
                            }
                        }
                    }
                    .title{
                        width: 69px;
                        height:46px;
                        line-height: 46px;
                        text-align: center;
                        background-color: rgb(204, 191, 34);
                    }
                }
            }
            
        }
    }
}
</style>