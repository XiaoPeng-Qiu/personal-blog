<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p class="empty-p">{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
@import url(~@/styles/mixin.less);
    .empty-container{
      .self-center();
        color: @gray;
        text-align: center;
        width: 400px;
    }
    .icon-container{
        color: inherit;
        font-size: 100px;
    }
    .empty-p{
        font-size: 30px;
        margin: 10px;
    }
</style>