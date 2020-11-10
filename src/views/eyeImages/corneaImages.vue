<template>
  <!-- 角膜地形图 -->
  <div class="cornea">
    <vxe-table
      align="center"
      :loading="loading"
      keep-source
      highlight-hover-row
      :data="tableData"
      height="660px"
      @cell-dblclick="cellDBLClickEvent"
      @cell-mouseenter="cellmouseenterEvent"
      v-loading.fullscreen.lock="imageLoading"
      element-loading-text="图片加载中,请稍候..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgb(0,0,0,.5)"
      border
      :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
      class="mytable-scrollbar"
      @checkbox-change="selectChangeEvent"
      ref="xTable"
      auto-resize
    >
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column type="seq" title="序号" width="100"></vxe-table-column>
      <vxe-table-column
        field="date"
        width="160"
        title="日期"
      ></vxe-table-column>
      <vxe-table-column title="OD" width="180">
        <template v-slot="{ row }">
          <el-dropdown
            placement="bottom"
            v-if="row.odList.length != 0"
            size="mini"
            :hide-on-click="false"
          >
            <span class="el-dropdown-link">
              <el-image :src="row.odList[serial].tmaMapFileUrl" />
              <p>
                {{ row.odList.length }} 张 -
                <span v-show="row.odList.length > 1"
                  >{{ row.odList | capitalize(singleList) }}张</span
                >
              </p>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-show="row.odList.length > 1"
                divided
                v-for="(item, index) in row.odList"
                :key="index"
              >
                <el-image
                  :src="item.tmaMapFileUrl"
                  @click.native="handleClick(index)"
                />
                <div class="df" @click="singleClick(item)">
                  <input type="checkbox" :checked="selectedItem[item.examNo]" />
                  <p style="margin-left: 2px">{{ item.examDate }}</p>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </vxe-table-column>
      <vxe-table-column field="address" title="OD备注" width="330">
        <template v-slot="{ row }">
          <ul class="remark" v-if="row.odList.length != 0">
            <li v-if="row.odList[serial].votTmsStatisticsData">
              <table class="nineCellTable">
                <tr>
                  <td>
                    Ks:{{ row.odList[serial].votTmsStatisticsData.ks }}@{{
                      row.odList[serial].votTmsStatisticsData.ksDegree
                    }}°
                  </td>
                  <td>
                    Kf:{{ row.odList[serial].votTmsStatisticsData.kf }}@{{
                      row.odList[serial].votTmsStatisticsData.kfDegree
                    }}°
                  </td>
                  <td>
                    Kf:{{ row.odList[serial].votTmsStatisticsData.mink }}@{{
                      row.odList[serial].votTmsStatisticsData.minkDegree
                    }}°
                  </td>
                </tr>
                <tr>
                  <td>
                    Avgk:{{ row.odList[serial].votTmsStatisticsData.avgk }}
                  </td>
                  <td>
                    Es:{{ row.odList[serial].votTmsStatisticsData.es }}/Em:{{
                      row.odList[serial].votTmsStatisticsData.em
                    }}
                  </td>
                  <td>CYL:{{ row.odList[serial].votTmsStatisticsData.cyl }}</td>
                </tr>
                <tr>
                  <td>SRI:{{ row.odList[serial].votTmsStatisticsData.sri }}</td>
                  <td>
                    PVA:{{ row.odList[serial].votTmsStatisticsData.pva }}-{{
                      row.odList[serial].votTmsStatisticsData.pvb
                    }}
                  </td>
                  <td>SAI:{{ row.odList[serial].votTmsStatisticsData.sai }}</td>
                </tr>
              </table>
            </li>
            <li>
              <vxe-textarea
                disabled
                class="tmsComment"
                v-model="row.odList[0].comment"
                :readonly="false"
                @focus="inputComment(row.organCode, row.odList[0], 'OD')"
                @blur="
                  updateComment(row.odList[0].serialNumber, row.odList[0], 'OD')
                "
              ></vxe-textarea>
            </li>
          </ul>
        </template>
      </vxe-table-column>
      <vxe-table-column field="age" title="OS" width="180">
        <template v-slot="{ row }">
          <el-dropdown
            placement="bottom"
            v-if="row.osList.length != 0"
            size="mini"
            :hide-on-click="false"
          >
            <span class="el-dropdown-link">
              <el-image :src="row.osList[serial].tmaMapFileUrl" />
              <p>
                {{ row.osList.length }} 张 -
                <span v-show="row.osList.length > 1"
                  >{{ row.osList | capitalize(singleList) }}/张</span
                >
              </p>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-show="row.osList.length > 1"
                divided
                v-for="(item, index) in row.osList"
                :key="index"
                v-loading.fullscreen.lock="imageLoading"
                element-loading-text="图片加载中,请稍候..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgb(0,0,0,.5)"
                :edit-config="{
                  trigger: 'click',
                  mode: 'row',
                  showStatus: true,
                }"
              >
                <el-image
                  :src="item.tmaMapFileUrl"
                  @click.native="handleClick(index)"
                />
                <div class="df">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    @click="singleClick(item)"
                    :checked="selectedItem[item.examNo]"
                  />
                  <p style="margin-left: 2px">{{ item.examDate }}</p>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </vxe-table-column>
      <vxe-table-column field="address" title="OS备注" width="330">
        <template v-slot="{ row }">
          <ul class="remark" v-if="row.osList.length != 0">
            <li v-if="row.osList[serial].votTmsStatisticsData">
              <table class="nineCellTable">
                <tr>
                  <td>
                    Ks:{{ row.osList[serial].votTmsStatisticsData.ks }}@{{
                      row.osList[serial].votTmsStatisticsData.ksDegree
                    }}°
                  </td>
                  <td>
                    Kf:{{ row.osList[serial].votTmsStatisticsData.kf }}@{{
                      row.osList[serial].votTmsStatisticsData.kfDegree
                    }}°
                  </td>
                  <td>
                    Kf:{{ row.osList[serial].votTmsStatisticsData.mink }}@{{
                      row.osList[serial].votTmsStatisticsData.minkDegree
                    }}°
                  </td>
                </tr>
                <tr>
                  <td>
                    Avgk:{{ row.osList[serial].votTmsStatisticsData.avgk }}
                  </td>
                  <td>
                    Es:{{ row.osList[serial].votTmsStatisticsData.es }}/Em:{{
                      row.osList[serial].votTmsStatisticsData.em
                    }}
                  </td>
                  <td>CYL:{{ row.osList[serial].votTmsStatisticsData.cyl }}</td>
                </tr>
                <tr>
                  <td>SRI:{{ row.osList[serial].votTmsStatisticsData.sri }}</td>
                  <td>
                    PVA:{{ row.osList[serial].votTmsStatisticsData.pva }}-{{
                      row.osList[serial].votTmsStatisticsData.pvb
                    }}
                  </td>
                  <td>SAI:{{ row.osList[serial].votTmsStatisticsData.sai }}</td>
                </tr>
              </table>
              <!-- <span>OS:屈光(Sph:{{row.osList[serial].refrSph}},</span>
              <span>&nbsp; Cyl:{{row.osList[serial].refrCyl}},</span>
              <span>&nbsp;BCVA:{{row.osList[serial].bcva}})</span>
              <span>日期:{{row.osList[serial].examDate}}</span>-->
            </li>
            <li>
              <vxe-textarea
                disabled
                class="tmsComment"
                v-model="row.osList[0].comment"
                :readonly="false"
                @focus="inputComment(row.organCode, row.osList[0], 'OS')"
                @blur="
                  updateComment(row.osList[0].serialNumber, row.osList[0], 'OS')
                "
              ></vxe-textarea>
            </li>
          </ul>
        </template>
      </vxe-table-column>
      <vxe-table-column
        field="organ"
        title="检查单位"
        width="200"
      ></vxe-table-column>
    </vxe-table>
    <vxe-pager
      border
      :loading="loading"
      :current-page="tablePage.currentPage"
      :page-size="tablePage.pageSize"
      :total="tablePage.totalResult"
      :layouts="[
        'PrevPage',
        'JumpNumber',
        'NextPage',
        'FullJump',
        'Sizes',
        'Total',
      ]"
      @page-change="handlePageChange"
    ></vxe-pager>
    <el-button size="mini" @click.native="getSelectEvent">查看</el-button>
  </div>
