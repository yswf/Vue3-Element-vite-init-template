/* eslint-disable no-underscore-dangle */
// 导入axios
import axios from 'axios';
import qs from 'querystring'; // 引入qs，axios在post参数时，要通过qs来格式化数据
// 导入NProgress
import NProgress from 'nprogress';
import { ElMessage } from 'element-plus';
// 配置axios
axios.defaults.retry = 1;
axios.defaults.retryDelay = 5000;
axios.interceptors.request.use(
  (config) => {
    NProgress.start();
    // qs来格式化数据
    if (
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
      && config.method === 'post'
    ) {
      config.data = qs.stringify(config.data);
    }
    // 必须return
    return config;
  },
  (error) => Promise.error(error),
);
// 在response拦截器中隐藏进度条和处理超时请求
function successRes(config) {
  NProgress.done();
  //  token失效在这里跳出登陆
  return config;
}
axios.interceptors.response.use(
  successRes,
  (err) => {
    const { config } = err;
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err);

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;
    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
      // Reject with the error
      NProgress.done();
      ElMessage.error(err.message);
      return Promise.reject(err);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, config.retryDelay || 1);
    });
    // Return the promise in which recalls axios to retry the request
    return backoff.then(() => axios(config));
  },
);
// 导出axios
export default axios;
