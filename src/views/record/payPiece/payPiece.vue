<template>
  <!-- 交片纪录 -->
  <div class="pay-piece">
    <header>
      <div class="header-left">
        交接日期:
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
        <!-- 指导人: -->
        <!-- <el-select v-model="savemessage.inputList.inputList4" placeholder="请选择" size="mini">
          <el-option
            v-for="item in doctorListL"
            :key="item.keyId"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>-->
        <!-- <input type="checkbox" v-model="adapterCheck" @click="Setvadapterr" /> -->
        <el-checkbox v-model="adapterCheck" @change="Setvadapterr"
          >指导人</el-checkbox
        >
        <input
          type="text"
          v-model="savemessage.inputList.adapterCheck"
          maxlength="16"
          disabled
        />
        <!-- 交镜人: -->
        <!-- <el-select v-model="savemessage.inputList.inputList5" placeholder="请选择" size="mini">
          <el-option
            v-for="item in doctorListL2"
            :key="item.keyId"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>-->
        <el-checkbox v-model="verifierCheck" @change="Setverifier"
          >交镜人</el-checkbox
        >
        <!-- <input type="checkbox" v-model="verifierCheck" @click="Setverifier" /> -->
        <input
          type="text"
          v-model="savemessage.inputList.verifierCheck"
          maxlength="16"
          disabled
        />
      </div>
    </header>
    <table>
      <tr>
        <th>项目</th>
        <th>患者确认</th>
        <th>项目</th>
        <th>患者确认</th>
      </tr>
      <tr>
        <td>是否把《定镜单》交回交镜人？</td>
        <td style="width: 131px">
          <vxe-radio v-model="savemessage.inputList.radio1" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio1" label="2"
            >否</vxe-radio
          >
        </td>
        <td>是否已知护理产品严禁过期使用？</td>
        <td >
          <vxe-radio v-model="savemessage.inputList.radio2" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio2" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否已将责任书、三联单？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio3" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio3" label="2"
            >否</vxe-radio
          >
        </td>
        <td>是否已知护理产品属受控产品，不给网售？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio4" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio4" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否已知该镜片易碎？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio5" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio5" label="2"
            >否</vxe-radio
          >
        </td>
        <td>是否已知网购护理产品容易导致发炎？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio6" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio6" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否已看交镜人演示戴镜、摘镜？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio7" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio7" label="2"
            >否</vxe-radio
          >
        </td>
        <td>是否已知每次复查都需携带镜片？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio8" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio8" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否已学会自行操作戴镜、摘镜？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio9" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio9" label="2"
            >否</vxe-radio
          >
        </td>
        <td>是否已知夜间服务电话？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio10" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio10" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否已学会镜片操作护理？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio11" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio11" label="2"
            >否</vxe-radio
          >
        </td>
        <td>是否已签署《取片确认书》？</td>
        <td style="width: 127px">
          <vxe-radio v-model="savemessage.inputList.radio12" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio12" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否学会镜片掉落时捡取方式？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio13" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio13" label="2"
            >否</vxe-radio
          >
        </td>
        <td rowspan="5" colspan="2">
          <img
            src="../../../assets/img/1603347809(1).jpg"
            alt=""
            style="width: 100%; height: 100%"
          />
          <!-- <ul>
            <li>特别注意事项</li>
            <li>1、采用凉开水冲镜片,严禁用自来水；</li>
            <li>2、摘镜前先滴舒润液,待镜片滑动后再摘取出；</li>
            <li>3、身体不适及免疫力低下时暂停戴镜；</li>
            <li>
              4、平时戴镜不适时可取出清洁后重戴,若仍感不适应停戴,并及时电话咨询或前往验配处检查。
            </li>
          </ul> -->
        </td>
      </tr>
      <tr>
        <td>是否已知镜盒吸棒护理、消毒方式？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio14" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio14" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>已否已知次日早晨戴镜复查？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio15" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio15" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否收到护理包及说明书？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio16" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio16" label="2"
            >否</vxe-radio
          >
        </td>
      </tr>
      <tr>
        <td>是否已知护理产品须自行购买？</td>
        <td>
          <vxe-radio v-model="savemessage.inputList.radio17" label="1"
            >是</vxe-radio
          >
          <vxe-radio v-model="savemessage.inputList.radio17" label="2"
            >否</vxe-radio
          >
        </td>

        <!-- <input type="text" v-model="savemessage.inputList.inputList7" /> -->
      </tr>
      <!-- 添加备注信息 -->
      <tr>
        <td>
          <span>备注 </span>
        </td>
        <td colspan="3">
          <input
            type="text"
            v-model="savemessage.inputList.mark"
            maxlength="16"
            style="width: 99%"
          />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          收镜人（监护人）/签名：
          <v-signature />
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

