<template>
  <div class="image-loader-container">
    <img v-if="!originShow" class="placeholder" :src="placeholder" alt="" />
    <img
      class="origin"
      :src="src"
      alt=""
      @load="imgLoaded"
      :style="{
        opacity: getOriginOpaction,
        transition: `opacity ${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoaded: false,
      originShow: false
    };
  },

  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    getOriginOpaction() {
      return this.originLoaded ? 1 : 0;
    },
  },

  methods: {
    imgLoaded() {
      this.originLoaded = true;

      // 原图的清晰度为1时才让占位图片消失
      setTimeout( () => {
        this.originShow = true;
        this.$emit('load');
      }, this.duration * 3)
      
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
img {
  // 撑满容器
  .self-fill();

  // 设置以图片那条边撑满容器
  object-fit: cover;
}

.placeholder {
  filter: blur(1vw);
}
</style>