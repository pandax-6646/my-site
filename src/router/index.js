import Vue from "vue";
import vueRouter from "vue-router";
import routes from "./routers";

Vue.use(vueRouter);

export default new vueRouter({
  // 配置路由相关
  routes,
  mode: "history",

  // 定义当前路径与路由模糊匹配的样式类名
  linkActiveClass: "active",

  // 取消当前路径与路由精确的样式类名
  linkExactActiveClass: "",
});
