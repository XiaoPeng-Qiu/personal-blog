import Vuex from "vuex"
import Vue from "vue"
import banner from "./banner"
import settings from "./setting"
import about from "./about";
import project from "./project";
// 使用vuex插件
Vue.use(Vuex)
export default new Vuex.Store ({
    modules: {
        banner,
        settings,
        about,
        project
    }, 
    strict: true  // 严格模式 开启后只能通过 mutations 来提交
})