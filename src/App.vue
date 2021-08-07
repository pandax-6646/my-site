<template>
  <div id="app-container">
    <Layout>
      <!-- 左侧区域 -->
      <template #left>
        <div class="site-aside">
          <SiteAside />
        </div>
      </template>

      <!-- 中间区域 -->
      <Router-view />
    </Layout>
  </div>
</template>

<script>
import SiteAside from "./components/SiteAside";
import Layout from "./components/Layout";
export default {
  name: "App",

  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scope lang='less'>
@import "./assets/css/mixin.less";
#app-container {
  .self-fill(fixed);
}
.site-aside {
  height: 100%;
  width: 250px;
}
</style>
