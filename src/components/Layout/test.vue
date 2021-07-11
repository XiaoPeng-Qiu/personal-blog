<template>
  <div class="test-container">
      <layout>
          <template #left>
              <div class="left">
                  左侧
              </div>
          </template>
          <template #default>
              <div class="main">
                  中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容
              </div>
          </template>
          <template #right>
              <div class="right">
                  右侧
              </div>
          </template>
      </layout>
  </div>
</template>

<script>
import Layout from "./"
export default {
    components: {
        Layout
    }
}
</script>

<style lang="less" scoped>
    .test-container{
        width: 60%;
        height: 600px;
        white-space: nowrap;
    }
    .left{
        width: 250px;
        height: 100%;
        background: goldenrod;
    }
    .main{
        width: 100%;
        height: 100%;
        background: green;  
    }
    .right{
        width: 200px;
        height: 100%;
        background:hotpink;
    }
</style>