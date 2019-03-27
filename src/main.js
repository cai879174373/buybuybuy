import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import style from './assets/statics/site/css/style.css'
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
