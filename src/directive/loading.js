import loadingUrl from "@/assets/img/loading.svg"
import styles from "./loading.module.less";


// 导出Loading指令的配置函数
export default function (el, binding) {

  const currImg = el.querySelector("img[data-role=loading]");

  // 根据binding、value的值决定创建或删除img元素
  if (binding.value) {

    // el中是否已存在img标签,没有img标签才去创建
    if (!currImg) {
      const oImg = document.createElement('img');
      oImg.dataset.role = 'loading';
      oImg.src = loadingUrl;
      oImg.className = styles.loading;
      el.appendChild(oImg);
    }

  } else {
    if (currImg) {
      currImg.remove();
    }

  }
}