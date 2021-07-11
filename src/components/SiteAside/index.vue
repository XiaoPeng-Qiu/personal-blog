<template>
    <div class="site-aside-container">
        <div class="avatar">
            <Avatar url="https://avatars.githubusercontent.com/u/81463076?v=4"/>
        </div>
        <h1 class="title">打工人打工魂</h1>
        <Menu />
        <Contact />
        <p class="footer">备案号：974829@949284</p>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";

export default {
    components: {
        Avatar,
        Contact,
        Menu
    }
}
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.site-aside-container{
    width: 100%;
    height: 100%;
    background: @dark;
    overflow-x: hidden;
    overflow-y: auto;
}
    .avatar{
        display: flex;
        justify-content: center;
        padding: 30px 0 0 0;
    }
    .title{
        font-size: 1.5em;
        text-align: center;
        margin-top: 20px;
        color: #fff;
    }
    .footer{
        text-align: center;
        font-size: 12px;
        color: @words;
    }
</style>