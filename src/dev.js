let url = ''
const proxy = {
  '/api': {
    target: 'http://hlw.pasq.com',
    // target: 'http://192.168.200.169:6765/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }
}

// 本地地址
url = '/api'
const ipUrlImg = 'http://39.106.172.211/files' // 图片地址

// 测试地址
// url = 'http://hlw.pasq.com'

module.exports = {
  url,
  proxy,
  ipUrlImg
}
