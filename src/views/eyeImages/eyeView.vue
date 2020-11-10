<template>
  <div class="viewContext">
    <div class="viewSigleModel" v-show="model == 1">
      <el-row>
        <el-col :span="24">
          <viewer
            :options="options"
            :images="allImg"
            rebuild
            @inited="inited(1)"
            class="viewer1"
            ref="viewer1"
          >
            <template slot-scope="scope">
              <figure class="images">
                <div
                  class="image-wrapper"
                  v-for="img in scope.images"
                  :key="img"
                >
                  <img class="image" :src="img" />
                </div>
              </figure>
            </template>
          </viewer>
          <el-tag class="sourceDiv" @click="loadSourcePic(1)" type="success"
            >加载原图</el-tag
          >
        </el-col>
      </el-row>
    </div>
    <div
      :class="[displayModel == 1 ? 'viewOneRowModel' : 'viewTwoRowModel']"
      v-show="model == 2"
    >
      <el-row>
        <el-col :span="displayModel == 1 ? 12 : 24">
          <div class="viewer-wrapper">
            <viewer
              :options="options"
              :images="odImg"
              rebuild
              @inited="inited(2)"
              class="viewer2"
              ref="viewer2"
            >
              <template slot-scope="scope">
                <figure class="images">
                  <div
                    class="image-wrapper"
                    v-for="img in scope.images"
                    :key="img"
                  >
                    <img class="image" :src="img" />
                  </div>
                </figure>
              </template>
            </viewer>
            <el-tag class="sourceDiv" @click="loadSourcePic(2)" type="success"
              >加载原图</el-tag
            >
          </div>
        </el-col>
        <el-col :span="displayModel == 1 ? 12 : 24">
          <div class="viewer-wrapper">
            <viewer
              :options="options"
              :images="osImg"
              rebuild
              @inited="inited(3)"
              class="viewer3"
              ref="viewer3"
            >
              <template slot-scope="scope">
                <figure class="images">
                  <div
                    class="image-wrapper"
                    v-for="img in scope.images"
                    :key="img"
                  >
                    <img class="image" :src="img" />
                  </div>
                </figure>
              </template>
            </viewer>
            <el-tag class="sourceDiv" @click="loadSourcePic(3)" type="success"
              >加载原图</el-tag
            >
          </div>
        </el-col>
      </el-row>
    </div>
    <div
      :class="[displayModel == 1 ? 'viewOneRowModel' : 'viewTwoRowModel']"
      v-show="model == 3"
    >
      <el-row>
        <el-col :span="displayModel == 1 ? 12 : 24">
          <viewer
            :options="options"
            :images="osImg"
            rebuild
            @inited="inited(4)"
            class="viewer4"
            ref="viewer4"
          >
            <template slot-scope="scope">
              <figure class="images">
                <div
                  class="image-wrapper"
                  v-for="img in scope.images"
                  :key="img"
                >
                  <img class="image" :src="img" />
                </div>
              </figure>
            </template>
          </viewer>
          <el-tag class="sourceDiv" @click="loadSourcePic(4)" type="success"
            >加载原图</el-tag
          >
        </el-col>
        <el-col :span="displayModel == 1 ? 12 : 24">
          <viewer
            :options="options"
            :images="osImg"
            rebuild
            @inited="inited(5)"
            class="viewer5"
            ref="viewer5"
          >
            <template slot-scope="scope">
              <figure class="images">
                <div
                  class="image-wrapper"
                  v-for="img in scope.images"
                  :key="img"
                >
                  <img class="image" :src="img" />
                </div>
              </figure>
            </template>
          </viewer>
          <el-tag class="sourceDiv" @click="loadSourcePic(5)" type="success"
            >加载原图</el-tag
          >
        </el-col>
      </el-row>
    </div>
    <div
      :class="[displayModel == 1 ? 'viewOneRowModel' : 'viewTwoRowModel']"
      v-show="model == 4"
    >
      <el-row>
        <el-col :span="displayModel == 1 ? 12 : 24">
          <viewer
            :options="options"
            :images="odImg"
            rebuild
            @inited="inited(6)"
            class="viewer6"
            ref="viewer6"
          >
            <template slot-scope="scope">
              <figure class="images">
                <div
                  class="image-wrapper"
                  v-for="img in scope.images"
                  :key="img"
                >
                  <img class="image" :src="img" />
                </div>
              </figure>
            </template>
          </viewer>
          <el-tag class="sourceDiv" @click="loadSourcePic(6)" type="success"
            >加载原图</el-tag
          >
        </el-col>
        <el-col :span="displayModel == 1 ? 12 : 24">
          <viewer
            :options="options"
            :images="odImg"
            rebuild
            @inited="inited(7)"
            class="viewer7"
            ref="viewer7"
          >
            <template slot-scope="scope">
              <figure class="images">
                <div
                  class="image-wrapper"
                  v-for="img in scope.images"
                  :key="img"
                >
                  <img class="image" :src="img" />
                </div>
              </figure>
            </template>
          </viewer>
          <el-tag class="sourceDiv" @click="loadSourcePic(7)" type="success"
            >加载原图</el-tag
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
Vue.use(Viewer);
Viewer.setDefaults({
  zIndexInline: 99,
});

