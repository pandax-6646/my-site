<template>
  <!-- 用户头像组件 -->
  
  <img 
  class="avatar-container"
  :src="url" alt="" 
  :style="{height: size + 'px', width: size + 'px'}" 

  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    }
  },
};
</script>

<style scoped>
.avatar-container{
  display: block;
  border-radius: 50%;
  background-color: #eee;

  /* 防止图片的宽高比不为1导致拉伸 */
  object-fit: cover;
}
</style>