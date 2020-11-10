
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/element.js'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
Vue.use(VXETable)
import '@babel/polyfill'
import 'viewerjs/dist/viewer.css'
//兼容
import Viewer from 'v-viewer'
//主题色
import './style/color.less'
import vRegion from 'v-region'
//自适应
import 'lib-flexible/flexible'
// 字体图标
import './assets/iconfont/iconfont.css'
//实时通信
import websocket from './utils/websocketStore'
//页面切换
import pageswitch from './utils/pageswitchingStore'
//复选框
import elCheckbox from './components/checkbox/src/checkbox.vue'
import elCheckboxGroup from './components/checkbox/src/checkbox-group.vue'
import stompStore from './utils/stompStore'
import Direction from './components/vue-direction-key/index'
Vue.use(Direction)

Vue.component('elCheckbox', elCheckbox)
Vue.component('elCheckboxGroup', elCheckboxGroup)


//Vue.prototype.$websocket = websocket;
Vue.prototype.$pageswitch = pageswitch;
Vue.prototype.$stompStore = stompStore;
Vue.prototype.$eyeimgs = store.state.eyeImgs;


Vue.use(vRegion)
Vue.use(Viewer)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
