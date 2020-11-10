<template>
  <div>
    <div>
      <div class="search-body">
        <div>
          <span>类型</span>
          <el-select v-model="formInlineI" size="mini">
            <el-option label="所有" value="0"></el-option>
            <el-option label="复诊" value="2"></el-option>
            <el-option label="初诊" value="1"></el-option>
            <el-option label="适配染色" value="4"></el-option>
            <el-option label="新镜染色" value="3"></el-option>
          </el-select>
          <vxe-button
            status="primary"
            class="clear-button"
            @click="searchO"
            size="mini"
            >查询</vxe-button
          >
        </div>
        <div>
          <vxe-button status="primary" @click.native="goNewExamine" size="mini"
            >新建检查档案</vxe-button
          >
          <vxe-button status="primary" @click.native="gonewAdaptive" size="mini"
            >新建适配染色</vxe-button
          >
          <vxe-button
            status="primary"
            @click.native="gonewAdaptiveO"
            size="mini"
            >新建新镜染色</vxe-button
          >
          <vxe-button status="primary" @click.native="gonewreview" size="mini"
            >新建复查档案</vxe-button
          >
        </div>
        <!-- <div>
          <vxe-button
            status="primary"
            icon="iconfont icon-yanjing"
            @click.native="corneaImages"
            size="mini" 
          >角膜地形图</vxe-button>
          <vxe-button
            status="primary"
            icon="iconfont icon-yanjing"
            @click.native="fundusImages"
            size="mini"
          >眼底照片</vxe-button>
        </div>-->
      </div>
      <div>
        <vxe-grid
          highlight-hover-row
          align="center"
          height="625"
          :loading="loading"
          :seq-config="{
            startIndex: (tablePage.currentPage - 1) * tablePage.pageSize,
          }"
          :pager-config="tablePage"
          :columns="tableColumn"
          :data="tableData"
          @page-change="handlePageChange"
          @cell-dblclick="cellDBLClickEvent"
          auto-resize
          border="full"
          stripe
          size="small"
          class="mytable-scrollbar"
        ></vxe-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchExamRecord } from "@/api/doctorRecord";
export default {
  data() {
    return {
      id: this.$route.query.id,
      //查询条件
      formInlineI: "",
      value: "",
      loading: false,
      tablePage: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        align: "left",
        perfect: true,
      },
      tableColumn: [
        { type: "seq", width: 60, title: "选择" },
        { field: "gmtUpdate", title: "就诊日期" },
        { field: "patientId", title: "病历号" },
        { field: "examTypeName", title: "类型" },
        { field: "name", title: "姓名", showOverflow: true },
        { field: "doctorName", title: "就诊医生", showOverflow: true },
        { field: "equipmentName", title: "就诊机构" },
      ],
      //列表
      tableData: [],
    };
  },
  created() {
    this.findList();
  },
  mounted() {},
  methods: {
    goNewExamine() {
      this.$router.push({
        path: "/newExamine",
        query: {
          id: this.id,
          identification: 100,
          patientId: this.$route.query.patientId,
        },
      });
    },
    gonewAdaptive() {
      this.$router.push({
        path: "/newAdaptive",
        query: {
          id: this.id,
          patientId: this.$route.query.patientId,
          identification: 100,
        },
      });
    },
    gonewAdaptiveO() {
      this.$router.push({
        path: "/newFresh",
        query: {
          id: this.id,
          patientId: this.$route.query.patientId,
          identification: 100,
        },
      });
    },
    gonewreview() {
      this.$router.push({
        path: "/newReview",
        query: {
          id: this.id,
          identification: 100,
        },
      });
    },
    //角膜地形图
    corneaImages() {
      this.$router.push({
        path: "/corneaImages",
        query: {
          id: this.id,
          patientId: this.$route.query.patientId,
        },
      });
    },
    //眼底照片
    fundusImages() {
      this.$router.push({
        path: "/fundusImages",
        query: {
          id: this.id,
        },
      });
    },

    searchEvent() {
      this.tablePage.currentPage = 1;
      this.findList();
    },
    handlePageChange({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage;
      this.tablePage.pageSize = pageSize;
      this.findList();
    },
    searchO() {
      this.findList();
    },
    clearSearch() {
      this.search = "";
      this.findList();
    },
    //双击详情
    cellDBLClickEvent({ $rowIndex }) {
      switch (this.tableData[$rowIndex].examType) {
        case 1:
          this.$router.push({
            path: "/newExamine",
            query: {
              emaKeyId: this.tableData[$rowIndex].emaKeyId,
              identification: 101,
              id: this.$route.query.id,
            },
          });
          break;
        case 2:
          this.$router.push({
            path: "/newReview",
            query: {
              emaKeyId: this.tableData[$rowIndex].emaKeyId,
              identification: 101,
              id: this.$route.query.id,
            },
          });
          break;
        case 4:
          this.$router.push({
            path: "/newFresh",
            query: {
              emaKeyId: this.tableData[$rowIndex].emaKeyId,
              identification: 101,
              id: this.$route.query.id,
            },
          });
          break;
        case 3:
          this.$router.push({
            path: "/newAdaptive",
            query: {
              emaKeyId: this.tableData[$rowIndex].emaKeyId,
              identification: 101,
              id: this.$route.query.id,
            },
          });
          break;
      }
    },
    //获取就诊列表
    async findList() {
      this.loading = true;
      const { data: res } = await SearchExamRecord(
        this.$route.query.id,
        +this.formInlineI,
        +this.tablePage.pageSize,
        +this.tablePage.currentPage
      ).then();
      if (res.data.totalCount != 0) {
        this.tableData = res.data.dataList;
        this.tablePage.total = res.data.totalCount;
      } else {
        this.tableData = [];
      }
      this.loading = false;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.path != "/clientRecord") {
        this.findList();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search-body {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  .clear-button {
    margin-left: 15px;
    margin-right: 55px;
  }
  span {
    margin: 0 20px;
  }
}
</style>