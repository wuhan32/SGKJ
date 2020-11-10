<template>
  <header>
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="近视眼防控平台" @click="goHome" />
      <h1 class="logo-h1">近视眼防控平台</h1>
      <p class="quit">
        欢迎 {{ userName }}
        <i @click="gobuack"> 退出登录 </i>
      </p>
    </div>
    <!-- <div class="header-bottom">
      <ul>
        <li>
          <i class="iconfont icon-pingtaiyunweiguanli"></i>
          <p>工作台</p>
        </li>
        <li>
          <i class="iconfont icon-setting"></i>
          <p>系统设置</p>
        </li>
        <li @click="showEye">
          <i class="iconfont icon-houtaiweihu"></i>
          <p>查看照片</p>
        </li>
        <li>
          <i class="iconfont icon-icon_xiaoxitongzhi"></i>
          <p>消息</p>
        </li>
      </ul>
      <div class="logo-right">
        <p>
          {{ userName }}
          <i>●在线</i>
        </p>
        <el-dropdown trigger="click">
          <i class="iconfont icon-shoushuyisheng-" style="font-size: 35px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="gobuack"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userId: "",
      websock: null,
      screenHeight: "",
    };
  },
  created() {
    document.getElementById("app").className = "theme1";
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    this.userName = userInfo.TrueUserName;
    this.userId = userInfo.Id;
  },
  mounted() {},
  methods: {
    showEye() {
      this.$emit("showEye", true);
    },

    goHome() {
      this.$router.push({ path: "/clientRecord" });
    },
    gobuack() {
      this.$store.commit("$_removeStorage", "");
      //this.$websocket.commit("WEBSOCKET_ONCLOSE");
      this.$stompStore.commit("STOMP_CLOSE");
      this.$router.push({ path: "/login" });
      this.$message({
        message: "退出登录成功",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
header {
  border: 1px solid #cccccc;
  box-shadow: 0px 4px 0px 0px #e4e7eb;
  position: fixed;
  width: 100%;
  top: 0;
  .quit {
    color: #fff;
    i {
      color: #fff;
      margin-left: 20px;
      border-bottom: 1px solid #fff;
      padding: 0 5px;
      box-sizing: border-box;
      &:hover {
        color: red;
      }
      cursor: pointer;
    }
  }

  .logo {
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    img {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    .logo-h1 {
      font-size: 15px;
      margin: 0 auto;
      color: #fff;
    }
  }
  .header-bottom {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    ul {
      margin: 5px 5px 5px 5px;
      display: flex;
      li {
        text-align: center;
        width: 80px;
        height: 40px;
        box-shadow: 0px -1px 0px 0px silver, -1px 0px 0px 0px silver,
          3px 0px 0px 0px silver, 0px 3px 0px 0px silver;
        margin-right: 10px;
        background: #d1e2fb;
        padding: 3px 3px 3px 3px;
        cursor: pointer;
        &:hover {
          background-color: rgb(177, 220, 236);
        }
        i {
          color: #339933;
        }
        p {
          color: #339933;
          font-size: 18 !important;
        }
      }
    }
  }
  .logo-right {
    display: flex;
    align-items: center;
    p {
      font-size: 12px;
      i {
        font-size: 10px;
        display: block;
        color: green;
      }
    }
    img {
      margin-left: 10px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>