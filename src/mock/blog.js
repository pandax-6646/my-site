import Mock from "mockjs"
import qs from "querystring"

// 模拟所有博客分类的数据
Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-300": 0,
      "order|+1": 1,
    }
  ]
})

// 模拟分页博客的数据(需要用正则模糊匹配api路径后所有带有blog的路径，例如：/api/blog?page=3&limt=10)
Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
  let query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|2000-3000": 0,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          title: "@ctitle(1, 50)",
          description: "@cparagraph(1, 10)",

          // 所属分类
          category: {
            "id|1-10": 0,
            name: "分类@id"
          },
          "scanNumber|0-3000": 0,
          "commentNumber|0-300": 0,
          "thumb|1": [Mock.Random.image("300x250", "#000", "#fff", "test-random-image"), null],
          createDate: "@date('T')"
        }
      ]
    }
  })
})








