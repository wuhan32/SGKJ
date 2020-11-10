
import { Alert } from 'element-ui';
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ps_selectedCus: window.localStorage.ps_selectedCus ? JSON.parse(localStorage.getItem('ps_selectedCus')) :{},//选择的客户档案{cusKeyId:'xxx',customerName:'xxx'}
    ps_selectedTab: window.localStorage.ps_selectedTab ? JSON.parse(localStorage.getItem('ps_selectedTab')) : {},//选择的标签页routerId    
    ps_pages: window.localStorage.ps_pages ? JSON.parse(localStorage.getItem('ps_pages')) : [], //页面数据[{cusKeyId:'xxx',customerName:'xxx',selected:true,tags:[{routerId:'xxx',routerName:'眼底照片',selected:true}]}]
  },
  getters:{
    ps_selectedCus(state) {
      if (!state.ps_selectedCus) {
        state.ps_selectedCus = JSON.parse(localStorage.getItem('ps_selectedCus'))
      }
    },
    ps_selectedTab(state) {
      if (!state.ps_selectedTab) {
        state.ps_selectedTab = JSON.parse(localStorage.getItem('ps_selectedTab'))
      }
    },
    ps_pages(state) {
      if (!state.ps_pages) {
        state.ps_pages = JSON.parse(sessionStorage.getItem('ps_pages'))
      }
    }
  },
  mutations: {
    $_openPage(state, value) {
      state.ps_selectedCus = {cusKeyId:value.cusKeyId,customerName:value.name};
      //循环ps_pages判断是否有ps_selectedCus,如果有则打开，没有则push  
      let item = state.ps_pages.find(p => p.cusKeyId == value.cusKeyId);
      if (!item) {
        state.ps_pages.forEach(function (item, index, arr) {
          arr[index].selected = false;
        })
        state.ps_pages.push({ cusKeyId: value.cusKeyId, customerName: value.customerName, selected: true, tags: [],target:value });
      }
      else {
        //路由跳转
        var tag = item.tags.find(p => p.selected == true);
        if (tag) {
          state.ps_selectedTab = { routerId: tag.routerId, routerName: tag.routerName };
          router.push(tag.routerId);
        }
        else {
          state.ps_selectedTab = {};
          router.push('/workbenchRight');
        }
      }
      localStorage.setItem('ps_selectedCus', JSON.stringify(state.ps_selectedCus));
      localStorage.setItem('ps_selectedTab', JSON.stringify(state.ps_selectedTab));
      localStorage.setItem('ps_pages', JSON.stringify(state.ps_pages));
    },
    $_removePage(state, value) {
      //state.ps_selectedCus = value;             
      //首先从ps_pages中删除对应的对象
      //如果删除当前选择的页对象后，需要重新加载新的ps_selectedCus和选择的标签页,ps_selectedTab
      let item = state.ps_pages.find(p => p.cusKeyId == value.cusKeyId);
      var itemIndex = state.ps_pages.indexOf(item);
      state.ps_pages.splice(itemIndex, 1);
      if (state.ps_pages.length > 0) {
        if (state.ps_selectedCus.cusKeyId == value.cusKeyId) {
          let pageItem = state.ps_pages[0];
          state.ps_selectedCus = { cusKeyId: pageItem.cusKeyId, customerName: pageItem.customerName };
          if (pageItem.tags.length > 0) {
            let selected = pageItem.tags.find(p => p.selected == true);
            state.ps_selectedTab = { routerId: selected.routerId, routerName: selected.routerName };
            router.push(selected.routerId);
          }
          else {
            state.ps_selectedTab = {};
            router.push('/workbenchRight');
          }
        }
      }
      else {
        state.ps_selectedCus = {};
        state.ps_selectedTab = {};
        state.ps_pages = [];
        router.push('/clientRecord');
      }
      localStorage.setItem('ps_selectedCus', JSON.stringify(state.ps_selectedCus));
      localStorage.setItem('ps_selectedTab', JSON.stringify(state.ps_selectedTab));
      localStorage.setItem('ps_pages', JSON.stringify(state.ps_pages));
    },
    $_openTab(state, value) {
      state.ps_selectedTab = value;
      //需要选中标签页，或打开新的标签页
      let item = state.ps_pages.find(p => p.cusKeyId == state.ps_selectedCus.cusKeyId);
      if (item) {
        let tags = item.tags;
        tags.forEach(function (item, index, arr) {
          arr[index].selected = false;
        })
        let existTag = tags.find(p => p.routerId == value.routerId);
        if (!existTag) {
          tags.push({ routerId: value.routerId, routerName: value.routerName, selected: true })
        }
        else {
          existTag.selected = true;
        }
        router.push(value.routerId);
      }
      localStorage.setItem('ps_selectedCus', JSON.stringify(state.ps_selectedCus));
      localStorage.setItem('ps_selectedTab', JSON.stringify(state.ps_selectedTab));
      localStorage.setItem('ps_pages', JSON.stringify(state.ps_pages));
    },
    $_closeTab(state, value) {
      state.ps_selectedTab = value;
      //需要关闭标签页，切换到下一个标签页，标签中的第一页。如果所有标签关闭，则切换到下一个人的第一个标签 
      let cusitem = state.ps_pages.find(p => p.cusKeyId == state.ps_selectedCus.cusKeyId);
      let tags = cusitem.tags;
      let item = tags.find(p => p.routerId == value.routerId);
      var itemIndex = tags.indexOf(item);
      tags.splice(itemIndex, 1);
      if (value.routerId == state.ps_selectedTab.routerId) {
        if (tags.length > 0) {
          let selected = tags[0];
          selected.selected = true;
          state.ps_selectedTab = { routerId: selected.routerId, routerName: selected.routerName };
          router.push(selected.routerId);
        }
        else {
          //切换到下一个人
          let item = state.ps_pages.find(p => p.cusKeyId == value.cusKeyId);
          var itemIndex = state.ps_pages.indexOf(item);
          state.ps_pages.splice(itemIndex, 1);

          if (state.ps_pages.length > 0) {
            let pageItem = state.ps_pages[0];
            state.ps_selectedCus.cusKeyId = pageItem.cusKeyId;
            if (pageItem.tags.length > 0) {
              let selected = pageItem.tags.find(p => p.selected == true);
              state.ps_selectedTab = { routerId: selected.routerId, routerName: selected.routerName };
              router.push(selected.routerId);
              //router.push('/clientRecord');
            }
            else {
              state.ps_selectedTab = {};
              router.push('/workbenchRight');
            }

          }
          else {
            state.ps_selectedCus = {};
            state.ps_selectedTab = {};
            state.ps_pages = [];
            router.push('/clientRecord');
          }
        }
      }
      localStorage.setItem('ps_selectedCus', JSON.stringify(state.ps_selectedCus));
      localStorage.setItem('ps_selectedTab', JSON.stringify(state.ps_selectedTab));
      localStorage.setItem('ps_pages', JSON.stringify(state.ps_pages));
    },
    //清空数据
    $_closeAll(state) {
      state.ps_selectedCus = {}
      state.ps_selectedTab = {}
      state.ps_pages = []
      localStorage.setItem('ps_selectedCus', JSON.stringify(state.ps_selectedCus));
      localStorage.setItem('ps_selectedTab', JSON.stringify(state.ps_selectedTab));
      localStorage.setItem('ps_pages', JSON.stringify(state.ps_pages));
    }
  },
})
