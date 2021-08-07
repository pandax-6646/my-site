<template>
  <ul class="RightHierarchyList">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <RightHierarchyList :list="item.children" @select="handleClick(item)"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightHierarchyList",
  // 列表里数据的结构：[ {name: "xxx", isSelect: true, children: [{name: "yyy", isSelect: false}] } ]
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";

.RightHierarchyList {
  list-style: none;
  padding: 0;

  .RightHierarchyList {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.active {
  color: red;
}
</style>