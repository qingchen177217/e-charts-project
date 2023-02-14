<template>
     <header>智慧公司可视化平台</header>
     <div id="main">
          <aside id="left">
                <money class="money"></money>
                <goat></goat>
          </aside>
          <div id="center">
                <china></china>
          </div>
          <aside id="right">
               <guest class="guest"></guest>
                <see></see>
          </aside>
     </div>
     <footer id="footer">
             <boss></boss>
     </footer>
</template>

<script setup lang='ts'>
import boss from './boss.vue'
import goat from './goat.vue'
import money from './money.vue'
import china from './china.vue'
import see from './see.vue'
import guest from './guest.vue'
</script>

<style lang='less' scoped>
header {
     width: 100vw;
     height: 40px;
     line-height: 40px;
     text-align: center;
     color: #b9f9fa;
     font-size: 30px;
     letter-spacing: 5px;
     margin-top: 7px;
}
#main{
     flex:1;
     display:flex;
     height: 100%;
     padding-right:20px;
     overflow:hidden;
     #left{
          width: 25%;
          height:inherit;
          .money{
               margin-bottom:5px;
          }
         
     }
     #center{
         flex:1;
         height:inherit;
         margin:0 10px;
     }
     #right{
          width:25%;
          height:inherit;
          .guest{
               margin-bottom:5px;
          }
     }
}
#footer{
     position:fixed;
     bottom:0;
     height: 180px;
     width: 99%;
     margin-bottom:5px;
}
</style>