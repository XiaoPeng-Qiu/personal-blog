<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    @load="handleLoad"/>
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
      handleLoad(){
          console.log("事件加载完毕")
      }
  }
};
</script>

<style lang="less" scoped>
    .test-container{
        width: 800px;
        height: 500px;
        margin: 0 auto;
    }
</style>