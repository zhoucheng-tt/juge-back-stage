import request from '@/utils/request'

//白名单顶部停车场下拉
export function queryDictData(param) {
    return request(
        {
            url: 'DictDimFunc/queryDictData.xhtml',
            method: 'post',
            data: param
        }
    )
}
//查询白名单列表  MemberFunc/queryWhiteList
export function queryWhiteList(param) {
    return request(
        {
            url: 'MemberFunc/queryWhiteList',
            method: 'post',
            data: param
        }
    )
}
//新增白名单接口 MemberFunc/insertWhiteList
export function insertWhiteList(param) {
    return request(
        {
            url: 'MemberFunc/insertWhiteList',
            method: 'post',
            data: param
        }
    )
}
//白名单删除接口 MemberFunc/deleteWhiteList
export function deleteWhiteList(param) {
    return request(
        {
            url: 'MemberFunc/deleteWhiteList',
            method: 'post',
            data: param
        }
    )
}

//查询黑名单列表 MemberFunc/queryBlackList
export function queryBlackList(param) {
    return request(
        {
            url: 'MemberFunc/queryBlackList',
            method: 'post',
            data: param
        }
    )
}
//新增黑名单接口 MemberFunc/insertBlackList
export function insertBlackList(param) {
    return request(
        {
            url: 'MemberFunc/insertBlackList',
            method: 'post',
            data: param
        }
    )
}
//黑名单删除接口 MemberFunc/deleteBlackList
export function deleteBlackList(param) {
    return request(
        {
            url: 'MemberFunc/deleteBlackList',
            method: 'post',
            data: param
        }
    )
}
