import request from '@/utils/request'


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

//视频车位导出
export function exportVideoDetecter(param) {
    return request({
        url: '/DeviceFunc/exportVideoDetecter',
        method: 'post',
        data: param,
        flag: 'innerExt',
        responseType: 'blob'
    })
}

//地锁车位导出
export function exportGroundLock(param) {
    return request({
        url: '/DeviceFunc/exportGroundLock',
        method: 'post',
        data: param,
        flag: 'innerExt',
        responseType: 'blob'
    })
}

//进出口摄像头导出
export function exportPassagewayCamera(param) {
    return request({
        url: '/DeviceFunc/exportPassagewayCamera',
        method: 'post',
        data: param,
        flag: 'innerExt',
        responseType: 'blob'
    })
}

//道闸机导出
export function exportPassagewayGate(param) {
    return request({
        url: '/DeviceFunc/exportPassagewayGate',
        method: 'post',
        data: param,
        flag: 'innerExt',
        responseType: 'blob'
    })
}

//地磁车位导出
export function exportMagneticDetecter(param) {
    return request({
        url: '/DeviceFunc/exportMagneticDetecter',
        method: 'post',
        data: param,
        flag: 'innerExt',
        responseType: 'blob'
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

//道闸机按钮查询 query
export function queryPassagewayGate(param) {
    return request(
        {
            url: 'DeviceFunc/queryPassagewayGate.xhtml',
            method: 'post',
            data: param
        }
    )
}

// 道闸机新增 addPassagewayGate
export function addPassagewayGate(param) {
    return request(
        {
            url: 'DeviceFunc/addPassagewayGate.xhtml',
            method: 'post',
            data: param
        }
    )
}

//道闸机删除 delPassagewayGate
export function delPassagewayGate(param) {
    return request(
        {
            url: 'DeviceFunc/delPassagewayGate.xhtml',
            method: 'post',
            data: param
        }
    )
}

//道闸机修改 updatePassagewayGate
export function updatePassagewayGate(param) {
    return request(
        {
            url: 'DeviceFunc/updatePassagewayGate.xhtml',
            method: 'post',
            data: param
        }
    )
}

//新增出入口摄像头
export function addPassagewayCamera(param) {
    return request({
        url: 'DeviceFunc/addPassagewayCamera',
        method: 'post',
        data: param
    })
}

//出入口摄像头列表查询
export function queryPassagewayCamera(param) {
    return request({
        url: 'DeviceFunc/queryPassagewayCamera',
        method: 'post',
        data: param
    })
}

//基础信息管理信息ETC
export function queryETCList(param) {
    return request({
        url: 'http://123.207.189.27:7138/ETCFunc/queryETCList',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//修改ETC updateETC
export function updateETC(param) {
    return request({
        url: 'http://123.207.189.27:7138/ETCFunc/updateETC',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//新增ETC addETC
export function addETC(param) {
    return request({
        url: 'http://123.207.189.27:7138/ETCFunc/addETC',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//删除ETC
export function delETC(param) {
    return request({
        url: 'http://123.207.189.27:7138/ETCFunc/delETC',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//洗车机列表
export function queryCarWashingMachineList(param) {
    return request({
        url: 'http://123.207.189.27:7138/carWashingMachineFunc/queryCarWashingMachineList',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//新增洗车机 addCarWashingMachine
export function addCarWashingMachine(param) {
    return request({
        url: 'http://123.207.189.27:7138/carWashingMachineFunc/addCarWashingMachine',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//修改洗车机 updateCarWashingMachine
export function updateCarWashingMachine(param) {
    return request({
        url: 'http://123.207.189.27:7138/carWashingMachineFunc/updateCarWashingMachine',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//删除洗车机 delCarWashingMachine
export function delCarWashingMachine(param) {
    return request({
        url: 'http://123.207.189.27:7138/carWashingMachineFunc/delCarWashingMachine',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//充电桩列表查询 queryChargePileList
export function queryChargePileList(param) {
    return request({
        url: 'http://123.207.189.27:7138/chargePlieFunc/queryChargePileList',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//删除充电桩 delChargePile
export function delChargePile(param) {
    return request({
        url: 'http://123.207.189.27:7138/chargePlieFunc/delChargePile',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//新增充电桩 addChargePile
export function addChargePile(param) {
    return request({
        url: 'http://123.207.189.27:7138/chargePlieFunc/addChargePile',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//修改充电桩 updateChargePile
export function updateChargePile(param) {
    return request({
        url: 'http://123.207.189.27:7138/chargePlieFunc/updateChargePile',
        method: 'post',
        data: param,
        flag: 'out',
    })
}

//导入视频车 batchInsertVideoDetecter
export function batchInsertVideoDetecter(param) {
    return request({
        url: '/DeviceFunc/batchInsertVideoDetecter',
        method: 'post',
        data: param,
    })
}

//文件上传
export function uploadFile(param) {
    return request({
        url: 'http://localhost:8000/FileController/upFile',
        method: 'post',
        data: param,
        flag: 'out'
    })
}

//导出ETC数据
export function exportETC(param) {
    return request({
        url: 'http://localhost:8000/ETCFunc/exportETC',
        method: 'post',
        data: param,
        flag: 'out'
    })
}
