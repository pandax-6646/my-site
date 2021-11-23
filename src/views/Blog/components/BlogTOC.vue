<template>
  <div>
    <h2>目录</h2>
    <RightHierarchyList :list="toWidthSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightHierarchyList from "./RightHierarchyList";
import {debounce} from '@/utils'
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
  data() {
    return {
      activeAnchor: "",
    };
  },

  computed: {
    toWidthSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },

    // 获取 TOC 列表的 dom 元素
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created () {
    this.setSelectDebounce = debounce(this.setSelect, 500)
    this.$bus.$on('mainScroll', this.setSelectDebounce)
  },
  destroyed () {
     this.$bus.$off('mainScroll', this.setSelectDebounce)
  },
 
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },

    // 是否选中
    setSelect() {
      let range = 200;
      this.activeAnchor = "";
      for (const dom of this.doms) {
        if (!dom) continue;
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= 200) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
