import "./mock"     //导入moke数据

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import toast from './utils/Toast'

import vLoading from "./directive/loading"

Vue.prototype.$toast = toast;       // 全局使用弹窗组件


// 引入全局基本样式
import './assets/css/globalBase.less'

// 注册全局的自定义组件
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')




// 测试mock数据接口
// import * as blogApi from "./api/blog"


// blogApi.getBlogTypes().then((res) => {
//   console.log("博客分类的数据", res);
// })

// blogApi.getBlogs(2, 20, 3).then( (res) => {
//   console.log("分页博客的数据", res)
// })