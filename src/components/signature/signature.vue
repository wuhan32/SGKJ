<template>
  <div ref="demo">
    <section class="df" style="padding: 0">
      <div class="inquiry-header">
        <!-- <h1 style="height: 60px">签名</h1> -->
      </div>
      <div class="signatureImg" style="height: 60px">
        <img :src="signatureImg" alt="" />
        <div>
          <!-- <vxe-button
            status="warning"
            size="mini"
            @click="signature"
          >
            开始签名</vxe-button
          > -->

          <vxe-button status="warning" @click="onTake" size="mini"
            >签名拍照</vxe-button
          >
        </div>
      </div>
    </section>
    <!-- <p class="imagesList">图片列表</p> -->

    <div class="demo-image__preview">
      <div v-for="(item, index) in onlineImg" :key="index">
        <el-image
          style="width: 100px; height: 100px"
          :src="item.photoData"
          lazy
          :preview-src-list="examineImg"
          v-if="item.imgType == 2 || item.imgType == 1"
        >
        </el-image>
        <p v-if="item.imgType == 2" @click="deleteImg(item.photoData)">x</p>
      </div>
    </div>

    <el-dialog
      title="拍照上传"
      :visible.sync="visible"
      @close="onCancelClose"
      :append-to-body="true"
      :close-on-click-modal="false"
      width="1065px"
    >
      <div class="box">
        <video
          id="videoCamera"
          class="canvas"
          :width="videoWidth"
          :height="videoHeight"
          autoplay
        ></video>

        <canvas
          id="canvasCamera"
          class="canvas"
          :width="videoWidth"
          :height="videoHeight"
        >
        </canvas>

        <ul class="imgList">
          <li>
            <div>签名</div>
            <div v-show="signatureImg">
              <img :src="signatureImg" alt="" />
            </div>
          </li>
          <template v-for="(item, index) in photos">
            <li :key="index" v-if="item.imgType == 2">
              <img :src="item.photoData" alt="" />
              <p @click="closeImg(index)">x</p>
            </li>
          </template>
        </ul>
      </div>
      <div slot="footer">
        <el-button @click.native="drawImage" icon="el-icon-camera" size="small"
          >拍照</el-button
        >
        <el-button
          @click.native="signature"
          icon="el-icon-camera"
          size="small"
          :disabled="signImg"
          >重新签名</el-button
        >
        <!-- <el-button
          v-if="os"
          @click="getCompetence"
          icon="el-icon-video-camera"
          size="small"
          >打开摄像头</el-button
        >
        <el-button
          v-else
          @click="stopNavigator"
          icon="el-icon-switch-button"
          size="small"
          >关闭摄像头</el-button
        > -->
        <el-button
          @click.native="resetCanvas"
          icon="el-icon-refresh"
          size="small"
          >重置</el-button
        >
        <el-button @click="onCancel" icon="el-icon-circle-close" size="small"
          >完成</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Signature } from "../../api/DownHandler";
import html2canvas from "html2canvas";

import {
  SaveSignCamera,
  GetSignCamera,
  DeleteSignCamera,
} from "../../api/doctorRecord";