//签名
import vSignature from "../../../components/signature/signature";

export default {
  data() {
    return {
      voluntarilyFlag: false,
      verifierCheck: false, //适配师多选
      adapterCheck: false, //验配师多选
      doctorListL: [],
      doctorListL2: [],
      value: "",
      savemessage: {
        checkList: [],
        inputList: {
          input1: this.getNowTime(),
          verifierCheck: "",
          adapterCheck: "",
        },
      },
      doctorListL: [],
      emaKeyId: this.$route.query.emaKeyId,
      //获取ID 所需的值
      productionId: {
        cusKeyId: this.$route.query.id,
        organName: "",
        organCode: "",
        doctorName: "",
        doctorKeyId: 0,
        examType: 3,
        organCode: "",
      },
    };
  },
  created() {
    const organList = JSON.parse(
      window.localStorage.getItem("organizationList")
    );
    this.organCode = organList.organCode;
    this.getExamDetail();
    this.getCheckList();
    this.getCheckList1();
  },
  updated() {
    this.emaKeyId = this.$route.query.emaKeyId;
  },
  beforeDestroy() {
    if (this.voluntarilyFlag) {
      //this.save();
    }
  },
  mounted() {},
  components: {
    vSignature,
  },
  methods: {
    handleCheckAllChange(value) {},
    //指导人列表
    async getCheckList() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.GUIDE
      ).then();
      this.doctorListL = res.data;
      console.log("适配师列表", this.doctorListL);
    },
    //交镜人列表
    async getCheckList1() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.CROSSMIRROR
      ).then();
      this.doctorListL2 = res.data;
      console.log("验光师列表", this.doctorListL2);
    },
    //保存新建档案
    async save() {
      const { data: res } = await AddExamItemDetail(
        this.emaKeyId,
        JSON.stringify(this.savemessage)
      ).then();

      if (res.code == 0) {
        this.$message({
          message: "保存成功",
          type: "success",
        });
        this.voluntarilyFlag = false;
      }
    },
    //查看病例信息
    async getExamDetail() {
      // console.log(123123123123123);
      const { data: res } = await GetExamDetail(
        this.$route.query.emaKeyId
      ).then();
      this.voluntarilyFlag = false; //获取了新的档案的时候需要把参数重置
      this.verifierCheck = false;
      this.adapterCheck = false;
      // console.log("表格数据", res);

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
        // this.save();
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
.pay-piece {
  width: 1182px;
  margin: 10px;
  font-size: 18px;
  background-color: #d2dff4;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    width: 1150px;
    margin: 0 auto;
    .header-left {
      input {
        width: 50px;
        border-bottom: 1px solid #000;
      }
    }
    .header-right {
      input {
        margin: 0 2px;
      }
    }
  }
  table {
    border-collapse: collapse;
    background-color: #f2f2f2;
    margin: 0 auto;
  }
  table,
  th,
  tr,
  td {
    border: 1px solid #000;
    text-align: center;
    input {
      width: 150px;
      border: 1px solid #ccc;
      height: 30px;
    }
    ul {
      padding: 2px 15px;
      box-sizing: border-box;
      text-align: left;
    }
  }
}
.save {
  text-align: right;
}
</style>