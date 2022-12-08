import "nprogress/nprogress.css";
import { start, done,configure } from "nprogress";//进度条

configure({
  trickleSpeed: 20, //加载速度
  showSpinner: false, // 右上角是否显示圆圈加载
})

function delay(duration){
  return new Promise((resolve)=> {
    setTimeout(()=>{
      resolve()
    },duration)
  })
}

function getPageComponent(path){
  return async () => {
    start();
    if(process.env.NODE_ENV === "development"){
      await delay(1000);
    }
    const comp = await path();
    done();
    return comp
  }
}

export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(()=>import(/*home*/"@/views/Home")),
    title: "个人博客",
    meta: {
      title: "首页",
    },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => import("@/views/About")),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
      title: "文章",
    },
  },
  {
    name: "categoryId",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
      title: "分类",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() => import("@/views/Blog/Detail")),
    meta: {
      title: "详情",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() => import("@/views/Message")),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() => import("@/views/Project")),
    meta: {
      title: "项目&效果",
    },
  },
];
