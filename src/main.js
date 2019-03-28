import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


import axios from 'axios'
Vue.prototype.$axios=axios

axios.defaults.baseURL='http://111.230.232.110:8899'

import './assets/statics/site/css/style.css'

import moment from 'moment'
Vue.filter('globalFormatTime',function(value,tempform){
  if(tempform){
    return moment(value).format(tempform)
  }else{
    return moment(value).format('YYYY-MM-DD')
  }
})


import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
import userContainer from './components/userContainer.vue'
import userIndex from './components/userIndex.vue'
import userOrder from './components/userOrder.vue'
import userDetail from './components/userDetail.vue'
// 规则
let routes=[
  {path:'/index',component:index},
  {path:'/',component:index},
  {path:'/cart',component:cart},
  {path:'/detail/:id',component:detail},
  {path:'/user',component:userContainer,
  children:[
    {path:'Index',component:userIndex},
    {path:'Order',component:userOrder},
    {path:'Detail',component:userDetail},
    
  ]

},
]
let router =new VueRouter({
  routes
})
new Vue({
  el:'#app',
  render: h => h(App),
  router
})
