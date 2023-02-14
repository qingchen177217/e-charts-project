<template>
    <header class="header"><slot></slot></header>
</template>

<script setup lang='ts'>


</script>

<style lang='less' scoped>
.header {
          color: #d5ffff;
          border-bottom: 1px solid #d5ffff;
          font-size: 20px;
          height: 40px;
          line-height: 40px;
          padding-left: 30px;
          position: relative;
          &::before {
               content: "";
               position: absolute;
               left: 10px;
               top: 15px;
               display: block;
               height: 10px;
               width: 10px;
               border-radius: 50%;
               background-color: #43b2e5;
          }
     }
</style>