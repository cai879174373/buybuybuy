import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)

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

  export default router;