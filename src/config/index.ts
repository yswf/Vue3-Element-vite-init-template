/**
 * 环境变量配置
 */
const env = import.meta.env.MODE
const EnvConfig = {
  development: {
    baseUrl:'/api'
  },
  test: {
    baseUrl: 'https://www.fastmock.site/mock/756303ac8aae70f35d0436f5f51b7ac6/api'
  },
  production: {
    // baseUrl:'https://www.fastmock.site/mock/756303ac8aae70f35d0436f5f51b7ac6/api',
    baseUrl: 'https://api.wantofun.cn/api/private/v1'
  }
}
export default {
  env,
  mock: true,
  ...EnvConfig[env] // 根据不同的环境变量解构出对应的地址参数
}
