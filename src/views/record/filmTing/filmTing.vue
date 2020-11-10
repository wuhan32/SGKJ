<template>
  <!-- 验片记录 -->
  <div class="spacing">
    <header>
      <div class="header-left">
        到货日期:
        <el-date-picker
          v-model="savemessage.inputList.input1"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          size="mini"
        ></el-date-picker>
        <!-- <input type="text" v-model="savemessage.inputList.inputList1" />年
        <input type="text" v-model="savemessage.inputList.inputList2" /> 月
        <input type="text" v-model="savemessage.inputList.inputList3" />日-->
      </div>
      <div class="header-right">
        <el-checkbox v-model="verifierCheck" @change="Setverifier"
          >收片人</el-checkbox
        >
        <!-- 收片人: -->
        <!-- <input type="checkbox" v-model="verifierCheck" @click="Setverifier" /> -->
        <input
          type="text"
          v-model="savemessage.inputList.verifierCheck"
          maxlength="16"
          disabled
        />
        <!-- <el-select v-model="savemessage.inputList.inputList4" placeholder="请选择" size="mini">
          <el-option
            v-for="item in doctorListL"
            :key="item.keyId"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>-->
        <el-checkbox v-model="adapterCheck" @change="Setvadapterr">
          验片人</el-checkbox
        >
        <!-- 验片人: -->
        <!-- <input type="checkbox" v-model="adapterCheck" @click="Setvadapterr" /> -->
        <input
          type="text"
          v-model="savemessage.inputList.adapterCheck"
          maxlength="16"
          disabled
        />
        <!-- <el-select v-model="savemessage.inputList.inputList5" placeholder="请选择" size="mini">
          <el-option
            v-for="item in doctorListL2"
            :key="item.keyId"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>-->
      </div>
    </header>
    <table>
      <tr>
        <td colspan="2">姓名</td>
        <td>
          <input type="text" v-model="name" />
        </td>
        <td>NO.</td>
        <td colspan="3">
          <input type="text" v-model="savemessage.inputList.inputList7" />
        </td>
        <td colspan="2">患者编号</td>
        <td colspan="5">
          <input type="text" name id v-model="patientId" />
        </td>
      </tr>
      <tr>
        <td rowspan="4">镜片参数</td>
        <td rowspan="2">眼别</td>
        <td rowspan="2" style="width: 300px">屈光处方</td>
        <td colspan="3">BC</td>
        <td colspan="2">AC</td>
        <td rowspan="2">OAD</td>
        <td rowspan="2">片色</td>
        <td rowspan="2">品牌</td>
        <td rowspan="2">类型</td>
        <td rowspan="2">ID</td>
      </tr>
      <tr>
        <td>AW</td>
        <td>KF</td>
        <td>DS</td>
        <td>KG</td>
        <td>DF</td>
      </tr>
      <tr>
        <td>OD</td>
        <td class="Ds">
          <input type="text" v-model="savemessage.inputList.inputList9" /> Ds
          <input type="text" v-model="savemessage.inputList.inputList10" /> dcX
          <input type="text" v-model="savemessage.inputList.inputList11" /> =
          <input type="text" v-model="savemessage.inputList.inputList12" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList13" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList14" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList15" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList16" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList17" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList18" />
        </td>
        <td>
          <el-select v-model="savemessage.inputList.dropDown18" size="mini">
            <el-option label="无" value="2069">无</el-option>
            <el-option label="绿" value="2070">绿</el-option>
            <el-option label="蓝" value="2071">蓝</el-option>
            <el-option label="橙" value="2072">橙</el-option>
            <el-option label="紫" value="2073">紫</el-option>
          </el-select>
          <!-- <input type="text" v-model="savemessage.inputList.inputList19" /> -->
        </td>
        <td>
          <el-select v-model="savemessage.inputList.dropDown19" size="mini" style="width:100px">
            <el-option label="追梦莱特" value="2074">追梦莱特</el-option>
            <el-option label="欧几里德" value="2075">欧几里德</el-option>
            <el-option label="阿尔法" value="2076">阿尔法</el-option>
          </el-select>
          <!-- <input type="text" v-model="savemessage.inputList.inputList20" /> -->
        </td>
        <td>
          <!-- <input type="text" v-model="savemessage.inputList.inputList21" /> -->
          <el-select v-model="savemessage.inputList.dropDown26" size="mini">
            <el-option label="常1" value="1">常1</el-option>
            <el-option label="常2" value="2">常2</el-option>
            <el-option label="特" value="3">特</el-option>
            <el-option label="散" value="4">散</el-option>
          </el-select>
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList22" />
        </td>
      </tr>
      <tr>
        <td>OS</td>
        <td class="Ds">
          <input type="text" v-model="savemessage.inputList.inputList23" /> Ds
          <input type="text" v-model="savemessage.inputList.inputList24" /> dcX
          <input type="text" v-model="savemessage.inputList.inputList25" /> =
          <input type="text" v-model="savemessage.inputList.inputList26" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList27" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList28" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList29" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList30" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList31" />
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList32" />
        </td>
        <td>
          <el-select v-model="savemessage.inputList.dropDown20" size="mini">
            <el-option label="无" value="2069">无</el-option>
            <el-option label="绿" value="2070">绿</el-option>
            <el-option label="蓝" value="2071">蓝</el-option>
            <el-option label="橙" value="2072">橙</el-option>
            <el-option label="紫" value="2073">紫</el-option>
          </el-select>
          <!-- <input type="text" v-model="savemessage.inputList.inputList19" /> -->
        </td>
        <td>
          <el-select v-model="savemessage.inputList.dropDown21" size="mini">
            <el-option label="追梦莱特" value="2074">追梦莱特</el-option>
            <el-option label="欧几里德" value="2075">欧几里德</el-option>
            <el-option label="阿尔法" value="2076">阿尔法</el-option>
          </el-select>
          <!-- <input type="text" v-model="savemessage.inputList.inputList20" /> -->
        </td>
        <td>
          <!-- <input type="text" v-model="savemessage.inputList.inputList35" />   -->
          <el-select v-model="savemessage.inputList.dropDown25" size="mini">
            <el-option label="常1" value="5">常1</el-option>
            <el-option label="常2" value="6">常2</el-option>
            <el-option label="特" value="7">特</el-option>
            <el-option label="散" value="8">散</el-option>
          </el-select>
        </td>
        <td>
          <input type="text" v-model="savemessage.inputList.inputList36" />
        </td>
      </tr>
      <tr>
        <th rowspan="3" style="width: 20px">镜片外观</th>
        <td>眼别</td>
        <th>外表面</th>
        <th colspan="2">基弧区</th>
        <th colspan="2">反转弧区</th>
        <th colspan="2">定位弧区</th>
        <th colspan="2">边弧区</th>
        <th colspan="2">处理</th>
      </tr>
      <tr>
        <td>OD</td>
        <th>
          <vxe-radio
            label="1"
            v-model="savemessage.inputList.radio1"
            style="margin-left: 30px"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio1" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio1" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio
            v-model="savemessage.inputList.radio1"
            label="4"
            style="margin-left: 32px"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio1" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio1" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio2" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio2" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio2" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio2" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio2" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio2" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio3" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio3" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio3" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio3" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio3" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio3" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio4" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio4" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio4" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio4" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio4" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio4" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio5" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio5" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio5" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio5" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio5" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio5" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio6" label="1"
            >记录消毒</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio6" label="2"
            >通知家属</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio6" label="3"
            >上报反馈</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio6" label="4"
            >退回厂家</vxe-radio
          >
        </th>
      </tr>
      <tr>
        <td>OS</td>
        <th>
          <vxe-radio
            v-model="savemessage.inputList.radio7"
            label="1"
            style="margin-left: 30px"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio7" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio7" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio
            v-model="savemessage.inputList.radio7"
            label="4"
            style="margin-left: 31px"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio7" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio7" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio8" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio8" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio8" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio8" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio8" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio8" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio9" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio9" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio9" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio9" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio9" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio9" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio10" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio10" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio10" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio10" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio10" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio10" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio11" label="1"
            >光洁</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio11" label="2"
            >粗糙</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio11" label="3"
            >划痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio11" label="4"
            >裂痕</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio11" label="5"
            >缺损</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio11" label="6"
            >破损</vxe-radio
          >
        </th>
        <th colspan="2">
          <vxe-radio v-model="savemessage.inputList.radio12" label="1"
            >记录消毒</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio12" label="2"
            >通知家属</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio12" label="3"
            >上报反馈</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio12" label="4"
            >退回厂家</vxe-radio
          >
        </th>
      </tr>
      <tr>
        <td>其它</td>
        <td colspan="12">
          <input type="text" v-model="savemessage.inputList.inputList37" />
        </td>
      </tr>
    </table>
    <div class="save">
      <vxe-button status="warning" @click="save" :disabled="!voluntarilyFlag"
        >保存</vxe-button
      >
    </div>
  </div>
