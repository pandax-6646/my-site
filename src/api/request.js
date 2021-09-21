import Axios from 'axios';
import toast from '../utils/Toast'

// 创建axios实例
const ins = Axios.create();
ins.interceptors.response.use(function (resp) {

  // 如果相应的Code不为0，跳出错误弹窗
  if (resp.data.code !== 0) {
    toast({
      content: resp.data.msg,
      iconType: 'error',
      duration: 2000
    })
    return null
  }
  return resp.data.data;
})

export default ins;