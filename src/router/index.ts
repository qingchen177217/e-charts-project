import {createRouter,RouteRecordRaw,createWebHistory}from 'vue-router'

const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        component:()=>import ('../components/Prefectures.vue')
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router

