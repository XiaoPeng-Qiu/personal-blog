import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Message from "@/views/Message"
import Project from "@/views/Project"
import BlogDetail from "@/views/Blog/Detail"
export default [
    { name: "Home", path: "/", component: Home, title: "个人博客" },
    { name: "About", path: "/about", component: About },
    { name: "Blog", path: "/article", component: Blog },
    { name: "categoryId", path: "/article/cate/:categoryId", component: Blog },
    { name: "BlogDetail", path: "/article/:id", component: BlogDetail },
    { name: "Message", path: "/message", component: Message },
    { name: "Project", path: "/project", component: Project }
]