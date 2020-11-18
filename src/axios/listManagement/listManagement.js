import request from '@/utils/request'

export function queryDictData(param) {
    return request(
        {
            url: 'DictDimFunc/queryDictData.xhtml',
            method: 'post',
            data: param
        }
    )
}
