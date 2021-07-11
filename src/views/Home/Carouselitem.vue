<template>
  <div
    class="Carouselitem-container"
    ref="container"
    @mousemove="coordinate"
    @mouseleave="leaveCenter"
  >
    <div class="imageLoader-img" :style="imagePosition" ref="inner">
      <ImageLoader
        :src="imageLoader.bigImg"
        :placeholder="imageLoader.midImg"
        @load="this.showWords"
      />
    </div>
    <div class="title" ref="title">
      {{ imageLoader.title }}
    </div>
    <div class="desc" ref="description">
      {{ imageLoader.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["imageLoader"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层div大小
      innerSize: null, //图片div大小
      mouseX: 0, //鼠标x轴坐标
      mouseY: 0, //鼠标Y轴坐标
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.description.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      this.$refs.description.clientWidth;
      this.$refs.description.style.transition = "2s 1s";
      this.$refs.description.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight,
      };
    },
    coordinate(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    leaveCenter() {
      this.mouseX = this.containerSize.width / 2;
      this.mouseY = this.containerSize.height / 2;
    },
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
.Carouselitem-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.imageLoader-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  left: 30px;
  color: #fff;
  letter-spacing: 3px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title {
  top: calc(50% - 30px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 10%);
}
</style>