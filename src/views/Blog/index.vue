<template>
  <div class="blog-container">
    <Latout>
      <template #default>
        <BlogList />
      </template>
      <template #right>
        <BlogCategory />
      </template>
    </Latout>
  </div>
</template>

<script>
import BlogList from "./components/BlogList";
import Latout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory"
export default {
  components: {
    BlogList,
    Latout,
    BlogCategory
  },
};
</script>

<style lang="less" scoped>
.blog-container{
  width: 100%;
  height: 100%;
}
</style>