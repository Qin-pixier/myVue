import Vue from 'vue'
import App from './App.vue'
// import "./plugins/element"
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import service from './service'
import router from './router/index'
import VueRouter from "vue-router";
//全局引用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.use(ElementUI)
Vue.prototype.service = service // 挂载到原型，可以全局使用
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// 
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('username')) {
    if (to.path !== '/login') next('/login')
  } else {
    next()
  }next()
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
