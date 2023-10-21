import Vue from 'vue'
import {
  Button,
  Icon,
  Tabbar,
  TabbarItem,
  NavBar,
  Form,
  Field,
  CellGroup,
  Toast,
  Cell,
  list,
  Grid,
  GridItem
} from 'vant'

const components = [
  Button,
  Icon,
  Tabbar,
  TabbarItem,
  NavBar,
  Form,
  Field,
  CellGroup,
  Toast,
  Cell,
  list,
  Grid,
  GridItem
]
components.forEach((component) => {
  Vue.use(component)
})
