<template>
  <div class="blog-component-container">
    <MessageArea
      title="列表评论"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComment, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({})],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComment(this.page, this.limit, this.$route.params.id);
    },
    async handleSubmit(item, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...item,
      });
      callback("提交成功");
      this.data.rows.unshift(resp);
      this.data.total++;
    },
    //加载下一页
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      const resp = await this.fetchData();
      this.page++;
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handleScroll(item) {
      if (this.isLoading || !item) {
        return;
      }
      const range = 100;
      const scrollHeight = Math.abs(
        item.scrollTop + item.clientHeight - item.scrollHeight
      );
      if (scrollHeight < range) {
        this.fetchMore();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-component-container {
  margin-top: 100px;
}
</style>