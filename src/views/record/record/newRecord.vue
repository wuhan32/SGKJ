<template>
  <!-- 新建编辑检查档案 -->
  <el-form
    class="newrecord"
    :rules="rules"
    :model="formInline"
    ref="formInline"
  >
    <section class="newrecord-left">
      <nav>
        <p>
          <i class="iconfont icon-ziliao"></i>
          基本资料
          <span>(注:病历号丶姓名丶电话丶性别丶出生日期为必填项</span>
        </p>
        <el-form-item>
          <el-button
            icon="el-icon-download"
            size="mini"
            @click.native="saverecord()"
            >保存</el-button
          >
          <el-button
            icon="el-icon-download"
            size="mini"
            @click.native="saveTmsRecord()"
            >创建地形图档案</el-button
          >
        </el-form-item>
      </nav>

      <main>
        <ul>
          <li>
            <span> 病历号: </span>
            <el-form-item prop="patientId">
              <el-input
                type="text"
                v-model="formInline.patientId"
                clearable
                maxlength="20"
                :disabled="true"
              />
            </el-form-item>
            <span> <i>*</i>出生日期: </span>
            <el-form-item
              prop="birthDate"
              style="border-bottom: 1px dashed #ccc"
            >
              <el-date-picker
                v-model="formInline.birthDate"
                default-value="2010-01-01"
                type="date"
                @blur="getAge"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </li>
          <li>
            <span> <i>*</i>姓名: </span>
            <el-form-item prop="customerName">
              <el-input
                type="text"
                v-model="formInline.customerName"
                clearable
              />
            </el-form-item>

            <span>性别:</span>
            <el-form-item prop="sex">
              <span class="spanRadioLabel">男</span
              ><vxe-radio v-model="formInline.sex" label="M"></vxe-radio>
              <span class="spanRadioLabel">女</span
              ><vxe-radio v-model="formInline.sex" label="F"></vxe-radio>
            </el-form-item>
          </li>
          <li>
            <span>国籍:</span>
            <el-select
              v-model="formInline.nationId"
              style="
                margin-right: 25px;
                width: 297px;
                border-bottom: 1px dashed #ccc;
              "
            >
              <el-option label="中国" value="1"></el-option>
            </el-select>
            <v-region
              type="group"
              :town="true"
              @values="regionChange"
            ></v-region>
          </li>
          <li>
            <span>住址:</span>
            <el-input
              v-model="formInline.streetAddress"
              placeholder="请输入内容"
              clearable
            />
          </li>
          <li>
            <span>身份证:</span>
            <el-form-item prop="idNumber">
              <el-input type="text" v-model="formInline.idNumber" clearable />
            </el-form-item>
          </li>
          <li>
            <span> <i>*</i>移动电话: </span>
            <el-form-item prop="phone1">
              <el-input v-model="formInline.phone1" clearable />
            </el-form-item>
          </li>
          <li>
            <span>办公电话:</span>
            <el-input type="text" v-model="formInline.phone2" clearable />
          </li>
          <li>
            <span>职业:</span>
            <el-input type="text" v-model="formInline.occupation" clearable />
          </li>
          <li>
            <span style="width: 80px">学校(单位):</span>
            <el-input type="text" v-model="formInline.comment" clearable />
          </li>
        </ul>
      </main>
    </section>

    <section class="newrecord-right" v-show="teacherAgeflg || teacherAge < 18">
      <nav>
        <p><i class="iconfont icon-ums"></i>监护人资料</p>
        <el-button icon="el-icon-plus" size="mini" @click.native="addGuardian"
          >新增监护人</el-button
        >
      </nav>
      <ul>
        <li v-for="(item, index) in formInline.guardians" :key="index">
          <el-row>
            <el-col :span="5">
              <span>监护人:</span>
              <el-input
                type="text"
                style="width: 100px"
                v-model="item.guardianName"
                :blur="defaultguardianName(item, index)"
              />
            </el-col>
            <el-col :span="5">
              <span>性 别:</span>
              <span class="spanRadioLabel">男</span
              ><vxe-radio v-model="item.sex" label="M"></vxe-radio>
              <span class="spanRadioLabel">女</span
              ><vxe-radio v-model="item.sex" label="F"></vxe-radio>
            </el-col>
            <el-col :span="6">
              <span>移动电话:</span>
              <el-input type="text" v-model="item.phone" style="width: 150px" />
            </el-col>
            <el-col :span="3">
              <span>关 系:</span>
              <el-input type="text" v-model="item.relationShip" />
            </el-col>
            <el-col :span="3">
              <span>职 业:</span>
              <el-input type="text" v-model="item.occupation" />
            </el-col>
            <el-col :span="2">
              <vxe-radio
                v-model="item.isDefault"
                label="1"
                @change="setDefaultGuardian(item)"
                :disabled="fumuGuardianName"
                >默认监护人</vxe-radio
              >
            </el-col>
          </el-row>
        </li>
      </ul>
    </section>
  </el-form>
</template>

<script>
import {
  SelectCustomerById,
  AddCustomer,
  UpdateCustomer,
} from "@/api/clientRecord";
import { AddTmsCustomer } from "@/api/DownHandler";
import { log } from "util";
import { getCurrentDate } from "../../../utils/common";
export default {
  data() {
    return {
      teacherAgeflg: false,
      fumuGuardianName: true,
      rules: {
        customerName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        birthDate: [
          { required: true, message: "选择出生日期", trigger: "blur" },
        ],
        idNumber: [
          {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: "证件号码格式有误！",
            trigger: "blur",
          },
        ],
        phone1: [
          { required: true, message: "请填写手机号码", trigger: "blur" },
          // {
          //   pattern: /^1[3456789]\d{9}$/,
          //   message: "手机号格式不对",
          //   trigger: "blur"
          // }
        ],
      },
      //计算后的年龄
      teacherAge: 0,
      //基本资料
      formInline: {
        //详情ID

        cuskeyid: "",

        //病例号
        patientId: "",
        //身份证号
        idNumber: "",
        //姓名
        customerName: "",
        //性别
        sex: "",
        //出生日期
        birthDate: "",

        // 国际
        nationId: "1",
        //住址
        streetAddress: "",
        //职业
        occupation: "",
        //住宅电话
        Phone2: "",
        Phone1: "",
        //单位
        comment: "",
        //默认监护人
        default: "0",

        //监护人资料1
        guardians: [
          {
            //监护人
            guardianName: "",
            //性别
            sex: "",
            //住宅电话
            phone: "",
            //关系
            relationShip: "",
            //职业
            occupation: "",
            isDefault: "0",
          },
        ],
      },
      guoji: {},
    };
  },
  created() {
    if (this.$route.query.cusKeyId) {
      this.formInline.cuskeyid = this.$route.query.cusKeyId;
      this.selectCustomerById();
    }
  },
  methods: {
    //默认监护人按钮
    defaultguardianName(value, index) {
      console.log(value);
      if (value.guardianName != "") {
        this.fumuGuardianName = false;
      }
    },
    regionChange(data) {
      if (data.city) {
        this.formInline.streetAddress = data.province.value + data.city.value;
      }

      if (data.area) {
        this.formInline.streetAddress =
          data.province.value + data.city.value + data.area.value;
      }

      if (data.town) {
        this.formInline.streetAddress =
          data.province.value +
          data.city.value +
          data.area.value +
          data.town.value;
      }
    },
    //新增监护人
    addGuardian() {
      this.formInline.guardians.push({
        //监护人
        guardianName: "",
        //性别
        sex: "",
        //住宅电话
        phone: "",
        //关系
        relationShip: "",
        //职业
        occupation: "",
        isDefault: "0",
      });
    },
    //判断用户的年龄
    getAge() {
      let birthdays = new Date(this.formInline.birthDate);
      let d = new Date();
      let age =
        d.getFullYear() -
        birthdays.getFullYear() -
        (d.getMonth() < birthdays.getMonth() ||
        (d.getMonth() == birthdays.getMonth() &&
          d.getDate() < birthdays.getDate())
          ? 1
          : 0);
      this.teacherAge = age;
    },
    varifyInputData(callbackFunction) {
      this.$refs.formInline.validate((valid) => {
        if (valid) {
          if (this.teacherAge < 18 && this.teacherAge != 0) {
            if (this.formInline.guardians.length == 0) {
              return this.$message({
                message: "请新建监护人",
                type: "warning",
              });
            }

            if (
              this.formInline.guardians[0].guardianName == "" ||
              this.formInline.guardians[0].sex == "" ||
              this.formInline.guardians[0].phone == ""
            ) {
              this.$message({
                message: "请填写完整监护人信息",
                type: "warning",
              });
            } else {
              if (
                this.formInline.customerName != "" &&
                this.formInline.sex != "" &&
                this.formInline.birthDate != "" &&
                this.formInline.phone1 != ""
              ) {
                callbackFunction();
              } else {
                this.$message({
                  message: "请填写必填项",
                  type: "warning",
                });
              }
            }
          } else {
            if (
              this.formInline.customerName != "" &&
              this.formInline.sex != "" &&
              this.formInline.birthDate != "" &&
              this.formInline.phone1 != ""
            ) {
              callbackFunction();
            } else {
              this.$message({
                message: "请填写必填项",
                type: "warning",
              });
            }
          }
        } else {
          return false;
        }
      });
    },
    //保存编辑按钮
    saverecord() {
      this.varifyInputData(() => {
        if (this.$route.query.cusKeyId) {
          this.updateCustomer();
        } else {
          this.addCustomer();
        }
      });
    },
    //保存客户档案到本地地形图数据库，需要本地服务接口
    saveTmsRecord() {
      this.varifyInputData(() => {
        // action = 6 新增tms患者档案， 10 更新档案
        if (this.formInline.patientId != '') {
          //更新
          this.updateTmsCustomer(10);
        } else {
          //新建
          this.updateTmsCustomer(6);
        }
      });
    },
    //查询详情
    async selectCustomerById() {
      const { data: res } = await SelectCustomerById(
        this.formInline.cuskeyid
      ).then();
      this.formInline = {};
      this.formInline = res.data;
      this.getAge();
      console.log(res.data);
    },

    //添加用户档案
    async addCustomer() {
      await AddCustomer(JSON.stringify(this.formInline))
        .then((response) => {
          this.$message({
            message: "保存成功",
            type: "success",
          });
          this.$router.push({ path: "/clientRecord" });
        })
        .catch((error) => {});
    },
    //新增或更新TMS用户档案
    async updateTmsCustomer(tmsAction) {
      let tmsCustomerData = {};
      // action = 6 新增tms患者档案， 10 更新档案
      tmsCustomerData.Action = tmsAction;
      let patient = {};
      patient.Dumy1 = "";
      patient.LastName = this.formInline.customerName;
      patient.FirstName = "";
      patient.BirthDate = this.formInline.birthDate;
      patient.Sex = this.formInline.sex;
      patient.StreetAddress = this.formInline.streetAddress;
      patient.City = "";
      patient.State = "";
      patient.Zip = "";
      patient.Phone1 = this.formInline.phone1;
      patient.Phone2 = this.formInline.phone2;
      patient.DateIn = getCurrentDate();
      patient.Comment = this.formInline.customerName;
      if (tmsAction == 10){
        //执行更新，tmsAction 10
        patient.patientId = this.formInline.patientId;
      }
      tmsCustomerData.Patient = patient;

      console.log('tmsCustomerData', tmsCustomerData);
      console.log('JSON.stringify tmsCustomerData', JSON.stringify(tmsCustomerData));

      await AddTmsCustomer(JSON.stringify(tmsCustomerData)).then((response) => {
        if(response.data.Code=="200")
        {
          //新增患者，显示病历号
          if (tmsAction == 6){
            this.formInline.patientId=response.data.Msg;
          }

          this.$message({
            message: "保存成功",
            type: "success",
          });
        }
        else
        {
           this.$message({
            message: response.data.Msg,
            type: "error",
          });
        }
        })
        .catch((error) => {});
    },
    //编辑用户档案
    async updateCustomer() {
      console.log(JSON.stringify(this.formInline));
      await UpdateCustomer(JSON.stringify(this.formInline))
        .then((response) => {
          this.$message({
            message: "保存成功",
            type: "success",
          });
          this.$router.push({ path: "/clientRecord" });
        })
        .catch((error) => {
          this.$message({
            message: error,
            type: "error",
          });
        });
    },

    setDefaultGuardian(obj) {
      this.formInline.guardians.forEach((item) => {
        if (item != obj) {
          item.isDefault = "0";
        }
      });
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.formInline.cuskeyid = this.$route.query.cusKeyId;
      this.selectCustomerById();
    },
    teacherAge: function (val, odlval) {
      console.log(val);
      if (val < 18) {
        this.teacherAgeflg = true;
      } else {
        this.teacherAgeflg = false;
      }
    },
  },
};
</script>

<style lang="less" scope>
.newrecord {
  width: 1200px;
  section,
  .el-row {
    width: 100%;
  }

  min-height: 650px;
  border: 1px solid #ccc;
  nav {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8fa;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    p {
      font-size: 16px;
      span {
        font-size: 14px;
        color: #aaa;
      }
      i {
        font-size: 25px;
        margin: 0 5px;
        margin-top: 10px;
      }
    }
  }
  .newrecord-left {
    width: 100%;
    border-right: 1px solid #ccc;
    main {
      .v-region {
        margin-left: 50px;
      }
      ul {
        box-sizing: border-box;
        li {
          height: 50px;
          border-bottom: 1px solid #ccc;
          padding: 0 20px;
          display: flex;
          .el-date-picker {
            border: 0px solid #000;
          }
          > i {
            margin: 0 5px;
            font-size: 18px;
          }
          > span {
            display: inline-block;
            width: 75px;
            line-height: 50px;
            font-size: 15px;
            font-weight: 600;
            box-sizing: border-box;
            text-align: justify;
            text-align-last: justify;
          }
        }
      }
    }
  }
  .newrecord-right {
    width: 100%;
    ul {
      padding: 0 20px;
      li {
        display: flex;
        // justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ccc;
        > span {
          line-height: 70px;
          font-size: 13px;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .newrecord-left {
      width: 100%;
    }
    .newrecord-right {
      width: 100%;
      border-right: 1px solid #ccc;
    }
  }
}
.vxe-radio__label {
  display: none;
}
.spanRadioLabel {
  padding: 0px 2px 0px 2px;
}
</style>