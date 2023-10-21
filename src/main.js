import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
import '@/Vant/vant'
import '@/peomission'
import ArticleItem from '@/components/article-item.vue'

import '@/filters/index'
Vue.component('ArticleItem', ArticleItem)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
