<template>
  <!-- 眼底照片 -->
  <div class="fundus">
    <vxe-table
      border
      keep-source
      show-header-overflow
      show-overflow
      highlight-hover-row
      align="center"
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
      class="mytable-scrollbar"
      @cell-mouseenter="cellmouseenterEvent"
      height="660px"
      auto-resize
    >
      <vxe-table-column field="itemIndex" title="序号" width="60"></vxe-table-column>
      <vxe-table-column field="examDate" title="日期"></vxe-table-column>
      <vxe-table-column title="OD">
        <template v-slot="{ row }">
          <div class="beizhu">
            <div v-show="row.odList.length != 0">
              <el-dropdown placement="bottom" v-if="row.odList.length > 1">
                <span class="el-dropdown-link">
                  <img :src="row.odList[0].imgUrl" height="100" />
                </span>
                <el-dropdown-menu slot="dropdown" v-if="row.odList.length > 0">
                  <el-dropdown-item
                    v-for="(item, index) in row.odList"
                    :key="index"
                    @click.native="selectImg(item, index, 'od')"
                  >
                    <img :src="item.imgUrl" height="100" />
                    <p style="text-align: center">{{ item.examDate }}</p>
                  </el-dropdown-item>
                </el-dropdown-menu>
                <p>【{{row.odList[row.odList.length-1].index}}】共{{ row.odList.length }} 张</p>
              </el-dropdown>
              <div v-if="row.odList.length == 1">
                <span>
                  <img
                    @click="selectImg(row.odList[0], 0, 'od')"
                    :src="row.odList[0].imgUrl"
                    height="100"
                  />
                </span>
                <p>【{{row.odList[0].index}}】</p>
              </div>
            </div>
            <vxe-textarea
            v-if="row.odList[0].comment"
              class="eyeComment"
              v-model="row.odList[0].comment"
              :readonly="false"
              @focus="inputComment(row.organCode, row.odList[0], 'OD')"
              @blur="updateComment(row.organCode, row.odList[0], 'OD')"
            ></vxe-textarea>
          </div>
        </template>
      </vxe-table-column>
      <vxe-table-column title="OS">
        <template v-slot="{ row }">
          <div class="beizhu">
            <div v-if="row.osList.length != 0">
              <el-dropdown placement="bottom" v-if="row.osList.length > 1">
                <span class="el-dropdown-link">
                  <img
                    @click="selectImg(row.osList[0], 0, 'os')"
                    :src="row.osList[0].imgUrl"
                    height="100"
                  />
                </span>
                <el-dropdown-menu slot="dropdown" v-if="row.osList.length > 0">
                  <el-dropdown-item
                    divided
                    v-for="(item, index) in row.osList"
                    :key="index"
                  >
                    <img
                      @click="selectImg(item, index, 'os')"
                      :src="item.imgUrl"
                      height="100"
                    />
                    <p style="text-align: center">{{ item.examDate }}</p>
                  </el-dropdown-item>
                </el-dropdown-menu>
                <p>【{{row.osList[row.osList.length-1].index}}】共{{ row.osList.length }} 张</p>
              </el-dropdown>               
              <div v-if="row.osList.length == 1">
                <span>
                  <img
                    @click="selectImg(row.osList[0], 0, 'os')"
                    :src="row.osList[0].imgUrl"
                    height="100"
                  />
                </span>
              </div>
              <p>【{{row.osList[0].index}}】</p>
            </div>
            <vxe-textarea
            v-if="row.odList[0].comment"

              class="eyeComment"
              v-model="row.osList[0].comment"
              :readonly="false"
              @focus="inputComment(row.organCode, row.osList[0], 'OS')"
              @blur="updateComment(row.organCode, row.osList[0], 'OS')"
            ></vxe-textarea>
          </div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="organName" title="检查单位"></vxe-table-column>
    </vxe-table>
    <el-dialog
      title
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      :fullscreen="fullscreen"
      :modal="showmodal"      
    >
      <div class="dialog_toolbar">
        <vxe-button
          status="success"
          icon="el-icon-view"
          :disabled="imgs != null && imgs.length == 0"
          size="mini"
          @click="setModel(1)"
          >单张</vxe-button
        >
        <vxe-button
          status="success"
          icon="el-icon-connection"
          :disabled="!haveOSImg || !haveODImg"
          size="mini"
          @click="setModel(2)"
          >左右比较</vxe-button
        >
        <vxe-button
          status="success"
          icon="el-icon-connection"
          :disabled="!haveOSImg"
          size="mini"
          @click="setModel(3)"
          >左眼比较</vxe-button
        >
        <vxe-button
          status="success"
          icon="el-icon-connection"
          :disabled="!haveODImg"
          size="mini"
          @click="setModel(4)"
          >右眼比较</vxe-button
        >

        <vxe-button
          status="primary"
          icon="el-icon-s-unfold"
          size="mini"
          @click="setDisplayModel($event)"
        ></vxe-button>
      </div>
      <eyeView
        v-if="reSetView"
        :model="model"
        :imgs="imgs"
        :eyePicThumbnailUrl="eyePicThumbnailUrl"
        :eyePicUrl="eyePicUrl"
        :displayModel="displayModel"
        :key="model"
        ref="eyeView"
      ></eyeView>
    </el-dialog>
    <el-drawer
      title="查看眼底照片"
      :visible.sync="drawer"
      :direction="'btt'"
      size="15"
      :with-header="false"
      :modal="false"
      :show-close="true"
      :before-close="drawerClose"
    >
      <div class="eyeViewMain">
        <div class="eyeList">
          <div class="imgblock" v-for="img in imgs" :key="img.imgUrl">
            <span style="display: inline-block" class="eyeList-img">
              <el-image :src="img.imgUrl" fit="contain"></el-image>
              <span style="display: block; color: #016c80">
                {{ img.eye }}-{{ img.createTime | formatDate }}
                <i
                  class="el-icon-close"
                  style="color: red; cursor: pointer"
                  @click="removeImg(img)"
                ></i>
              </span>
            </span>
          </div>
          <div class="show-img">
            <p style="opacity: 0">+</p>
          </div>
        </div>
        <div class="eyeViewAction" @click="removeAllImg">
          <i
            class="el-icon-refresh center-vertical"
            style="color: white; cursor: pointer; font-size: 60px"
          ></i>
          <div class="eyeViewLabel">清空数据</div>
        </div>
        <div class="eyeViewAction" @click="viewImg">
          <i
            class="el-icon-camera center-vertical"
            style="color: white; cursor: pointer; font-size: 60px"
          ></i>
          <div class="eyeViewLabel">查看照片</div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { EyePicThumbnailUrl, EyePicUrl } from "@/utils/baseConfig";
