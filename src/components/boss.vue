<template>
     <div class="boss">
           <div class="sex">
                <sex>   </sex>
           </div>
           <div class="change">
                <change></change>
           </div>
           <div class="goods">
               <goods></goods>
           </div>
           <div class="data">
                  <center></center>
           </div>
     </div>
</template>

<script setup lang='ts'>
import sex from './boss/sex.vue';
import change from './boss/change.vue'
import center from './boss/center.vue'
import goods from './boss/goods.vue'
</script>

<style lang='less' scoped>
   .boss{
      border:1px solid #d5ffff;
     display:flex;
     .sex{
        flex:1;
     }
     .change{
        flex:1;
     }
     .data{
        flex:1
     }
     .goods{
        flex:1;
     }
   }
</style>