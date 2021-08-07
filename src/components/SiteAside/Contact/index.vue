<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/Panda-X6646">
        <div class="icon">
          <Icon iconType="github" />
        </div>
        <span>Panda-X6646</span>
      </a>
    </li>
    <li>
      <a href="mailto:xzq664673913@163.com">
        <div class="icon">
          <Icon iconType="mail" />
        </div>
        <span>xzq664673913@163.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=664673913&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon iconType="qq" />
        </div>
        <span>664673913</span>
      </a>
      <div class="eject">
        <img :src="require('@/assets/img/QQ.jpg')" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon iconType="weixin" />
        </div>
        <span>tk664612138</span>
      </a>
      <div class="eject">
        <img :src="require('@/assets/img/weixin.jpg')" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/varColor.less";
.contact-container {
  padding: 20px 10px;
  color: @gray;
  @itemHeight: 30px;

  li {
    position: relative;
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    cursor: pointer;
    &:hover {
      .eject {
        transform: scaleY(1);
      }
    }
    a {
      display: flex;
      align-items: center;
      font-size: 14px;
      .icon {
        font-size: 26px;
        width: 36px;
        &.weixin {
          font-size: 32px;
          text-indent: -3px;
        }
      }
    }
  }

  .eject {
    position: absolute;
    left: 0px;
    padding: 18px 15px 10px 15px;
    bottom: @itemHeight + 5px;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: center bottom;
    transform: scaleY(0);
    transition: transform 0.3s;
    &::after {
      content: "";
      position: absolute;
      height: 8px;
      width: 8px;
      left: calc(50% - 4px);
      bottom: 0px;

      transform: translate(-50%, 50%) rotate(45deg);
      background-color: #fff;
    }

    img {
      height: 150px;
      width: 150px;
      cursor: text;
    }
  }
}
</style>