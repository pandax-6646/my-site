<template>
  <div id="app">
    <h1>Pager组件测试</h1>
    <Pager
      :currPage="currPage"
      :total="total"
      :limit="limit"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  data() {
    return {
      currPage: 1,
      total: 504,
      limit: 10,
    };
  },
  components: {
    Pager,
  },
  methods: {
    pageChange(newPage) {
      this.currPage = newPage;
      console.log("加载当前第 " + newPage + " 页的数据");
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
.iconfont {
  font-size: 25px;
  color: #f40;
}
</style>
