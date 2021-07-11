<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" alt="" v-if="!everthingDone"/>
    <img
      @load="handleLoad"
      class="origin"
      :src="src"
      alt=""
      :style="{ opacity: OriginOpacity, transition:`${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    //原始图片的路径
    src: {
      type: String,
      required: true,
    },
    //原始图片加载完成前的占位图片
    placeholder: {
      type: String,
      required: true,
    },
    //原始图片加载完成后，切换到原始图经过的毫秒数
    duration: {
      type: Number,
      default:2000,
    },
  },
  data() {
    return {
        //是否加载完毕
      originLoaded: false,
      //是否全部运行完毕
      everthingDone:false
    };
  },
  computed: {
    OriginOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
          this.everthingDone = true;
          this.$emit("load")
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(1vw);
  }
}
</style>