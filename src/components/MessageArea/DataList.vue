<template>
  <div class="data-list-container">
    <ul class="text-area">
      <li v-for="item in list" :key="item.id">
        <div class="avatar">
          <Avatar
            :url="item.avatar"
            :size="44"
          />
        </div>
        <div class="main">
          <div class="title">
            <span>{{item.nickname}}</span>
            <span class="title-right">{{item.createDate}}</span>
          </div>
          <div class="content">
            {{item.content}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  props: {
      list: {
          type: Array,
          default: ()=>[]
      }
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.data-list-container {
//   padding: 10px;
  box-sizing: border-box;
  ul {
    width: 700px;
    padding: 0;
    margin: 0;
  }
  li {
    width: 100%;
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid lighten(@gray, 18%);
  }
}
.text-area {
  .main {
    margin-left: 10px;
    width: 100%;
    .title {
      color: @warn;
      font-size: 1em;
      margin-bottom: 10px;
      position: relative;
      flex: 1 1 auto;
      .title-right {
        font-size: 12px;
        color: @gray;
        position: absolute;
        right: 10px;
        top: 5px;
      }
    }
    .content {
      font-size: 14px;
    }
  }
}
</style>