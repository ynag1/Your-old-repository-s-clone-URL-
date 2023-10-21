import Vue from 'vue'

Vue.filter('clearHtml', (val) => {
  return val.replace(/<[^>]+>/g, '')
})