</template>


<script>
import {
  SelectTmsExam,
  GetTmsJson,
  SavePictureComment,
} from "@/api/fundusImages";
import { DownHandler } from "@/api/DownHandler";
import { log } from "util";

export default {
  data() {
    return {
      loading: false,
      tablePage: {
        totalResult: 0,
        currentPage: 1,
        pageSize: 10,
        perfect: true,
      },
      //鼠标移动到
      mouseenterEvent: null,
      mouseenter: null,
      tableData: [],
      serial: 0,
      tmsJson: {
        examList: [
          {
            serialNumber: "",
            examNo: "",
          },
        ],
        patientId: this.$route.query.patientId,
      },
       tmsJsonList: {
        examList: [
          {
            serialNumber: "",
            examNo: "",
          },
        ],
        patientId: this.$route.query.patientId,
      },
      selectedItem: [],
      imageLoading: false,

      //单个选框多选
      singleList: {
        examList: [],
        patientId: this.$route.query.patientId,
      },

      selectRecords: [],
    };
  },
  created() {
    this.selectTmsExam();
  },
  methods: {
    //复选框事件
    selectChangeEvent(item) {
      console.log(item);
      if (item.checked) {
        console.log("查看多个", this.selectRecords);
      } else {
        item.data.forEach((res) => {
          res.odList.forEach((jes) => {
            this.selectedItem[jes.examNo] = false;
          });
          res.osList.forEach((ies) => {
            this.selectedItem[ies.examNo] = false;
          });
        });
      }

      console.log(this.selectedItem);
    },
    //点击复选框
    singleClick(item) {
      console.log("单选框的值++++", item);
      if (
        this.singleList.examList.some(
          (value, index) => value.examNo == item.examNo
        )
      ) {
        let index = this.singleList.examList.findIndex(
          (p) => p.examNo == item.examNo
        );
        console.log("deleteindex", index);
        this.singleList.examList.splice(index, 1);
        this.selectedItem[item.examNo] = false;

        console.log("长度", this.singleList.examList);
      } else {
        this.selectedItem[item.examNo] = true;
        this.singleList.examList.push({
          serialNumber: item.serialNumber,
          examNo: item.examNo + "",
        });
      }
      console.log("buer", this.selectedItem);
      console.log("单选框的值=====", this.singleList);
    },
    //查看多个
    getSelectEvent() {
      this.tmsJsonList.examList = [];
      this.selectRecords = this.$refs.xTable.getCheckboxRecords();
      this.imageLoading = true;
      if (this.selectRecords.length != 0) {
        this.selectRecords.forEach((element, i) => {
          if (element.odList.length != 0 && element.osList.length != 0) {
            element.odList.forEach((res) => {
              this.tmsJsonList.examList.push({
                serialNumber: res.serialNumber,
                examNo: res.examNo + "",
              });
              this.selectedItem[res.examNo] = true;
            });
            element.osList.forEach((res) => {
              this.tmsJsonList.examList.push({
                serialNumber: res.serialNumber,
                examNo: res.examNo + "",
              });
              this.selectedItem[res.examNo] = true;
            });
            return;
          }
          if (element.odList.length != 0) {
            element.odList.forEach((res) => {
              this.tmsJsonList.examList.push({
                serialNumber: res.serialNumber,
                examNo: res.examNo + "",
              });
            });
          }
          if (element.osList.length != 0) {
            element.osList.forEach((res) => {
              this.tmsJsonList.examList.push({
                serialNumber: res.serialNumber,
                examNo: res.examNo + "",
              });
            });
          }
        });
        this.getTmsJson(this.tmsJsonList);
        console.log("选择的数据", this.tmsJson);
      } else {
        this.getTmsJson(this.singleList);
      }
    },
    //双击详情
    async cellDBLClickEvent({ $rowIndex, $columnIndex }) {
      console.log($rowIndex);
      console.log(this.tableData[$rowIndex].odList[this.serial].serialNumber);

      if ($columnIndex === 4 || $columnIndex === 3) {
        if (this.tableData[$rowIndex].odList.length > 0) {
          this.imageLoading = true;
          const serialNumber = this.tableData[$rowIndex].odList[this.serial]
            .serialNumber;
          const examNo = this.tableData[$rowIndex].odList[this.serial].examNo;
          this.tmsJson.examList[this.serial].serialNumber = serialNumber;
          this.tmsJson.examList[this.serial].examNo = examNo + "";
          this.tmsJson.patientId = this.$route.query.patientId;
          //获取下载的JOSN
          this.getTmsJson(this.tmsJson);
        }
      }
      if ($columnIndex === 6 || $columnIndex === 5) {

        if (this.tableData[$rowIndex].osList.length > 0) {
          this.imageLoading = true;
          const serialNumber = this.tableData[$rowIndex].osList[this.serial]
            .serialNumber;
          const examNo = this.tableData[$rowIndex].osList[this.serial].examNo;
          this.tmsJson.examList[this.serial].serialNumber = serialNumber;
          this.tmsJson.examList[this.serial].examNo = examNo + "";
          this.tmsJson.patientId = this.$route.query.patientId;
          //获取下载的JOSN
          this.getTmsJson(this.tmsJson);
        }
      }
    },
    //查看多个图片
    async getTmsJson(tmsJson) {
      const { data: res } = await GetTmsJson(JSON.stringify(tmsJson))
        .then()
        .catch((error) => {
          setTimeout(() => {
            this.imageLoading = false;
          }, 1000);
        });
      console.log("图片传给后台", res);
      if (res.code == 0) {
        this.downHandler(res.data);
      } else {
        this.$message({
          message: res.message,
          type: "warning",
        });
      }
    },
    //选择图片
    cellmouseenterEvent({ $rowIndex, $columnIndex }) {
      this.mouseenterEvent = $rowIndex;
      this.mouseenter = $columnIndex;
    },
    handleClick(index) {
      if (this.mouseenter == 3) {
        this.tableData[this.mouseenterEvent].odList[0] = this.tableData[
          this.mouseenterEvent
        ].odList.splice(
          index,
          1,
          this.tableData[this.mouseenterEvent].odList[0]
        )[0];
      }
      if (this.mouseenter == 5) {
        this.tableData[this.mouseenterEvent].osList[0] = this.tableData[
          this.mouseenterEvent
        ].osList.splice(
          index,
          1,
          this.tableData[this.mouseenterEvent].osList[0]
        )[0];
      }
    },

    //角膜地形图列表
    async selectTmsExam() {
      this.loading = true;
      const { data: res } = await SelectTmsExam(
        this.$route.query.cusKeyId,
        this.tablePage.pageSize,
        this.tablePage.currentPage
      ).then();
      this.tableData = res.data.tmsresult;
      console.log("角膜地形图列表", this.tableData);
      this.tablePage.totalResult = parseInt(res.data.count);
      this.loading = false;
    },
    handlePageChange({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage;
      this.tablePage.pageSize = pageSize;
      this.selectTmsExam();
    },
    //调用本地Tms
    async downHandler(data) {
      const dataO = JSON.stringify(data);
      // await DownHandler(encodeURIComponent(dataO))
      await DownHandler(dataO)
        .then((resolve) => {
          this.imageLoading = false;
        })
        .catch((error) => {
          this.imageLoading = false;
          this.$message({
            message: "图片加载错误",
            type: "warning",
          });
        });
    },
    inputComment(organCode, row, eyeType) {
      this.comment = row.comment;
    },
    async updateComment(organCode, row, eyeType) {
      if (this.comment != row.comment) {
        let fileName = row.examFileName;
        let pictureType = 1;
        const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
        const { data: res } = await SavePictureComment(
          organCode,
          fileName,
          pictureType,
          eyeType,
          row.comment,
          parseInt(userInfo.Id)
        ).then();
        if (res.code == 0) {
          this.$message({
            message: "保存成功",
            type: " success",
          });
        } else {
          this.$message({
            message: "保存失败",
            type: "success",
          });
        }
      }
    },
  },

  watch: {
    $route(newValue, oldValue) {
      if (newValue.path == "/corneaImages") {
        this.selectTmsExam();
      }
    },
  },
  filters: {
    capitalize: (value, singleList) => {
      if (value.length > 1) {
        const eyelist = [];
        value.forEach((res) => {
          singleList.examList.forEach((jes) => {
            console.log("11", jes.examNo);
            console.log("222", res.examNo);
            if (jes.examNo == res.examNo) {
              eyelist.push({
                ...res,
              });
            }
          });
        });
        if (eyelist.length == value.length) {
        }
        console.log("总长度========", value.length);
        console.log("选中长度========", eyelist.length);
        return eyelist.length;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.cornea {
  position: relative;
  .remark {
    font-size: 8px;
    font-weight: 600;
  }
  .el-dropdown-link {
    > p {
      color: #409eff;
      background: #ecf5ff;
      border: 1px solid rgba(217, 236, 255, 0.9);
      border-radius: 3px;
      span {
        color: #499cf0;
      }
    }
  }
  .el-button {
    border-radius: 20px;
    position: absolute;
    top: -29px;
    right: 50px;
  }
}

.tmsComment {
  margin-top: 1px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 310px;
}

.nineCellTable {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #ececec;
}

.nineCellTable td {
  border-left: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  border-width: 0 0 1px 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
  background-color: transparent;
  text-align: left;
}
</style>