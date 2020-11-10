<template>
  <div class="home">
    <!-- 左侧导航栏 -->
    <div id="silderLeft" :class="{ moveBtn3: isCollapseLeft }">
      <div class="moveBtn" v-move v-show="!isCollapseLeft"></div>
      <el-aside :width="isCollapseLeft ? '64px' : '100%'" class="el-menu-left">
        <div
          class="toggle-button"
          @click="toggleCollapseLeft"
          v-show="!isCollapseLeft"
        >
          <span class="flash"><i class="el-icon-menu"></i>导航菜单</span>
          <i class="menutoggle el-icon-d-arrow-left"></i>
        </div>
        <div
          class="toggle-button"
          @click="toggleCollapseLeft"
          v-show="isCollapseLeft"
        >
          <span class="flash"><i class="el-icon-menu"></i></span>
          <i class="menutoggle el-icon-d-arrow-right"></i>
        </div>
        <div style="background: GhostWhite; border-bottom: 1px solid #95b8e7">
          <!-- 机构列表 -->
          <v-org-code v-show="!isCollapseLeft"></v-org-code>
          <div style="margin: 5px 10px 5px 5px">
            <el-autocomplete
              v-model="state2"
              prefix-icon="el-icon-search"
              :fetch-suggestions="querySearch"
              placeholder="搜索"
              :trigger-on-focus="false"
              @select="handleSelect"
              @input="onsearch"
              size="mini"
              style="width: 100%"
            ></el-autocomplete>
          </div>
        </div>
        <el-menu
          :collapse="isCollapseLeft"
          :collapse-transition="false"
          :default-openeds="openeds"
          unique-opened
        >
          <el-menu-item
            index="2"
            class="el-menu-left-one"
            @click="goclientRecord"
          >
            <div class="divmenuitem">
              <i class="el-icon-user-solid"></i>
              <span slot="title">所有病人</span>
            </div>
          </el-menu-item>
          <el-menu-item
            index="3"
            class="el-menu-left-one"
            @click="goAddClientRecord"
          >
            <div class="divmenuitem">
              <i class="el-icon-circle-plus"></i>
              <span slot="title">添加患者</span>
            </div>
          </el-menu-item>
          <el-submenu
            index="1"
            @click.native="onsearchType(1)"
            v-if="$store.state.userInfo.Id != 35"
          >
            <template slot="title">
              <div class="divmenuitem">
                <i class="el-icon-odometer"></i>
                <span>当日病人</span>
              </div>
            </template>
            <el-menu
              :collapse="isCollapseLeft"
              :collapse-transition="false"
              :default-openeds="openeds"
              class="el-menu-left2 menuOne"
            >
              <vue-tree
                :treeData="menuListLeft"
                ref="vtree"
                @clickNode="clickNodeLeft"
                style="margin-left: 10px"
              ></vue-tree>
            </el-menu>
          </el-submenu>
          <el-submenu
            index="4"
            @click.native="onsearchType(2)"
            v-if="$store.state.userInfo.Id != 35"
          >
            <template slot="title">
              <div class="divmenuitem">
                <i class="el-icon-date"></i>
                <span>历史已诊</span>
              </div>
            </template>
            <el-menu
              :collapse="isCollapseLeft"
              :collapse-transition="false"
              :default-openeds="openeds"
              class="el-menu-left2"
            >
              <vue-tree
                :treeData="historyList"
                ref="vtree"
                @clickNode="clickNodeLeft"
                style="margin-left: 20px"
              ></vue-tree>
            </el-menu>
          </el-submenu>

          <el-submenu
            index="5"
            @click.native="onsearchType(2)"
            v-if="
              $store.state.roleCodeLsit.some(
                (res) => res == ADAOTER || res == VERFIER
              )
            "
          >
            <template slot="title">
              <div class="divmenuitem">
                <i class="el-icon-magic-stick"></i>
                <span>检查列表</span>
              </div>
            </template>
            <el-menu
              :collapse="isCollapseLeft"
              :collapse-transition="false"
              :default-openeds="openeds"
              class="el-menu-left2"
            >
              <vue-tree
                :treeData="checkMenuList"
                ref="vtree"
                @clickNode="clickNodeLeft"
                style="margin-left: 20px"
              ></vue-tree>
            </el-menu>
          </el-submenu>

          <el-submenu
            index="6"
            @click.native="onsearchType(2)"
            v-if="$store.state.roleCodeLsit.some((res) => res == DOCTOR)"
          >
            <template slot="title">
              <div class="divmenuitem">
                <i class="el-icon-delete"></i>
                <span>待删除列表</span>
              </div>
            </template>
            <el-menu
              :collapse="isCollapseLeft"
              :collapse-transition="false"
              :default-openeds="openeds"
              class="el-menu-left2"
            >
              <vue-tree
                :treeData="approveList"
                ref="vtree"
                @clickNode="clickNodeLeft"
                style="margin-left: 20px"
              ></vue-tree>
            </el-menu>
          </el-submenu>
        </el-menu>
        <!-- <a href="javascript:;" class="search-style">搜索</a> -->
      </el-aside>
    </div>

    <!-- 右侧导航栏 -->
    <div
      id="silderLeft1"
      :class="{ moveBtn2: isCollapseRight }"
      v-show="doctorRecordList"
      ref="silderLeft1"
    >
      <div class="moveBtn" v-move1 v-show="!isCollapseRight"></div>
      <el-aside
        :width="isCollapseRight ? '65px' : '100%'"
        class="el-menu-right"
      >
        <div
          class="toggle-button bgc"
          @click="toggleCollapseRight"
          v-show="!isCollapseRight"
        >
          <span class="flash"
            ><i class="el-icon-menu"></i>{{ this.name }}--{{
              this.customerStateShow[this.customerState]
            }}</span
          >
          <i class="menutoggle el-icon-d-arrow-left"></i>
        </div>
        <div
          class="toggle-button panel-header"
          @click="toggleCollapseRight"
          v-show="isCollapseRight"
        >
          <span class="flash"><i class="el-icon-menu"></i></span>
          <i class="menutoggle el-icon-d-arrow-right"></i>
        </div>

        <el-menu
          :collapse="isCollapseRight"
          :collapse-transition="false"
          class="el-menu-left2"
          unique-opened
          @select="editRowEvent"
        >
          <template v-for="(menu, index) in menuListRight">
            <el-menu-item
              :index="menu.keyId + ''"
              class="el-menu-left-one"
              v-if="!menu.children"
              :key="menu.keyId"
            >
              <i class="el-icon-user-solid"></i>
              <span slot="title">{{ menu.name }}</span>
            </el-menu-item>
            <el-submenu
              :index="index + ''"
              :key="menu.keyId"
              v-if="menu.children"
            >
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>{{ menu.name }} </span>
              </template>
              <vue-tree
                :treeData="menu.children"
                ref="vtree"
                style="margin-left: 10px"
                @clickNode="clickNodeRight"
                @modification="modification"
              ></vue-tree>
              <p
                @click="addRecord"
                class="newRecord"
                v-show="menu.keyId == 2 && states == '0'"
              >
                创建记录+
              </p>
              <p
                @click="batchApproveopen"
                class="newRecord"
                v-show="menu.keyId == 2 && states == '2'"
              >
                一键审批是否删除
              </p>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="670px"
      :before-close="handleClose"
      class="addRecord"
    >
      <el-row>
        <el-col>
          <el-tabs
            type="border-card"
            @tab-click="handleClick"
            v-model="tabindex"
            v-if="this.addRecordList.length != 0"
          >
            <el-tab-pane
              v-for="item in addRecordList"
              :label="item.examTypeName"
              :key="item.examTypeId"
              :disabled="isTabDisable"
              :name="item.examTypeId + ''"
              :lazy="true"
            >
              <div v-show="item.examTypeId == 3">
                类型：
                <vxe-radio v-model="freshCategory" :label="20"
                  >20分钟</vxe-radio
                >
                <vxe-radio v-model="freshCategory" :label="60"
                  >60分钟</vxe-radio
                >
              </div>
              <div v-show="item.examTypeId == 4">
                类型：
                <vxe-radio
                  v-model="AdaptiveCategory"
                  :label="20"
                  @change="AdaptiveCategoryChange"
                  :disabled="isEdit"
                  >20分钟</vxe-radio
                >
                <vxe-radio
                  v-model="AdaptiveCategory"
                  :label="60"
                  @change="AdaptiveCategoryChange"
                  :disabled="isEdit"
                  >60分钟</vxe-radio
                >
              </div>
              <vxe-table
                border
                row-id="examItemId"
                ref="xTable1"
                :data="item.children"
                @checkbox-all="selectAllEvent"
                @checkbox-change="selectChangeEvent"
                align="center"
                class="meniList"
                :checkbox-config="{ checkRowKeys: defaultSelecteRows }"
              >
                <vxe-table-column type="checkbox"></vxe-table-column>
                <vxe-table-column
                  field="name"
                  title="项目"
                  min-width="200"
                ></vxe-table-column>
                <vxe-table-column title="眼别" min-width="80">
                  <template v-slot="{ row }">
                    <el-select
                      v-model="row.unitDefault"
                      class="menuSelect"
                      size="mini"
                      style="border: none"
                    >
                      <el-option
                        :value="num"
                        :label="num"
                        v-for="(num, index) in row.unit"
                        :key="index"
                      ></el-option>
                    </el-select>
                  </template>
                </vxe-table-column>

                <vxe-table-column
                  field="count"
                  title="数量"
                  min-width="50"
                ></vxe-table-column>
                <vxe-table-column
                  field="price"
                  title="价格"
                  min-width="70"
                ></vxe-table-column>
              </vxe-table>
            </el-tab-pane>
            <!-- <p>价格:{{price}}</p> -->
          </el-tabs>
          <p v-else>暂无检查项</p>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer" v-show="states == '0'">
        <span class="warning-text" ref="warning_tips">{{ warningText }}</span>
        <div>
          <el-button type="primary" @click="getSelectEvent">确 定</el-button>
          <el-button
            type="danger"
            style="color: #fff"
            v-show="deleteButton"
            @click.native="approveSubmit"
            >申请删除</el-button
          >
        </div>
      </div>
      <div slot="footer" class="dialog-footer" v-show="states == '2'">
        <input
          type="text"
          ref="warning_tips"
          class="warning-text"
          v-model="warningText"
          disabled
        />
        <div>
          <el-button type="primary" @click.native="adelete(3)"
            >拒绝删除</el-button
          >
          <el-button
            type="danger"
            style="color: #fff"
            v-show="deleteButton"
            @click.native="adelete(2)"
            >同意删除</el-button
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import vueTree from "../../../components/common/v-tree";
import vOrgCode from "./orgCode";
import ROLEID from "../../../utils/roleId";

