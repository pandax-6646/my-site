<template>
  <nav class="menu-contrainer">
    <RouterLink
      v-for="item in userInfo"
      :key="item.link"
      :exact="item.exact"
      :to="{ name: item.name }"
    >
      <div class="icon">
        <Icon :iconType="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "/src/components/Icon/";
export default {
  data() {
    return {
      userInfo: [
        {
          name: "Home",
          icon: "home",
          title: "首页",
          exact: true,
        },
        {
          name: "Blog",
          icon: "blog",
          title: "文章",
          exact: false,     //是否启用精确匹配路由路径
        },
        {
          name: "About",
          icon: "about",
          title: "关于我",
          exact: true,
        },
        {
          name: "Project",
          icon: "code",
          title: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          icon: "chat",
          title: "留言",
          exact: true,
        },
      ],
    };
  },

  components: {
    Icon,
  },

  methods: {
    // 当前的hash路径匹配点击到的路径
    isActive(item) {
      let link = item.link.toLowerCase();
      let currPath = location.pathname.toLowerCase();
      console.log(link, currPath);
      if (item.startsWith) {
        return currPath.startsWith(link);
      } else {
        return link === currPath;
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";

.menu-contrainer {
  width: 100%;
  color: @gray;
  margin: 24px 0;
  a {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 50px;
    &:hover {
      color: #fff;
    }
    &.active {
      background: #2d2d2d;
    }
    .icon {
      width: 24px;
    }
  }
}
</style>