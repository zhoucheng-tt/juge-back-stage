/*
 * @Author: your name
 * @Date: 2020-09-24 14:16:45
 * @LastEditTime: 2020-10-27 20:35:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\company Environment\tcxt-web\src\axios\index.js
 */
// 封装返回
import * as ysParking from './ysParking/ysParking.js'

const install = function(Vue){
	if(install.installed){
		return install.installed = true
	}
	Object.defineProperties(Vue.prototype,{
		$ysParking:{
			get(){
				return ysParking
			}
		}
	})
}

export default {install}