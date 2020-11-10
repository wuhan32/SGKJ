<template>
  <div class="home">
    <!-- 退出登陆 -->
    <el-container>
      <el-header>
        <v-header @showEye="showEye"></v-header>
      </el-header>
      <el-container>
        <v-menu @showTag="showTag"></v-menu>
        <!-- 内容 -->
        <section style="padding: 5px;width:100%">
          <el-main style="padding: 2px;">
            <v-user-info v-show="showTagflaf"></v-user-info>
            <top-tab
              v-show="
                $route.path != '/clientRecord' &&
                $route.fullPath != '/newRecord'
              "
            ></top-tab>
            <router-view @showTag="showTag" />
          </el-main>
          <bottom-tab />
        </section>

        <el-aside
          style="width: 150px"
          class="eye"
          v-show="$store.state.showEyeToolBar"
        >
          <p class="eye-close" @click="eyeClose">关闭</p>
          <eyeViewToolBar></eyeViewToolBar>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vHeader from "./components/header";
import topTab from "./components/toptab";
import vDrag from "../../components/common/drag";
import eyeViewToolBar from "../eyeImages/eyeViewToolBar";
import vMenu from "./components/menu";
import vUserInfo from "./components/userInfo";
import bottomTab from "./components/bottomTab";

export default {
  data() {
    return {
      userId: "",
      showTagflaf: null,
    };
  },
  created() {
    //this.$websocket.dispatch("WEBSOCKET_INIT", "ws://168.168.88.115:9000/ws?");   
    this.$stompStore.dispatch("STOMP_INIT");
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    this.userId = userInfo.Id;
    this.$store.state.roleCodeLsit = this.$store.state.userInfo.RoleCode.split(
      ","
    );
    this.$nextTick(() => {
      // 禁用选择
      document.onselectstart = new Function("event.returnValue=false");      
    });    
    
  },
  methods: {
    showEye(showEye) {
      this.$store.commit("$_setShowEyeToolBar", showEye);     
    },
    showTag(showTag) {
      console.log("用户信息是否显示==========", showTag);
      this.showTagflaf = showTag;
    },
    eyeClose() {
      this.$store.commit("$_setShowEyeToolBar", false);
    }
  },
  watch: {},
  components: {
    vHeader,
    topTab,
    vDrag,
    eyeViewToolBar,
    vMenu,
    vUserInfo,
    bottomTab,
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  .el-header {
    height: 23px !important;
  }
  .el-main {
    width: 100%;
    height: 100vh-10;
    overflow: auto;
    padding: 0;
  }
}
.eye {
  position: fixed;
  right: 0;
  height: 100%;
  z-index: 99999;
  border: 3px solid skyblue;
}
.eye-close {
  height: 25px;
  background: skyblue;
  color: white;
}
</style>