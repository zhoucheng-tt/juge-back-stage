const publicVar = {
  install (Vue) {
    // 把当前的对象挂载到vue的全局
    Vue.prototype.$imgBaseUrl = this.imgBaseUrl
  },

  // 图片baseurl
  // imgBaseUrl: 'http://192.168.5.225:6001',
  imgBaseUrl: 'http://123.207.189.27:6001',

}

export default publicVar