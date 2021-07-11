<template>
  <div class="test-container">
      <Menu />
  </div>
</template>

<script>
import Menu from "./"
export default {
    components: {
        Menu
    }
}
</script>

<style lang="less" scoped>
.test-container{
    width: 250px;
    height: 500px;
    background: #000;
}
</style>