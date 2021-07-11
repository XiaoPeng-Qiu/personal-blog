import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from './router'
import showMessage from './utils/showMessage'
import "./api/banner"
import "./mock"
//引入指令配置
import loading from "./directives/loading"
import lazy from './directives/lazy'
//注册全局事件总线
import "./eventBus";

Vue.prototype.$showMessage = showMessage;

//注册全局指令
Vue.directive("loading", loading);
Vue.directive("lazy",lazy);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//测试代码