</template>

<script>
import {
  SelectCustomerById,
  GetDoctorsByOrganCode,
  GetCheckList,
} from "@/api/clientRecord";
import { AddExamItemDetail, GetExamDetail } from "@/api/doctorRecord";
import ROLEID from "../../../utils/roleId";

export default {
  data() {
    return {
      name: "",
      patientId: "",
      voluntarilyFlag: false,
      verifierCheck: false, //适配师多选
      adapterCheck: false, //验配师多选
      doctorListL: [],
      doctorListL2: [],
      //用户信息
      formInline: {},
      value: "",
      savemessage: {
        inputList: {
          input1: this.getNowTime(),
          inputList6: "",
          inputList8: "",
          verifierCheck: "",
          adapterCheck: "",
        },
        checkList: [],
      },
      emaKeyId: this.$route.query.emaKeyId,
      //获取ID 所需的值
      productionId: {
        cusKeyId: this.$route.query.id,
        organName: "",
        organCode: "",
        doctorName: "",
        doctorKeyId: 0,
        examType: 3,
      },
    };
  },
  created() {
    const target = window.sessionStorage.getItem("target");
    this.name = JSON.parse(target).name;
    this.patientId = JSON.parse(target).patientId;
    const organList = JSON.parse(
      window.localStorage.getItem("organizationList")
    );
    this.organCode = organList.organCode;
    this.selectCustomerById();
    this.getExamDetail();
    this.getCheckList();
    this.getCheckList1();
  },
  beforeDestroy() {
    if (this.voluntarilyFlag) {
      //this.save();
    }
  },
  updated() {
    this.emaKeyId = this.$route.query.emaKeyId;
  },

  mounted() {},
  methods: {
    handleCheckAllChange(value) {},
    //收片人列表
    async getCheckList() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.CHARGEPICE
      ).then();
      this.doctorListL = res.data;
      console.log("适配师列表", this.doctorListL);
    },
    //验片人列表
    async getCheckList1() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.TESTPICE
      ).then();
      this.doctorListL2 = res.data;
      console.log("验光师列表", this.doctorListL2);
    },
    //保存新建档案
    async save() {
      console.log(this.emaKeyId, JSON.stringify(this.savemessage));
      const { data: res } = await AddExamItemDetail(
        this.emaKeyId,
        JSON.stringify(this.savemessage)
      ).then();
      console.log(res);
      if (res.data) {
        this.$message({
          message: "保存成功",
          type: "success",
        });
        this.voluntarilyFlag = false;
      }
    },
    //查询患者信息详情
    async selectCustomerById() {
      const cusKeyId = JSON.parse(window.sessionStorage.getItem("cusKeyId"));
      const { data: res } = await SelectCustomerById(cusKeyId).then();
      this.formInline = res.data;
    },
    async Setverifier() {
      //验配师

      if (this.verifierCheck != true) {
        this.savemessage.inputList.verifierCheck = null; //取消选择设置为空
        // this.verifierCheck = false;
        //this.verifierDisable = true;
        this.voluntarilyFlag = true;
      } else {
        // var rolecode = this.$store.state.userInfo.RoleCode;
        // console.log("输出rolecode:", rolecode);
        // if (rolecode.indexOf("verifier") !== -1) {
        this.savemessage.inputList.verifierCheck = this.$store.state.userInfo.TrueUserName; //如果角色符合设置为当前姓名
        // this.verifierDisable = false;
        this.voluntarilyFlag = true;
        // }

        // this.verifierCheck = true;
      }
    },
    async Setvadapterr() {
      //适配师

      if (this.adapterCheck != true) {
        this.savemessage.inputList.adapterCheck = null; //取消选择设置为空
        // this.adapterCheck = false;
        this.voluntarilyFlag = true;
      } else {
        // var rolecode = this.$store.state.userInfo.RoleCode;
        // if (rolecode.indexOf("adapter") !== -1) {
        this.savemessage.inputList.adapterCheck = this.$store.state.userInfo.TrueUserName; //如果角色符合设置为当前姓名
        this.voluntarilyFlag = true;
        // }
        //this.adapterCheck = true;
      }
    },
    //查看病例信息
    async getExamDetail() {
      this.verifierCheck = false; //重新获取的时候设置默认值
      this.adapterCheck = false;
      this.voluntarilyFlag = false;
      const { data: res } = await GetExamDetail(
        this.$route.query.emaKeyId
      ).then();
      console.log("表格数据", res);
      if (res.data.checkjson) {
        this.savemessage = JSON.parse(res.data.checkjson);
      } else {
        this.savemessage = {
          checkList: [],
          inputList: { input1: this.getNowTime() },
        };
      }
      if (
        this.savemessage.inputList.verifierCheck == null ||
        this.savemessage.inputList.verifierCheck == ""
      ) {
        //判断获取的数据是否又值
        // this.verifierDisable = true;
        this.verifierCheck = false;
      } else {
        //this.verifierDisable = false;
        this.verifierCheck = true;
      }
      if (
        this.savemessage.inputList.adapterCheck == null ||
        this.savemessage.inputList.adapterCheck == ""
      ) {
        //判断适配师是否有值
        this.adapterCheck = false;
      } else {
        this.adapterCheck = true;
      }
    },
    //处理默认选中当前日期
    getNowTime() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth(); //得到月份
      var date = now.getDate(); //得到日期
      var hour = " 00:00:00"; //默认时分秒 如果传给后台的格式为年月日时分秒，就需要加这个，如若不需要，此行可忽略
      month = month + 1;
      month = month.toString().padStart(2, "0");
      date = date.toString().padStart(2, "0");
      var defaultDate = `${year}-${month}-${date}${hour}`;
      console.log(defaultDate);
      return defaultDate;
      this.$set(this.info, "stockDate", defaultDate);
    },
  },
  watch: {
    $route(newValue, oldValue) {
      if (this.voluntarilyFlag) {
        //this.save();
      }
      this.getExamDetail();
    },
    savemessage: {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag = true;
        }
      },
      deep: true, //true 深度监听
    },
  },
};
</script>

<style lang="less" scoped>
.spacing {
  width: 1500px;
  margin: 10px;
  font-size: 18px;
  background-color: #d2dff4;
  padding: 2px;
  header {
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    width: 1500px;
    margin: 0 auto;
    .header-left {
      input {
        width: 50px;
        border-bottom: 1px solid #000;
      }
    }
  }
}

table {
  border-collapse: collapse;
  background-color: #f2f2f2;
}
table,
th,
tr,
td {
  font-weight: 400;
  border: 1px solid #000;
  text-align: center;
  input {
    width: 99%;
    height: 30px;
  }
  ul {
    padding: 2px 15px;
    box-sizing: border-box;
    text-align: left;
  }
}
.save {
  text-align: right;
}
.Ds {
  input {
    width: 50px;
  }
}
.vxe-radio {
  margin: 0;
  padding-left: 10px;
}
input {
  font-size: 20px;
}
</style>