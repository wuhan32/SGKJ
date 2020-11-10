<template>
  <div class="userInfo">
    <section style="min-width: 1520px">
      <p class="patientInfo">
        患者姓名:
        <i>{{ patientInfo.customerName }}</i> &nbsp;年龄:
        <i>{{ patientInfo.birthDate | getAge }}岁</i>&nbsp; 性别:
        <i>{{ sex[patientInfo.sex] }}</i
        >&nbsp; 病历号: <i>{{ patientInfo.patientId }}</i
        >&nbsp;
        <a href="javascript:;" @click="goNewRecord">查看客户档案</a>
      </p>
      <div class="accomplish" >
        <p @click="clientInfo">会诊</p>
        <p @click="transferTreatment">转诊</p>
        <p @click="setVisit" v-show="customerState == 1 || isMian == 1">
          就诊完成
        </p>
        <p @click="completeOver" v-show="customerState == 10 && isMian == 0">
          会诊完成
        </p>
      </div>
    </section>
    <!-- 医生列表弹框 -->
    <el-dialog
      title="医生列表"
      :visible.sync="dialogVisible"
      center
      class="dialogDoc"
    >
      <el-select
        size="medium"
        @change="doctorInfo($event)"
        v-model="doctorNameId"
        placeholder="会诊医生"
      >
        <el-option
          v-for="item in doctorListL"
          :key="item.doctorName"
          :label="item.doctorName"
          :value="item.doctorId"
        ></el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toDoctor()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 就诊完成状态 -->
    <el-dialog title="请选择就诊结果" :visible.sync="outerVisible">
      <div class="radioButton">
        <vxe-radio v-model="radio" label="6">复诊</vxe-radio>
        <vxe-radio v-model="radio" label="7">未诊</vxe-radio>
        <vxe-radio v-model="radio" label="8">弃诊</vxe-radio>
        <vxe-radio v-model="radio" label="9">转诊</vxe-radio>
      </div>
      <div slot="footer" class="dialog-footer2">
        <el-button type="primary" size="mini" @click="accomplish">确 定</el-button>
        <el-button size="mini" @click="outerVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  doctorRecord,
  SetVisitState,
  SelectCustomerById,
  GetDoctorsByOrganCode,
  ReqestGroupExam,
  ReqestReferral,
  CompleteGroupExam,
} from "@/api/clientRecord";

import ROLEID from "../../../utils/roleId";

