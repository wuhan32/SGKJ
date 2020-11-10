import axios from '../utils/axios'

//客户档案
export function doctorRecord(pageSize, currentPage, searchType, value, startdate, enddate) {
    return axios({
        url: 'Customer/ClientRecordList',
        method: 'post',
        data: {
            pageSize,
            currentPage,
            searchType,
            value, startdate, enddate
        }
    })
}
//查询客户详情
export function SelectCustomerById(cuskeyid) {
    return axios({
        url: 'Customer/SelectCustomerById',
        method: 'post',
        params: {
            cuskeyid
        }
    })

}

//添加用户档案
export function AddCustomer(formInline) {
    return axios({
        url: 'Customer/AddCustomer',
        method: 'post',
        data: formInline
    })

}


//编辑用户档案
export function UpdateCustomer(formInline) {
    return axios({
        url: 'Customer/UpdateCustomer',
        method: 'post',
        data: formInline
    })

}

//获取医生列表
export function GetDoctorsByOrganCode(organCode, roleCode) {
    return axios({
        url: 'Customer/getDoctorsByOrganCode',
        method: 'post',
        data: {
            organCode,
            roleCode
        }
    })
}

//选择医生
export function AssignThePatientToDoctor(cusKeyId, doctorId, orgincode) {
    return axios({
        url: "Customer/assignThePatientToDoctor",
        method: 'post',
        data: {
            cusKeyId, doctorId, orgincode
        }
    })
}
//申请会诊/api/Customer/ReqestGroupExam
export function ReqestGroupExam(cusKeyId, organCode, userId) {
    return axios({
        url: "Customer/ReqestGroupExam",
        method: 'post',
        data: {
            cusKeyId, organCode, userId
        }
    })
}
//完成会诊/api/Customer/CompleteGroupExam
export function CompleteGroupExam(cusKeyId, organCode, userId) {
    return axios({
        url: "Customer/CompleteGroupExam",
        method: 'post',
        data: {
            cusKeyId, organCode, userId
        }
    })
}
//申请转诊/api/Customer/ReqestReferral
export function ReqestReferral(cusKeyId, organCode, userId) {
    return axios({
        url: "Customer/ReqestReferral",
        method: 'post',
        data: {
            cusKeyId, organCode, userId
        }
    })
}
//就诊完成
export function SetVisitState(cusKeyId, organCode, customerState, doctorId, forceFinishGroupExam) {
    return axios({
        url: "Customer/SetVisitState",
        method: 'post',
        data: {
            cusKeyId,
            organCode,
            customerState: +customerState,
            doctorId,
            nextExamDate: "",
            nextExamReason: "",
            forceFinishGroupExam
        }
    })
}

//获取医生限额列表
export function GetDoctorLimitList() {
    return axios({
        url: "Customer/GetLimitList",
        method: 'post'

    });

}
export function SetDoctorLimitByList(list) {
    return axios({
        url: "Customer/SetDoctorLimitByList",
        method: 'post',
        data: list

    });

}
//获取检查列表
export function GetCheckMenuList(organCode) {
    return axios({
        url: "Customer/GetCheckMenuList",
        method: 'post',
        params: {
            organCode
        }
    })
}

//获取历史已诊信息/api/Customer/GetHistoryExamed
export function GetHistoryExamed(userId, organCode) {
    return axios({
        url: "Customer/GetHistoryExamed",
        method: 'post',
        data: {
            userId,
            organCode
        }
    })
}

//新建就诊/api/EMR/GetTreeExamItemModels
export function GetTreeExamItemModels(organCode) {
    return axios({
        method: 'post',
        url: "EMR/GetTreeExamItemModels",
        params: {
            organCode
        }
    })
}

//保存就诊 /api/EMR/CreateExamItemRecord
export function CreateExamItemRecord(emaKeyId, cusKeyId, organName, organCode, doctorName, doctorKeyId, examTypeId, examItemLists, examCategory) {
    return axios({
        method: 'post',
        url: "EMR/CreateExamItemRecord",
        data: {
            emaKeyId, cusKeyId, organName, organCode, doctorName, doctorKeyId: +doctorKeyId, examTypeId, examItemLists, examCategory
        }
    })
}

//修改就诊 /api/EMR/CreateExamItemRecord
export function UpdateCustomerExamItem(examItemLists) {
    return axios({
        method: 'post',
        url: "/EMR/UpdateCustomerExamItem",
        data: examItemLists
    })
}

//修改就诊类型分类  /api/EMR/GetCustomerExamListByEmaKeyid
export function GetCustomerExamListByEmaKeyid(organCode, emakeyid) {
    console.log('organCode : ' + organCode + ', emakeyid : ' + emakeyid)
    return axios({
        url: "EMR/GetCustomerExamListByEmaKeyid",
        method: 'post',
        params: {
            organCode,
            emakeyid
        }

    })
}
// 工作人员列表   /api/EMR/GetCheckList

export function GetCheckList(organCode, checkType) {
    return axios({
        url: 'EMR/GetCheckList',
        method: 'post',
        data: {
            organCode,
            checkType
        }
    })
}

//api​/EMR​/ApproveSubmit 提交删除审核
export function ApproveSubmit(orginCode, applicant, emaKeyId, checker, type, cusKeyId) {
    return axios({
        url: 'EMR/ApproveSubmit',
        method: 'post',
        data: {
            orginCode, applicant, emaKeyId, checker, type, cusKeyId
        }
    })
}

//api/EMR/GetApproveList 查询审核列表
export function GetApproveList(orginCode, userid) {
    return axios({
        url: 'EMR/GetApproveList',
        method: 'post',
        data: {
            orginCode, userid
        }
    })
}

//api/EMR/GetApproveExamList 二级待审核列表
export function GetApproveExamList(orginCode, cusKeyId) {
    return axios({
        url: 'EMR/GetApproveExamList',
        method: 'post',
        data: {
            orginCode, cusKeyId
        }
    })
}


//删除就诊档案

export function aDelete( emaKeyId,checkvalue) {
    return axios({
        url: 'EMR/Delete',
        method: 'post',
        data: {
            emaKeyId,checkvalue
        }
    })
}


//​/api​/EMR​/BatchApprove/批量审核删除的

export function BatchApprove(orginCode, cusKeyId,checkvalue) {
    return axios({
        url: 'EMR/BatchApprove',
        method: 'post',
        data: {
            orginCode, cusKeyId,checkvalue
        }
    })
}

