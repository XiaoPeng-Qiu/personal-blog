<template>
<div class="test-container">
    <Contact />
</div>
</template>

<script>
import Contact from "./"
export default {
    components: {
        Contact
    }
}
</script>
<style lang="less" scoped>
    .test-container{
        width: 250px;
        height: 600px;
        background: #000;
        overflow: hidden;
    }
</style>