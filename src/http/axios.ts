/* eslint-disable new-cap */
import Axios from 'axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import baseURL from '@/config'
import NProgress from 'nprogress'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'
// 创建axios实例
const service = Axios.create({
  baseURL: baseURL.baseUrl,
  timeout: 10000
})

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start()
    //  填加token,序列化
    config.headers.Authorization = getToken()
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  async (res: AxiosResponse) => {
    const { data } = res
    NProgress.done()
    return data
  },
  (err) => {
    // 对响应错误做点什么
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权，请登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '服务未实现'
          break
        case 502:
          err.message = '网关错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'HTTP版本不受支持'
          break
        default:
          err.message = '系统错误'
          break
      }
    } else {
      err.message = '请求失败！'
    }
    ElMessage.closeAll()
    ElMessage({
      message: err.message,
      showClose: true,
      type: 'error',
      duration: 4000
    })
    NProgress.done()
    // 对响应错误做点什么
    return Promise.reject(err)
  }
)

export default service
