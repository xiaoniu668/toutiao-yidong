// 基于axios的请求模块
import axios from 'axios'
import jsonBig from 'json-bigint'

const request = axios.create({
  baseURL: ' http://ttapi.research.itcast.cn/'
})
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (error) {
    console.log('转换失败', error)

    return {}
  }
}]
export default request
