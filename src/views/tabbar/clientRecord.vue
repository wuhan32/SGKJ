<template>
  <div class="client" ref="client">
    <div>
      <!-- <div class="client-header">
        <h2>查询患者</h2>
      </div> -->
      <div class="search-body">
        <div>
          <span class="spanlabel">日期范围</span>
          <el-date-picker
            v-model="startdate"
            type="date"
            placeholder="选择日期"
            size="mini"
          ></el-date-picker>
          <span class="spanlabel">至</span>
          <el-date-picker
            v-model="enddate"
            type="date"
            placeholder="选择日期"
            size="mini"
          ></el-date-picker>
          <div>
            <el-input
              v-model="search"
              placeholder="请输入搜索内容"
              ref="inputs"
              size="mini"
              clearable
            >
              <el-button slot="append" icon="el-icon-search" @click="timeSearch"
                >查询</el-button
              >
            </el-input>
          </div>
        </div>

        <!-- <div>
          <a href="javascript:;" @click="newsBuild">添加患者</a>
        </div> -->
      </div>
      <vxe-grid
        highlight-hover-row
        highlight-current-row
        align="center"
        :height="screenHeight - 121"
        :loading="loading"
        :seq-config="{
          startIndex: (tablePage.currentPage - 1) * tablePage.pageSize,
        }"
        :pager-config="tablePage"
        :columns="tableColumn"
        :data="tableData"
        @page-change="handlePageChange"
        auto-resize
        border="full"
        stripe
        size="small"
        class="mytable-scrollbar"
        ref="vxeGrid"
        @cell-dblclick="cellDBLClickEvent"
      >
        <template v-slot:operate="{ row }">
          <div
            :class="{
              operateButton: $store.state.userInfo.RoleCode != RECEPTIONIST,
            }"
          >
            <el-button
              @click="editRowEvent(row)"
              v-if="$store.state.userInfo.RoleCode != RECEPTIONIST"
              size="mini"
              >查看档案</el-button
            >
            <el-button @click.native="clientInfo(row)" size="mini"
              >分配医生</el-button
            >
          </div>
        </template>
      </vxe-grid>
    </div>
    <!-- 医生列表弹框 -->
    <el-dialog title="医生列表" :visible.sync="dialogVisible" center>
      <el-select
        size="medium"
        @change="doctorInfo($event)"
        v-model="doctorNameId"
        placeholder="分配医生"
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
  </div>
</template>

<script>
import {
  doctorRecord,
  GetDoctorsByOrganCode,
  AssignThePatientToDoctor,
} from "@/api/clientRecord";

import ROLEID from "../../utils/roleId";

