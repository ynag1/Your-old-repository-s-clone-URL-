import request from '@/utils/requer'
// 登录
export const loginAPI = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 注册
export const registerAPI = (data) => {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
