<template>
  <div class="content">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
import "@/assets/css/globalBase.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style scoped>
.content {
  height: 550px;
  width: 250px;
  margin: 50px auto;
}
</style>