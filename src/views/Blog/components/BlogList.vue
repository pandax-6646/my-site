<template>
  <div class="blog-list-container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="#">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ formatTime(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <a href="/article/cate/8" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>

    <!-- 分页 -->
    <Pager :currPage="1" :total="data.total" :limit="10" />
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
  methods: {
    formatTime,
    async fetchData() {
      return await getBlogs();
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
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid black;
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
