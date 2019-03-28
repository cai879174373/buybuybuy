import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router.js'

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




new Vue({
  el:'#app',
  render: h => h(App),
  router
})
