import { createApp } from 'vue'
//导入全部elementUI组件
import ElementPlus from 'element-plus'
import router from './router'
import store from './store'
import App from './App.vue'
import 'element-plus/theme-chalk/index.css'
import './assets/styles/index.scss'
import './assets/styles/element-plus.scss'
// 插件形式按需导入
// import { componentsEL,plugins } from '@/plugins/elementUI'
const app = createApp(App)

// // 插件形式按需导入Element Plus组件和插件
// componentsEL.forEach((component) => {
//   app.component(component.name, component)
// })
// plugins.forEach((plugin) => {
//   app.use(plugin)
// })
// 注册全局组件
// const components: any = import.meta.globEager('./components/**/*.vue')
// Object.keys(components).forEach((key: string) => {
//   const component = components[key].default
//   // 如果组件内定义name 则需要全局引用的
//   if (component.name) {
//     app.component(component.name, component)
//   }
// })

app.use(router).use(store).use(ElementPlus).mount('#app')
