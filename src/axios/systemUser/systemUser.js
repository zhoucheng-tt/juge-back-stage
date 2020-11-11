import request from '@/utils/request'


//系统管理角色管理列表查询
export function queryRoleList(param) {
    return request(
        {
            url: 'systemManageFunc/queryRoleList.xhtml',
            method: 'post',
            data: param
        }
    )
}
//系统管理角色管理新增角色
export function addRole(param) {
    return request(
        {
            url: 'systemManageFunc/addRole.xhtml',
            method: 'post',
            data: param
        }
    )
}
//系统管理角色管理删除行
export function deleteRole(param) {
    return request(
        {
            url: 'systemManageFunc/deleteRole.xhtml',
            method: 'post',
            data: param
        }
    )
}
//系统管理角色新增查询选择用户
export function queryUserListByRole(param) {
    return request(
        {
            url: 'systemManageFunc/queryUserListByRole.xhtml',
            method: 'post',
            data: param
        }
    )
}
//系统管理中新增功能权限的tabs
export function queryFuncListByRole(param) {
    return request(
        {
            url: 'systemManageFunc/queryFuncListByRole.xhtml',
            method: 'post',
            data: param
        }
    )
}



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
