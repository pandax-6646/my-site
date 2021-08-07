<template>
  <div id="app">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/assets/css/globalBase.less";
export default {
  name: "test",

  components: {
    Menu,
  },
};
</script>

<style scope>
#app {
  height: 600px;
  width: 400px;
  border: 1px solid black;
  background: #000;
  margin: 0 auto;
}
</style>
