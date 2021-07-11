<template>
<div class="test-container">
  <Empty text="无数据"/>
</div>
</template>

<script>
import Empty from "./";
export default {
    components:{
        Empty
    }
}
</script>

<style lang="less" scoped>
.test-container{
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>