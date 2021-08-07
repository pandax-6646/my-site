<template>
  <div class="empty-container">
    <Icon iconType="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon/";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import '~@/assets/css/mixin.less';
@import '~@/assets/css/varColor.less';
.empty-container {
  // 水平垂直居中
  .self-center();
  color: @gray;
}

.icon-container{
  font-size: 72px;
}

p{
  text-align: center;
}
</style>