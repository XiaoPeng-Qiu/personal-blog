<template>
  <div class="page-container" v-if="total > 1">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)">&lt;&lt;</a>
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)"
      >&lt;</a
    >
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      @click="handleClick(n)"
      >{{ n }}
    </a>
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(current + 1)"
      >&gt;</a
    >
    <a
      @click="handleClick((pageNumber))"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    //总数据量
    total: {
      type: Number,
      default: 0,
    },
    //页容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    //拿到页码最小值
    visibleMin() {
      let min = Math.floor(this.current - this.visibleNumber / 2);
      if (min < 1) {
        return 1;
      }
      return min;
    },
    //拿到页码最大值
    visibleMax() {
      let max = this.visibleMin + (this.visibleNumber - 1);
      if (max > this.pageNumber) {
        return this.pageNumber;
      }
      return max;
    },
    numbers() {
      let visibleArr = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        visibleArr.push(i);
      }
      return visibleArr;
    },
  },
  methods: {
    handleClick(newPage) {
      // console.log(newPage);
      //抛出一个事件
      if(newPage <= 1){
        newPage = 1;
      }
      if(newPage > this.pageNumber){
        newPage = this.pageNumber;
      }
      if (newPage == this.current){
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.page-container {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  font-size: 16px;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>