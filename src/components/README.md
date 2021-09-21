# 组件的开发接口文档

https://github.com/DuYi-Edu/DuYi-Vue2/blob/main/1.%20%E5%85%A5%E9%97%A8/09.%20%E7%BB%84%E4%BB%B6%E7%BB%83%E4%B9%A0/my-site/src/components/README.md

## Avatar（用户头像组件）

### 属性：
| 属性名  | 含义                | 类型   | 必填 | 默认值 |
| ------ | ------------------ | ------ | ---- | ----- |
| url    | 头像图片路径        | srting | 是   | 无     |
| size   | 头像尺寸，宽高相等   | number | 否   | 150   |
------


## Icon（小图标组件）
使用的图标源来自于「阿里巴巴矢量库」

### 属性：
| 属性名     | 含义     | 类型   | 必填 | 默认值 |
| ---------- | -------- | ------ | ---- | ----- |
| iconType   | 图标类型 | string | 是   | 无     |
------


## Pager（分页组件）
### 属性：
| 属性名           | 含义              | 类型   | 必填 | 默认值 |
| --------------- | ----------------- | ------ | ---- | ----- |
| currPage        | 当前页码           | number | 否   | 1     |
| total           | 总的数据量         | number | 否   | 1     |
| limit           | 每个分页的数据容量  | number | 否   | 10    |
| visibleNumber   | 可见页码数量        | number | 否   | 10    |
-------

### 事件：
| 事件名     | 含义            | 事件参数  | 参数类型 |
| ---------- | -------------- | -------- | -------- |
| pageChange | 页码变化时触发  | 新的页码  | Number  |
------


## Empty

该组件需要在外层容器中横向垂直居中

### 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ---------- | ------ | ---- | -------- |
| text   | 显示的文字 | String | 否   | "无数据" |

# ImageLoader

该组件可以实现一个由模糊到清晰的渐进式图片

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | ---------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                            | String | 是   | 无     |
| placeholder | 原始图片加载完成前的占位图片               | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数 | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发 | 无       | 无       |

## 示例

```html
<ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
```



# Contact

<img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" alt="iShot2020-11-30下午04.55.47" style="zoom:40%;" />

该组件需要横向撑满容器，背景色透明

> 1. 如何实现点击弹出QQ对话？
>
>    设置超链接为：tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
>
> 2. 如何实现点击弹出发送邮件？
>
>    设置超链接为：mailto:邮件地址

# Menu

<img src="http://mdrs.yuanjin.tech/img/20201130195147.png" alt="image-20201130195147086" style="zoom:33%;" />

该组件需要横向撑满容器，背景色透明

每个菜单的信息如下：

> **首页**
>
> 链接地址：/
>
> 选中条件：路径等于 /
>
> **文章**
>
> 链接地址：/blog
>
> 选中条件：路径以`/blog`开头
>
> **关于我**
>
> 链接地址：/about
>
> 选中条件：路径等于`/about`
>
> **项目&效果**
>
> 链接地址：/project
>
> 选中条件：路径等于`/project`
>
> **留言板**
>
> 链接地址：/message
>
> 选中条件：路径等于`/message`

# SiteAside

<img src="http://mdrs.yuanjin.tech/img/20201130200148.png" alt="image-20201130200148681" style="zoom:33%;" />

网站侧边栏

宽度和高度撑满外层容器



