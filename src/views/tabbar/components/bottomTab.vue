<template>
  <div>
    <el-tabs
      v-model="ps_selectedCusKeyId"
      type="card"
      closable
      @tab-remove="removeTab"
      tab-position="bottom"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="(item, index) in pages"
        :key="index"
        :label="item.target.name"
        :name="item.target.cusKeyId"
      />
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ps_selectedCusKeyId: this.$pageswitch.state.ps_selectedCus.cusKeyId,
      pages: this.$pageswitch.state.ps_pages,
    };
  },
  methods: {
    handleClick(tab, event) {       
      //打开页面
      let target = this.$pageswitch.state.ps_pages.find(
        (p) => p.cusKeyId == tab.name
      ).target;
      this.$pageswitch.commit("$_openPage", target);
      window.sessionStorage.setItem("target", JSON.stringify(target));
      console.log("page", target);
      this.$store.commit("$_menRight", !this.$store.state._menRight);
      
      window.sessionStorage.setItem("cusKeyId", JSON.stringify(tab.name));
      window.sessionStorage.setItem("target", JSON.stringify(target));
      this.$store.commit("$_menuFlg",!this.$store.state.menuFlg);   
    },
    removeTab(targetName) {
      console.log(targetName);
      //关闭页面
      this.$pageswitch.commit("$_removePage", {
        cusKeyId: targetName,
        customerName: "",
      });
      this.pages = this.$pageswitch.state.ps_pages;
      let tabs = this.pages;
      if (tabs.length > 0) {
        let activeName = this.ps_selectedCusKeyId;
        console.log('111',activeName);
        console.log('222', this.$pageswitch.state.ps_pages.find(
        (p) => p.cusKeyId == activeName
      ))
      
      let selectedPage=this.$pageswitch.state.ps_pages.find(
        (p) => p.cusKeyId == activeName
      );
      if(selectedPage)
      {
      let target = this.$pageswitch.state.ps_pages.find(
        (p) => p.cusKeyId == activeName
      ).target;        
        if(target)
        {    
          window.sessionStorage.setItem("cusKeyId", JSON.stringify(activeName));
          window.sessionStorage.setItem("target", JSON.stringify(target));
          this.$store.commit("$_menuFlg",!this.$store.state.menuFlg);    
        }
      }
      }
    },
  },
  computed: {
    target() {
      const target = this.$store.state.target;
      return target;
    },
  },
  watch: {
    target: {
      handler(newName, oldName) {
        let target = JSON.parse(window.sessionStorage.getItem("target"));
        let cusKeyId = target.cusKeyId;
        let customerName = target.name;
        this.$pageswitch.state.ps_selectedCus = {
          cusKeyId: cusKeyId,
          customerName: customerName,
        };
        this.$pageswitch.commit(
          "$_openPage",
          //this.$pageswitch.state.ps_selectedCus,
          target
        );
        this.ps_selectedCusKeyId = cusKeyId;
        this.pages = this.$pageswitch.state.ps_pages;
      },
      deep: true,
    },
    "$pageswitch.state.ps_pages": function () {
      this.pages = this.$pageswitch.state.ps_pages;
    },
    $route(to,from)
    {      
      if (to.path == "/fundusImages") { 
        this.$store.commit("$_setShowEyeToolBar", true);    
      }
      else
      {
        this.$store.commit("$_setShowEyeToolBar", false);    
      }
    }
  },
};
</script>

<style lang="less" scoped>
</style>