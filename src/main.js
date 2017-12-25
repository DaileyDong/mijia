// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './Filters/'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:'../static/images/loading.png',
  attempt:1,
  listenEvents:['scroll','mousewheel']
})

//配置过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