export default {
  data() {
    return {
      signImg: false,
      signatureImg: "",
      videoWidth: 300,
      videoHeight: 300,
      visible: false,
      os: true,
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      managerObj: {
        registerphoto: "",
      },
      emaKeyId: "",
      examType: "",
      photos: [],
      onlineImg: [],
      examineImg: [],
      //截图
      screenshotImg: "",
    };
  },
  created() {
    this.emaKeyId = this.$route.query.emaKeyId;
    this.signatureImg = "";
    this.getSignCamera();
    this.photos = [];
    this.onlineImg = [];
    this.examineImg = [];
  },
  methods: {
    onTake() {
      this.visible = true;
      this.getCompetence();
      if (this.signatureImg == "") {
        this.signature();
      }
      this.getSignCamera();
    },
    //关闭画布
    onCancelClose() {
      this.visible = false;
    },
    //完成
    onCancel() {
      this.$loading({
        lock: true,
        text: "拼命截图中",
      });
      //this.stopNavigator();
      //截图
      this.toImage();
    },
    // 调用摄像头权限
    getCompetence() {
      //必须在model中render后才可获取到dom节点,直接获取无法获取到model中的dom节点
      this.$nextTick(() => {
        const _this = this;
        this.os = false; //切换成关闭摄像头
        this.thisCancas = document.getElementById("canvasCamera");
        this.thisContext = this.thisCancas.getContext("2d");
        this.thisVideo = document.getElementById("videoCamera");
        // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
        if (navigator.mediaDevices === undefined) {
          navigator.menavigatordiaDevices = {};
        }
        // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
        // 使用getUserMedia，因为它会覆盖现有的属性。
        // 这里，如果缺少getUserMedia属性，就添加它。
        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先获取现存的getUserMedia(如果存在)
            let getUserMedia =
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.getUserMedia;
            // 有些浏览器不支持，会返回错误信息
            // 保持接口一致
            if (!getUserMedia) {
              return Promise.reject(
                new Error("getUserMedia is not implemented in this browser")
              );
            }
            // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
            return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject);
            });
          };
        }
        const constraints = {
          audio: false,
          video: {
            width: _this.videoWidth,
            height: _this.videoHeight,
            transform: "scaleX(-1)",
          },
        };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function (stream) {
            // 旧的浏览器可能没有srcObject
            if ("srcObject" in _this.thisVideo) {
              _this.thisVideo.srcObject = stream;
            } else {
              // 避免在新的浏览器中使用它，因为它正在被弃用。
              _this.thisVideo.src = window.URL.createObjectURL(stream);
            }
            _this.thisVideo.onloadedmetadata = function (e) {
              _this.thisVideo.play();
            };
          })
          .catch((err) => {
            this.$notify({
              title: "警告",
              message: "没有开启摄像头权限或浏览器版本不兼容.",
              type: "warning",
            });
          });
      });
    },
    //绘制图片
    drawImage() {
      //点击，canvas画图
      this.thisContext.drawImage(
        this.thisVideo,
        0,
        0,
        this.videoWidth,
        this.videoHeight
      );
      //获取图片base64链接
      const registerphoto = this.thisCancas.toDataURL("image/jpeg");
      this.photos.push({
        imgType: 2,
        photoData: registerphoto,
      });
    },

    //重置画布
    resetCanvas() {
      console.log(123);
      this.photos = [];
    },
    //关闭摄像头
    stopNavigator() {
      if (this.thisVideo && this.thisVideo !== null) {
        this.thisVideo.srcObject.getTracks()[0].stop();
        this.os = true; //切换成打开摄像头
      }
    },
    //签名截图
    toImage() {
      this.$parent.$el.style.transform = "scale(0.7,1)";
      this.$parent.$el.style.zIndex = "2000";
      this.$parent.$el.style.position = "fixed";
      this.$parent.$el.style.top = "0";
      this.$parent.$el.style.left = "0";
      console.log(this.$parent.$el);
      html2canvas(this.$parent.$el).then((canvas) => {
        let dataURL = canvas.toDataURL("image/png");
        // 调用方法传入对应的参数
        this.getImgUrl({
          url: dataURL,
          content: "视光科技",
          cb: (base64Url) => {
            // 使用两种方法设置显示img的src都可以
            // document.getElementById('myimg').src = base64Url
            this.$parent.$el.style.transform = "scale(1,1)";
            this.$parent.$el.style.zIndex = "2000";
            this.$parent.$el.style.position = "relative";
            this.$parent.$el.style.top = "0";
            this.$parent.$el.style.left = "0";
          },
        });
      });
    },
    getImgUrl({
      url = "",
      textAlign = "left",
      textBaseline = "bottom",
      font = "18px Microsoft Yahei",
      fillStyle = "rgba(0,135,157, 0.3)",
      content = "我是默认的水印参数",
      cb = null,
      textX = 100,
      textY = 30,
    } = {}) {
      // 创建所需要添加水印的img图片
      const img = new Image();
      img.src = url;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        // 创建canvas，并将创建的img绘制成canvas
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.translate(0, 0);
        ctx.drawImage(img, 0, 0);
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.font = font;
        ctx.fillStyle = fillStyle;
        ctx.rotate((Math.PI / 180) * 15);
        // 循环绘制水印
        for (let i = 0; i < img.height / 100; i++) {
          for (let j = 0; j < img.width / 150; j++) {
            ctx.fillText(content, i * 200, j * 100, img.width);
          }
        }

        // 时间水印
        ctx.textAlign = "left";
        ctx.fillText(new Date(), 100, 100);

        // 将绘制完成的canvas转换为base64的地址
        const base64Url = canvas.toDataURL();
        cb && cb(base64Url);
        this.photos.push({
          imgType: 1,
          photoData: base64Url,
        });
        this.visible = false;
        this.saveSignCamera();

        console.log("图片地址", base64Url);
      };
    },
    //上传照片
    async saveSignCamera() {
      const { data: res } = await SaveSignCamera(
        this.emaKeyId,
        this.examType,
        +this.$store.state.userInfo.Id,
        this.photos
      ).then();
      if (res.code == 0) {
        console.log(res);
        this.$loading().close();
        this.getSignCamera();
        this.photos = [];
        this.signImg = true;
        this.$message({
          message: "图片上传成功",
          type: "success",
        });
        console.log("签名图片", this.signatureImg);
      } else {
        this.$message({
          message: res.message,
          type: "warning",
        });
      }
    },
    //删除照片
    closeImg(index) {
      this.photos.splice(index, 1);
    },

    deleteImg(photoData) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteSignCamera(photoData);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //图片列表
    async getSignCamera() {
      const { data: res } = await GetSignCamera(this.emaKeyId).then();
      console.log("拍照图片列表", res);
      if (res.code == 0) {
        this.onlineImg = res.data;
        this.examineImg = [];
        this.onlineImg.forEach((res) => {
          this.examineImg.push(res.photoData);
          if (res.imgType == 3) {
            this.signatureImg = res.photoData;
            this.signImg = true;
          }
          if (res.imgType == 1) {
            this.screenshotImg = res.photoData;
          }
        });

        console.log("查看图片列表", this.examineImg);
      }
    },
    //删除数据库单张照片
    async deleteSignCamera(photoData) {
      const { data: res } = await DeleteSignCamera(
        this.emaKeyId,
        photoData
      ).then();
      if (res.code == 0) {
        this.$message({
          message: "删除成功",
          type: "success",
        });
        this.getSignCamera();
        this.dialogVisible = false;
      } else {
        this.$message({
          message: res.message,
          type: "warning",
        });
      }
    },
    //调用签名板
    async signature() {
      try {
        const { data: res } = await Signature().then();
        console.log("签名板===", res);
        if (res.code == 0) {
          this.signatureImg = "data:image/jpg;base64," + res.message;
          this.photos.unshift({
            imgType: 3,
            photoData: this.signatureImg,
          });
        } else {
          this.$message({
            message: res.message,
            type: "warning",
          });
        }
      } catch (err) {
        this.$message({
          message: "未开启服务" + err,
          type: "warning",
        });
        //在此处理错误
      }
    },
  },
  watch: {
    $route(newValue, oldValue) {
      console.log(newValue);
      this.signatureImg = "";
      this.emaKeyId = newValue.query.emaKeyId;
      this.getSignCamera();
    },
  },
};
</script>

<style lang="less" scoped>
.signatureImg {
  height: 100%;
  display: flex;
  background: #fff;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #ccc;
  img {
    margin-right: 20px;
    min-width: 100px;
    height: 100%;
  }
}
h1 {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  font-weight: 700;
  text-align: center;
  background: #f2f2f2;
  font-size: 18px;
}
#canvasCamera {
  display: none;
}
.box {
  display: flex;
}
.imgList {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 150px;
    height: 150px;
    margin: 1px 10px;
    position: relative;
    img {
      width: 100%;
    }
    p {
      position: absolute;
      top: -11px;
      right: -12px;
      color: rgb(179, 165, 230);
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
  }
  li:nth-child(1) {
    width: 700px;
    text-align: center;
    margin: 0 auto;
    font-weight: 700;
    font-size: 18px;
    img {
      width: 150px;
      height: 120px;
    }
  }
}
.demo-image__preview {
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  > div {
    position: relative;
    margin: 0 2px;
  }
  p {
    position: absolute;
    top: -5px;
    right: 5px;
    color: red;
    font-size: 20px;
    cursor: pointer;
  }
}
.imagesList {
  font-weight: 700;
  font-size: 18px;
  margin-left: 20px;
}
</style>