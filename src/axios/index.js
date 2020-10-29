/*
 * @Author: your name
 * @Date: 2020-09-24 14:16:45
 * @LastEditTime: 2020-10-29 13:37:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\company Environment\tcxt-web\src\axios\index.js
 */
// 封装返回
import * as ysParking from './ysParking/ysParking.js'
// 首页接口
import * as homePage from './homePage/homePage.js'

const install = function(Vue){
	if(install.installed){
		return install.installed = true
	}
	Object.defineProperties(Vue.prototype,{
		$ysParking:{
			get(){
				return ysParking
			}
		},
		// 首页接口  homePage
		$homePage:{
			get(){
				return homePage
			}
		} 
	})
}

export default {install}