// 公共的获取远程数据的代码

// 需要具体提供一个获取数据的方法来被调用

export default function(defaultData = null) {
  return {
    data() {
      return {
        isLoading: true, //是否显示正在加载中
        data: defaultData,
      };
    },

    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
