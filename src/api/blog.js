import request from "./request";
/**
 * 分页获取博客
 * @param {*} page 当前页码
 * @param {*} limit 页容量
 * @param {*} categoryId 所属分类，-1表示全部
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryId
        }
    });
}

/**
 * 获取所有博客分类
 * @returns 
 */
export async function getBlogTypes() {
    return await request.get("/api/blogtype")
}

//获取单个博客
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
} 

//提交评论
export async function postComment(commentInfo) {
    return await request.post("/api/comment", commentInfo)
}

//分页获取评论
export async function getComment(page = 1,limit = 10,blogid = -1) {
   return await request.get("/api/comment", {
        params: {
            page,
            limit,
            blogid
        }
    })
}