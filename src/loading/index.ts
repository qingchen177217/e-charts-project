import loading from './loading.vue'
import {createVNode,render} from 'vue'

const load=createVNode(loading)
render(load,document.body)

const startLoading=load.component?.exposed?.startLoading

const endLoading=load.component?.exposed?.endLoading

export {startLoading,endLoading}