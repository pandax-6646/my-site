<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightHierarchyList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightHierarchyList from "./RightHierarchyList";
import { getBlogTypes } from "@/api/blog";
import fetchData from "@/mixins/getRemoteData";
export default {
  mixins: [fetchData([])],
  components: {
    RightHierarchyList,
  },
  computed: {
    // 获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },

    // 给请求的数据添加字段
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];

      return result.map((it) => {
        return {
          ...it,
          isSelect: it.id === this.routeInfo.categoryId,
          aside: it.articleCount,
        };
      });
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = {
        limit: this.routeInfo.limit,
        page: this.routeInfo.page,
      };

      // 全部
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query: query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  position: relative;
  height: 100%;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0px;
  }
}
</style>