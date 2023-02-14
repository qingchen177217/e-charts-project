<template>
    <div class="wrap">
        <div class="line" ref="line"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

const line = ref<HTMLElement>()
let  timer = ref<any>()
let  speed = ref(0)

const startLoading = () => {
     timer.value = window.requestAnimationFrame(function fn() {
        let dom = line.value as HTMLElement;
        if (speed.value < 90) {
            speed.value += 1
            dom.style.width=speed.value+'%'
            window.requestAnimationFrame(fn)
        }else{
           speed.value=1;
           window.cancelAnimationFrame(timer.value)
        }
    })
}
const endLoading=()=>{
    timer.value=window.requestAnimationFrame(function fn(){
        let dom =line.value as HTMLElement;
        setTimeout(()=>{
             window.requestAnimationFrame(()=>{
                dom.style.width='100%';
                speed.value=1;
             })
        },1500)
    })
}
defineExpose({startLoading,endLoading})
</script>

<style lang='less'>
.wrap {
    position:fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 2px;
    .line {
        width: 0;
        height: inherit;
        background-color: deepskyblue;
    }
}
</style>
