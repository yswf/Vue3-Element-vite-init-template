/**
 * path:'router-name'             跳转地址
 * name:'router-name'             如果用到<keep-alive>，必须设置该属性
 * meta : {
    title: 'title'                用于设置网页标签显示的标题
    activePath: '',               用于记录菜单活动状态
    keepAilve: true               是否缓存，默认 false
  }
 */

const routes: any[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/info/Login.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect:'/index/info',
    component: () => import('@/layout/Home.vue'),
    children: [
      { path: '/index/info',
        component: ()=>import('@/views/info/info.vue'),
        meta: {
          title: '信息',
          activePath: '/index/info'
        }
      },
      { path: '/index/manufactureFwInfo',
        component: ()=>import('@/views/manufactureFwInfo/ManufactureFwInfo.vue')
      },
      { path: '/index/sign',
        component: ()=>import('@/views/sign/Sign.vue')
      },
      { path: '/index/manage',
        component: ()=>import('@/views/manage/manage.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404/404.vue'),
    meta: {
      activePath: '/404'
    }
  }
]

interface Route {
  path: string
  name: string
  component(): any
  meta: Record<string, string | boolean>
}

/** 当路由很多时，可以拆分成小模块 **/
// 自动导入Modules 模块
const routeModuleFiles = import.meta.globEager('./modules/*.ts')
Object.keys(routeModuleFiles).forEach((key: string) => {
  const module = routeModuleFiles[key].default
  module.forEach((route: Route) => {
    routes[1].children.push(route)
  })
})

export default routes
