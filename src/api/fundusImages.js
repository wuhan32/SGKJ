import axios from '../utils/axios'

//获取眼底照片列表
export function GetEyeList(id) {
    return axios({
        url: 'Tms/GetEyeList',
        method: 'post',
        params: {
            cusKeyId: id
        }
    })
}


// //获取角膜地形图片列表
// export function SelectTmsExam(par) {
//     return axios({
//         url: 'Tms/SelectTmsExam',
//         method: 'post',
//         params: {
//             par
//         }
//     })
// }

//获取角膜地形图片列表
export function SelectTmsExam(cuskeyid, pageSize, pageIndex) {
    return axios({
        url: 'Tms/GetTmsByPage',
        method: 'post',
        data: {
            cuskeyid,
            pageSize,
            pageIndex
        }
    })
}


//获取下载的JOSN
export function GetTmsJson(data) {
    return axios({
        url: 'Tms/GetTmsJson',
        method: 'post',
        data
    })
}


export function SavePictureComment(organCode, fileName, pictureType, eyeType, comment, userId) {
    return axios({
        url: 'EMR/SavePictureComment',
        method: 'post',
        data: {
            organCode,
            fileName,
            pictureType,
            eyeType,
            comment,
            userId: Number
        }
    })
}


