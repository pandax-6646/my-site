import request from './request'


// 获取博客列表的数据
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get('/api/blog', {
    params: {
      page,
      limit,
      categoryid
    }
  });
}


// 获取博客分类的数据
export async function getBlogTypes() {
  return await request.get('/api/blogtype');
}


// 获取单个博客
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {*} commitObj 评论数据的对象
 */
export async function addComment(commitObj) {
  return await request.post('/api/comment', commitObj);
}

// 获取评论列表
export async function getComments(blogId, page = 1, limit = 10) {
  return await request.get('/api/comment', {
    params: {
      limit,
      page,
      blogId
    }
  });
}