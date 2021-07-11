<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners"/>
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list"/>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  props: {
    //列表标题
    title: {
      type: String,
      default: "",
    },
    //列表副标题
    subTitle: {
      type: String,
      default: "",
    },
    //列表数据
    list: {
      type: Array,
      default: () => [],
    },
    //列表是否正在加载中
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style lang="less" scoped>
.message-area-container {
  padding: 10px;
  .loading{
      position: relative;
      margin-top: 30px;
  }
}
</style>