<template>
  <nav class="menu-container">
    <router-link
      v-for="item in items"
      :to="{ name: item.name }"
      :key="item.link"
      :exact="item.exact"
      exact-active-class=""
      active-class="selected"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.menu-container {
  color: @gray;
  padding: 24px 0px;
  a {
    display: flex;
    padding: 0 50px;
    align-items: center;
    height: 45px;
    font-size: 14px;
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 1%);
    }
    .icon-container {
      width: 24px;
      display: block;
      font-size: 17px;
    }
  }
}
</style>