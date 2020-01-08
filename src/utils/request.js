// 基于axios的请求模块
import axios from 'axios'
import jsonBig from 'json-bigint'

const request = axios.create({
  baseUrl: 'http://ttapi.research.itcast.cn'
})
request.defaults.transformRequest = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    console.log('转换失败', err)

    return {}
  }
}]
export default request
