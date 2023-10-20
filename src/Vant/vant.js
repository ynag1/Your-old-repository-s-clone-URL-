import Vue from 'vue'
import { Button, Icon, Tabbar, TabbarItem } from 'vant'

const components = [Button, Icon, Tabbar, TabbarItem]
components.forEach((component) => {
  Vue.use(component)
})
