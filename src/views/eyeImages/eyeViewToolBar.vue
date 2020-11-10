<template>
  <div class="eyeViewMain">
    <div class="eyeList">
      <div class="imgblock" v-for="img in imgs" :key="img.imgUrl">
        <span style="display: inline-block" class="eyeList-img">
          <el-image :src="img.imgUrl" fit="contain"></el-image>
          <span style="display: block; color: #016c80">
            {{img.cusName}}-{{ img.eye }}-{{ img.index}}
            <i
              class="el-icon-close"
              style="color: red; cursor: pointer"
              @click="removeImg(img)"
            ></i>
          </span>
        </span>
      </div>
      <div class="show-img">
        <!-- <p style="opacity: 0;">+</p> -->
      </div>
    </div>
    <div class="eyeViewList">
      <div class="eyeViewAction" @click="removeAllImg">
        <i
          class="el-icon-refresh center-vertical"
          style="color: white; cursor: pointer; font-size: 50px"
        ></i>
        <div class="eyeViewLabel">清空数据</div>
      </div>
      <div class="eyeViewAction" @click="viewImg">
        <i
          class="el-icon-camera center-vertical"
          style="color: white; cursor: pointer; font-size: 50px"
        ></i>
        <div class="eyeViewLabel">查看照片</div>
      </div>
    </div>

    <el-dialog
      title
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      :fullscreen="fullscreen"
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
  </div>
</template>


<script>
import { EyePicThumbnailUrl, EyePicUrl } from "@/utils/baseConfig";
import eyeView from "./eyeView";
export default {
  data() {
    return {
      reSetView: true,
      dialogVisible: false,
      fullscreen: true,
      model: 1,
      imgs: [],
      haveOSImg: false,
      haveODImg: false,
      eyePicThumbnailUrl: "",
      eyePicUrl: "",
      displayModel: 1,
    };
  },
  created() {
    (this.eyePicThumbnailUrl = EyePicThumbnailUrl),
      (this.eyePicUrl = EyePicUrl);
  },
  methods: {
    handleClose(done) {
      done();
    },
    drawerClose(done) {
      done();
    },
    setModel(model) {
      this.model = model;
    },
    removeImg(data) {
      this.imgs.splice(
        this.imgs.findIndex((item) => item.imgUrl === data.imgUrl),
        1
      );
      this.calImg();
    },
    removeAllImg() {
      this.imgs.splice(0, this.imgs.length);
      this.calImg();
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
      console.log("OSIMG", this.haveOSImg);
      console.log("ODIMG", this.haveODImg);
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
  },
  components: {
    eyeView,
  },
  computed: {
    selectedEyeImgs() {
      this.imgs = this.$store.state.eyeImgs;
      this.calImg();
    },
  },
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
    selectedEyeImgs() {},
  },
};
</script>

<style lang="less" scope>
.eyeViewMain {
  position: relative;
  height: 80%;
  overflow: auto;

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
  }
  .eyeViewList {
    display: flex;
    position: fixed;
    bottom: 0;
  }
  .eyeViewAction {
    width: 75px;
    min-height: 100px;
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
  height: 150px;
  background-color: #f4f9ff;
}
.eye-close {
  text-align: right;
  cursor: pointer;
}
.image-wrapper {
  position: absolute !important;
}
</style>