import Mock, { mock } from "mockjs"
import qs from "querystring"
import blogTest from "./blogTest"
Mock.mock("/api/blogtype", "get", {
    "code": 0, // 错误码
    "msg": "", // 错误消息
    "data|8": [
        {
            "id|+1": 1,
            "name": "分类@id",
            "articleCount|10-200": 10, //该分类下文章的数量
            "order|+1": 1
        },
    ] // 具体的消息内容，如果code不为0，则必为null
});
Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
    const query = qs.parse(options.url)
    return Mock.mock({
        "code": 0,
        "msg": "",
        "data": {
            "total|2000-3000": 0, //总数
            [`rows|${query.limit || 10}`]: [ // 当前页列表数据
                {
                    id: "@guid",
                    title: "@ctitle(3,50)",
                    description: "@cparagraph(1,15)",
                    category: { //所属分类
                        "id|1-8": 1,
                        name: "分类@id"
                    },
                    "scanNumber|10-1000": 10,
                    "commentNumber|10-200": 30,
                    "thumb|1": ["@image('300x250', @color, @color, Random-Mockjs)",null],
                    createDate: Mock.Random.date('yyyy-MM-dd')
                }
            ]
        }
    })
})

Mock.mock(/^\/api\/blog\/[^/]+$/, "get", blogTest.data1);

Mock.mock('/api/comment', 'post', blogTest.data2);

Mock.mock(/^\/api\/comment\/?(\?.+)?$/, 'get',
    function (options) {
        const query = qs.parse(options.url)
        return Mock.mock({
            "code": 0,
            "msg": "",
            "data": {
                "total|36": 0, //总数
                [`rows|${query.limit || 10}`]: [ // 当前页列表数据
                    {
                        id: '@guid',
                        nickname: "@cname",
                        content: "@cparagraph",//评论内容，纯文本
                        blog: {
                            'id|+1': 1, // 博客id
                            title: "博客标题"
                        },
                        createDate: Mock.Random.datetime(),
                        "avatar|1": [
                            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                        ],
                    }
                ]
            }
        })
    })