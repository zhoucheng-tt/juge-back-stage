/*
 * @Author: your name
 * @Date: 2020-08-03 14:36:38
 * @LastEditTime: 2020-10-27 21:02:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\vue.config.js
 */
module.exports = {
  lintOnSave: false,
  publicPath: './', // vueConf.baseUrl, // 根域上下文目录

  assetsDir: 'static',
  // 选项...
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    proxy: {
      // 配置跨域
      // 当遇见所有的跨域问题中需要进行这边调整
      '/e-parking-web': {
        target: 'http://120.26.146.64:8052/e-parking-web',
        ws: false,
        pathRewrite: {
          '^/e-parking-web/': '/'
          //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        }
      }
    }
  },



  // chainWebpack (config) {
  //   // 添加别名
  //   config.resolve.alias
  //     .set('assets', resolve('src/assets'))
  //     .set('components', resolve('src/components'))
  //     .set('api', resolve('src/api'))
  // }

  // 添加svg  图片的配置文件
  // 开始
  chainWebpack: config => {
    // 配置的时候这边需要自己定义一个方法b, 不然程序会报错
    const path = require('path')

    function resolve(dir) {
      return path.join(__dirname, dir)
    }

    // // svg rule loader
    // const svgRule = config.module.rule('svg') // 找到svg-loader
    // svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    // svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    // svgRule // 添加svg新的loader处理
    //   .test(/\.svg$/)
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //   })
    // // 修改images loader 添加svg处理
    // const imagesRule = config.module.rule('images')
    // // 这边好像是配置svg图片的路径代码
    // imagesRule.exclude.add(resolve('src/assets'))
    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
//   // 结束
}
