import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './assets/statics/site/css/style.css'


import index from './components/index.vue'

let routes=[
  {path:'/index',component:index},
  {path:'/',component:index},
]
let router =new VueRouter({
  routes
})
new Vue({
  el:'#app',
  render: h => h(App),
  router
})
