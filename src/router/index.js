import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/components/Index/Index"
import List from "@/components/Index/List"
import Details from "@/components/Index/Details"
import Login from "@/components/Index/Login"
import PersInfo from "@/components/Index/PersInfo"
import Search from "@/components/Index/Search"
import Reg from "@/components/Index/Reg";


// 引入http请求相关类库
import VueResource from 'vue-resource'


Vue.config.productionTip = false
//使用http请求相关类库
Vue.use(VueResource)


Vue.use(Router)

// 确保post请求不会被转换为 options 请求
Vue.http.options.emulateJSON = true

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/persInfo',
      name: 'PersInfo',
      component: PersInfo
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    }
    
  ]
})
