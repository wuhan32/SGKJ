
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    websock: null,
    websockList: [],
    websockSend: []
  },
  mutations: {
    WEBSOCKET_INIT(state, url) {
      state.websock = new WebSocket(url + `token=${store.state.token}`);

      state.websock.onopen = function () {
        console.log("连接成功！");
      }

      state.websock.onmessage = function (callBack) {
        console.log('接收socket数据', callBack.data);
        state.websockList.splice(0, 1, callBack.data)
        let msg = JSON.parse(state.websockList);
        if (msg.Type == 4) {
        } else {
          if (msg.Text.indexOf("连接成功") == -1) {
            Vue.prototype.$notify({
              title: '提示',
              message: msg.Text,
              duration: 0
            });
            if (msg.AckData > 0) {
              var data = "{\"Text\":\"" + msg.Text + "\",\"Type\":6, \"UserId\":\"\", \"AckData\":" + msg.AckData + " }";
              console.log("消息Dtad", data)
              state.websock.send(data);
            }

          }
        }

      }

      state.websock.onerror = function (e) { //错误
        console.log("ws错误!");
        console.log(e);

      }
      state.websock.onclose = function (e) { //关闭
        console.log("ws关闭！");
        console.log(e)
      }
    },
    WEBSOCKET_ONCLOSE(state, p) {
      state.websock.close()
    },
    WEBSOCKET_SEND(state, p) {
      console.log("ws发送！", p);
      state.websockSend = p
      state.websock.send(JSON.stringify(p));
    },
  },
  actions: {
    WEBSOCKET_INIT({ commit }, url) {
      commit('WEBSOCKET_INIT', url)
    },
    WEBSOCKET_SEND({ commit }, p) {
      commit('WEBSOCKET_SEND', p)
    }

  }
})




//初始链接
// this.$websocket.dispatch('WEBSOCKET_INIT', "ws://192.168.0.89:10101/ws")

// 发送消息

// var jsonData = {
//   data2: 12312312,
//   data: {
//     msg: "helloWorld"
//   }
// };
// this.$websocket.dispatch("WEBSOCKET_SEND", {
//   method: method,
//   jsonData: jsonData,
// });

// 监听回调
// computed:{
//   alertCont() {
//       return this.$websocket.getters.onEvent('ConnectByJson.C');
//   }
// },
// watch: {
//   alertCont: function (a, b) {
//       if (a !== b && a) {
//           console.log("触发事件：");
//           console.log("a:"+JSON.stringify(a));
//           console.log("b:"+JSON.stringify(b));
//       }
//   }
// },