<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="asside">
      <span>日期：{{ blog.createDate }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#comment-Number-container">评论：{{ blog.commentNumber }}</a>
      <router-link
        :to="{
          name: 'categoryId',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</router-link
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.blog-detail-container {
  .asside {
    font-size: 12px;
    color: @gray;
    margin-bottom: 4em;
    span,
    a {
      margin-right: 15px;
    }
  }
}
</style>