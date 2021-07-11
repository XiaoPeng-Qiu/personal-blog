<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComponent v-if="!isLoading" />
    </div>
    <template #right>
      <div class="list" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComponent from "./components/BlogComponent.vue";
import mainScroll from "@/mixins/mainScroll"
export default {
  mixins: [fetchData(null),mainScroll('mainContainer')],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComponent,
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}
.list {
  width: 300px;
  position: relative;
  height: 100%;
  overflow-y: auto;
}
</style>