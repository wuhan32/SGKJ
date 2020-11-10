import axios from 'axios'



//调用本地Tms
export function DownHandler(p) {
    return axios({
        //url: 'http://localhost:9091/DownHandler?1=1&' + p,
        url: 'http://localhost:9091/DownHandler',
        method: 'post',
        data: p
    })
}



//调用本地签名板
export function Signature() {
    return axios({
        url: 'http://localhost:8333/?order=open',
    })
}

//调用本地Tms保存客户档案接口
export function AddTmsCustomer(jsonData) {
    return axios({
        url: 'http://localhost:9091/CommonHandler',
        method: 'post',
        data: jsonData,
        headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin':'*'
                 }

    })
}
