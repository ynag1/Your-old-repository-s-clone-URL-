import Vue from 'vue'
import VueRouter from 'vue-router'

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/login')
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('@/views/register/register')
  },
  {
    path: '/detail',
    name: '文章详情',
    component: () => import('@/views/detail/detail')
  },
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/layout/layout'),
    redirect: '/article',
    children: [
      {
        path: '/article',
        name: '面经',
        component: () => import('@/views/layout/article')
      },
      {
        path: '/collect',
        name: '收藏',
        component: () => import('@/views/layout/collect')
      },
      {
        path: '/like',
        name: '喜欢',
        component: () => import('@/views/layout/like')
      },
      {
        path: '/my',
        name: '我的',
        component: () => import('@/views/layout/my')
      }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
