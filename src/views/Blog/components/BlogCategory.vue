<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogTypes } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item){
      if(item.isSelect){
        return
      }
      const query={
        page:1,
        limit: this.limit
      }
      if(item.id === -1){
        this.$router.push({
          name:"Blog",
          query
        })
      }else{
        this.$router.push({
          name:"categoryId",
          query,
          params:{
            categoryId: item.id
          }
        })
      }

    }
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => {
       return a + b.articleCount;
      }, 0);
      const result = [
        {
          name: "全部分类",
          articleCount: totalArticleCount,
          id: -1,
        },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: it.articleCount
      }));
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  h2 {
    letter-spacing: 2px;
    font-weight: bold;
  }
}
</style>