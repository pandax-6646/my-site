<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="800"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  name: "test",
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("ImageLoaded组件加载完成");
    },
  },
};
</script>

<style scope>
.test-container {
  height: 500px;
  width: 600px;
  border: 1px solid black;
}
</style>
