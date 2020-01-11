// vuex容器
// 获取方便
// 响应式的
// 本地存储
// 持久化

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户状态  token
    user: JSON.parse(window.localStorage.getItem('user'))
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了避免刷新页面数据丢失  在这里对使用本地存储   进行持久化
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
