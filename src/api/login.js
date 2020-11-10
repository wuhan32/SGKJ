import axios from '../utils/axios'

//获取验证码图片
export function GetValidateCode() {
    return axios({
        url: 'User/GetValidateCode'
    })
}

//登录
export function login(loginForm) {
    return axios({
        method: 'post',
        url: 'User/Login',
        data: loginForm
    })
}



//获取机构列表
export function UserOrgan() {
    return axios({
        url: 'User/UserOrgan'
    })
}

//获取左侧权限
export function GetMenu(userId, organCode, query) {
    return axios({
        url: 'Customer/GetMenu',
        method: 'post',
        data: {
            userId: +userId,
            organCode,
            query
        }
    })
}

//获取右侧菜单权限/api/Customer/GetExamMenu
export function GetExamMenu(cusKeyId, organCode,states = "0") {
    return axios({
        url: 'Customer/GetExamMenu',
        method: "post",
        data: {
            cusKeyId,
            organCode,
            states
        }
    })
}

//获取角色ID/api/User/AllRole
export function AllRole() {
    return axios({
        url: 'User/AllRole',
    })
}