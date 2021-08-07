<template>
  <RightHierarchyList :list="list" @select="handleSelect"></RightHierarchyList>
</template>

<script>
import RightHierarchyList from "./RightHierarchyList.vue";
export default {
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            { name: "c-2", isSelect: false },
            {
              name: "c-3",
              isSelect: false,
              children: [
                { name: "c-3-1", isSelect: false },
                { name: "c-3-2", isSelect: false },
                { name: "c-3-3", isSelect: false },
                { name: "c-3-4", isSelect: false },
              ],
            },
            { name: "c-4", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
        { name: "e", isSelect: false },
        { name: "f", isSelect: false },
        { name: "g", isSelect: false },
      ],
    };
  },
  components: { RightHierarchyList },
  methods: {
    handleSelect (item) {
      console.log(item.name, item.isSelect);
    }
  }
};
</script>

<style scoped>
</style>