/**
 * @param {String} content           消息内容
 * @param {String} iconType          消息类型   info   error  success  warn
 * @param {HTMLElement} container    弹窗垂直居中展示的容器，不传就相对文档居中
 * @param {Number} duration          弹窗展示的时长
 *
 */

import getComponentRootDom from "./getComputentRootDom";
import Icon from "@/components/Icon";
import styles from "./toast.module.less";

export default function(opactions = {}) {
  const content = opactions.content || "";
  const iconType = opactions.iconType || "info";
  const duration = opactions.duration || 1500;
  const container = opactions.container || document.body;
  // 创建消息元素
  const oDiv = document.createElement("div");

  // 获取到图标组件的元素
  const iconDom = getComponentRootDom(Icon, { iconType });
  oDiv.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

  // 设置样式
  const typeClassName = styles[`toast-${iconType}`]; //获取图标类名
  oDiv.className = `${styles.toast} ${typeClassName}`;

  // 弹窗的父级不为body才给父级加relative
  if (opactions.container) {
    // 将创建好的dom元素添加到容器中
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }

  container.appendChild(oDiv);

  // 以重排的方式强行渲染一次弹窗
  oDiv.clientHeight;

  // 回归到正常位置
  oDiv.style.opacity = 1;
  oDiv.style.transform = `translate(-50%, -50%)`;

  // 等一段时间弹窗消失
  setTimeout(() => {
    oDiv.style.opacity = 0;
    oDiv.style.transform = `translate(-50%, -50%) translateY(-30px)`;

    // transform变换完毕后的事件，执行一次移除弹窗的事件，有回调执行回调
    oDiv.addEventListener(
      "transitionend",
      function() {
        oDiv.remove();
        opactions.callback && opactions.callback();
      },
      { once: true }
    );
  }, duration);
}
