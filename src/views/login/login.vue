<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="titleArea">
          <img class="logo1" src="@/assets/img/logo1.png" alt="admin" />
          <span class="title">
            <i>视光科技-近视眼防控平台</i>
          </span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <!-- 用户名 -->
          <el-form-item prop="userName">
            <el-input
              class="area"
              type="text"
              placeholder="用户名"
              v-model="loginForm.userName"
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="password">
            <el-input
              class="area"
              :type="changepas"
              placeholder="密码"
              v-model="loginForm.password"
              prefix-icon="iconfont icon-iconfontmima"
            ></el-input>
            <!-- 眼睛 -->
            <div class="eye1">
              <i class="iconfont icon-yanjing" v-show="!iconfontEye" @click="iconfontP"></i>
              <i class="iconfont icon-guanbi-yanjing" v-show="iconfontEye" @click="iconfontP"></i>
            </div>
          </el-form-item>
          <!-- 验证码区域 -->
          <el-form-item prop="verification" class="verification">
            <el-input
              class="area"
              placeholder="验证码"
              type="text"
              v-model="loginForm.verificationValue"
            ></el-input>
            <img
              :src="'data:image/bmp;base64,' + validateimage"
              alt
              class="verification-img"
              @click="randomValidateimage"
            />
          </el-form-item>
          <!-- 保存密码 -->
          <el-form-item>
            <el-select v-model="loginForm.saveDays" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <vxe-button status="primary" @click="login" class="submit_btn">登录</vxe-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
    <footer>
      <p>版权所有: 珠海视光科技有限公司 备案/许可证编号为：粤ICP备16036504号-2 联系电话:086-0756-2609666</p>
    </footer>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import { login, GetValidateCode } from "@/api/login";
import { log } from "util";
export default {
  data() {
    return {
      organizationList: {
        organCode: "ZHDG005",
        organName: "珠海视光科技",
      },
      //验证码图片
      validateimage: "",
      options: [
        {
          value: 7,
          label: "保存7天",
        },
        {
          value: 30,
          label: "保存30天",
        },
        {
          value: -1,
          label: "永久保存",
        },
        {
          value: -2,
          label: "不保存",
        },
      ],
      iconfontEye: true,
      loginForm: {
        userName: "",
        password: "",
        verificationCode: "",
        saveDays: 7,
        verificationValue: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      changepas: "password",
    };
  },
  created() {
    this.GetValidateCode();
    window.localStorage.removeItem("userInfo");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("ps_selectedCus");
    window.localStorage.removeItem("ps_selectedTab");
    window.localStorage.removeItem("ps_pages");
    window.sessionStorage.removeItem("target");
    this.$store.commit("$_removeStorage", "");
    let _this = this;
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key == 13) _this.login();
    };
    this.$pageswitch.commit("$_closeAll");
    window.localStorage.organizationList
      ? (this.organizationList = JSON.parse(
          window.localStorage.organizationList
        ))
      : window.localStorage.setItem(
          "organizationList",
          JSON.stringify(this.organizationList)
        );
    this.$store.commit("$_setOrganizationList", this.organizationList);
  },
  mounted() {},
  methods: {
    //密码显示隐藏
    iconfontP() {
      this.changepas = this.changepas == "text" ? "password" : "text";
      this.iconfontEye = !this.iconfontEye;
    },
    //随机验证码
    randomValidateimage() {
      this.GetValidateCode();
    },
    //获取验证码
    async GetValidateCode() {
      const { data: res } = await GetValidateCode().then();
      this.loginForm.verificationCode = res.data.imageCode;
      this.validateimage = res.data.imageData;
    },
    //登入请求
    async login() {
      if (this.loginForm.verificationValue != "") {
        const { data: res } = await login(this.loginForm).then();
        console.log(res);
        switch (res.code) {
          case 0:
            this.$message({
              message: "登录成功",
              type: "success",
              duration: 800,
            });
            break;
          case 1:
            this.GetValidateCode();
            this.$message({
              message: "验证码已过期",
              type: "warning",
              duration: 800,
            });
            break;
          case 2:
            this.GetValidateCode();
            this.$message({
              message: "验证码输入不正确",
              type: "warning",
              duration: 800,
            });
            break;
          case 3:
            this.$message({
              message: "用户名不存在",
              type: "warning",
              duration: 800,
            });
            break;
          case 4:
            this.$message({
              message: "该用户已被禁用",
              type: "warning",
              duration: 800,
            });
            break;
          case 5:
            this.$message({
              message: "密码不正确",
              type: "warning",
              duration: 800,
            });
            break;
        }
        const decode = jwtDecode(res.token);
        this.$store.commit("$_setUserInfo", JSON.stringify(decode));
        this.$store.commit("$_setToken", res.token);
        this.$router.push({ path: "/home" });
      } else {
        this.$message({
          message: "验证码为空",
          type: "warning",
          duration: 800,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login_page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/bg9.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_contianer {
  opacity: 0.8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 370px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  .titleArea {
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 22px;
    width: 100%;
    padding-bottom: 20px;
    .logo1 {
      width: 80px;
      margin-right: 10px;
      vertical-align: middle;
    }
    .title {
      i {
        color: green;
      }
    }
  }

  .loginForm {
    .submit_btn {
      width: 100%;
    }
  }
}
.verification {
  display: flex;
  .el-input {
    width: 250px;
  }
  .verification-img {
    height: 60px;
    width: 120px;
    vertical-align: middle;
    cursor: pointer;
  }
}
.manage_tip {
  margin-bottom: 20px;
  .title {
    font-family: cursive;
    font-weight: bold;
    font-size: 26px;
    color: #fff;
  }
  .logo1 {
    width: 60px;
    height: 60px;
  }
}
.password {
  position: relative;
  .eye1 {
    position: absolute;
    right: 10px;
    top: 0;
  }
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  p {
    transform: translateX(-50%);
    font-size: 15;
    color: #555;
  }
}
.el-select {
  width: 366px;
}
</style>
