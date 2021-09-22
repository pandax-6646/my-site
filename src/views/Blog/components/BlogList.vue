<template>
  <div class="blog-list-container" ref="blog_list" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatTime(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>

    <!-- 分页 -->
    <Pager
      v-if="data.total"
      :currPage="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>
<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/getRemoteData";
import { formatTime } from "@/utils";
import { getBlogs, getBlogTypes } from "@/api/blog";

export default {
  name: "BlogList",
  mixins: [fetchData({})],
  components: {
    Pager,
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
  },

  methods: {
    formatTime,
    async fetchData() {
      return await getBlogs();
    },

    handlePageChange(newPage) {
      const query = {
        limit: this.routeInfo.limit,
        page: newPage,
      };

      // 跳转时有分类
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });

        // 跳转时无分类页码
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    // 监听路由的变化
    async $route() {
      this.$refs.blog_list.scrollTop = 0;
      this.isLoading = true;
      this.data = await this.fetchData();
      // this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 15px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      display: inline;
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
    text-indent: 27px;
  }
}
</style>
