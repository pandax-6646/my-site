<template>
  <div id="app">
    <h1>Avatar组件测试</h1>
    <Avatar
      url="https://camo.githubusercontent.com/935a3a11f4b3e83ed808dccb93443a5e2fc23a817f2d0a0699bc656ef02fbfda/687474703a2f2f6d6472732e7975616e6a696e2e746563682f696d672f32303230313133303135333832312e706e67"
      :size="300"/>
  </div>
</template>

<script>
import Avatar from "./";
export default {
  data() {
    return {};
  },
  components: {
    Avatar,
  },
};
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
