import axios from 'axios'
import { Toast } from 'vant'
import { getKey, KEY, delKey } from '@/utils/stoage'
import router from '@/router'
// interceptors.request ===> 所有的请求 都是先经过请求拦截器，然后再去后端。
// interceptors.response===> 所有的请求的后端数据返回内容， 都会先经过 响应拦截器， 然后再去前端页面。
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timout: 5000
})
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = getKey(KEY)
    token && (config.headers.Authorization = 'Bearer ' + token)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    if (error.request.message === 401) {
      router.push('/login')
      // 请求错误清除token
      delKey(KEY)
    } else {
      // 对响应错误做点什么
      Toast.fail(error.response?.data?.message || '系统出现错误，请稍后')
    }
    return Promise.reject(error)
  }
)

export default request
