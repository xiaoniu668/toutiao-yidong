import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载验证插件的初始配置
import './utils/validation'
// rem适配：动态设置 html 标签字体大小
import 'amfe-flexible'
// 加载注册 vant 组件模块
import './utils/register-vant'
// 加载全局样式
import './styles/index.less'

// 注：所有初始化的（import）都在 new vue之前
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
