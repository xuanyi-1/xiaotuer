import axios from 'axios'
// import store from '../store'
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const request = axios.create({
  baseURL: baseURL
})

// 请求拦截器
request.interceptors.request.use(
  function (config: any) {
    // 需要携带token
    // if (config.isNeedToken) {
    //   config.headers.authorization = `Bearer ${store.getters.getToken}`
    // }
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
