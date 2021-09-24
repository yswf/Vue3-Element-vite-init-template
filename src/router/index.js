import { createRouter, createWebHashHistory } from 'vue-router';

// 配置路由懒加载
// home相关页面需要依赖统一打包名home.js
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
// Info
const Info = () => import(/* webpackChunkName: "Info" */ '../views/info/Info.vue');
const Login = () => import(/* webpackChunkName: "Info" */ '../views/info/Login.vue');
// ManufactureFwInfo
const ManufactureFwInfo = () => import(
  /* webpackChunkName: "ManufactureFwInfo" */ '../views/manufactureFwInfo/ManufactureFwInfo.vue'
);
// Sign
const Sign = () => import(/* webpackChunkName: "Sign" */ '../views/sign/Sign.vue');
// Manage
const Manage = () => import(/* webpackChunkName: "Manage" */ '../views/manage/manage.vue');
// 404
const NotFound = () => import(/* webpackChunkName: "404" */ '../views/404.vue');

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/404', component: NotFound },
  {
    path: '/index',
    component: Home,
    children: [
      { path: '/index/info', component: Info },
      { path: '/index/manufactureFwInfo', component: ManufactureFwInfo },
      { path: '/index/sign', component: Sign },
      { path: '/index/manage', component: Manage },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', redirect: '/404', hidden: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router;
