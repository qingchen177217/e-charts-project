<template>
     <div class="sex">
            <p>公司人员构成</p>
            <div class="count">
                <div>
                    <img src="../../assets/img/sex.png" alt="">
                    总数:3200人</div>
                <div>
                    <img src="../../assets/img/man.png" alt="">
                    男员工:2000人
                </div>
                <img src="../../assets/img/woman.png" alt="">
                <div>女职员:1200人</div>
            </div>
            <div class="age">
                  <svg class="svg">
                    <rect x="10" y="20" width="30" height="80" style="fill:none;stroke:#fff;"> 
                    </rect>
                    <text x="25" y="27" class="text" style="fill:#fff;font-size:16px">年龄区间</text>
                    <polyline points="20,20 20,8 300,8 300,35" style="fill:none;stroke-width:2px;stroke:rgb(141, 190, 177)"></polyline>
                    
                    <g>
                    <line x1="80" y1="8" x2="80" y2="35" class="line"></line>
                    <line x1="150" y1="8" x2="150" y2="35" class="line"></line>
                    <line x1="230" y1="8" x2="230" y2="35" class="line"></line>
                    </g>
                    

                    <g>
                    <text x="70" y="40" class="text" style="fill:#fff">十八岁以上</text>
                    <text x="87" y="40" class="text" style="fill:#d5ffff;">一千人</text>
                    
                    <text x="145" y="40" class="text" style="fill:#fff">二十五岁以上</text>
                    <text x="159" y="40" class="text" style="fill:#d5ffff;">五百人</text>

                    <text x="220" y="40" class="text" style="fill:#fff">三十岁以上</text>
                    <text x="235" y="40" class="text" style="fill:#d5ffff;">三百人</text>
                    
                    <text x="290" y="40" class="text" style="fill:#fff">四十岁以上</text>
                    <text x="305" y="40" class="text" style="fill:#d5ffff;">二十人</text>
                    </g>
                  </svg>
            </div>
     </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

</script>

<style lang='less' scoped>
    .sex{
        padding-left:15px;
        padding-right:5px;
        color:#fff;
        p{
            margin:10px 0 7px 0;
            height: 20px;
            font-size:16px;
            color:#fff;
        }
        .count{
            padding:0 3px;
            height: 30px;
            line-height: 30px;
            border:1px solid #d5ffff;
            display:flex;
            justify-content:space-between;
            text-align: left;
            font-size:13px;
            color:#fff;
            letter-spacing: 0.4px;
            div{
               img{
                width: 20px;
                height: 20px;
                vertical-align: middle;
               }
            }
        }
        .age{
            height: 110px;
            width: 100%;
            .svg{
                width: 100%;
                height: 100%;
                .text{
                    writing-mode:vertical-rl;
                    font-size:11px;
                    letter-spacing: 1px;
                }
                
                .line{
                    stroke:rgb(141, 190, 177);
                    stroke-width:2px;
                }
            }
        }
    }
</style>
