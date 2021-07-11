<template>
  <div class="blog-list-container" v-loading="isLoading" ref="scrollContainer">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="img" v-if="item.thumb">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <div class="title">
            <h1>
              <router-link
                :to="{
                  name: 'BlogDetail',
                  params: {
                    id: item.id,
                  },
                }"
                >{{ item.title }}</router-link
              >
            </h1>
          </div>
          <div class="view-data">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'categoryId',
                params: {
                  categoryId: item.category.id,
                },
              }"
            >
              {{ item.category.name }}
            </router-link>
          </div>
          <div class="description">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <!-- 分页 -->
    <div class="page">
      <Page
        v-if="data.total"
        :current="routeInfo.page"
        :total="data.total"
        :limit="routeInfo.limit"
        :visibleNumber="10"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
import Page from "@/components/Page";
import fetchData from "@/mixins/fetchData";
import { getBlogs } from "@/api/blog";
import mainScroll from "@/mixins/mainScroll"

export default {
  //引入组件混入
  mixins: [fetchData({}),mainScroll('scrollContainer')],
  //监控$route是否发生变化
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.scrollContainer.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
  components: {
    Page,
  },
  methods: {
    async fetchData() {
      //获取到数据
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    //点击分页路由发生的变化
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      //判断是否有类别
      if (this.routeInfo.categoryId === -1) {
        //控制跳转
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "categoryId",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  computed: {
    //获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.blog-list-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 15px;
    li {
      width: 100%;
      // height: 170px;
      display: flex;
      overflow: hidden;
      padding: 20px 0;
      border-bottom: 1px solid @gray;
    }
  }
  .img {
    height: 170px;
    width: 200px;
    margin-right: 15px;
    flex: 0 0 auto;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      h1 {
        font-size: 21px;
        margin: 10px 0 7px 0;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .view-data {
    color: @gray;
    margin-bottom: 20px;
    font-size: 12px;
    span {
      margin-right: 15px;
    }
  }
  .description {
    width: 100%;
    // height: 80px;
    line-height: 20px;
    overflow: hidden;
    font-size: 14px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .page {
    padding: 10px 0;
  }
}
</style>