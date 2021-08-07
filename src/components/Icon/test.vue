<template>
  <div id="app">
    <h1>Icon组件测试</h1>
    <div class="content">
      <div class="iCon" v-for="item in types" :key="item">
        <Icon :iconType="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  data() {
    return {
      types,
    };
  },
  components: {
    Icon,
  },
  computed: {
    getTypes() {
      return types;
    },
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
.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content .iCon{
    margin: 1em;
  text-align: center;
}
</style>
