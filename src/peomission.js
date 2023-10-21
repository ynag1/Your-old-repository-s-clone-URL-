// beforeEach前置路由守卫
// from 你从哪里来， 从哪来的路由信息对象
// to   你往哪里去， 到哪去的路由信息对象
// next() 是否放行，如果next()调用，就是放行 => 放你去想去的页面
//  next(路径) 拦截到某个路径页面
import router from '@/router'
import { KEY, getKey } from '@/utils/stoage'
const whiteList = ['/login', '/register'] // 白名单列表，记录无需权限访问的所有页面
router.beforeEach((to, from, next) => {
  const token = getKey(KEY)
  // console.log(to)
  // console.log(from)
  // 判断当前用户是否有token有,
  // 有toke直接调用next
  // 无token 白名单-不需要权限直接放行
  // 1.地址在白名单，直接放行
  // 2.不在白名单 next（）到登录页面
  if (token) {
    next()
  } else {
    // 没有token的人, 看看你要去哪
    // (1) 访问的是无需授权的页面（白名单），也是放行
    //     就是判断，访问的地址，是否在白名单数组中存在 includes
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // (2) 否则拦截到登录
      next('/register')
    }
  }
})
