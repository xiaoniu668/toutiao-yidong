// 基于axios的请求模块
import axios from 'axios'
import jsonBig from 'json-bigint'

import store from '@/store'

// axios.create 方法创建一个和axios 本身功能一样的一个对象
const request = axios.create({
  baseURL: ' http://ttapi.research.itcast.cn/'
})

// axios 开放了自定义转换后端返回的  api
// data 就是后端返回的原始数据
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (error) {
    console.log('转换失败', error)

    return {}
  }
}]

// 请求拦截器
// 请求拦截器
request.interceptors.request.use(function (config) {
  // config 请求配置对象，我们可以通过修改 config 来实现统一请求数据处理
  const { user } = store.state

  // 统一添加 token
  if (user) {
    // config.headers 获取操作请求头对象
    // Authorization 是后端要求的字段名称
    // 数据值后端要求提供：Bearer token数据
    //    注意：Bearer 后面有个空格
    // 老师，为啥？后端要求的
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
export default request
