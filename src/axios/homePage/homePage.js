/*
 * @Author: 邵青阳
 * @Date: 2020-10-29 13:34:33
 * @LastEditTime: 2020-10-29 13:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \g524-comprehensive-displayd:\TingCar\src\axios\homePage\homePage.js
 */
import request from '@/utils/request'

// 登录接口
export function login(params) {
    return request({
        url: '/systemManageFunc/loginUser.xhtml',
        method: 'post',
        data: params,
    })
}

//下拉框数据查询
export function queryDictData(params) {
    return request(
        {
            url: '/DictDimFunc/queryDictData.xhtml',
            method: 'post',
            data: params
        }
    )
}

//地磁车列表查询
export function queryMagneticDetecter(params) {
    return request(
        {
            url: '/DeviceFunc/queryMagneticDetecter.xhtml',
            method: 'post',
            data: params
        }
    )
}

//新增地磁车
export function addMagneticDetecter(params) {
    return request(
        {
            url: '/DeviceFunc/addMagneticDetecter.xhtml',
            method: 'post',
            data: params
        }
    )
}

//删除地磁车
export function delMagneticDetecter(params) {
    return request(
        {
            url: '/DeviceFunc/delMagneticDetecter.xhtml',
            method: 'post',
            data: params
        }
    )
}

//修改地磁车
export function updateMagneticDetecter(params) {
    return request(
        {
            url: '/DeviceFunc/updateMagneticDetecter.xhtml',
            method: 'post',
            data: params
        }
    )
}
