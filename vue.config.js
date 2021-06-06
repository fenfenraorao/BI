const proxy = require('./src/dev').proxy
console.log('proxy', proxy)
module.exports = {
  // 修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = '互联网+汇聚系统'
        return args
      })
  },
  devServer: {
    proxy
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import \'@/assets/css/variable.scss\';'
      }
    }
  },
  publicPath: ''
}
