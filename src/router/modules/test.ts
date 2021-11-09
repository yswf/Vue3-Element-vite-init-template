// 路由太多写这里
const orderRouter = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/404/404.vue'),
    meta: {
      title: '订单列表',
      activePath: '/test'
    }
  }
]

export default orderRouter
