import request from '@/utils/requer'
import { getKey, KEY } from '@/utils/stoage'
export const articleAPI = (Promise) => {
  return request({
    url: '/interview/query',
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + getKey(KEY)
    },
    Promise
  })
}
// detail 文章详情
export const detailapi = (id) => {
  return request({
    url: '/interview/show',
    method: 'get',
    params: {
      id
    }
  })
}
// /interview/opt,收藏、点赞题目/取消收藏、点赞题目接口
export const updateLike = (id) => {
  return request.post('/interview/opt', {
    id,
    optType: 1 // 喜欢
  })
}
// 获取用户信息
export const Myollect = () =>
  request({
    url: '/user/currentUser'
  })
