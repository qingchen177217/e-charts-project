<template>
     <div class="guest">
          <brain>公司客流统计</brain>
          <div class="count">
               <header class="header">
                    <button :class="{active:index==cl}" v-for="(item,index) in date" @click="change(index)">{{item}}</button>
               </header>
               <div class="bar" ref="bar">

               </div>
          </div>
     </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const bar = ref<HTMLElement>()

let date = ['今天', '本周', '本月']
let cl=ref(0)//记住当前的值，改变数值

let count = [
     [
          [4000, 2600, 3000, 2800],
          [4500, 4600, 5800, 5800],
          [6000, 6000, 7000, 10000]
     ],
     [
          [30000, 40000, 40000, 50000],
          [20000, 35000, 20000, 30000],
          [50000, 30000, 60000, 70000]
     ],
     [
          [200000, 400000, 500000, 600000],
          [400000, 200000, 532000, 612000],
          [544400, 325000, 785400, 985200]
     ]
]
let data = ref<Array<Array<number>>>()

data.value=count[0]//初始化值，展示当天的值


const average = (args: any): void => {
     //计算出数组的平均值，并添加到数组中    
     args.forEach((arr: any) => {
          arr.unshift(arr.reduce((sum: any, item: any) => {
               return sum + item
          }, 0) / arr.length)
     })
}
let  change = (params: any) => {
      data.value=count[params]
      cl.value=params
      createechart()//调用画布函数，改变数值进行重新绘画
} 
function createechart(){
     average(data.value)//调用计算出数组的平均值，并添加进去
     const mychart = echarts.init(bar.value as HTMLElement)
     let option = {
          legend: {
               left: 80,
               top: -4,
               symbolSize: 8,
               textStyle: {
                    color: "#fff"
               }
          },
          tooltip: {
               trigger: 'axis',
               axisPointer: {
                    type: 'shadow'
               }
          },
          grid: {
               top: 30,
               left: 60,
               bottom: 18
          },
          yAxis: {
               type: 'value',
               name: '单位:人',
               axisLine: {
                    lineStyle: {
                         color: "#fff"
                    }
               }
          },
          xAxis: {
               type: 'category',
               data: ['平均值', 'Q1', 'Q2', 'Q3', 'Q4'],
               axisLine: {
                    lineStyle: {
                         color: "#fff"
                    }
               }
          },
          color: ['#b5b88a', '#7ec1a6', '#4a80c0'],
          series: [
               {
                    name: "大老板",
                    type: "bar",
                    data: (data.value as number[][])[0],
                    symbolSize: 20,
               },
               {
                    name: '经理',
                    type: 'bar',
                    data: (data.value as number[][])[1]
               },
               {
                    name: '主管',
                    type: 'bar',
                    data: (data.value as number[][])[2]
               }
          ]
     }
     mychart.setOption(option)
}
onMounted(() => {
      createechart()
})
</script>

<style lang='less' scoped>
.guest {
     width: 378px;
     height: 261px;
     border: 1px solid #d5ffff;
     .count {
          padding: 4px;

          .header {
               margin-bottom: 9px;

               button {
                    background-color: transparent;
                    border: 1px solid #d5ffff;
                    margin: 0 5px;
                    color: #fff;
                    font-size: 12px;
                    line-height: 150%;
               }
               .active{
                    background-color: rgb(161, 213, 234);
               }
          }
          .bar {
               width: 100%;
               height: 176px;

          }
     }
}
</style>