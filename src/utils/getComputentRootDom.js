/**
* 获取某个组件渲染的根元素
*
*
*/
import Vue from 'vue'

export default function (comp, props) {
  const vm = new Vue({
    render: h => h(comp, { props })
  })
  vm.$mount();
  return vm.$el;
}