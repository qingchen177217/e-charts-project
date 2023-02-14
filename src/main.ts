import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import {startLoading,endLoading}from './loading/index'
import brain from './other/brain.vue'//全局组件，每个组件标题

router.beforeEach((to,from,next)=>{
    startLoading()
    next()
})
router.afterEach((to,from)=>{
    endLoading()
})


const app=createApp(App)

app.component('brain',brain)
app.use(router)
app.mount('#app')
