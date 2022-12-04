<template>
  <div class="home-container" @wheel="handleWheel" v-loading = "loading">
    <ul
      class="Carousel-img"
      ref="container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="items in data" :key="items.id">
        <Carouselitem :imageLoader="items" />
      </li>
    </ul>
    <!-- 箭头图标 -->
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 指示器 -->
    <div class="indicator">
      <ul>
        <li
          v-for="(items, i) in data"
          :key="items.id"
          :class="{ active: index === i }"
          @click="switchTo(i)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem.vue";
// import { getBanners } from "@/api/banner";
import Icon from "@/components/Icon";
// import fetchData from "@/mixins/fetchData"
import { mapState } from "vuex"
export default {
  // mixins:[fetchData([])],
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    };
  },
  created(){
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    switchTo(num) {
      if (num < 0) {
        num = 0;
      } else if (num > this.data.length - 1) {
        num = this.data.length - 1;
      }
      if (this.index === num) {
        return;
      }
      this.index = num;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }

      if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.index++;
        this.switching = true;
      } else if (e.deltaY < 0 && this.index > 0) {
        this.index--;
        this.switching = true;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    // async fetchData(){
    //  return await getBanners();
    // }
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner",["loading","data"])
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
@import url(~@/styles/var.less);
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    transition: 0.8s;
  }
  .Carousel-img {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    transform: translateX(-50%);
    cursor: pointer;
    font-size: 30px;
    color: @gray;
    @gap: 15px;
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
  }
  .indicator {
    .self-center();
    left: auto;
    right: 20px;
    transform: translateY(-50%);
    li {
      width: 8px;
      height: 8px;
      margin-bottom: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
      cursor: pointer;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}
@speed: 10px;
@keyframes jump-up {
  0% {
    transform: translate(-50%, @speed);
  }
  50% {
    transform: translate(-50%, -@speed);
  }
  100% {
    transform: translate(-50%, @speed);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(-50%, -@speed);
  }
  50% {
    transform: translate(-50%, @speed);
  }
  100% {
    transform: translate(-50%, -@speed);
  }
}
</style>