export default {
  data() {
    return {
      eyeTitle: "",
      form: {
        view: 0,
        zoom: -0.1,
        zoomTo: 0.8,
        rotate: 90,
        rotateTo: 180,
        scaleX: 1,
        scaleY: 1,
      },
      toggleOptions: [
        "button",
        "navbar",
        "title",
        "toolbar",
        "tooltip",
        "movable",
        "zoomable",
        "rotatable",
        "scalable",
        "transition",
        "fullscreen",
        "keyboard",
      ],
      options: {
        inline: true,
        button: false,
        navbar: true,
        title: false,
        toolbar: false,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: "data-source",
        viewed(e) {
          initEyeType(e);
          this.viewer.zoomTo(0.5);
        },
      },
      allImg: [],
      osImg: [],
      odImg: [],
      views: new Map(),
      loadSourceImg: "",
    };
  },
  props: {
    imgs: {
      type: Array,
    },
    model: {
      type: Number,
    },
    eyePicThumbnailUrl: {
      type: String,
    },
    eyePicUrl: {
      type: String,
    },
    displayModel: {
      type: Number,
    },
  },
  methods: {
    inited(i) {
      let viewObj;
      switch (i) {
        case 1:
          viewObj = this.$refs.viewer1.$viewer;
          break;
        case 2:
          viewObj = this.$refs.viewer2.$viewer;
          break;
        case 3:
          viewObj = this.$refs.viewer3.$viewer;
          break;
        case 4:
          viewObj = this.$refs.viewer4.$viewer;
          break;
        case 5:
          viewObj = this.$refs.viewer5.$viewer;
          break;
        case 6:
          viewObj = this.$refs.viewer6.$viewer;
          break;
        case 7:
          viewObj = this.$refs.viewer7.$viewer;
          break;
        default:
          break;
      }
      this.views.set(i, viewObj);
    },
    next(i) {
      this.views.get(i).next();
    },
    prev(i) {
      this.views.get(i).prev();
      var title = document.querySelector(".viewer" + i).nextSibling
        .childNodes[1].innerText;
      if (title.indexOf("OD") == -1) return (this.eyeTitle = "OS");
      this.eyeTitle = "OD";
    },
    play(i) {
      this.views.get(i).play();
    },
    stop() {
      this.views.get(i).stop();
    },
    show() {
      this.views.get(i).show();
    },
    full() {
      this.views.get(i).full();
    },
    tooltip() {
      this.views.get(i).next();
    },
    toggleInline(inline) {
      this.options.inline = inline;
    },
    handleClose(done) {},
    loadSourcePic(i) {
      var _that = this;
      let index = 0;
      if (i == 1) {
        var obj = _that.loadSourUrl(this.allImg, i);
        this.allImg = obj[0];
        index = obj[1];
      }

      if (i == 3 || i == 4 || i == 5) {
        var obj = _that.loadSourUrl(this.osImg, i);
        this.osImg = obj[0];
        index = obj[1];
      }

      if (i == 2 || i == 6 || i == 7) {
        var obj = _that.loadSourUrl(this.odImg, i);
        this.odImg = obj[0];
        index = obj[1];
      }

      _that.$nextTick(function () {
        setTimeout(function () {
          for (let m = 0; m < index; m++) {
            _that.next(i);
          }
        }, 3000);
      });
    },
    loadSourUrl(imgs, i) {
      var title = document.querySelector(".viewer" + i).nextSibling
        .childNodes[1].innerText;

      var jpgIndex = title.indexOf(".jpg") + 4;
      var selectedImg = title.slice(0, jpgIndex);
      let index = 0;
      let newImgs = imgs.map((value, m) => {
        if (value.endsWith(selectedImg)) {
          value = value.replace(this.eyePicThumbnailUrl, this.eyePicUrl);
          this.loadImages(value);
          index = m;
        }
        return value;
      });
      return [newImgs, index];
    },
    loadImages(src) {
      const loading = this.$loading({
        lock: true,
        text: "图片加载中请稍候...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      var newImg = new Image();
      newImg.src = src;
      newImg.onerror = () => {
        newImg.src = "error.jpg";
      };
      newImg.onload = () => {
        this.loadSourceImg = newImg.src;

        setTimeout(() => {
          loading.close();
        }, 1000);
      };
    },
  },
  filters: {
    osImg: function (value) {
      return this.imgs.filter((p) => p.eye == "OS").map((item) => item.imgUrl);
    },
  },
  created: function () {
    this.allImg = this.imgs.map((item) => item.imgUrl);
    this.osImg = this.imgs
      .filter((p) => p.eye == "OS")
      .map((item) => item.imgUrl);
    this.odImg = this.imgs
      .filter((p) => p.eye == "OD")
      .map((item) => item.imgUrl);
  },
  watch: {
    model: {
      immediate: true,
      handler(value) {
        this.$nextTick(() => {
          if (value == 3) {
            this.next(4);
            //this.$refs.viewer4.$viewer.next();
          }
          if (value == 4) {
            this.next(6);
            //this.$refs.viewer6.$viewer.next();
          }
        });
      },
    },
  },
};
function getSelectedImg(imgUrl) {
  let imgs = Vue.prototype.$eyeimgs;
  return imgs.find((p) => p.imgUrl.endsWith(imgUrl));
}
function initEyeType(e) {
  let imgUrl = e.srcElement.nextSibling.firstChild.childNodes[0].alt;
  let selectImg = getSelectedImg(imgUrl);
  let headTitle =
    "<p style='font-size:24px;color:white'>" +
    selectImg.cusName +
    "-" +
    selectImg.eye +
    "-" +
    selectImg.index +
    "</p><p style='font-size:14px;color:white'>" +
    selectImg.createTime +
    "</p>";
  let node = document.createElement("div");
  node.style.float = "left";
  node.style.position = "absolute";
  node.style.top = "20px";
  node.style.left = "20px";
  node.style.fontSize = "36px";
  node.style.color = "white";
  node.style.zIndex = 101;
  node.style.textShadow = "2px 2px 8px #FF0000";
  //let textnode = document.createTextNode(headTitle);
  node.innerHTML = headTitle;
  //node.appendChild(textnode);
  if (e.srcElement.childNodes.length == 1) {
    e.srcElement.appendChild(node);
  } else {
    e.srcElement.replaceChild(node, e.srcElement.childNodes[1]);
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.viewContext {
  width: 100%;
  margin: 0 auto;
}
.viewSigleModel {
  width: 100%;
  height: calc(100vh - 50px);
  margin: 0 auto;
}
.viewOneRowModel {
  width: 100%;
  height: calc(100vh - 50px);
  margin: 0 auto;
}
.viewTwoRowModel {
  width: 100%;
  height: calc(50vh - 30px);
  margin: 0 auto;
}
.el-row,
.el-col {
  height: 100%;
  margin: 5px 0px 5px 0px;
}
.viewer-wrapper {
  position: relative;
  height: 100%;
}

.methods {
  margin-bottom: 1em;
  flex-wrap: wrap;

  & > * {
    margin-right: 0.75rem;
  }
}

.options-panel {
  .panel-block {
    padding: 0;

    .checkbox {
      display: block;
      width: 100%;
      margin: 0;
      padding: 0.5em 0.75em;
    }
  }
}

.viewer1,
.viewer2,
.viewer3,
.viewer4,
.viewer5,
.viewer6,
.viewer7 {
  height: 100%;

  .images {
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px;

    .image-wrapper {
      display: inline-block;
      width: calc(33% - 20px);
      height: 100%;
      margin: 5px 5px 0 5px;
      position: relative;
      .image {
        width: 100%;
        cursor: pointer;
        display: none;
      }
    }
  }
}
.sourceDiv {
  position: absolute;
  bottom: 70px;
  right: 10px;
  float: right;
  z-index: 101;
  cursor: pointer;
}
</style>