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

//地锁列表查询
export function queryGroundLock(params) {
    return request(
        {
            url: 'DeviceFunc/queryGroundLock.xhtml',
            method: 'post',
            data: params
        }
    )
}

//新增地锁
export function addGroundLock(params) {
    return request({
        url: 'DeviceFunc/addGroundLock.xhtml',
        method: 'post',
        data: params
    })
}

//删除地锁
export function delGroundLock(params) {
    return request(
        {
            url: 'DeviceFunc/delGroundLock.xhtml',
            method: 'post',
            data: params
        }
    )
}
//修改地锁
export function updateGroundLock(params) {
    return request(
        {
            url: 'DeviceFunc/updateGroundLock.xhtml',
            method: 'post',
            data: params
        }
    )
}

//视频车位列表查询 DeviceFunc/queryVideoDetecter
export function queryVideoDetecter(param) {
    return request(
        {
            url: '/DeviceFunc/queryVideoDetecter',
            method: 'post',
            data: param
        }
    )
}

//视频车位新增 addVideoDetecter
export function addVideoDetecter(param) {
    return request(
        {
            url: '/DeviceFunc/addVideoDetecter',
            method: 'post',
            data: param
        }
    )
}

//视频车位删除 delVideoDetecter
export function delVideoDetecter(param) {
    return request(
        {
            url: '/DeviceFunc/delVideoDetecter',
            method: 'post',
            data: param
        }
    )
}

//视频车位修改 updateVideoDetecter
export function updateVideoDetecter(param) {
    return request(
        {
            url: '/DeviceFunc/updateVideoDetecter',
            method: 'post',
            data: param
        }
    )
}


