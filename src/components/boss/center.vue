<template>
    <div class="data">
        <p class="header">
            数据中心
        </p>
        <div class="main">
            <div class="top">
                <div class="text">
                    <p>数据分门别类 10</p>
                    <p>数据关系(部门) 16</p>
                    <p>今日数据交易 32M</p>
                </div>
            </div>
            <div class="bottom" ref="right">

            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'


const right = ref<HTMLElement>()
onMounted(() => {
    const mychart = echarts.init(right.value as HTMLElement)
    let option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '20%',
            left: '7%', 
            width:'10',
            height:"80",
           itemWidth:15,
           itemHeight:10,
           orient:"'vertical'",
           textStyle:{
              color:'#fff',
              fontSize:10,
           } 
        },
        series: [
            {
                name: '业务分类',
                top:-20,    
                left:100,
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                data: [
                    { value: 13, name: '采购类' },
                    { value: 8, name: '调查类' },
                    { value: 16, name: '工资类' },
                    { value: 23, name: '学习类' },
                    { value: 25, name: '说书类' },
                    { value: 5, name: '哈哈类' },
                    { value: 20, name: '嘿嘿类' }
                ]
            }
        ]

    }
    mychart.setOption(option)
})


</script>

<style lang='less' scoped>
.data {
    width: 360px;
    height: 160px;
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 5px;
    border-left: 1px solid #d5ffff;

    .header {
        margin: 10px 0 5px 0;
        height: 20px;
        font-size: 16px;
        color: #fff;
    }

    .main {
        width: 100%;
        height: 140px;
        .top {
            width: 360px;
            height: 20px;
            .text {
                color: #d5ffff;
                letter-spacing: 1px;
                font-size: 9px;
                display:flex;
                justify-content: space-between;
                p {
                    width:120px;
                    height: 20px;
                    margin: 2px 0;
                    padding: 0;
                }
            }
        }
        .bottom{
            width: 360px;
            height: 100%;
        }
    }
}
</style>