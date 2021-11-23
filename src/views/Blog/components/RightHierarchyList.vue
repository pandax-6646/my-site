<template>
  <ul class="rightHierarchyList">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        >{{ item.aside }} 篇</span
      >
      <RightHierarchyList :list="item.children" @select="handleClick" />
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
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";

.rightHierarchyList {
  list-style: none;
  padding: 0;

  .rightHierarchyList {
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
  .aside {
    margin-left: 1em;
    color: @gray;
    font-size: 12px;
  }
}
</style>