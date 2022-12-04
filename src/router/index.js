import VueRouter from "vue-router"
import Vue from 'vue'
import routes from "./router"
import { titleController } from "@/utils"
Vue.use(VueRouter);//使用一个vue插件
const router = new VueRouter({
    routes,//路由匹配规则
    mode: "history" //路由匹配模式
})

router.afterEach((to,from) => {
    if(to.meta.title){
        titleController.setRouteTitle(to.meta.title);
    }
    
})

export default router;