import axios from 'axios'
import { Message } from 'element-ui'
import Router from '../router'
axios.defaults.timeout = 100000

let min_time = ''
axios.interceptors.request.use(
  config => {
    min_time = new Date().getTime()
    if (window.localStorage.getItem('token')) {
      config.url = config.url + '?token=' + window.localStorage.getItem('token') + ''
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
const toast = message => {
  const currentTime = new Date().getTime()
  const timer = +sessionStorage.getItem('timer')
  if (!timer || (currentTime - timer >= 1500)) {
    Message({
      showClose: true,
      message: message
    })
    sessionStorage.setItem('timer', currentTime)
  }
}
axios.interceptors.response.use(
  response => {
    console.log(response)
    try {
      let over_time = 350 - (new Date().getTime() - min_time)
      if (over_time <= 0) {
        over_time = 0
      }
      if (response.data) {
        const code = response.data.status
        console.log(code)
        if (code === 200) {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(response)
            }, over_time)
          })
        } else {
          if (code) {
            console.log(code)
            if (code === '400001') {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve(response)
                }, over_time)
              })
            } else if (code === '100007') {
              return false
            } else if (code === 40301) {
              Router.replace({ path: '/login' }).catch(err => { console.log(err) })
              toast(response.data.message)
              return false
            } else {
              toast(response.data.message)
              return false
            }
          }
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(response)
            }, over_time)
          })
        }
      } else {
        toast(response.message || response.data.message)
        return false
      }
    } catch (error) {
      toast(response.data.errmsg)
      return false
    }
  },
  error => {
    console.log(error.response)
    if (error.toString() !== 'Error: Network Error') {
      toast(error.toString())
    }
    Promise.reject(error)
    return false
  }
)
export default axios
