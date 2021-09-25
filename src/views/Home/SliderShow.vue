<template>
  <div
    class="slider-show-container"
    ref="sliderContainer"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <div class="slider-img" ref="sliderImg" :style="getImgPosition">
      <ImageLoader
        @load="handleImageLoad"
        :src="data.bigImg"
        :placeholder="data.midImg"
      />
    </div>
    <div class="title" ref="title">{{ data.title }}</div>
    <div class="desc" ref="desc">{{ data.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["data"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      sliderContainerSize: null, //外层容器的尺寸
      sliderImgSize: null, //内层容器的尺寸
      mouseX: null, // 鼠标的坐标
      mouseY: null,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    // 获取内外容器任何状态下的宽高
    this.getSize();
    window.addEventListener("resize", this.getSize);

    // 默认初始状态时鼠标的位置在外层容器的中间
    this.mouseX = this.getMouseCenter.x;
    this.mouseY = this.getMouseCenter.y;
  },
  destroyed() {
    window.removeEventListener("resize", this.getSize);
  },

  computed: {
    getImgPosition() {
      if (!this.sliderContainerSize || !this.sliderImgSize) {
        return;
      }

      const ratio = {
        x:
          (this.sliderContainerSize.width - this.sliderImgSize.width) /
          this.sliderContainerSize.width,
        y:
          (this.sliderContainerSize.height - this.sliderImgSize.height) /
          this.sliderContainerSize.height,
      };

      return `transform: translate3d(${ratio.x * this.mouseX}px, ${
        ratio.y * this.mouseY
      }px ,0px)`;
    },

    // 获取外层容器的中心坐标
    getMouseCenter() {
      return {
        x: this.sliderContainerSize.width / 2,
        y: this.sliderContainerSize.height / 2,
      };
    },
  },

  methods: {
    handleImageLoad() {
      this.showText();
    },

    showText() {
      this.$refs.title.style.width = 0 + "px";
      this.$refs.title.style.opacity = 1;

      // 强制渲染
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.width = 0 + "px";
      this.$refs.desc.style.opacity = 1;

      this.$refs.desc.clientWidth;
      this.$refs.desc.style.width = this.descWidth + "px";
    },

    handleMousemove(e) {
      // 得到鼠标相对外层容器的坐标
      const rect = this.$refs.sliderContainer.getBoundingClientRect();
      this.mouseX = e.pageX - rect.left;
      this.mouseY = e.pageY - rect.top;
    },

    // 鼠标移开外层容器，图片回到中间
    handleMouseleave() {
      this.mouseX = this.getMouseCenter.x;
      this.mouseY = this.getMouseCenter.y;
    },

    getSize() {
      // 外层容器的宽高
      this.sliderContainerSize = {
        height: this.$refs.sliderContainer.clientHeight,
        width: this.$refs.sliderContainer.clientWidth,
      };

      // 内层容器的宽高
      this.sliderImgSize = {
        height: this.$refs.sliderImg.clientHeight,
        width: this.$refs.sliderImg.clientWidth,
      };
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";
.slider-show-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .slider-img {
    height: 110%;
    width: 110%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: transform 0.5s;
  }
  .title,
  .desc {
    position: absolute;
    top: 50%;
    left: 30px;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 3px;
    text-shadow: 1px 0px 0px rgba(0, 0, 0, 0.5), -1px 0px 0px rgba(0, 0, 0, 0.5),
      0px -1px 0px rgba(0, 0, 0, 0.5), 0px -1px 0px rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
  }
  .title {
    transform: translateY(-50%);
    font-size: 2em;
    transition: all 2s;
  }
  .desc {
    transform: translateY(calc(-50% + 40px));
    font-size: 1.2em;
    color: lighten(@gray, 20%);
    transition: all 2s 2s;
  }
}
</style>