<template>
  <div class="test-container" >
    <Loading v-if="isLoading" />
    <button @click="handleLoading">切换</button>
  </div>
</template>

<script>
import Loading from "./";
export default {
  data () {
    return {
      isLoading: true,
    }
  },
  components: {
    Loading,
  },
  methods: {
    handleLoading () {
      this.isLoading = !this.isLoading;
    }
  }
};
</script>

<style scoped lang="less">
.test-container{
  position: relative;
  height: 100%;
  width: 100%;
}
</style>