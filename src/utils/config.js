/**
 * 这个文件用于解决新接口变动时需要多次改动请求接口的问题
 * 你只需要修改env的值就可以切换接口
 */
//该值用来切换接口地址
let env = "dev";
//所有的根地址使用这个表示
let BASE_API = "";

if (env === "dev") {
  // BASE_API = "http://123.207.189.27:7138/";
  // BASE_API = "http://192.168.99.10:8000/";
  // BASE_API = "http://192.168.1.205:8000/";
  BASE_API = "http://221.226.72.122:8888/eparking-web/";//溧水现场
} else if (env === "prod") {
  // BASE_API = "http://123.207.189.27:7138/";
  // BASE_API = "http://123.207.189.27:7138/";
  // BASE_API = "http://192.168.1.205:8000/";
  BASE_API = "http://192.168.99.10:8000/";//溧水现场
}
export { BASE_API };