export default {
  data() {
    return {
      //医生角色ID
      RECEPTIONIST: ROLEID.RECEPTIONIST,
      userInfo: {},
      startdate: "",
      enddate: "",
      screenWidth: "",
      screenHeight: "",
      doctorNameId: "",
      doctorId: "",
      cusKeyId: "",
      customerName: "",
      dialogVisible: false,
      //医生列表
      doctorListL: [],
      options: [],
      value: "",
      formInlineO: "3",
      //搜索
      search: "",
      //查询客户档案ID
      loading: false,
      tablePage: {
        total: 0,
        currentPage: 1,
        pageSize: 100,
        align: "left",
        pageSizes: [10, 50, 100, 200, 500],
        layouts: [
          "Sizes",
          "PrevJump",
          "PrevPage",
          "Number",
          "NextPage",
          "NextJump",
          "FullJump",
          "Total",
        ],
        perfect: true,
      },
      tableColumn: [
        { type: "seq", width: 60, title: "序号" },
        { field: "date", title: "就诊日期" },
        { field: "patientId", title: "病例号" },
        { field: "name", title: "姓名" },
        { field: "phone1", title: "手机号" },
        { field: "iDnumber", title: "身份证号" },
        { field: "doctor", title: "最近就诊医生" },
        { field: "hospital", title: "最近机构" },
        { title: "操作", slots: { default: "operate" } },
      ],
      //列表
      tableData: [],
      organCode: "",
    };
  },
  mounted() {
    this.$refs.client.style.width = `${document.body.clientWidth - 200}px`;
    this.findList();
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        if (this.$route.path == "/clientRecord") {
          this.$refs.client.style.width = `${this.screenWidth - 200}px`;
        }
      })();
    };
  },
  created() {
    this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const organList = JSON.parse(
      window.localStorage.getItem("organizationList")
    );
    this.organCode = organList.organCode;
    this.changfouce();
    this.getDoctorsByOrganCode();
    let _this = this;
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key == 13) _this.searchO();
    };
  },
  methods: {
    //查询
    timeSearch() {
      this.findList();
    },
    async clientInfo(row) {
      await this.reloadDoctors();      
      console.log("医生详情", row);
      this.cusKeyId = row.cusKeyId;
      this.customerName = row.name;
      this.dialogVisible = true;
      if (this.doctorListL.length == 0) {
        this.$message({
          message: "该机构下尚无医生可分配",
          type: "warning",
        });
        return;
      }
    },
    async reloadDoctors() {
      const organList = JSON.parse(
        window.localStorage.getItem("organizationList")
      );
      let organCodeStorage = organList.organCode;
      if (organCodeStorage !== this.organCode) {
        this.organCode = organCodeStorage;
        await this.getDoctorsByOrganCode();
      }
    },
    doctorInfo(doctorId) {
      console.log(doctorId);
      this.doctorId = doctorId;
    },
    toDoctor() {
      this.dialogVisible = false;
      if (this.doctorId) {
        this.assignThePatientToDoctor();
      }
    },

    changfouce() {
      this.$nextTick((x) => {
        //正确写法
        this.$refs.inputs.focus();
      });
    },
    //进入编辑页面
    editRowEvent(row) {
      this.$router.push({
        path: "/newRecord",
        query: {
          cusKeyId: row.cusKeyId,
          patientId: row.patientId,
        },
      });
    },
    //新建客户档案
    newsBuild() {
      this.$router.push({
        path: "/newRecord",
      });
    },

    //双击详情
    cellDBLClickEvent({ row }) {
      window.sessionStorage.setItem("cusKeyId", JSON.stringify(row.cusKeyId));
      window.sessionStorage.setItem("target", JSON.stringify(row));
      this.$store.commit("$_menRight");
      this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);
      this.$store.commit("$_target", row);
      console.log(row);
    },
    //列表详情
    async findList() {
      this.loading = true;
      const { data: res } = await doctorRecord(
        this.tablePage.pageSize,
        this.tablePage.currentPage,
        +this.formInlineO,
        this.search,
        this.startdate,
        this.enddate
      ).then();

      this.tableData = res.data.dataList;
      this.tablePage.total = parseInt(res.data.totalCount);
      this.loading = false;
    },
    //医生列表
    async getDoctorsByOrganCode() {
      const { data: res } = await GetDoctorsByOrganCode(
        this.organCode.toString(),
        ROLEID.DOCTOR
      ).then();
      this.doctorListL = res.data;
      console.log("医生列表", res);
    },
    //分配医生
    async assignThePatientToDoctor() {
      const { data: res } = await AssignThePatientToDoctor(
        this.cusKeyId,
        this.doctorId,
        this.organCode
      ).then();
      console.log(res);
      if (res.code == 0) {
        // this.$websocket.dispatch("WEBSOCKET_SEND", {
        //   Text: "患者【" + this.customerName + "】已分配至您的【待诊】列表",
        //   Type: 1,
        //   Userid: this.doctorId,
        // });
        this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);

        let fromuserid = this.$store.state.userInfo.Id;
        var data = {
          Text: "患者【" + this.customerName + "】已分配至您的【待诊】列表",
          Type: 1,
          Userid: this.doctorId,
        };
        this.$stompStore.dispatch("STOMP_SEND", {
          fromuserid: fromuserid,
          touserid: this.doctorId,
          p: data,
        });
        this.$message({
          message: res.message,
          type: "success",
        });
      } else {
        this.$message({
          message: res.message,
          type: "warning",
        });
      }
    },

    searchEvent() {
      this.tablePage.currentPage = 1;
      this.findList();
    },
    handlePageChange({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage;
      this.tablePage.pageSize = pageSize;
      this.findList();
    },
    clearSearch() {
      this.search = "";
      this.findList();
    },
    searchO() {
      this.findList();
    },
  },

  components: {},
};
</script>


<style lang="less" scoped>
.client {
  .client-header {
    text-align: center;
  }
  .search-body {
    display: flex;
    justify-content: space-between;
    .el-input__inner {
      width: 120px;
    }
    > div {
      display: flex;
      align-items: center;
      > a {
        font-size: 20px;
        padding-left: 5px;
      }
    }
    p {
      font-size: 20px;
      margin: 0 20px;
    }
  }
  .operateButton {
    display: flex;
    justify-content: space-between;
    button {
      margin: 0;
    }
  }
}
.spanlabel {
  padding: 0px 5px 0px 5px;
}
</style>