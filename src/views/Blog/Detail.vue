<template>
  <div class="bolg-datail-contailer">
    <h2>博客详情</h2>
    <div>{{ data }}</div>
  </div>
</template>

<script>
import fetchData from "@/mixins/getRemoteData";
import { getBlog } from "@/api/blog";
export default {
  mixins: [fetchData({})],

  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
</style>