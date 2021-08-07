module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.zhihu.com/api/v3/feed/topstory/recommend?session_token=9ab6ac6b6b89f3ff672ce1558edae536&desktop=true&page_number=2&limit=6&action=down&after_id=5&ad_interval=-1'
      },
      
    }
  }
}