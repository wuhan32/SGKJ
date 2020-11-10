import axios from '../utils/axios'

//查询/就诊档案
export function SearchExamRecord(cusKeyId, examType, pageSize, pageIndex) {
    return axios({
        url: 'EMR/SearchExamRecord',
        method: 'post',
        data: {
            cusKeyId, examType, pageSize, pageIndex
        }
    })
}

//查询/就诊档案医生
export function GetDoctorIdByEmaKeyId(emaKeyId) {
    return axios({
        url: 'EMR/GetDoctorIdByEmaKeyId',
        method: 'get',
        params: { emaKeyId }
    })
}


//进入就诊档案生成ID
// export function Add(data) {
//     return axios({
//         url: 'EMR/Add',
//         method: 'post',
//         data: data
//     })
// }


//新建就诊档案保存/api/EMR/AddExamItemDetail
export function AddExamItemDetail(emaKeyId, data, saveFieldName) {
    return axios({
        url: 'EMR/AddExamItemDetail',
        method: 'post',
        data: {
            emaKeyId,
            data,
            saveFieldName
        }
    })
}


//获取就诊详情
export function GetExamDetail(emaKeyId) {
    return axios({
        url: 'EMR/GetExamItemDetail',
        method: 'post',
        params: {
            emaKeyId
        },

    })
}

//修改就诊档案
export function Update(emaKeyId, doctorName, doctorKeyId) {
    return axios({
        url: 'EMR/Update',
        method: 'post',
        data: {
            emaKeyId,
            doctorName,
            doctorKeyId
        }
    })
}


//保存拍照数据/api/Customer/SaveSignCamera

export function SaveSignCamera(emaKeyId, examType, userId, photos) {
    return axios({
        url: 'Customer/SaveSignCamera',
        method: 'post',
        data: {
            emaKeyId,
            examType,
            userId,
            photos
        } 
    })
}


//获取拍照照片/api/Customer/GetSignCamera
export function GetSignCamera(emaKeyId) {
    return axios({
        url: 'Customer/GetSignCamera',
        params: {
            emaKeyId,
        }
    })
}



//删除单张拍照图片/api/Customer/DeleteSignCamera

export function DeleteSignCamera(emaKeyId, photoData) {
    return axios({
        url: 'Customer/DeleteSignCamera',
        method: 'post',
        data: {
            emaKeyId,
            photoData
        }
    })
}