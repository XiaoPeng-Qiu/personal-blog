<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const arr = {
    home:"icon-Homehomepagemenu",
    success:"icon-xinxi",
    error:"icon-cuowu",
    close:"icon-guanbi",
    warn:"icon-jinggao",
    info:"icon-xinxi",
    blog:"icon-blog",
    code:"icon-code",
    about:"icon-set_about_hov",
    weixin:"icon-weixin",
    mail:"icon-email",
    github:"icon-GitHub",
    qq:"icon-qq",
    arrowUp:"icon-shangjiantou",
    arrowDown:"icon-xiala",
    empty:"icon-empty",
    chat:"icon-liuyan"
}
export var arrKey = Object.keys(arr);
export default {
    props :{
        type: {
            type:String,
            required: true
        }
    },
    computed: {
        //图标类样式
        fontClass(){
            return arr[this.type]
        }
    }
};
</script>

<style scoped>
@import url(//at.alicdn.com/t/font_2594843_usardi1of5l.css);
.icon-container{
    font-size: inherit;
}
</style>