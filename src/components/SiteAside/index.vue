<template>
  <div class="site-aside">
    <Avatar :url="require('@/assets/img/user.jpg')" :size="100" />
    <h2 class="title">PandaX-6646</h2>
    <Menu />
    <Contact />

    <p class="footer">黑ICP备17035634号</p>
  </div>
</template>

<script>
import Avatar from "./Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped>
@import "~@/assets/css/varColor.less";
.site-aside {
  align-content: space-around;
  height: 100%;
  width: 100%;
  padding: 20px 0;
  background-color: #202020;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>