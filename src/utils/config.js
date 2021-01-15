/**
 * 这个文件用于解决新接口变动时需要多次改动请求接口的问题
 * 你只需要修改env的值就可以切换接口
 */
//该值用来切换接口地址
let env = "dev";
//所有的根地址使用这个表示
let BASE_API = "";

if (env === "dev") {
  BASE_API = "http://123.207.189.27:7138/";
} else if (env === "prod") {
  BASE_API = "http://123.207.189.27:7138/";
}
export { BASE_API };
