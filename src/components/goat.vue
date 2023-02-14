<template>
     <div class="main">
          <brain>公司车辆使用</brain>
          <div class="system">
               <div class="radar" ref="radar"></div>
               <div class="data">
                    <div class="data-1" v-for="item in date">
                         <header>{{item.title}}</header>
                         <div >{{item.value}}笔</div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const radar = ref<HTMLElement>()

onMounted(() => {
     const mychart = echarts.init(radar.value as HTMLElement)
     let option = {
          tootip:{
              trigger:"item",
              show:true
          },
          radar: {
               indicator: [
                    { name: "电动车"},
                    { name: "小轿车"},
                    { name: "大众"},
                    { name: "马自达"},
                    { name: "汽车"}
               ],
               radius: 50,
               center: ["49%", "50%"],
               splitNumber: 3,
          },
          series: {
               type: "radar",
               color: "#ccc",
               data: [
                    {
                         value: [809, 1680, 480, 860, 100],
                         areaStyle: {
                              color: "yellow"
                         },
                         symbol: "circle",
                         symbolSize: 4,
                         colorBy: "series"
                    }
               ],
               label:{
                    show:true,
                    fontSize:8,
               }

          }
     }
     mychart.setOption(option)
})

let date = [
     { title: '今日订单量', value: 44370 },
     { title: '本周订单量', value: 44370 },
     { title: '本月订单量', value: 44370 },

]

</script>

<style lang='less' scoped>
.main {
     border: 1px solid #d5ffff;
     .system {
          width: 384px;
          height: 200px;
          display: flex;

          .radar {
               width: 234px;
               height: 200px;
          }
          .data {
               flex: 1;
               padding:5px 7px;
               margin-right:8px;
               .data-1 {
                    padding: 4px 6px;
                    margin-top:9px;
                    text-align: center;
                    border:1px solid #d5ffff;
                    color:#8ab091;
                    font-size:16px;
                    header {
                         font-size: 14px;
                         color: #fff;
                         text-align:left;
                    }
               }

          }
     }
}
</style>