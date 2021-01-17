// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Axios from 'Axios'

import Goods from './components/Goods/Goods';
import Ratings from './components/Ratings/Ratings';
import Seller from './components/Seller/Seller';


Vue.config.productionTip = false

Vue.use(VueRouter);

// 如果要在其他组件中使用axios命令，则需要改写为Vue原型属性
Vue.prototype.$axios = Axios;

const routes=[
  {
    path: '/',
    redirect:'/goods'
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/seller',
    component: Seller
  }
];

const router=new VueRouter({
  routes,
// 选中后的类名
  linkActiveClass:'active'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
