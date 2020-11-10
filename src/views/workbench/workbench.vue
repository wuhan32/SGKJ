<template>
  <div class="workbench">
    <HEADER />
    <header>
      <span>用户名：{{ userInfo.TrueUserName }}</span>
      <!-- <span>账号：{{userInfo.http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name}}</span> -->
    </header>
    <main>
      <section>
        <div class="section-header">
          <span>管理机构</span>
          <el-select v-model="organizationList.organCode" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.organCode"
              :label="item.organName"
              :value="item.organCode"
              @click.native="organization(item.organName)"
            ></el-option>
          </el-select>
        </div>
        <div class="section-bode">
          <ul>
            <li v-for="item in information" :key="item.title">
              <div class="section-bode-img">
                <img src="../../assets/img/u1368.png" alt />
              </div>
              <div class="section-bode-size">
                <h5>{{ item.title }}</h5>
                <p>{{ item.numeber }}</p>
              </div>
              <i class="el-icon-info"></i>
            </li>
          </ul>
          <ul>
            <li v-for="item in echartsItme" :key="item.name">
              <div class="section-bode-size" v>
                <h5>{{ item.name }}</h5>
                <p>{{ item.baifen }}</p>
              </div>
              <div>
                <chart
                  ref="chart1"
                  :options="orgOptions"
                  :auto-resize="true"
                  style="width: 130px"
                ></chart>
              </div>
              <i class="el-icon-info"></i>
            </li>
          </ul>
          <div>
            <h3>销售占比</h3>
            <div class="section-bode-echart">
              <chart
                ref="chart1"
                :options="orgOptions"
                :auto-resize="true"
                style="width: 200px; height: 200px"
              ></chart>
              <chart
                ref="chart1"
                :options="orgOptions"
                :auto-resize="true"
                style="width: 200px; height: 200px"
              ></chart>
              <chart
                ref="chart1"
                :options="orgOptions"
                :auto-resize="true"
                style="width: 200px; height: 200px"
              ></chart>
            </div>
          </div>
        </div>
      </section>
      <section class="section-right">
        <img src="../../assets/img/u1355.jpg" alt @click="goHome" />
      </section>
    </main>
  </div>
</template>

<script>
import { UserOrgan } from "@/api/login";
export default {
  data() {
    return {
      orgOptions: {},
      echartsItme: [
        {
          value: 300,
          name: "病人订片本月转化率",
          baifen: "78%",
        },
        {
          value: 300,
          name: "病人订片上月转化率",
          baifen: "78%",
        },
        {
          value: 300,
          name: "病人订片本年转化率",
          baifen: "78%",
        },
      ],
      information: [
        {
          img: "../../assets/img/u1368.png",
          title: "今日预约",
          numeber: "12",
        },
        {
          img: "../../assets/img/u1368.png",
          title: "预约人数",
          numeber: "12",
        },
        {
          img: "../../assets/img/u1368.png",
          title: "待办收费",
          numeber: "12",
        },
        {
          img: "../../assets/img/u1368.png",
          title: "待办定片",
          numeber: "12",
        },
        {
          img: "../../assets/img/u1368.png",
          title: "待办验片",
          numeber: "12",
        },
        {
          img: "../../assets/img/u1368.png",
          title: "待办交片",
          numeber: "12",
        },
      ],
      options: [],
      //机构信息与ID
      organizationList: {
        organCode: "ZHDG005",
        organName: "珠海视光科技",
      },
      userInfo: {},
    };
  },
  mounted() {
    this.orgOptions = {
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          graphic: {
            //图形中间文字
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "66",
              textAlign: "center",
              fill: "#fff",
              fontSize: 10,
            },
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "8",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 335,
              name: "病人订片本月转化率",
              itemStyle: { color: "#108EFF" },
            },
            { value: 100, name: "", itemStyle: { color: "#f5f6f7" } },
          ],
        },
      ],
    };
  },
  created() {
    this.userOrgan();
    this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  },
  methods: {
    organization(label) {
      this.organizationList.organName = label;
    },
    goHome() {
      window.localStorage.setItem(
        "organizationList",
        JSON.stringify(this.organizationList)
      );
      this.$router.push({
        path: "/home",
      });
    },
    //获取机构列表
    async userOrgan() {
      const { data: res } = await UserOrgan().then();
      this.options = res.data;
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.workbench {
  header {
    height: 50px;
    background-color: #f5f6f7;
    line-height: 50px;
    span {
      color: green;
      margin-left: 15px;
    }
  }
  main {
    display: flex;
    .section-header {
      height: 50px;
      width: 950px;
      border: 1px solid #ccc;
      padding: 3px 0 0 20px;
      box-sizing: border-box;
      span {
        font-size: 15px;
        margin-right: 15px;
      }
    }
    .section-bode {
      height: 100vh;
      width: 950px;
      border: 1px solid #ccc;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 310px;
          height: 150px;
          display: flex;
          box-sizing: border-box;
          text-align: center;
          align-items: center;
          padding: 40px;
          position: relative;
          .section-bode-img {
            img {
              width: 60px;
              height: 60px;
            }
          }
          .section-bode-size {
            margin-left: 15px;
            h5 {
              font-size: 15px;
              color: #555;
              font-weight: normal;
            }
            p {
              font-size: 25px;
            }
          }

          i {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 15px;
          }
        }
      }
    }
    .section-bode-echart {
      display: flex;
      justify-content: space-around;
    }
    .section-right {
      img {
        width: 250px;
        height: 250px;
        transform: translate(150px, 150px);
        box-shadow: 0px 0px 10px 10px #f1f2f3;
        cursor: pointer;
      }
    }
  }
}
</style>