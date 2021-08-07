<template>
  <!-- 总页数大于1时才显示 -->
  <div class="pager" v-if="getPageAll > 1">

    <!-- 回到首页按钮 -->
    <a href="#" @click="handleClick(1)" :class="{ disabled: currPage <= 1 }"
      >|&lt;&lt;</a
    >

    <!-- 上一页按钮 -->
    <a
      href="#"
      @click="handleClick(currPage - 1)"
      :class="{ disabled: currPage <= 1 }"
      >&lt;&lt;</a
    >

    <!-- 页码按钮 -->
    <a
      href="#"
      v-for="(num, index) in getCurrList"
      @click="handleClick(num)"
      :key="index"
      :class="{ active: num == currPage }"
    >
      {{ num }}
    </a>


    <!-- 下一页按钮 -->
    <a
      href="#"
      @click="handleClick(currPage + 1)"
      :class="{ disabled: currPage >= getPageAll }"
      >&gt;&gt;</a
    >

    <!-- 回到最后一页按钮 -->
    <a
      href="#"
      @click="handleClick(getPageAll)"
      :class="{ disabled: currPage >= getPageAll }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    currPage: {
      type: Number,
      default: 1,
    },

    // 数据总量
    total: {
      type: Number,
      default: 1,
    },

    // 每个分页的数据容量
    limit: {
      type: Number,
      default: 10,
    },

    // 可见码页数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 获取总页码数
    getPageAll() {
      return Math.ceil(this.total / this.limit);
    },

    // 得到当前页码列表的最小数字
    getCurrPageListMin() {
      let min = this.currPage - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },

    // 得到当前页码列表的最大数字
    getCurrPageListMax() {
      let max = this.getCurrPageListMin + this.visibleNumber - 1;
      if (max >= this.getPageAll) {
        max = this.getPageAll;
      }
      return max;
    },

    // 当前展示的页码列表
    getCurrList() {
      let arr = [];
      for (let i = this.getCurrPageListMin; i <= this.getCurrPageListMax; i++) {
        arr.push(i);
      }
      return arr;
    },
  },

  methods: {
    handleClick(newPage) {

      // 页码值左越界
      if (newPage < 1) {
        newPage = 1;
      }

      // 页码值右越界
      if (newPage > this.getPageAll) {
        newPage = this.getPageAll;
      }

      // 页码值改变才去发送改变页码的事件
      if (newPage != this.currPage) {
        this.$emit("pageChange", newPage);
      }
      
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";
.pager {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}
a {
  margin: 0px 6px;
  color: @primary;

  // 按钮不可用
  &.disabled {
    color: @lightWords;
    cursor: not-allowed;
  }

  // 选中
  &.active {
    color: @words;
    font-weight: bold;
    cursor: text;
  }
}
</style>