<template>
     <div class="change">
          <p>公司员工变化</p>
          <div class="rect" ref="rect"></div>
     </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const rect = ref<HTMLElement>()

onMounted(() => {
     const mychart = echarts.init(rect.value as HTMLElement)

     let option = {
          tooltip: {
               trigger: 'axis',
               axisPointer: {
                    type: 'shadow'
               }
          },
          grid: {
               top: 30,
               left: 45,
               bottom: 20
          },
          xAxis: {
               type: "category",
               data: ['财务部', '行政部', '研发部', '采购部', '会计部']
               ,axisLine: {
                    lineStyle: {
                         color: "skyblue"
                    }
               }
          },
          yAxis: [{
               type: "value",
               name: "单位:飘",
               min: 0,
               max: 850,
               interval: 170,
               axisLabel: {
                    formatter: '{value} '
               },
               axisLine: {
                    lineStyle: {
                         color: "skyblue"
                    }
               }
          },
          {
               type: "value",
               name: "单位：%",
               axisLabel: {
                    formatter: "{value}%"
               },
               min: 0,
               max: 100,
               interval: 20,
               axisLine: {
                    lineStyle: {
                         color: "skyblue"
                    }
               }
          }
          ],
          series: [
               {
                    name:"男员工",
                    type: "bar",
                    data: [580, 800, 490, 240, 240]
               },
               {
                    name:"女员工",
                    type: "bar",
                    data: [400, 550, 340, 200, 200]

               },
               {
                    name: "人员变动",
                    type: "line",
                    yAxisIndex: 1,
                    data: [60, 85, 80, 50, 35]
               }
          ]

     }
     mychart.setOption(option)
})

</script>

<style lang='less' scoped>
.change {
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

     .rect {
          width: 100%;
          height: 143px;
     }
}
</style>