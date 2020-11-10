import originAxios from 'axios'
import store from '@/store/index';
import { Message, Loading } from 'element-ui';
import router from '../router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'





export default function axios(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      //baseURL: 'http://168.168.88.111:9000/api/',  //测试
      baseURL: 'https://emr.okios.cn:8229/api',  //线上
      //baseURL: 'http://168.168.88.109:63776/api',  //小罗
      //baseURL: 'http://168.168.88.115:9000/api/',  //燕国
      timeout: 50000,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
    // 请求
    instance.interceptors.request.use(config => {
      //NProgress.start()
      const token = store.state.token;
      token && (config.headers.Authorization = "bearer" + " " + token);
      return config;

    }, error => {
      return Promise.reject(error);
    });
    // 响
    instance.interceptors.response.use(response => {
      //NProgress.done()
      if (response.data.code == -1) {
        Message({
          message: "操作失败," + response.data.message + "!!!" + [response.data.code],
          type: "warning",
          duration: 1500
        });
      }
      if (response.data.code == 401) {
        router.replace({
          path: '/login',
        })
        window.sessionStorage.removeItem('token');
        store.commit("$_removeStorage", "");
        Message({
          message: "",
          type: "warning",
          duration: 1500
        });
      }
      else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token
        // 覆盖原来的token
        const token = store.state.token;
        token && (config.headers.token = token);
      }
      return response;
    }, error => {
      if (error.response && error.response.data.code) {
        Message({
          message: "请求错误[" + error.response.data.message + "]",
          type: "warning",
          duration: 1500
        })
        return Promise.reject(error.response)
      }
      if (error.response) {
        switch (error.response.status) {
          case 400: Message({
            message: "请求错误(400)",
            type: "warning",
            duration: 1500
          }); break;
          case 401:
            Message({
              message: "登录失效",
              type: "warning",
              duration: 1500
            })
            router.replace({
              path: '/login',
            })
            break;
          case 403: Message({
            message: "拒绝访问(403)",
            type: "warning",
            duration: 1500
          });
            break;
          case 404: Message({
            message: "请求出错(404)",
            type: "warning",
            duration: 1500
          });
            break;
          case 408: Message({
            message: "请求超时(408)",
            type: "warning",
            duration: 1500
          });
            break;
          case 500: Message({
            message: "服务器错误(500)",
            type: "warning",
            duration: 1500
          });
            break;
          case 501: Message({
            message: "服务未实现(501)",
            type: "warning",
            duration: 1500
          });
            break;
          case 502: Message({
            message: "网络错误(502)",
            type: "warning",
            duration: 1500
          });
            break;
          case 503: Message({
            message: "服务不可用(503)",
            type: "warning",
            duration: 1500
          });
            break;
          case 504: Message({
            message: "网络超时(504)",
            type: "warning",
            duration: 1500
          });
            break;
          case 505: Message({
            message: "HTTP版本不受支持(505)",
            type: "warning",
            duration: 1500
          });
            break;
          default: Message({
            message: `连接出错(${err.response.status})!`,
            type: "warning",
            duration: 1500
          });
        }
      } else {
        Message({
          message: "链接服务器失败",
          type: "warning",
          duration: 1500
        });
      }
      return Promise.reject(error.response)
    });

    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}



