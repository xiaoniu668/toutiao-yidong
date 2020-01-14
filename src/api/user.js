// 用户请求相关模块
import request from '@/utils/request'
export const login = data => {
  // 具体的请求代码
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
export const getSmsCode = mobile => {
  // 具体的请求代码
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
// 获取当前登录用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}

// 获取指定用户信息
export const getUserbyid = userId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/users/${userId}`
  })
}
