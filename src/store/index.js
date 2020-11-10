import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    token: window.localStorage.token ? localStorage.getItem('token') : '',   // token
    userInfo: window.localStorage.userInfo ? JSON.parse(localStorage.getItem('userInfo')) : '',
    organizationList: window.localStorage.organizationList ? JSON.parse(localStorage.getItem('organizationList')) : '',
    screenWidth: "",
    screenHeight: "",
    eyeImgs: [],
    cusKeyId: window.sessionStorage.cusKeyId ? JSON.parse(sessionStorage.getItem('cusKeyId')) : '',
    tabIndex: window.localStorage.organizationList ? JSON.parse(localStorage.getItem('organizationList')) : '',
    //选择患者信息
    target: window.sessionStorage.target ? JSON.parse(sessionStorage.getItem('target')) : '',
    //是否更新一级菜单
    menuFlg: false,
    //是否显示二级菜单
    menRight: false,
    //显示眼底照片工具栏
    showEyeToolBar: false,
    //角色列表
    roleCodeLsit: []

  },
  getters: {    // 监听数据变化的
    getToken(state) {   // 获取本地存储的登录信息
      if (!state.token) {
        state.token = JSON.parse(localStorage.getItem('token'))
      }
      return state.token
    },
    userInfo(state) {
      if (!state.userInfo) {
        state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      }
    },
    organCode(state) {
      if (!state.organizationList) {
        state.organizationList = JSON.parse(localStorage.getItem('organizationList'))
      }
    },
    roleId(state) {
      if (!state.roleId) {
        state.roleId = JSON.parse(localStorage.getItem('roleId'))
      }
    },
    target(state) {
      if (!state.target) {
        state.target = JSON.parse(sessionStorage.getItem('target'))
      }
    }
  },
  mutations: {
    $_setToken(state, value) { // 设置存储token
      state.token = value;
      localStorage.setItem('token', value);
    },
    $_setUserInfo(state, value) { // 设置存储userinfo
      state.userInfo = JSON.parse(value);
      localStorage.setItem('userInfo', value);
      //角色列表
      state.roleCodeLsit = state.userInfo.RoleCode.split(",");
    },
    $_removeStorage(state, value) {  // 删除token
      state.token = value;
      localStorage.removeItem('token');
    },
    $_setOrganizationList(state, value) {//设置机构列表
      state.organizationList = value;
    },
    $screenWidth(state, value) {//设置机构列表
      state.screenWidth = value;
    },
    $screenHeight(state, value) {//设置机构列表
      state.screenHeight = value;
    },
    $_setEyeImgs(state, value) {//设置眼底照片图片
      state.eyeImgs = value;
    },
    $_cusKeyId(state, value) {//设置选中的当前用户
      state.cusKeyId = value;
    },
    $_tabIndex(state, value) {//设置眼底照片图片
      state.tabIndex = value;
    },
    $_roleId(state, value) {//所有角色ID
      state.roleId = value
    },
    $_target(state, value) {    //选择患者信息
      state.target = value
    },
    $_menuFlg(state, value) {
      state.menuFlg = value
    },
    $_menRight(state) {
      state.menRight = !state.menRight
    },
    $_setShowEyeToolBar(state, value) { // 设置存储token
      state.showEyeToolBar = value;
    },
  },
},


)
