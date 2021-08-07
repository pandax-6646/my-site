<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="main">中间主区域，宽度占满剩余空间</div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import "@/assets/css/globalBase.less";
import Layout from "./";

export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  margin: 50px auto;
  height: 600px;
  width: 60%;
  // white-space: nowrap;
  border: 2px solid black;
  .left {
    width: 200px;
    height: 100%;
    background: lightpink;
  }
  .main {
    width: 100%;
    height: 100%;
    background: lightgrey;
  }
  .right {
    width: 150px;
    height: 100%;
    background: lightcyan;
  }
}
</style>