import { UserOrgan, GetMenu, GetExamMenu } from "@/api/login";
import {
  GetHistoryExamed,
  GetTreeExamItemModels,
  CreateExamItemRecord,
  UpdateCustomerExamItem,
  GetCustomerExamListByEmaKeyid,
  GetDoctorsByOrganCode,
  GetCheckMenuList,
  ApproveSubmit,
  GetApproveList,
  GetApproveExamList,
  aDelete,
  BatchApprove,
} from "../../../api/clientRecord";
import EnumExamType from "../../../utils/constantsData";
export default {
  //拖拉
  directives: {
    move(el, bindings) {
      el.onmousedown = function (e) {
        var init = e.clientX;
        var parent = document.getElementById("silderLeft");
        var initWidth = parent.offsetWidth;
        document.onmousemove = function (e) {
          var end = e.clientX;
          var newWidth = end - init + initWidth;
          parent.style.width = newWidth + "px";
        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
      };
    },
    move1(el, bindings) {
      el.onmousedown = function (e) {
        var init = e.clientX;
        var parent = document.getElementById("silderLeft1");
        var initWidth = parent.offsetWidth;
        document.onmousemove = function (e) {
          var end = e.clientX;
          var newWidth = end - init + initWidth;
          parent.style.width = newWidth + "px";
        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
      };
    },
  },
  data() {
    return {
      states: "0",
      //待审核列表
      approveList: [],
      deleteButton: false,
      ADAOTER: ROLEID.ADAOTER,
      VERFIER: ROLEID.VERFIER,
      DOCTOR: ROLEID.DOCTOR,
      //医生列表
      doctorListL: [],
      //右侧通过待诊名字显示
      name: "",
      //右侧通过待诊类型显示
      customerStateShow: {
        1: "待诊",
        2: "在诊",
        3: "检查中",
        4: "已诊",
        5: "再诊",
        6: "复诊",
        7: "未诊",
        8: "弃诊",
        9: "转诊",
        10: "会诊",
      },
      //价格
      price: 0,
      defaultSelecteRows: [],
      currentSelected: [],
      valueNum: "",
      dialogVisible: false,
      //无显示框
      nothave: false,
      state2: "",
      checkbox: true,
      //用户ID
      userId: this.$store.state.userInfo.Id,
      userRoleCode: this.$store.state.userInfo.RoleCode,
      openeds: ["/diagnosis"],
      menuListLeft: [],
      menuListRight: [],
      //检查列表
      checkMenuList: [],
      //历史已诊
      historyList: [],
      // 左侧是否折叠
      isCollapseLeft: false,
      //右侧是否折叠
      isCollapseRight: false,
      //右侧是否显示
      doctorRecordList: false,
      //搜索类型
      searchType: "",
      //下拉框展示数据
      restaurants: [],
      cusKeyId: "",
      emaKeyId: "",
      addRecordList: [],
      addRecordListTemp: [],
      //选中列表
      examItemLists: [],
      //选中列表备份，用于双击打开时判断是否有修改
      examItemListsTemp: [],
      //大类ID
      examTypeId: 0,
      //待诊类型
      customerState: "",
      tabindex: "1",
      isEdit: false,
      isTabDisable: false,
      //搜索name
      queryName: "",
      //机构ID
      organCode: this.$store.state.organizationList.organCode,
      freshCategory: 20,
      AdaptiveCategory: 20,
      doctorNameId: "",
      warningText: "",
    };
  },
  created() {
    console.log("角色列表", this.$store.state.roleCodeLsit);
    this.getCheckMenuList();
    this.getMenu();
    this.userOrgan();
    this.getHistoryExamed();
    this.GetExamMenu();
    this.getDoctorsByOrganCode();
    this.getApproveList();
    this.activePath = window.sessionStorage.getItem("activePath");
    if (this.$route.fullPath != "/clientRecord") {
      this.doctorRecordList = true;
      const nameIfno = window.sessionStorage.target;
      this.name = JSON.parse(nameIfno).name;
    }
    this.InitData();
  },
  mounted() {},
  methods: {
    websockSend(msg, userid) {
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
    batchApproveopen() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定删除",
        cancelButtonText: "拒绝删除",
        type: "warning",
      })
        .then(() => {
          this.batchApprove(2);
        })
        .catch(() => {
          this.batchApprove(3);
        });
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
    doctorInfo(doctorId) {
      console.log(this.addRecordList);
      this.doctorId = doctorId;
    },
    AdaptiveCategoryChange() {},
    handleClick(tab, event) {
      this.examTypeId = +this.tabindex;
      this.examItemLists = this.addRecordList[this.examTypeId - 1].children;
    },

    getSelectEvent() {
      console.log("this.examTypeId", this.examTypeId);
      if (
        this.addRecordListTemp.length > 0 &&
        this.addRecordListTemp[this.examTypeId - 1] != null &&
        this.addRecordListTemp[this.examTypeId - 1].children != null &&
        this.addRecordListTemp[this.examTypeId - 1].children.length > 0
      ) {
        if (this.examItemLists.length <= 0) {
          this.warningText = "请选择检查项 ";
          return;
        }
        // if (this.isAllCheckerSelected() == false) {
        //   this.warningText = "请选择检查人 ";
        //   return;
        // }
      } else {
        this.warningText = " ";
      }

      if (this.isEdit) {
        this.updateCustomerExamItem();
      } else {
        this.createExamItemRecord();
      }

      this.dialogVisible = false;
    },

    selectAllEvent({ checked, records }) {
      this.price = 0;
      //this.examItemLists = [];
      this.examItemLists = records;
      let price = this.examItemLists.map((res) => {
        return res.price;
      });
      this.price = price.reduce((prev, cur) => {
        return prev + cur;
      }, 0);
      this.updateCheckerKeyId();
      console.log(
        checked ? "所有勾选事件" : "所有取消事件",
        this.examItemLists
      );
    },
    selectChangeEvent({ checked, records }) {
      this.price = 0;
      //this.examItemLists = [];
      this.examItemLists = records;
      let price = this.examItemLists.map((res) => {
        return res.price;
      });
      this.price = price.reduce((prev, cur) => {
        return prev + cur;
      }, 0);
      this.updateCheckerKeyId();
      console.log(checked ? "勾选事件" : "取消事件", this.examItemLists);
    },
    handleClose(done) {
      done();

      //还原状态
      this.warningText = " ";
    },
    //搜索
    onsearch() {},
    //queryString 输入的值
    querySearch(queryString, cb) {
      console.log(queryString);
      console.log(cb);
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return restaurant.value.indexOf(queryString) === 0;
      };
    },
    handleSelect(item) {
      this.cusKeyId = item.cusKeyId;
      window.sessionStorage.setItem("cusKeyId", JSON.stringify(item.cusKeyId));
      this.$router.push({
        path: `/workbenchRight`,
      });
      this.GetExamMenu();
      console.log(item);
    },
    onsearchType(searchType) {
      this.searchType = searchType;
      console.log(searchType);
    },

    //单机左侧获取详情
    clickNodeLeft(target) {
      this.states = "0";
      const res = JSON.stringify(target);
      console.log(JSON.parse(res));
      this.cusKeyId = JSON.parse(res).cusKeyId;
      if (JSON.parse(res).approvestatus == "1") {
        this.states = "2";
      }
      if (JSON.parse(res).iconCode === "file") {
        console.log("是否删除", this.states);
        window.sessionStorage.setItem("target", res);
        this.$store.commit("$_target", JSON.parse(res));
        this.$store.commit("$_cusKeyId", this.cusKeyId);
        this.customerState = JSON.parse(res).customerState;
        window.sessionStorage.setItem(
          "cusKeyId",
          JSON.stringify(this.cusKeyId)
        );
        this.name = JSON.parse(res).name;
        this.$router.push({ path: `/workbenchRight?name=${this.name}` });
        this.GetExamMenu();
        this.$emit("showTag", this.doctorRecordList);
      }
    },

    //单机右侧获取详情
    clickNodeRight(target) {
      const res = JSON.stringify(target);
      const skipInfo = JSON.parse(res);
      console.log("?", skipInfo);
      window.sessionStorage.setItem("skipInfo", JSON.stringify(skipInfo));
      this.emaKeyId = skipInfo.emaKeyId;
      this.$store.commit("$_setShowEyeToolBar", false);
      if (skipInfo.iconCode == "file") {
        console.log(skipInfo.url);
        switch (skipInfo.url) {
          case "corneaImages":
            this.$router.push({
              path: `/corneaImages?cusKeyId=${skipInfo.cusKeyId}&&patientId=${skipInfo.patientId}`,
            });
            break;
          case "fundusImages":
            this.$store.commit("$_setShowEyeToolBar", true);
            this.$router.push({
              path: `/fundusImages?cusKeyId=${skipInfo.cusKeyId}`,
            });
            break;

          default:
            this.$router.push({
              path: skipInfo.url + `&&customerState=${this.customerState}`,
            });
        }
      }
      console.log("skipInfo.examType", skipInfo.examType);
      this.examTypeId = skipInfo.examType;
      if (skipInfo.name.indexOf("+") != -1) {
        switch (skipInfo.examType) {
          case EnumExamType.XinJing:
          case EnumExamType.FuCha:
          case EnumExamType.ShiPei:
          case EnumExamType.YouHua:
          case EnumExamType.HuanJing:
            {
              this.isTabDisable = true;
              this.isEdit = false;
              this.tabindex = skipInfo.examType + "";
              this.examTypeId = skipInfo.examType;
              console.log("this.skipInfo", skipInfo);
              this.showExamItemDlg();
            }
            break;
        }
      }
    },

    goclientRecord() {
      this.$router.push("/clientRecord");
      this.doctorRecordList = false;
      this.$emit("showTag", this.doctorRecordList);
    },
    goAddClientRecord() {
      this.$router.push("/newRecord");
      this.doctorRecordList = false;
      this.$emit("showTag", this.doctorRecordList);
    },
    //双击修改根据检查档案ID查出检查项
    modification(index) {
      //生理检查
      if (index.patientId != null) return;

      if (index.iconCode == "file") {
        this.emaKeyId = index.emaKeyId;
        this.warningText = " ";
        this.deleteButton = true;
        this.getCustomerExamListByEmaKeyid();
      }
    },
    //添加大类
    addRecord() {
      this.isEdit = false;
      this.isTabDisable = false;
      this.warningText = " ";
      this.deleteButton = false;
      this.addRecordList = this.addRecordListTemp;
      this.defaultSelecteRows = this.currentSelected;
      this.emaKeyId = "";
      this.examTypeId = this.tabindex;
      // 暂时不切回默认标签位，重新打开tabs的时候最后一次的tab-pane页面渲染有问题，所以先默认展示最后一次显示的tab-pane
      // this.tabindex = "1";
      this.dialogVisible = true;
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapseLeft() {
      this.isCollapseLeft = !this.isCollapseLeft;
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapseRight() {
      this.isCollapseRight = !this.isCollapseRight;
    },

    //进入编辑页面
    editRowEvent(index) {
      const cusKeyId = window.sessionStorage.getItem("cusKeyId");
      if (index == 1) {
        this.$router.push({
          path: "/newRecord",
          query: {
            cusKeyId: JSON.parse(cusKeyId),
            patientId: this.patientId,
          },
        });
      }
    },
    //获取机构列表
    async userOrgan() {
      const { data: res } = await UserOrgan().then();
      this.options = res.data;
    },
    //获取左侧菜单列表
    async getMenu() {
      const { data: res } = await GetMenu(
        this.userId,
        this.$store.state.organizationList.organCode,
        this.queryName
      ).then();
      this.menuListLeft = res.data.menuItems;
      console.log("当日病人", this.menuListLeft);
    },
    //获取右侧菜单列表
    async GetExamMenu() {
      if (window.sessionStorage.target) {
        const cusKeyId = window.sessionStorage.getItem("cusKeyId");
        //alert(cusKeyId);
        const { data: res } = await GetExamMenu(
          JSON.parse(cusKeyId),
          this.$store.state.organizationList.organCode,
          this.states
        ).then();
        if (res.data) {
          this.doctorRecordList = true;
          this.menuListRight = res.data.menuItems;
          console.log("获取右侧菜单列表", res);
        }
      }
    },
    //获取历史已诊
    async getHistoryExamed() {
      const { data: res } = await GetHistoryExamed(
        this.userId,
        this.$store.state.organizationList.organCode
      ).then();
      this.historyList = res.data.menuItems;
      //console.log("历史已诊", this.historyList);
    },
    //获取检查列表
    async getCheckMenuList() {
      const { data: res } = await GetCheckMenuList(
        this.$store.state.organizationList.organCode
      ).then();
      this.checkMenuList = res.data;
      console.log("检查列表", res);
    },

    //获取待删除列表
    async getCheckMenuList() {
      const { data: res } = await GetCheckMenuList(
        this.$store.state.organizationList.organCode
      ).then();
      this.checkMenuList = res.data;
      console.log("检查列表", res);
    },
    //二级待审核列表
    async getApproveExamList() {
      const { data: res } = await GetApproveExamList(
        this.$store.state.organizationList.organCode,
        this.cusKeyId
      ).then();
      this.menuListRight = res.data;
      console.log("二级待审核列表", res);
    },
    //新建大类档案
    async getTreeExamItemModels() {
      this.defaultSelecteRows = [];
      this.price = 0;
      this.examItemLists = [];
      const { data: res } = await GetTreeExamItemModels(
        this.$store.state.organizationList.organCode
      ).then();
      console.log("大类==========", res);
      this.addRecordList = res.data;
      this.addRecordList.forEach((res) => {
        res.children.forEach((jrs) => {
          if (jrs.isCheck == 1) {
            this.defaultSelecteRows.push(jrs.examItemId);
          }
        });
      });
      this.addRecordList[this.examTypeId].children.forEach((res) => {
        if (res.isCheck == 1) {
          this.examItemLists.push(res);
          this.price += res.price;
        }
      });
      //getCustomerExamListByEmaKeyid会修改初始化数据列表,保存默认检查数据
      this.addRecordListTemp = this.addRecordList;
      this.currentSelected = this.defaultSelecteRows;
    },
    //保存大类档案
    async createExamItemRecord() {
      if (this.examItemListsTemp === this.examItemLists) {
        //没有修改过，不需要保存，直接返回
        console.log("没有修改过检查项");
        //return ;
      }
      let doctorName = this.$store.state.userInfo.TrueUserName;
      let examCategory = null;
      console.log("create exam ", this.examTypeId);
      if (this.examTypeId == EnumExamType.XinJing) {
        examCategory = this.freshCategory;
      } else if (this.examTypeId == EnumExamType.ShiPei) {
        examCategory = this.AdaptiveCategory;
      }

      //增加检查人姓名
      // this.updateCheckerName();

      const { data: res } = await CreateExamItemRecord(
        this.emaKeyId,
        this.cusKeyId,
        this.$store.state.organizationList.organName,
        this.$store.state.organizationList.organCode,
        doctorName,
        this.userId,
        +this.examTypeId,
        this.examItemLists,
        examCategory
      ).then();

      let items = [];
      this.examItemLists.map(function (item) {
        if (
          item.examItemId == 2 ||
          item.examItemId == 3 ||
          item.examItemId == 4 ||
          item.examItemId == 5 ||
          item.examItemId == 6
        ) {
          items.push(`【${item.name}】`);
        }
      });
      console.log("==========================", res);
      if (res.code == 0) {
        let profile = "";
        switch (+this.examTypeId) {
          default:
            console.log("没有匹配到记录类型：", this.examTypeId);
            break;
          case EnumExamType.ChuZhen:
            {
              this.$router.push({
                path: "/newExamine",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "初诊";
            }
            break;
          case EnumExamType.FuCha:
            {
              this.$router.push({
                path: "/newReview",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "复查";
            }
            break;
          case EnumExamType.XinJing:
            {
              this.$router.push({
                path: "/newFresh",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "新镜";
            }
            break;
          case EnumExamType.ShiPei:
            {
              this.$router.push({
                path: "/newAdaptive",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "适配";
            }
            break;
          case EnumExamType.HuanJing:
            //换镜
            {
              this.$router.push({
                path: "/nosepiece",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "补镜";
            }
            break;
          case EnumExamType.YouHua:
            {
              //优化
              this.$router.push({
                path: "/optimize",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "优化";
            }
            break;
          case EnumExamType.DingPian:
            {
              //定片
              this.$router.push({
                path: "/spacingPiece",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "定片";
            }
            break;
          case EnumExamType.YanPian:
            {
              //验片
              this.$router.push({
                path: "/filmTing",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "验片";
            }
            break;
          case EnumExamType.JiaoPian:
            {
              //交片
              this.$router.push({
                path: "/payPiece",
                query: {
                  emaKeyId: res.data,
                  customerState: this.customerState,
                },
              });
              profile = "交片";
            }
            break;
        }
        this.sendRoleMessage(ROLEID.VERFIER, profile);
        this.sendRoleMessage(ROLEID.ADAOTER, profile);
      }
      this.getMenu();
      this.getHistoryExamed();
      this.GetExamMenu();
      this.getCheckMenuList();

      this.$nextTick(() => {
        setTimeout(() => {
          let $vtree = this.$refs.vtree[0];
          let $treeScroll = $vtree.$refs.treeScroll;
          $treeScroll.scrollTop = $treeScroll.scrollHeight;
        }, 1000);
      });
    },

    sendRoleMessage(roleCode, examname) {
      let fromuserid = this.$store.state.userInfo.Id;
      let roleitems = this.examItemLists.filter(
        (p) => p.roleCode.indexOf(roleCode) !== -1
      );
      if (roleitems) {
        let items = roleitems
          .map((v) => {
            return v.name;
          })
          .join();
        let data = {
          Text: `【${this.$store.state.userInfo.TrueUserName}】已将【${this.name}】分配至您的检查队列中 : ${examname}--${items}`,
          Type: 1,
          Userid: roleCode,
        };
        const organList = JSON.parse(
          window.localStorage.getItem("organizationList")
        );
        let organCode = organList.organCode;
        this.$stompStore.dispatch("STOMP_SEND", {
          fromuserid: fromuserid,
          touserid: organCode + roleCode,
          p: data,
        });
      }
    },
    //根据检查档案ID查出检查项
    async getCustomerExamListByEmaKeyid() {
      this.addRecordList = [];
      this.defaultSelecteRows = [];
      this.examItemLists = [];

      const { data: res } = await GetCustomerExamListByEmaKeyid(
        this.$store.state.organizationList.organCode,
        this.emaKeyId
      ).then();
      console.log("查出检查项", res);
      if (res.data.length != 0) {
        let arr = {
          children: [],
        };
        switch (res.data[0].examTypeId) {
          case 1:
            {
              arr.examTypeId = 1;
              arr.examTypeName = "初诊";
            }
            break;
          case 2:
            {
              arr.examTypeId = 2;
              arr.examTypeName = "复查";
            }
            break;
          case 3:
            {
              arr.examTypeId = 3;
              arr.examTypeName = "新镜";
            }
            break;
          case 4:
            {
              arr.examTypeId = 4;
              arr.examTypeName = "适配";
            }
            break;
          case 5:
            {
              arr.examTypeId = 5;
              arr.examTypeName = "换镜";
            }
            break;
          case 6:
            {
              arr.examTypeId = 6;
              arr.examTypeName = "优化";
            }
            break;
          case 7:
            {
              arr.examTypeId = 7;
              arr.examTypeName = "定片";
            }
            break;
          case 8:
            {
              arr.examTypeId = 8;
              arr.examTypeName = "验片";
            }
            break;
          case 9:
            {
              arr.examTypeId = 9;
              arr.examTypeName = "交片";
            }
            break;
        }

        this.examTypeId = arr.examTypeId;
        this.addRecordList.push(arr);
        this.addRecordListTemp[arr.examTypeId - 1].children.forEach(
          (examItemInfo) => {
            let resExamItemInfo = res.data.find((obj) => {
              return obj.examItemId == examItemInfo.examItemId;
            });

            let newExamItemInfo = examItemInfo;
            if (resExamItemInfo != null) {
              newExamItemInfo.emaKeyId = resExamItemInfo.emaKeyId;
              newExamItemInfo.examTypeId = resExamItemInfo.examTypeId;
              newExamItemInfo.examItemId = resExamItemInfo.examItemId;
              newExamItemInfo.checker = resExamItemInfo.checker;
              newExamItemInfo.checkerName = resExamItemInfo.checkerName;
              newExamItemInfo.unitDefault = resExamItemInfo.unitDefault;
              newExamItemInfo.isCheck = resExamItemInfo.isCheck;
              newExamItemInfo.RoleCode = resExamItemInfo.RoleCode;

              this.examItemLists.push(newExamItemInfo);
              this.defaultSelecteRows.push(newExamItemInfo.examItemId);
            }
            this.addRecordList[0].children.push(newExamItemInfo);
          }
        );
        console.log("this.examItemLists ", this.examItemLists);

        //保存编辑前状态，用于判断是否有修改
        //this.examItemLists = this.addRecordList[0].children;
        //this.examItemListsTemp = this.examItemLists;
        //console.log('检查项：', this.addRecordList)

        //赋值当前激活tab index，触发tab pane刷新内容
        this.tabindex = arr.examTypeId + "";
      }

      this.isEdit = true;
      this.isTabDisable = true;
      this.dialogVisible = true;
    },
    //提交删除审核
    async approveSubmit() {
      let superiorID = this.$store.state.userInfo.superiorID;
      if (superiorID == 0) {
        superiorID = this.$store.state.userInfo.Id;
      }
      const { data: res } = await ApproveSubmit(
        this.$store.state.organizationList.organCode,
        this.$store.state.userInfo.Id,
        this.emaKeyId,
        superiorID,
        1,
        this.cusKeyId
      ).then();
      console.log("删除++++++++++++++++++++++++++++++", res);
      if (res.code == 0) {
        this.$message({
          message: "申请删除成功,请等待审核",
          type: "success",
        });
        let msg = `【${this.$store.state.userInfo.TrueUserName}】申请删除【${this.$store.state.target.name}】的档案`;
        this.websockSend(msg, this.$store.state.userInfo.superiorID);
      }
      this.$router.push({ path: `/workbenchRight?name=${this.name}` });
      this.getApproveList();
      this.GetExamMenu();
      this.dialogVisible = false;
    },
    //查询审核列表
    async getApproveList() {
      const { data: res } = await GetApproveList(
        this.$store.state.organizationList.organCode,
        this.$store.state.userInfo.Id
      ).then();
      console.log("查询审核列表++++++++++++++++++++++++++++++", res);
      this.approveList = res.data;
    },
    //Delete删除就诊档案
    async adelete(checkvalue) {
      const { data: res } = await aDelete(this.emaKeyId, checkvalue).then();
      if (res.data) {
        if (checkvalue == 2) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "拒绝成功",
            type: "success",
          });
        }
        this.dialogVisible = false;
        this.GetExamMenu();
        this.getApproveList();
      }
      console.log("删除=-================", res);
    },
    //Delete一键删除就诊档案
    async batchApprove(checkvalue) {
      const { data: res } = await BatchApprove(
        this.$store.state.organizationList.organCode,
        this.cusKeyId,
        checkvalue
      ).then();
      console.log("一键删除", res);
      if (res.code == 0) {
        if (checkvalue == 2) {
          this.$message({
            message: "一键删除成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "一键拒绝成功",
            type: "success",
          });
        }
        this.getApproveList();
        this.doctorRecordList = false;
      }
    },

    isAllCheckerSelected() {
      return !this.examItemLists.some((value, index) => {
        if (value.checker == null) {
          return true;
        }
      });
    },
    updateCheckerName() {
      this.examItemLists = this.examItemLists.map((examItemInfo) => {
        let checkerInfo = examItemInfo.roleUsers.find((obj) => {
          return obj.id == examItemInfo.checker;
        });
        //checkerInfo不会是空，上层方法已调用isAllCheckerSelected确保一定选择了检查人
        examItemInfo.checkerName = checkerInfo.name;
        return examItemInfo;
      });
      console.log("updateCheckerName", this.examItemLists);
    },
    //服务端返回的数据没有ema key id字段，导致编辑时无法增加新的检查项，需要追加字段
    updateCheckerKeyId() {
      this.examItemLists = this.examItemLists.map((examItemInfo) => {
        if (examItemInfo.emaKeyId == null)
          examItemInfo.emaKeyId = this.emaKeyId;
        return examItemInfo;
      });
    },
    InitData() {
      //初始化数据
      if (this.addRecordListTemp.length <= 0) {
        this.getTreeExamItemModels();
        return;
      }
    },
    showExamItemDlg() {
      this.warningText = " ";
      this.addRecordList = this.addRecordListTemp;
      this.defaultSelecteRows = this.currentSelected;
      this.examItemLists = this.addRecordList[this.tabindex - 1].children;
      this.examTypeId = +this.tabindex;
      this.dialogVisible = true;
    },
    async updateCustomerExamItem() {
      console.log("this.examItemLists", this.examItemLists);
      const { data: res } = await UpdateCustomerExamItem(
        this.examItemLists
      ).then();
    },

    //删除档案
    // deleteButton() {},
  },
  components: {
    vOrgCode,
    vueTree,
  },
  computed: {
    menRight() {
      return this.$store.state.menRight;
    },
    menuFlg() {
      return this.$store.state.menuFlg;
    },
    // stateWebsocketType() {
    //   return this.$websocket.state.websockList;
    // },
    // stateWebsocketonmessage() {
    //   return this.$websocket.state.websockSend;
    // },
    target() {
      return this.$store.state.target;
    },
  },
  watch: {
    menRight() {
      const target = window.sessionStorage.getItem("target");
      this.name = JSON.parse(target).name;
      this.GetExamMenu();
    },
    menuFlg(a, b) {
      if (window.sessionStorage.target) {
        const target = window.sessionStorage.getItem("target");
        this.name = JSON.parse(target).name;
      }
      this.states = 0;
      this.getMenu();
      this.getHistoryExamed();
      this.GetExamMenu();
      this.getCheckMenuList();
      this.getApproveList();
    },
    stateWebsocketonmessage(a, b) {
      this.getMenu();
      this.getHistoryExamed();
      this.getCheckMenuList();
      this.GetExamMenu();
      this.getApproveList();
    },
    stateWebsocketType(a, b) {
      this.getMenu();
      this.getHistoryExamed();
      this.getCheckMenuList();
      this.GetExamMenu();
      this.getApproveList();
    },
    state2: function (newVal, oldVal) {
      this.nothave = false;
      if (this.searchType == 1) {
        this.restaurants = [];
        this.queryName = newVal;
        console.log(newVal);
        console.log(this.menuListLeft);
        this.getMenu();
        this.menuListLeft.forEach((res) => {
          if (res.children.length > 0) {
            res.children.forEach((jes) => {
              if (jes.children) {
                jes.children.forEach((i) => {
                  if (i.name.indexOf(this.state2) >= 0) {
                    this.restaurants.push({
                      value: i.name,
                      cusKeyId: i.cusKeyId,
                    });
                  } else {
                    this.nothave = true;
                  }
                });
              } else {
                if (jes.name.indexOf(this.state2) >= 0) {
                  this.restaurants.push({
                    value: jes.name,
                    cusKeyId: jes.cusKeyId,
                  });
                } else {
                  this.nothave = true;
                }
              }
            });
          } else {
            this.nothave = true;
          }
        });
        console.log(this.restaurants);
      } else {
        this.nothave = false;
        this.restaurants = [];
        this.historyList.forEach((res) => {
          if (res.children.length > 0) {
            res.children.forEach((jes) => {
              console.log(jes);
              if (jes.name.indexOf(this.state2) >= 0) {
                this.restaurants.push({
                  value: jes.name,
                });
              } else {
                this.nothave = true;
              }
            });
          } else {
            this.nothave = true;
          }
        });
        //console.log(this.restaurants);
      }
    },
    $route(a, b) {
      if (a.path == "/clientRecord") {
        this.doctorRecordList = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
}
.el-breadcrumb {
  height: 50px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0 0 10px;
  box-sizing: border-box;
}

.flash {
  width: 100%;
  font-size: 12px !important;
  font-weight: 600;
  letter-spacing: 0.15em;
  line-height: 30px;
  margin: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #316dc6;
}
.el-aside {
  height: 100%;
  .el-menu {
    span {
      color: #000;
    }
  }
}

.addDoctorId {
  text-align: center;
  color: #fff;
}
.patientOrder {
  display: inline-block;
  width: 10px;
  line-height: 10px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #fff;
  transform: translate(-15px, -2px);
  font-size: 8px;
}

.moveBtn3 {
  border-right: 2px solid #ccc;
  width: 64px !important;
}
.moveBtn2 {
  border-right: 2px solid #ccc;
  width: 64px !important;
}
#silderLeft,
#silderLeft1 {
  height: 100%;
  position: relative;
  padding-right: 3px;
  /* overflow-y: auto; */
}

/* 拖动条 */
.moveBtn {
  height: 100%;
  width: 5px;
  position: absolute;
  right: -2px;
  top: 0;
  cursor: col-resize;
  background-color: #e6eef8;
  border: 1px solid rgba(173, 215, 235, 0.5);
  opacity: 0.8;
  z-index: 1500;
  border: 1px solid #95b8e7 !important;
}

.el-aside::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.el-aside::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

.el-aside:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

.el-aside::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

.el-aside::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}

.el-aside::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.01);
}
.addRecord {
  ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    li {
      cursor: pointer;
      line-height: 40px;
    }
  }
}
@media screen and (max-width: 750px) {
  .el-aside {
    display: none;
  }
}
.toggle-button {
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e0ecff;
  border-bottom: 1px solid #95b8e7;
}
.el-autocomplete {
  margin: 10px 0;
}
.search-style {
  margin: 0 10px;
  text-decoration: underline;
}
.vxe-table--header {
  width: 100% !important;
}
.dialog-footer {
  text-align: center;
  .el-button {
    margin: 0 40px;
  }
}
.newRecord {
  text-align: center;
  line-height: 40px;
  &:hover {
    background-color: #f2f2f2;
  }
}
.el-dialog__body {
  min-height: 550px !important;
}
.menutoggle {
  margin-right: 6px;
  color: #009966;
}
.el-menu-item {
  font-size: 12px;
}

.el-submenu__title span {
  font-size: 12px;
}
.el-menu-left,
.el-menu-right {
  border-top: 1px solid #95b8e7;
  border-left: 1px solid #95b8e7;
}

.warning-text {
  text-align: right;
  color: red;
  font-size: 15px;
  background-color: #fff;
  width: 100px;
  transform: translateY(-20px);
}
</style>