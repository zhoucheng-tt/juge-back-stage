import request from '@/utils/request'

// 用户信息列表
export function queryUserList(param) {
    return  request({
        url: '/systemManageFunc/queryUserList.xhtml',
        method: 'post',
        data: param
    })
}

// 新增用户
export function addUser(param) {
    return request({
        url: "/systemManageFunc/addUser",
        method: 'post',
        data: param
    })
}

// 修改用户
export function updateUser(param) {
    return request({
        url: "/systemManageFunc/updateUser",
        method: 'post',
        data: param
    })
}

// 删除用户
export function deleteUser(param) {
    return request({
        url: "/systemManageFunc/deleteUser",
        method: 'post',
        data: param
    })
}

// 角色列表 systemManageFunc/queryRoleListByUser.xhtml
export function queryRoleListByUser(param) {
    return request({
        url: '/systemManageFunc/queryRoleListByUser.xhtml',
        method: 'post',
        data: param
    })
}

export function queryFuncListByUser(param) {
    return request({
        url: '/systemManageFunc/queryFuncListByUser',
        method: 'post',
        data: param
    })
}
