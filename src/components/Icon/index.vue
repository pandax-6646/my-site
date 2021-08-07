<template>
  <!-- 小图标组件 -->
  <i class="iconfont icon-container" :class="getFontClass"></i>
</template>

<script>
// 对样式图标的类名的封装
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};

// 导出所有样式进行测试
export const types = Object.keys(classMap);

export default {
  props: {
    iconType: {
      type: String,
      required: true,
    },
  },
  computed: {
    getFontClass() {
      return classMap[this.iconType];
    },
  },
};
</script>

<style scope>
/* 从本地加载图标 */
@import "~@/assets/css/frontIcon.css";

.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>