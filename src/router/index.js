import VueRouter from "vue-router"
import Vue from 'vue'
import routes from "./router"
Vue.use(VueRouter);//使用一个vue插件
const router = new VueRouter({
    routes,//路由匹配规则
    mode: "history" //路由匹配模式
})
export default router;