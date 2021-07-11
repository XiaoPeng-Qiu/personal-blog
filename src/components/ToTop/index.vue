<template>
  <div class="to-top-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(item) {
        if(!item){
            this.show = false;
            return;
        }
      if (item.scrollTop >= 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    //回到顶部
    handleClick(){
        this.$bus.$emit("setMainScroll",0);
    }
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.to-top-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>