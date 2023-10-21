const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 默认直接打包的项目代码，必须直接 丢在 服务器根目录 运行
  // 所有资源（js css img）的房屋 都是基于根路径，以绝对路径访问
  // publicPath: '/'

  // 设置获取.js,.css文件时，是以相对地址为基准的。
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: './base',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            blue: '#FA6D1D'
            // 'button-primary-background-color': '#FA6D1D'
            // 'button-primary-border-color': '#FA6D1D'
          }
        }
      }
    }
  }
})
