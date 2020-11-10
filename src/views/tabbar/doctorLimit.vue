<template>
  <div class="client">
    <div>
      <vxe-grid
        ref="xGrid"
        id="mytable"
        highlight-hover-row
        align="center"
        :height="screenHeight - 160"
        :loading="loading"
        :columns="tableColumn"
        :data="tableData"
        :toolbar="tableToolbar"
        :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
        :custom-config="{ storage: true }"
        auto-resize
        border="full"
        export-config
        import-config
        keep-source
        size="small"
        class="mytable-scrollbar"
        @toolbar-button-click="toolbarButtonClickEvent"
      ></vxe-grid>
    </div>
  </div>
</template>

<script>
import { GetDoctorLimitList, SetDoctorLimitByList } from "@/api/clientRecord";
export default {
  data() {
    return {
      screenWidth: "",
      screenHeight: "",
      doctorNameId: "",
      doctorId: "",
      cusKeyId: "",
      options: [],
      value: "",
      formInlineO: "3",
      //搜索
      search: "",
      //查询客户档案ID
      loading: false,
      tableToolbar: {
        buttons: [{ code: "mySave", name: "保存", status: "success" }],
      },
      tableColumn: [
        { type: "seq", width: 60, title: "序号" },
        { field: "doctorname", title: "医生" },
        {
          field: "limit",
          title: "限额",
          editRender: { name: "input", props: { type: "number" } },
        },
        { field: "comment", title: "描述", editRender: { name: "input" } },
      ],
      //列表
      tableData: [],
    };
  },
  mounted() {
    this.findList();
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        console.log(this.screenWidth);
        console.log(this.screenHeight);
      })();
    };
  },
  created() {
    console.log(this.$refs.vxe);
  },
  methods: {
    //列表详情
    async findList() {
      this.loading = true;
      const { data: res } = await GetDoctorLimitList().then();
      this.tableData = res.data;

      this.loading = false;
    },

    activeCellMethod({ column, columnIndex }) {
      console.log("index:" + columnIndex);
      console.log("column", column);
    },
    toolbarButtonClickEvent({ code }) {
      const { updateRecords } = this.$refs.xGrid.getRecordset();
      let req = [];
      updateRecords.forEach((element) => {
        // console.log(updateRecords);
        req.push({
          limit: parseInt(element.limit),
          doctorid: element.doctorid,
          comment: element.comment,
          Orgincode: "",
        });
      });
      if (req.length == 0) {
        this.$message({
          message: "未有修改项",
          type: "warning",
        });
        return;
      }

      //console.log(req);
      SetDoctorLimitByList(req)
        .then((resolve) => {
          this.$message({
            message: "保存成功",
            type: "success",
          });
          this.findList();
        })
        .catch((error) => {
          this.$message({
            message: "保存失败",
            type: "warning",
          });
          this.findList();
        });

      //  if (res.code==0)
      //  {
      //      this.$message({
      //   message: "修改成功",
      //   type: "success"
      //    });
      //  }
    },
  },
};
</script>


<style lang="less" scoped>
.client {
  .search-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    span {
      margin: 0 20px;
    }
  }
  .operateButton {
    display: flex;
    justify-content: space-between;
    button {
      margin: 0;
    }
  }
}
</style>