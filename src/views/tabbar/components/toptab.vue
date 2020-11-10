<template>
  <div class="tags" v-show="showTbar">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :class="{ active: isActive(item.routerId) }"
        :key="index"
      >
        <router-link :to="item.routerId" class="tags-li-title">{{
          item.routerName
        }}</router-link>
        <span class="tags-li-icon" @click="closeTags(index, item.routerId)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>

    <!-- <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="medium" status="primary">
          关闭标签
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其它</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCus: this.$pageswitch.state.ps_selectedCus,
      tagsList: [],
      showTbar: true,
    };
  },
  mounted: function () {
    this.initTagList();
  },
  methods: {
    initTagList() {
      let cusKeyId = this.$pageswitch.state.ps_selectedCus.cusKeyId;
      let item = this.$pageswitch.state.ps_pages.find(
        (p) => p.cusKeyId == this.$pageswitch.state.ps_selectedCus.cusKeyId
      );
      if (item) {
        this.tagsList = item.tags;
      } else {
        this.tagsList = [];
      }
      console.log("inittaglist", this.tagsList);
    },
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index, routerId) {
      this.$pageswitch.commit("$_closeTab", {
        routerId: routerId,
        routerName: "",
      });
      this.selectedCus = this.$pageswitch.state.ps_selectedCus;
      this.initTagList();

      let item = this.tagsList.find((p) => p.selected == true);
      console.log(item);
      if (item) {
        this.$router.push(item.routerId);
      } else {
        this.$router.push("/");
      }
    },
    // 关闭全部标签
    // closeAll() {
    //   this.tagsList = [];
    //   this.$router.push("/");
    // },
    // 关闭其它标签
    // closeOther() {
    //   const curItem = this.tagsList.filter(item => {
    //     return item.path === this.$route.fullPath;
    //   });
    //   this.tagsList = curItem;
    // },
    // 设置标签
    setTags(route) {
      if (route.path != "/clientRecord") {
        this.$pageswitch.commit("$_openTab", {
          routerId: route.fullPath,
          routerName: route.meta[0].title,
        });
      }
    },
    handleTags(command) {
      command === "other" ? this.closeOther() : this.closeAll();
    },
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.path != "/workbenchRight") {
        this.setTags(newValue);
        this.showTbar = true;
      } else {
        this.showTbar = false;
        this.tagsList = [];
      }

      if (newValue.path == "/fundusImages") {
        this.$store.commit("$_setShowEyeToolBar", true);
      } else {
        this.$store.commit("$_setShowEyeToolBar", false);
      }
    },
    "$pageswitch.state.ps_pages": function () {
      this.selectedCus = this.$pageswitch.state.ps_selectedCus;
      let item = this.$pageswitch.state.ps_pages.find(
        (p) => p.cusKeyId == this.selectedCus.cusKeyId
      );
      if (item) {
        this.tagsList = item.tags;
      } else {
        this.tagsList = [];
      }

     if(item)
     {
      window.sessionStorage.setItem(
        "cusKeyId",
        JSON.stringify(this.selectedCus.cusKeyId)
      );
      window.sessionStorage.setItem("target", JSON.stringify(item.target));
      this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);
     }
    },

    "$pageswitch.state.ps_selectedTab": function () {
      this.selectedCus = this.$pageswitch.state.ps_selectedCus;
      let item = this.$pageswitch.state.ps_pages.find(
        (p) => p.cusKeyId == this.selectedCus.cusKeyId
      );
      if (item) {
        this.tagsList = item.tags;
      } else {
        this.tagsList = [];
      }
    },
  },
  created() {
    this.setTags(this.$route);
  },
};
</script>


<style>
a {
  text-decoration: none;
}
.tags {
  padding-left: 10px;
  position: relative;
  height: 32px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 3px 5px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  border: 1px solid #999;
  border-radius: 5px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  line-height: 30px;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #ccc;
}

.tags-li.active {
  color: white !important;
  background: white !important;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: black;
  background: linear-gradient(180deg, black, #999);
  -webkit-background-clip: text;
  -webkit-filter: drop-shadow(-1px -1px white)
    drop-shadow(1px 1px darken(white, 50%))
    drop-shadow(1px 1px darken(white, 52%))
    drop-shadow(1px 1px darken(white, 54%))
    drop-shadow(1px 1px darken(white, 56%))
    drop-shadow(1px 1px darken(white, 58%))
    drop-shadow(1px 1px darken(white, 60%))
    drop-shadow(1px 1px darken(white, 62%))
    drop-shadow(1px 1px darken(white, 64%))
    drop-shadow(1px 1px darken(white, 66%))
    drop-shadow(1px 1px darken(white, 68%))
    drop-shadow(1px 1px darken(white, 70%))
    drop-shadow(12px 12px 30px rgba(black, 0.2))
    drop-shadow(12px 12px 10px rgba(black, 0.2));
}

.tags-close-box {
  position: absolute;
  right: 150px;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  line-height: 50px;
  background: #fff;
}
</style>
