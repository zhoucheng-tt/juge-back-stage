module.exports = {
  lintOnSave: false,
  publicPath: "./", // vueConf.baseUrl, // 根域上下文目录

  assetsDir: "static",
  // 选项...
  devServer: {
    host: "0.0.0.0",
    port: 8081,
    proxy: {
      // 配置跨域  当遇见所有的跨域问题中需要进行这边调整
      "/eparking-web": {
        target: "http://192.168.99.10:8000",
        ws: false,
        pathRewrite: {
          // "^/eparking-web/": "/eparking-web/"
          "^/eparking-web/": "/"
        }
      }
    }
  },
  // 添加svg  图片的配置文件
  // 开始
  chainWebpack: config => {
    // 配置的时候这边需要自己定义一个方法b, 不然程序会报错
    const path = require("path");
    function resolve (dir) {
      return path.join(__dirname, dir);
    }
  }
  //   // 结束
};
