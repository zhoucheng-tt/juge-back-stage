import request from "@/utils/request";

//查询白名单列表  MemberFunc/queryWhiteList
export function queryWhiteList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/queryWhiteList",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//新增白名单接口 MemberFunc/insertWhiteList
export function insertWhiteList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/addWhite",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//白名单删除接口 MemberFunc/deleteWhiteList
export function deleteWhiteList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/delWhite",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//白名单修改接口 MemberFunc/updateWhiteList
export function updateWhiteList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/updateWhite",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//启动白名单
export function enableWhite(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/enableWhite",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//失效白名单
export function disableWhite(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/disableWhite",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//查询黑名单列表 MemberFunc/queryBlackList
export function queryBlackList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/queryBlackList",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//新增黑名单接口 MemberFunc/insertBlackList
export function insertBlackList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/addBlack",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//黑名单删除接口 MemberFunc/deleteBlackList
export function deleteBlackList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/delBlack",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//黑名单修改接口 MemberFunc/updateBlackList
export function updateBlackList(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/updateBlack",
        method: "post",
        data: param,
        flag: 'out'
    });
}

//黑名单修改状态 MemberFunc/updateBlackListStatus
export function enableBlack(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/enableBlack",
        method: "post",
        data: param,
        flag: 'out'
    });
}

export function disableBlack(param) {
    return request({
        url: "http://localhost:8000/AuthorizationController/disableBlack",
        method: "post",
        data: param,
        flag: 'out'
    });
}
