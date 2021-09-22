<template>
  <div class="bolg-datail-contailer" v-loading="isLoading">
    <Layout>
      <div class="main-container">
        <BlogDetail :blog="data" v-if="data" />
      </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogTOC :toc="data.toc" v-if="data" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/getRemoteData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}
.right-container {
  font-weight: bold;
  font-size: 1em;
  height: 100vh;
  width: 300px;
  overflow-y: auto;
  padding-left: 2em;
  box-sizing: border-box;
}
</style>