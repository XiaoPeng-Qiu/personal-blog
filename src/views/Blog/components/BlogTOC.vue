<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";
export default {
  data() {
    return {
      activeAnchor: "",
    };
  },
  props: {
    toc: {
      type: Array,
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 200);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  components: {
    RightList,
  },
  computed: {
    //根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const select = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: select(t.children),
        }));
      };
      return select(this.toc);
    },
    //根据toc得到它们对应的元素数组
    doms() {
      const doms = [];
      const dom = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            dom(t.children);
          }
        }
      };
      dom(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置activeAnchor的正确位置
    setSelect(scrollDom) {
      if(!scrollDom){
        return;
      }
      //清空之前的选中状态，重新赋值
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        //得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= 200) {
          //在规定范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > 200) {
          //在规定的下方
          return;
        } else {
          //在规定的上方
          this.activeAnchor = dom.id; //假设自己是激活状态
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}
</style>