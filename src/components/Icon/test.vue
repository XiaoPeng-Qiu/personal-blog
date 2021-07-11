<template>
  <div class="container">
    <div class="item" v-for="(n, i) in arrKey" :key="i">
      <Icon :type="n"/>
      <label>{{ n }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { arrKey } from "./index.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      arrKey,
    };
  },
};
</script>

<style lang="less" scoped>
    .container{
        width: 600px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .item{
            margin: 10px;
            text-align: center;
        }
    .icon-container{
        display: block;
        font-size: 40px;
    }
</style>