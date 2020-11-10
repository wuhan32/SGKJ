<template>
  <div class="header-left">
    <div class="header-organ">
      <!-- :style="`width:${headerOrgan}px`" -->
      <el-select
        v-model="organizationList.organCode"
        style="width: 100%; margin: 5px 10px 5px 5px"
        size="mini"
        placeholder="机构列表"
      >
        <el-option
          v-for="item in organList"
          :key="item.organCode"
          :label="item.organName"
          :value="item.organCode"
          @click.native="organization(item.organName, item.organCode)"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { UserOrgan } from "@/api/login";
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      doctorNameId: "",
      //机构信息与ID
      headerOrgan: 200,
      organList: [],
      organCode: "",
      organizationList: {
        organCode: "ZHDG005",
        organName: "珠海视光科技",
      },
    };
  },
  created() {
    this.userOrgan();

    const organizationList = JSON.parse(
      window.localStorage.getItem("organizationList")
    );
    this.organCode = organizationList.organCode;
    this.organizationList=organizationList;
    
  },
  mounted() {
    if (
      this.organizationList.organName === "河南郑州宝润视光" ||
      this.organizationList.organName === "遵医五院眼视光学部"
    ) {
      this.headerOrgan = 200;
    } else {
      this.headerOrgan = 150;
    }
  },
  methods: {
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    //获取机构列表
    async userOrgan() {
      const { data: res } = await UserOrgan().then();
      this.organList = res.data;
    },
    organization(label, code) {
      console.log(label);
      console.log(code);
      this.organizationList.organName = label;
      this.$store.commit("$_setOrganizationList", this.organizationList);
      window.localStorage.setItem(
        "organizationList",
        JSON.stringify(this.organizationList)
      );
      this.$store.commit("$_menuFlg", !this.$store.state.menuFlg);      
      this.$stompStore.dispatch("STOMP_INIT");
      if (code == "HNZZDG000" || code == "ZHZYWY000") {
        this.headerOrgan = 200;
      } else {
        this.headerOrgan = 150;
      }
    },
  },
  computed: {
    watchorganizationList() {
      return this.$store.state.organizationList.organCode;
    },
  },
  watch: {
    watchorganizationList: function (newValue, oldValue) {
      this.organCode = this.$store.state.organizationList.organCode;
    },
  },
};
</script>

<style lang="less" scoped>
.header-left {
  .header-organ {
    display: flex;
  }
}
</style>