<template>
  <div class="bolg-datail-main-contailer">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatTime(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#">评论: {{ blog.commentNumber }}</a>
      <a href="#">{{ blog.category && blog.category.name }}</a>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"/>
    <BlogComment/>
  </div>
</template>

<script>
import formatTime from '@/utils/formatTime';
import "highlight.js/styles/github.css";
import BlogComment from "./BlogComment";

export default {
  components: {BlogComment},
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatTime,
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/markdown.css";
@import "~@/assets/css/varColor.less";

.aside {
  font-size: 12px;
  color: @gray;
  margin-bottom: 30px;

  span,
  a {
    margin-right: 10px;
  }
}
</style>