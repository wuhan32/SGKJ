
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../store/index'
import Stomp from "stompjs"
import { MQTT_SERVICE, MQTT_USERNAME, MQTT_PASSWORD } from "./stompSetting";
import ROLEID from "./roleId.js";
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    client: null,
    subscribeObj: null,
    subscribeverifyObj: null,
    subscribeadaptorObj: null,
  },
  mutations: {
    STOMP_INIT(state) {
      if (state.client != null)
      {       
        try
        {
          state.client.disconnect();  
        }
        catch{
        }       
        state.client=null;        
      }     
      state.client = Stomp.client(MQTT_SERVICE);
      state.client.debug = null;
      state.client.connect(MQTT_USERNAME, MQTT_PASSWORD,
        () => {
          let userid = store.state.userInfo.Id;      
          const organList = JSON.parse(
            window.localStorage.getItem("organizationList")
          );          
          let organCode = organList.organCode;
          state.subscribeObj = state.client.subscribe("/topic/EMRQueue.MSG" + userid, (e) => {
            let msg = JSON.parse(e.body);
            Vue.prototype.$notify({
              title: '提示',
              message: msg.Text,
              duration: 0
            });
            store.commit("$_menuFlg", !store.state.menuFlg);

          },
            (e) => {
              console.log('MQ Failed:' + e)
            });

            let verfierUser=store.state.roleCodeLsit.find(p=>p==ROLEID.VERFIER);
            if(verfierUser)
            {              
              state.subscribeverifyObj = state.client.subscribe("/topic/EMRQueue.MSG" +organCode+ROLEID.VERFIER, (e) => {
                let msg = JSON.parse(e.body);
                Vue.prototype.$notify({
                  title: '提示',
                  message: msg.Text,
                  duration: 0
                });
                //store.commit("$_menuFlg", !store.state.menuFlg);
    
              },
                (e) => {
                  console.log('MQ Failed:' + e)
                });
            }

            let adaoterUser=store.state.roleCodeLsit.find(p=>p==ROLEID.ADAOTER);
            if(adaoterUser)
            {
              state.subscribeadaptorObj = state.client.subscribe("/topic/EMRQueue.MSG" +organCode+ROLEID.ADAOTER, (e) => {
                let msg = JSON.parse(e.body);
                Vue.prototype.$notify({
                  title: '提示',
                  message: msg.Text,
                  duration: 0
                });
                //store.commit("$_menuFlg", !store.state.menuFlg);
    
              },
                (e) => {
                  console.log('MQ Failed:' + e)
                });
            }
            
        }
        , function () {
          console.log('MQ Failed:')
        })



    },
    STOMP_CLOSE(state) {      
      if (state.subscribeObj != null) {
        state.subscribeObj.unsubscribe();
      }
      if (state.subscribeverifyObj != null) {
        state.subscribeverifyObj.unsubscribe();
      }
      if (state.subscribeadaptorObj != null) {
        state.subscribeadaptorObj.unsubscribe();
      }      
      if (state.client != null)
      {       
        try
        {
          state.client.disconnect();       
        }
        catch{}
        state.client=null;
      }
    },
    STOMP_SEND(state, data) {
      if (data.p !== undefined) {
        state.client.send('/topic/EMRQueue.MSG' + data.touserid, {}, JSON.stringify(data.p));
        if (data.p.Text.indexOf("连接成功") == -1) {
          var mqmsg = "{\"Text\":\"" + data.p.Text + "\",\"Type\":" + data.p.Type + ", \"FromUserId\":\"" + data.fromuserid + "\",\"ToUserId\":\"" + data.touserid + "\"}";
          state.client.send('EMRQueue.ALL', {}, mqmsg);
        }
      }
      else {
        console.log("null message");
      }

    },    
  },
  actions: {
    STOMP_INIT({ commit }) {
      commit('STOMP_INIT')
    },
    STOMP_SEND({ commit }, data) {
      commit('STOMP_SEND', data)
    },
    STOMP_CLOSE({ commit }) {
      commit('STOMP_CLOSE')
    }
  }
})