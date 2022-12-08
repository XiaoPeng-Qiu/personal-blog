<template>
  <div class="project-container" ref="projectContainer">
    <div v-for="item in data" :key="item.id" class="project-item">
      <img v-lazy="item.thumb" class="thumb" alt="" />
      <div class="info">
        <a
          :href="item.url ? item.url : `javascript:alert('该项目没有链接地址')`"
          :target="item.url ? '_blank' : '_self'"
          ><h2>{{ item.name }}</h2>
        </a>
        <a class="project-github" v-if="item.github" target="_blank" :href="item.github">github地址</a>
        <p v-for="(des, index) in item.description" :key="index">
          {{ des }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";
export default {
  mixins: [mainScroll("projectContainer")],
  computed: {
    ...mapState("project", ["data", "loading"]),
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
}

.thumb {
  width: 200px;
  height: 150px;
  margin-right: 20px;
  border-radius: 5px;
}

.info {
  height: 150px;
  h2 {
    width: 750px;
    margin-top: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}

.project-github{
  color: @primary;
  font-size: 14px;
}
</style>
