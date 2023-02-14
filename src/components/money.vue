<template>
     <div class="money">
          <brain>今日汇率</brain>
          <div class="main">
               <div class="cate">
                    <div v-for="item in data.category">
                         {{item}}
                    </div>
               </div>

               <div class="content">
                    <div v-for="item in data.value" class="content-1">
                         <div v-for="data in item" class="content-1-1">{{data}}</div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
let data = {
     category: ['货币种类', '金额', '金额', '汇率'],
     value: [
          ['支出', '1000万', '897万', '下降11%'],
          ['购买', '1000万', '1020万', '上涨20%'],
          ['股票', '1000万', '897万', '下降11%'],
          ['基金', '1000万', '897万', '上涨20%'],
          ['保险', '1000万', '897万', '下降11%'],
     ]
}


</script>

<style lang='less' scoped>
.money {
     border: 1px solid #d5ffff;
     display: flex;
     flex-direction: column;
     .main {
          display: grid;
          grid-template-columns: 1fr;
          color: #fff;
          font-size: 14px;
          padding: 15px;
          font-weight: 100;

          .cate {
               display: grid;
               grid-template-columns: 20% 20% 20% 20%;
               column-gap: 7%;
               text-align: left;
               border-bottom: 2px solid #d5ffff;
               margin-bottom: 5px;
               padding: 0 5px 9px 5px;
          }

          .content {
               .content-1 {
                    border-bottom: 0.5px solid rgb(207, 248, 248, 0.4);
                    display: grid;
                    grid-template-columns: 20% 20% 20% 20%;
                    column-gap: 7%;
                    text-align: left;
                    margin: 5px 0;
                    padding: 0 5px 5px 5px;
                    .content-1-1:nth-child(2){
                         color:#86ada9;
                         font-weight:700;
                    }
                    .content-1-1:nth-child(3){
                         color:#62a2d7;
                    }
               }
          }

     }

}
</style>