// 用户请求相关模块
import resquest from '@/utils/request'
export const login = data => {
  // 具体的请求代码
  return resquest({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
export const getSmsCode = mobile => {
  // 具体的请求代码
  return resquest({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
