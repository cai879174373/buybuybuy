import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)

import './assets/statics/site/css/style.css'


import index from './components/index.vue'
import cart from './components/cart.vue'
// 规则
let routes=[
  {path:'/index',component:index},
  {path:'/',component:index},
  {path:'/cart',component:cart},
]
let router =new VueRouter({
  routes
})
new Vue({
  el:'#app',
  render: h => h(App),
  router
})
