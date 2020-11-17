/*
 * @Description:
 * @Author: 陈书瑶
 * @Date: 2020-04-01 15:09:48
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import router from '@/router/index'

// create an axios instance
const service = axios.create({
  // 这边目的是为了生产环境上的后台地址是不会被拼接出错
  // baseURL: process.env.VUE_APP_HOST_URL, // url = base url + request url
  // 后台位置
  // baseURL:'http://120.26.146.64:8052/e-parking-web',
  // 服务器版本
  // baseURL:'/e-parking-api',
  baseURL: '/e-parking-web',
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
  transformRequest: [
    function (data) {
      let reqInfo = {
        param: JSON.stringify(data),//对象转json
      }
      return qs.stringify(reqInfo)//json转表单
    }
  ]
})

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.headers['userToken'] = localStorage.getItem('userToken')
    // config.cancelToken = source.token; // 全局添加cancelToken
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if (res.struts === '1') {
    //   // source.cancel('not login')
    //   // Message({
    //   //   message: res.resultMsg || '未登录，请重新登录',
    //   //   type: 'error',
    //   //   duration: 5 * 1000,
    //   //   showClose: true
    //   // })
    // router.push({ name: 'login' })
    //   return Promise.reject(res.resultMsg || 'error')
    // } else
    if (response.config.flag === 'out') {
      return res
    }  else {
      if (res.status !== '0') {
        if (response.config.flag === 'innerExt') {
          return res
        } else {
          Message({
            message: res.resultMsg || '系统错误，请联系管理员',
            type: 'error',
            duration: 5 * 1000,
            showClose: true
          })
          // router.push({ name: '/login' })
          return Promise.reject(res.resultMsg || 'error')
        }

      } else {
        return res
      }
    }
  },
  error => {
    console.log('err' + error) // for debug
    // source.cancel()
    // if (error.message !== 'not login' && error.message !== 'web err') {
    //   Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }

    // source.cancel('web err')
    // if (axios.isCancel(error)) { // 取消请求的情况下，终端Promise调用链
    //   return new Promise(() => {})
    // } else {
    //   return Promise.reject(error)
    // }
    return Promise.reject(error)
  }
)

export default service
