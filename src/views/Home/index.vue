<template>
  <div
    class="home-container"
    ref="home"
    v-loading="isLoading"
    @wheel="handleWheel"
  >
    <!-- 图片部分 -->
    <ul
      class="slider-show-container"
      :style="{ marginTop: getCurrMarginTop }"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <SliderShow :data="item" />
      </li>
    </ul>

    <!-- 上下的箭头部分 -->
    <div
      v-show="currIndex != 0"
      class="icon icon-up"
      @click="changeIndex(currIndex - 1)"
    >
      <Icon iconType="arrowUp" />
    </div>
    <div
      v-show="currIndex != data.length - 1"
      class="icon icon-down"
      @click="changeIndex(currIndex + 1)"
    >
      <Icon iconType="arrowDown" />
    </div>

    <!-- 右侧小圆点部分 -->
    <ul class="indicator">
      <li
        :class="{ active: currIndex == index }"
        v-for="(item, index) in data"
        :key="item.id"
        @click="changeIndex(index)"
      ></li>
    </ul>

    <!-- <Loading v-if="isLoading"/> -->
  </div>
</template>

<script>
import { getBanners } from "@/api/banner.js";
import SliderShow from "./SliderShow";
import Icon from "@/components/Icon";

import getRemoteData from "@/mixins/getRemoteData";

export default {
  // 导入混入获取数据的代码
  mixins: [getRemoteData([])],

  data() {
    return {
      currIndex: 0, //当前显示的是第几张图
      homeClientHeight: 0, //父级元素的高度
      isSliderShow: false, //当前是否可轮播
    };
  },
  components: {
    SliderShow,
    Icon,
  },

  mounted() {
    // 初次渲染获取页面高度
    this.handelResize();

    // 页面视图大小发生变化时，触发重新获取页面高度的事件
    window.addEventListener("resize", this.handelResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handelResize);
  },

  computed: {
    getCurrMarginTop() {
      return -this.currIndex * this.homeClientHeight + "px";
    },
  },
  methods: {
    async fetchData() {
      return await getBanners();
    },

    changeIndex(index) {
      this.currIndex = index;
    },

    handleTransitionend() {
      this.isSliderShow = false;
    },

    handleWheel(e) {
      if (this.isSliderShow) {
        return;
      }

      if (e.deltaY > 0 && this.currIndex < this.data.length - 1) {
        this.isSliderShow = true;
        this.currIndex++;
      } else if (e.deltaY < 0 && this.currIndex > 0) {
        this.isSliderShow = true;
        this.currIndex--;
      }
    },
    handelResize() {
      this.homeClientHeight = this.$refs.home.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";
.slider-show-container {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  li {
    height: 100%;
    width: 100%;
  }
}

.home-container {
  position: relative;
  height: 100%;
  width: 100%;
  @gap: 25px;

  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    cursor: pointer;
    color: @gray;
    &.icon-up {
      top: @gap;
      animation: jump-up 1.5s infinite;
    }
    &.icon-down {
      bottom: @gap;
      animation: jump-down 1.5s infinite;
    }
  }
  .indicator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: @gap;
    li {
      height: 7px;
      width: 7px;
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid #fff;
      box-sizing: border-box;
      background: @words;
      margin: 10px 0;
      &.active {
        background: #fff;
      }
    }
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translateY(@jump) scale(1);
    }
    50% {
      transform: translateY(-@jump) scale(1.2);
    }
    100% {
      transform: translateY(@jump) scale(1);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translateY(-@jump) scale(1);
    }
    50% {
      transform: translateY(@jump) scale(1.2);
    }
    100% {
      transform: translateY(-@jump) scale(1);
    }
  }
}
</style>