import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import iView from "@/components/index"
import From from "@/components/from"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/from',
      name: 'From',
      component: From
    },
    {
      path: '/index',
      name: 'iView',
      component: iView
    }
  ]
})