import { GetEyeList, SavePictureComment } from "@/api/fundusImages";
import eyeView from "./eyeView";
export default {
  data() {
    return {
      reSetView: true,
      dialogVisible: false,
      fullscreen: true,
      showmodal:true,
      model: 1,
      //鼠标移动到
      mouseenterEvent: null,
      tableData: [],
      drawer: false,
      imgs: [],
      haveOSImg: false,
      haveODImg: false,
      eyePicThumbnailUrl: "",
      eyePicUrl: "",
      displayModel: 1,
      comment: "",
    };
  },
  created() {
    (this.eyePicThumbnailUrl = EyePicThumbnailUrl),
      (this.eyePicUrl = EyePicUrl),
      this.getEyeList(),
      (this.imgs = this.$store.state.eyeImgs); 
  },
  mounted() {},
  methods: {
    //眼底照片列表
    async getEyeList() {
      const { data: res } = await GetEyeList(this.$route.query.cusKeyId).then();
      this.tableData = res.data;
      this.tableData.forEach((r) => {
        r.odList.forEach((od) => {
          od.imgUrl = this.getImgThumbnailUrl(od.imgUrl);
        });
        r.osList.forEach((os) => {
          os.imgUrl = this.getImgThumbnailUrl(os.imgUrl);
        });
      });

    },
    handleClose(done) {
      done();
    },
    drawerClose(done) {
      done();
    },
    setModel(model) {
      this.model = model;
    },
    selectImg(data, index, eyeType) {

      this.handleClick(index, eyeType);
      var exists = this.imgs.some((item) => {
        if (item.imgUrl == data.imgUrl) {
          return true;
        }
      });
      if (!exists) {
        this.imgs.push(data);
      }
      this.calImg();
      this.$store.commit("$_setEyeImgs", this.imgs);
    },
    handleClick(index, eyeType) {
      if (eyeType == "od") {
        this.tableData[this.mouseenterEvent].odList[0] = this.tableData[
          this.mouseenterEvent
        ].odList.splice(
          index,
          1,
          this.tableData[this.mouseenterEvent].odList[0]
        )[0];
      }
      if (eyeType == "os") {
        this.tableData[this.mouseenterEvent].osList[0] = this.tableData[
          this.mouseenterEvent
        ].osList.splice(
          index,
          1,
          this.tableData[this.mouseenterEvent].osList[0]
        )[0];
      }
    },
    //选择图片
    cellmouseenterEvent({ $rowIndex, $columnIndex }) {
      this.mouseenterEvent = $rowIndex;
    },
    removeImg(data) {
      this.imgs.splice(
        this.imgs.findIndex((item) => item.imgUrl === data.imgUrl),
        1
      );
      this.calImg();
      this.$store.commit("$_setEyeImgs", this.imgs);
    },
    removeAllImg() {
      this.imgs.splice(0, this.imgs.length);
      this.drawer = false;
      this.calImg();
      this.$store.commit("$_setEyeImgs", this.imgs);
    },
    viewImg() {
      let _that = this;
      if (_that.imgs.length == 0) {
        _that.$message({
          message: "请用鼠标点击选择列表中的眼底照片",
          type: "warning",
        });
        return;
      }
      _that.model = 0;
      _that.dialogVisible = true;
      _that.$nextTick(function () {
        setTimeout(function () {
          _that.setModel(1);
        }, 100);
      });
    },
    calImg() {
      this.haveOSImg = this.imgs.filter((p) => p.eye == "OS").length > 0;
      this.haveODImg = this.imgs.filter((p) => p.eye == "OD").length > 0;
    },
    getImgThumbnailUrl(imgName) {
      if (!imgName.startsWith("http")) {
        return this.eyePicThumbnailUrl + imgName;
      }
      return imgName;
    },
    setDisplayModel(element) {
      var obj = element.$event.target;
      if (element.$event.target.localName == "button") {
        obj = element.$event.target.firstElementChild;
      }
      if (this.displayModel == 1) {
        this.displayModel = 2;
        obj.classList.remove("eyeview_orientation");
        obj.classList.add("eyeview_portrait");
      } else {
        this.displayModel = 1;
        obj.classList.remove("eyeview_portrait");
        obj.classList.add("eyeview_orientation");
      }
    },
    inputComment(organCode, row, eyeType) {
      console.log("=============", row);
      this.comment = row.comment;
      
    },
    async updateComment(organCode, row, eyeType) {
      console.log("=============", row);

      if (this.comment != row.comment) {
        let pos = row.imgUrl.lastIndexOf("/");
        let fileName = row.imgUrl.substring(pos + 1);
        let pictureType = 2;
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
            type: "success",
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
  components: {
    eyeView,
  },
  computed: {},
  filters: {
    formatDate(date) {
      const dateTime = new Date(date);
      const YY = dateTime.getFullYear();
      const MM =
        dateTime.getMonth() + 1 < 10
          ? "0" + (dateTime.getMonth() + 1)
          : dateTime.getMonth() + 1;
      const D =
        dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate();
      return `${YY}-${MM}-${D}`;
    },
  },
  watch: {
    displayModel() {
      this.reSetView = false;
      this.$nextTick(() => {
        this.reSetView = true;
      });
    },
    $route(newValue, oldValue) {     
      if (newValue.path == "/fundusImages") { 
        this.getEyeList();
      }
    },
  },
};
</script>

<style lang="less" scope>
.fundus {
  min-height: 76vh;
  .el-dialog__headerbtn {
    top: 0 !important;
    .el-dialog__header {
      padding: 0 !important;
      height: 30px !important;
    }
    .el-dialog__title {
      line-height: 100% !important;
      font-size: 14px !important;
      color: #303133 !important;
    }
    .el-dialog__body {
      padding: 0px !important;
    }
    .dialog_toolbar {
      position: absolute;
      top: 5px;
      right: 60px;
      z-index: 9999999;
    }
    .el-select-dropdown__item {
      height: 150px !important;
    }
    .imgblock {
      text-align: center;
      display: inline-block;
      padding: 5px 5px 5px 5px;
    }
    .eyeViewMain {
      width: 100%;
      height: 130px;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-align-content: center;
      align-content: flex-start;
    }
    .eyeList {
      text-align: center;
      background-color: #fff;
    }
    .eyeViewAction {
      min-width: 80px;
      width: 5%;
      height: 100%;
      float: right;
      text-align: center;
      background: #ccc;
    }
    .eyeViewAction:hover {
      background: #ecc954;
      cursor: pointer;
    }
    .center-vertical {
      position: relative;
      transform: translateY(50%);
    }
    .eyeViewLabel {
      //min-width:80px;width:5%;
      color: white;
      display: block;
      position: relative;
      transform: translateY(150%);
    }
    .fundus-left {
      position: fixed;
      top: 50px;
      left: 50px;
      width: 45%;
      height: 80%;
      z-index: 50;
    }
    .fundus-right {
      position: fixed;
      top: 50px;
      right: 50px;
      width: 45%;
      height: 80%;
      z-index: 50;
    }
  }
  .el-dialog__headerbtn {
    top: 0 !important;
  }
  .el-dialog__header {
    padding: 0 !important;
    height: 30px !important;
  }
  .el-dialog__title {
    line-height: 100% !important;
    font-size: 14px !important;
    color: #303133 !important;
  }
  .el-dialog__body {
    padding: 0px !important;
  }
  .dialog_toolbar {
    position: absolute;
    top: 5px;
    right: 60px;
  }
  .el-select-dropdown__item {
    height: 150px !important;
  }
  .imgblock {
    text-align: center;
    display: inline-block;
    padding: 5px 5px 5px 5px;
  }
  .eyeViewMain {
    width: 100%;
    height: 130px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-align-content: center;
    align-content: flex-start;
  }
  .eyeList {
    flex: 1;
    text-align: center;
    background-color: #fff;
  }
  .eyeViewAction {
    min-width: 80px;
    width: 5%;
    height: 100%;
    float: right;
    text-align: center;
    background: #ccc;
  }
  .eyeViewAction:hover {
    background: #e6a23c;
    cursor: pointer;
  }
  .center-vertical {
    position: relative;
    transform: translateY(50%);
  }
  .eyeViewLabel {
    //min-width:80px;width:5%;
    color: white;
    display: block;
    position: relative;
    transform: translateY(150%);
  }
  .show-img {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-color: #f5f6f7;
    transform: translateY(-43px);
    border: 1px solid #ccc;
    line-height: 120px;
  }
  .eyeList-img {
    width: 120px;
    height: 120px;
    background-color: #f5f6f7;
    border: 1px solid #ccc;
  }
}

.eyeview_orientation {
  transform: rotate(0deg);
  transition: 1s;
}

.eyeview_portrait {
  transform: rotate(270deg);
  transition: 1s;
}

.eyeComment {
  height: 100px;
  background-color: #f4f9ff;
  margin-left: 15px;
}
.beizhu {
  display: flex;
}
</style>