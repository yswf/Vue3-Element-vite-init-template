import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import 'element-plus/lib/theme-chalk/index.css';
import api from './api';
import store from './store';
import 'element-plus/packages/theme-chalk/src/base.scss';
// 引入nprogress样式
import 'nprogress/nprogress.css';

const app = createApp(App);
app.config.globalProperties.$api = api;
app.use(router).use(store).use(ElementPlus).mount('#app');
