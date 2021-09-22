<template>
  <div>
    <h2>目录</h2>
    <RightHierarchyList :list="toc" @select="handleSelect" />
  </div>
</template>

<script>
import RightHierarchyList from "./RightHierarchyList";
export default {
  components: {
    RightHierarchyList,
  },

  props: {
    toc: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
  },
};
</script>

<style scoped>
</style>