export default {
  data() {
    return {
      radio: "4",
      doctorId: "",
      doctorNameId: "",
      doctorListL: [],
      dialogVisible: false,
      cusKeyId: "",
      patientId: "",
      //用户ID
      userId: this.$store.state.userInfo.Id,
      //机构ID
      organCode: this.$store.state.organizationList.organCode,
      customerState: null,
      teacherAge: 0,
      patientInfo: {},
      //就诊状态
      forceFinishGroupExam: "",
      tabList: 0,
      //医生角色ID
      RECEPTIONIST: ROLEID.RECEPTIONIST,
      headTabList: [
        {
          id: 0,
          name: "就诊记录",
          icon: "iconfont icon-ziyuan136",
        },
        {
          id: 1,
          name: "眼底照片",
          icon: "iconfont icon-picture",
        },
        {
          id: 2,
          name: "角膜地形图",
          icon: "iconfont icon-tuxingtuxiangchuli",
        },
      ],
      doctorRecordMenList: {
        adaptation: "适配染色",
        firstExam: "新诊",
        newMirror: "新镜染色",
        reviewExam: "复诊",
      },
      patientState: "",
      sex: {
        F: "女",
        M: "男",
      },
      //是否是主治医生   0非主治医生  1主治医生
      isMian: "",
      outerVisible: false,
    };
  },
  created() {
    console.log("isMian+++++++++", this.isMian);
    const organizationList = window.localStorage.getItem("organizationList");
    if (window.sessionStorage.target) {
      const target = window.sessionStorage.getItem("target");
      this.cusKeyId = JSON.parse(target).cusKeyId;
      console.log(this.cusKeyId);
    }

    if (!organizationList) {
      this.organCode = "ZHDG005";
    } else {
      var s = this.$store.state.organizationList.organCode;
      if (s === undefined) {
        this.$store.commit(
          "$_setOrganizationList",
          JSON.parse(localStorage.getItem("organizationList"))
        );
      }
      this.organCode = this.$store.state.organizationList.organCode;
    }
    this.getDoctorsByOrganCode();
    this.selectCustomerById();
    console.log("userId", this.userId);
  },
  mounted() {},

  methods: {
    goNewRecord() {
      this.$router.push({
        path: "/newRecord",
        query: {
          cusKeyId: this.cusKeyId,
        },
      });
    },
    websockSend(msg, userid) {
      // this.$websocket.dispatch("WEBSOCKET_SEND", {
      //   Text: msg,
      //   Type: 1,
      //   Userid: userid,
      // });
      let fromuserid = this.$store.state.userInfo.Id;
      let data = {
        Text: msg,
        Type: 1,
        Userid: userid,
      };
      this.$stompStore.dispatch("STOMP_SEND", {
        fromuserid: fromuserid,
        touserid: userid,
        p: data,
      });
    },
    open() {
      this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
        dangerouslyUseHTMLString: true,
      });
      this.$confirm("确认是否会诊完成", "提示", {
        confirmButtonText: "完成",
        cancelButtonText: "未完成",
        type: "warning",
      })
        .then(() => {
          this.outerVisible = true;
          this.forceFinishGroupExam = true;
          // 发送消息WEBSOCKET_SEND
          // this.$websocket.dispatch("WEBSOCKET_SEND", {
          //   Text: "",
          //   Type: 4,
          // });
          let fromuserid = this.$store.state.userInfo.Id;
          let data = {
            Text: "完成会诊",
            Type: 4,
            Userid: userid,
          };
          this.$stompStore.dispatch("STOMP_SEND", {
            fromuserid: fromuserid,
            touserid: userid,
            p: data,
          });
        })
        .catch(() => {
          this.forceFinishGroupExam = false;
        });
    },
    //会诊
    clientInfo() {
      this.patientState = 1;
      this.dialogVisible = true;
    },
    //转诊
    transferTreatment() {
      this.patientState = 2;
      this.dialogVisible = true;
    },
    //会诊完成
    completeOver() {
      this.completeGroupExam();
    },
    //点击就诊完成
    accomplish() {       
      this.forceFinishGroupExam = true;
      this.setVisitState();
    },
    doctorInfo(doctorId) {
      console.log(doctorId);
      this.doctorId = doctorId;
    },
    setVisit() {
      if (this.isMian == 1 && this.customerState == 10) {
        this.open();
      } else {
        // 发送消息WEBSOCKET_SEND
        // this.$websocket.dispatch("WEBSOCKET_SEND", {
        //   Text: "",
        //   Type: 4,
        // });
        this.outerVisible = true;
      }
    },
    //
    toDoctor() {
      this.dialogVisible = false;
      console.log(this.patientState);
      if (this.patientState == 1) {
        this.reqestGroupExam();
      } else if (this.patientState == 2) {
        this.reqestReferral();
      }
    },

    //申请会诊
    async reqestGroupExam() {
      const { data: res } = await ReqestGroupExam(
        this.cusKeyId,
        this.organCode,
        +this.doctorId
      ).then();
      if (res.code == 0) {
        // data={
        //   Text: "申请会诊" + this.doctorId,
        //   Type: 4,
        //   Userid: this.doctorId,
        // };
        // let fromuserid = this.$store.state.userInfo.id;
        // this.$stompStore.dispatch("STOMP_SEND", {fromuserid:fromuserid, touserid:this.doctorId, p:data});
        this.$message({
          message: "会诊成功",
          type: "success",
        });
        let msg = `【${this.$store.state.userInfo.TrueUserName}】寻求会诊,对象【${this.$store.state.target.name}】`;
        this.websockSend(msg, this.doctorId);
        this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);
      } else {
        this.$message({
          message: res.message,
          type: "success",
        });
      }
      console.log("会诊", res);
    },
    //申请转诊
    async reqestReferral() {
      const { data: res } = await ReqestReferral(
        this.cusKeyId,
        this.organCode,
        +this.doctorId
      ).then();
      if (res.code == 0) {
        // this.$websocket.dispatch("WEBSOCKET_SEND", {
        //   Text: "",
        //   Type: 1,
        // });
        // let fromuserid = this.$store.state.userInfo.Id;
        // var data = {
        //   Text: "申请转诊,医生ID（" + this.doctorId + ")",
        //   Type: 1,
        //   Userid: this.doctorId,
        // };
        this.$message({
          message: "转诊成功",
          type: "success",
        });
        let msg = `【${this.$store.state.userInfo.TrueUserName}】已将【${this.$store.state.target.name}】转诊至您会诊列表`;
        this.websockSend(msg, this.doctorId);
        this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);

        console.log(this.doctorId);
      } else {
        this.$message({
          message: res.message,
          type: "success",
        });
      }
      console.log("转诊", res);
    },
    //会诊完成
    async completeGroupExam() {
      const { data: res } = await CompleteGroupExam(
        this.cusKeyId,
        this.organCode,
        +this.userId
      ).then();
      if (res.code == 0) {
        // this.$websocket.dispatch("WEBSOCKET_SEND", {
        //   Text: "",
        //   Type: 1,
        // });
        let fromuserid = this.$store.state.userInfo.Id;
        var data = {
          Text: "会诊完成,医生ID（" + this.userId + ")",
          Type: 1,
          Userid: this.userId,
        };
        this.$stompStore.dispatch("STOMP_SEND", {
          fromuserid: fromuserid,
          touserid: this.userId,
          p: data,
        });
        this.$router.push({
          path: "/workbenchRight",
        });
        this.$message({
          message: "会诊成功",
          type: "success",
        });
        this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);
      } else {
        this.$message({
          message: res.message,
          type: "success",
        });
      }
      console.log("会诊", res);
    },
    //就诊完成
    async setVisitState() {
      const { data: res } = await SetVisitState(
        this.cusKeyId,
        this.organCode,
        this.radio,
        this.userId,
        this.forceFinishGroupExam
      ).then();
      this.outerVisible = false;
      switch (res.code) {
        case 0:
          this.$message({
            message: "就诊完成",
            type: "success",
          });
          this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);
          break;
        case 1:
          this.$message({
            message: "非本人待诊病号",
            type: "warning",
          });
          break;
        case 2:
          this.$message({
            message: "非待诊病号",
            type: "warning",
          });
          break;
      }
    },
    //查询患者信息详情
    async selectCustomerById() {
      if (window.sessionStorage.target) {
        const target = window.sessionStorage.getItem("target");
        let cusKeyId = JSON.parse(target).cusKeyId;
        const { data: res } = await SelectCustomerById(cusKeyId).then();
        console.log("患者信息", res);
        this.patientInfo = res.data;
      }
    },
    //医生列表
    async getDoctorsByOrganCode() {
      const { data: res } = await GetDoctorsByOrganCode(
        this.organCode,
        ROLEID.DOCTOR
      ).then();
      this.doctorListL = res.data;
      console.log("医生列表", res);
    },
  },

  filters: {
    getAge: function (value) {
      let birthdays = new Date(value);
      let d = new Date();
      let age =
        d.getFullYear() -
        birthdays.getFullYear() -
        (d.getMonth() < birthdays.getMonth() ||
        (d.getMonth() == birthdays.getMonth() &&
          d.getDate() < birthdays.getDate())
          ? 1
          : 0);
      return age;
    },
  },

  computed: {
    menuFlg() {
      return this.$store.state.menuFlg;
    },
    // stateWebsocketType() {
    //   return this.$websocket.state.websockList;
    // },
    watchcusKeyId() {
      return this.$store.state.cusKeyId;
    },
  },
  watch: {
    menuFlg(a, b) {
      this.selectCustomerById();
    },
    $route(a, b) {
      this.customerState = this.$route.query.customerState;
      const target = window.sessionStorage.getItem("target");
      if (target) {
        this.isMian = JSON.parse(target).isMian;
      }
    },
    watchcusKeyId(a, b) {
      this.cusKeyId = a;
      this.selectCustomerById();
    },
    stateWebsocketType(a, b) {},
    "$store.state.eyeImgs": function (a) {
      //你需要执行的代码
      if (a) {
        this.close = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
section {
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;
  border-bottom: 2px solid rgba(182, 240, 182, 0.5);
  display: flex;
  justify-content: space-between;
  .patientInfo {
    font-size: 20px;
    transform: translateX(100px);
    i {
      margin: 0 4px;
    }
    a {
      font-size: 18px;
      margin-left: 20px;
    }
  }
  .accomplish {
    text-align: center;
    display: flex;
    p {
      font-size: 15px;
      font-weight: 700;
      width: 70px;
      text-decoration: underline;
      &:hover {
        background-color: #d9e6e7;
      }
    }
    i {
      font-size: 30px;
    }
  }
  ul {
    display: flex;
    align-items: center;
    .tabLIst {
      background-color: #d9e6e7;
    }
    li {
      width: 130px;
      text-align: center;
      border-right: 1px solid #ccc;
      &:hover {
        background-color: #d9e6e7;
      }
      i {
        font-size: 30px;
      }
      p {
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
}
.radioButton {
  display: flex;
}
.dialog-footer2{
 border-top: 1px solid #ccc;
 padding: 2px 5px 2px 5px;
} 

.dialog-footer2 button{
    background-color: #6699CC;
    color: white;
}
</style>