<template>
  <div class="newExamine" ref="imageWrapper">
    <el-tabs tab-position="top" v-model="activeName">
      <el-tab-pane label="主诉&问诊" name="first">
        <!-- 主诉 -->
        <table class="newExamine1">
          <tr>
            <td rowspan="4">主诉</td>
            <td rowspan="2">右眼</td>
            <td>视力</td>
            <td>
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="1">远</el-checkbox>
                  <el-checkbox label="2">近</el-checkbox>
                  <el-checkbox label="3">清</el-checkbox>
                  <el-checkbox label="4">模糊</el-checkbox>
                  <el-checkbox label="5">虚影</el-checkbox>
                  <el-checkbox label="6">重影</el-checkbox>
                  <el-checkbox label="7">彩虹</el-checkbox>
                  <el-checkbox label="8">飞影</el-checkbox>
                  <el-checkbox label="9">无光</el-checkbox>
                  <el-checkbox label="10">低视</el-checkbox>
                  <el-checkbox label="11">变形</el-checkbox>
                </el-checkbox-group>
                <div>
                  <span style="margin-right: 20px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input1"
                    clearable
                    style="width: 280px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>生理</td>
            <td>
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="12">痒</el-checkbox>
                  <el-checkbox label="13">痛</el-checkbox>
                  <el-checkbox label="14">干</el-checkbox>
                  <el-checkbox label="15">酸</el-checkbox>
                  <el-checkbox label="16">涨</el-checkbox>
                  <el-checkbox label="17">肿</el-checkbox>
                  <el-checkbox label="18">畏光</el-checkbox>
                  <el-checkbox label="19">流泪</el-checkbox>
                  <el-checkbox label="20">红眼</el-checkbox>
                  <el-checkbox label="21">异物</el-checkbox>
                  <el-checkbox label="22">出血</el-checkbox>
                  <el-checkbox label="23">倒睫</el-checkbox>
                </el-checkbox-group>
                <div>
                  <span style="margin-right: 20px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input2"
                    clearable
                    style="width: 280px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td rowspan="2">左眼</td>
            <td>视力</td>
            <td>
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="24">远</el-checkbox>
                  <el-checkbox label="25">近</el-checkbox>
                  <el-checkbox label="26">清</el-checkbox>
                  <el-checkbox label="27">模糊</el-checkbox>
                  <el-checkbox label="28">虚影</el-checkbox>
                  <el-checkbox label="29">重影</el-checkbox>
                  <el-checkbox label="30">彩虹</el-checkbox>
                  <el-checkbox label="31">飞影</el-checkbox>
                  <el-checkbox label="32">无光</el-checkbox>
                  <el-checkbox label="33">地视</el-checkbox>
                  <el-checkbox label="34">变形</el-checkbox>
                </el-checkbox-group>
                <div>
                  <span style="margin-right: 20px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input3"
                    clearable
                    style="width: 280px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>生理</td>
            <td>
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="35">痒</el-checkbox>
                  <el-checkbox label="36">痛</el-checkbox>
                  <el-checkbox label="37">干</el-checkbox>
                  <el-checkbox label="38">酸</el-checkbox>
                  <el-checkbox label="39">涨</el-checkbox>
                  <el-checkbox label="40">肿</el-checkbox>
                  <el-checkbox label="41">畏光</el-checkbox>
                  <el-checkbox label="42">流泪</el-checkbox>
                  <el-checkbox label="43">红眼</el-checkbox>
                  <el-checkbox label="44">异物</el-checkbox>
                  <el-checkbox label="45">出血</el-checkbox>
                  <el-checkbox label="46">倒睫</el-checkbox>
                </el-checkbox-group>
                <div>
                  <span style="margin-right: 20px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input4"
                    clearable
                    style="width: 280px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td rowspan="10">问诊</td>
            <td rowspan="3">病史</td>
            <td>疾病</td>
            <td>
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="47" style="width: 100px !important"
                    >高血压</el-checkbox
                  >
                  <el-checkbox label="48" style="width: 100px !important"
                    >糖尿病</el-checkbox
                  >
                  <el-checkbox label="49" style="width: 100px !important"
                    >甲亢/减</el-checkbox
                  >
                  <el-checkbox label="50" style="width: 100px !important"
                    >免疫性</el-checkbox
                  >
                  <el-checkbox label="51" style="width: 100px !important"
                    >传染病</el-checkbox
                  >
                  <el-checkbox label="52" style="width: 100px !important"
                    >遗传病</el-checkbox
                  >
                </el-checkbox-group>
                <div>
                  <span style="margin-right: 20px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input5"
                    clearable
                    style="width: 280px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>过敏</td>
            <td>
              <div>
                <p class="checkboxs">药物</p>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="53">有</el-checkbox>
                  <el-checkbox label="54">无</el-checkbox>
                </el-checkbox-group>
                <p class="checkboxs">药类</p>
                <el-input
                  maxlength="16"
                  size="mini"
                  v-model="savemessage.extJson1.inputList.input6"
                  clearable
                  style="width: 120px"
                ></el-input>
                <p class="checkboxs">皮肤</p>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="55">有</el-checkbox>
                  <el-checkbox label="56">无</el-checkbox>
                </el-checkbox-group>
                <p class="checkboxs">部位</p>
                <el-input
                  maxlength="16"
                  size="mini"
                  v-model="savemessage.extJson1.inputList.input7"
                  clearable
                  style="width: 100px"
                ></el-input>
                <p class="checkboxs">现在可用药物</p>
                <el-input
                  maxlength="16"
                  size="mini"
                  v-model="savemessage.extJson1.inputList.input888"
                  clearable
                  style="width: 120px"
                ></el-input>
                <p class="checkboxs">病理</p>
                <el-input
                  maxlength="16"
                  size="mini"
                  v-model="savemessage.extJson1.inputList.input8"
                  clearable
                  style="width: 280px"
                ></el-input>
              </div>
            </td>
          </tr>
          <tr>
            <td>眼疾</td>
            <td>
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="57">睑缘</el-checkbox>
                  <el-checkbox label="58">睑板</el-checkbox>
                  <el-checkbox label="59">角膜</el-checkbox>
                  <el-checkbox label="60">结膜</el-checkbox>
                  <el-checkbox label="61">巩膜</el-checkbox>
                  <el-checkbox label="62">虹膜</el-checkbox>
                  <el-checkbox label="63">瞳孔</el-checkbox>
                  <el-checkbox label="64">晶体</el-checkbox>
                  <el-checkbox label="65">眼底</el-checkbox>
                  <el-checkbox label="66">黄斑</el-checkbox>
                  <el-checkbox label="67">视盘</el-checkbox>
                  <el-checkbox label="68">脉络膜</el-checkbox>
                  <el-checkbox label="69">无</el-checkbox>
                </el-checkbox-group>
                <div>
                  <span style="margin-right: 7px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input9"
                    clearable
                    style="width: 203px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr class="fuxi">
            <td rowspan="3">饮食环境</td>
            <td>饮食</td>
            <td>
              <div>
                <div>
                  <p>肝脏</p>
                  <el-checkbox-group
                    v-model="savemessage.extJson1.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="70">多</el-checkbox>
                    <el-checkbox label="71">中</el-checkbox>
                    <el-checkbox label="72">少</el-checkbox>
                    <el-checkbox label="73">无</el-checkbox>
                  </el-checkbox-group>
                </div>
                <div>
                  <p class="checkboxs">烤炸</p>
                  <el-checkbox-group
                    v-model="savemessage.extJson1.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="74">多</el-checkbox>
                    <el-checkbox label="75">中</el-checkbox>
                    <el-checkbox label="76">少</el-checkbox>
                    <el-checkbox label="77">无</el-checkbox>
                  </el-checkbox-group>
                </div>
                <div>
                  <p class="checkboxs">甜食</p>
                  <el-checkbox-group
                    v-model="savemessage.extJson1.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="78">多</el-checkbox>
                    <el-checkbox label="79">中</el-checkbox>
                    <el-checkbox label="80">少</el-checkbox>
                    <el-checkbox label="81">无</el-checkbox>
                  </el-checkbox-group>
                </div>
                <div>
                  <span class="checkboxs">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input10"
                    clearable
                    style="width: 200px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>视距</td>
            <td>
              <div>
                <p>5米内（近距）</p>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                  style="width: 200px"
                >
                  <el-checkbox label="82" style="width: 20px !important"
                    >多</el-checkbox
                  >
                  <el-checkbox label="83" style="width: 20px !important"
                    >中</el-checkbox
                  >
                  <el-checkbox label="84" style="width: 20px !important"
                    >少</el-checkbox
                  >
                  <el-checkbox label="85" style="width: 20px !important"
                    >无</el-checkbox
                  >
                </el-checkbox-group>
                <p>5~50米（中距）</p>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                  style="width: 200px"
                >
                  <el-checkbox label="86" style="width: 20px !important"
                    >多</el-checkbox
                  >
                  <el-checkbox label="87" style="width: 20px !important"
                    >中</el-checkbox
                  >
                  <el-checkbox label="88" style="width: 20px !important"
                    >少</el-checkbox
                  >
                  <el-checkbox label="89" style="width: 20px !important"
                    >无</el-checkbox
                  >
                </el-checkbox-group>
                <p>50外（远距）</p>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="90">多</el-checkbox>
                  <el-checkbox label="91">中</el-checkbox>
                  <el-checkbox label="92">少</el-checkbox>
                  <el-checkbox label="93">无</el-checkbox>
                </el-checkbox-group>
                <div>
                  <span class="checkboxs">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input11"
                    clearable
                    style="width: 200px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>时段</td>
            <td>
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="94">早上</el-checkbox>
                  <el-checkbox label="95">上午</el-checkbox>
                  <el-checkbox label="96">中午</el-checkbox>
                  <el-checkbox label="97">下午</el-checkbox>
                  <el-checkbox label="98">晚上</el-checkbox>
                  <el-checkbox label="99">晴天</el-checkbox>
                  <el-checkbox label="100">阴天</el-checkbox>
                  <el-checkbox label="101">室内</el-checkbox>
                  <el-checkbox label="102">室外</el-checkbox>
                </el-checkbox-group>
                <div>
                  <span style="margin-right: 10px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input12"
                    clearable
                    style="width: 200px"
                  ></el-input>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td rowspan="2">家族</td>
            <td>父系</td>
            <td class="fuxi">
              <div>
                <p>爷/奶：R</p>
                <input
                  v-model="savemessage.extJson1.inputList.input13"
                  maxlength="16"
                  style="width: 40px"
                />
                <p>L</p>
                <input
                  v-model="savemessage.extJson1.inputList.input14"
                  style="width: 40px"
                  maxlength="16"
                />
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="103">框架</el-checkbox>
                  <el-checkbox label="104">激光</el-checkbox>
                  <el-checkbox label="105">软镜</el-checkbox>
                  <el-checkbox label="106">无</el-checkbox>
                </el-checkbox-group>
                <p>父亲：R</p>
                <input
                  v-model="savemessage.extJson1.inputList.input15"
                  style="width: 40px"
                  maxlength="16"
                />
                <p>L</p>
                <input
                  v-model="savemessage.extJson1.inputList.input16"
                  style="width: 40px"
                  maxlength="16"
                />
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="119">框架</el-checkbox>
                  <el-checkbox label="120">激光</el-checkbox>
                  <el-checkbox label="121">软镜</el-checkbox>
                  <el-checkbox label="122">无</el-checkbox>
                </el-checkbox-group>
                <p style="margin-left: 15px">人种</p>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="123">黄</el-checkbox>
                  <el-checkbox label="124">黑</el-checkbox>
                  <el-checkbox label="125">白</el-checkbox>
                  <el-checkbox label="126">棕</el-checkbox>
                  <el-checkbox label="5511">混</el-checkbox>
                </el-checkbox-group>
              </div>
            </td>
          </tr>
          <tr class="fuxi">
            <td>母系</td>
            <td>
              <div>
                <p>公/婆：R</p>
                <input
                  v-model="savemessage.extJson1.inputList.input17"
                  style="width: 40px"
                  maxlength="16"
                />
                <p>L</p>
                <input
                  v-model="savemessage.extJson1.inputList.input18"
                  style="width: 40px"
                  maxlength="16"
                />
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="115">框架</el-checkbox>
                  <el-checkbox label="116">激光</el-checkbox>
                  <el-checkbox label="117">软镜</el-checkbox>
                  <el-checkbox label="118">无</el-checkbox>
                </el-checkbox-group>
                <p>母亲：R</p>
                <input
                  v-model="savemessage.extJson1.inputList.input19"
                  style="width: 40px"
                  maxlength="16"
                />
                <p>L</p>
                <input
                  v-model="savemessage.extJson1.inputList.input20"
                  style="width: 40px"
                  maxlength="16"
                />
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="107">框架</el-checkbox>
                  <el-checkbox label="108">激光</el-checkbox>
                  <el-checkbox label="109">软镜</el-checkbox>
                  <el-checkbox label="110">无</el-checkbox>
                </el-checkbox-group>
                <p style="margin-left: 15px">人种</p>
                <el-checkbox-group
                  v-model="savemessage.extJson1.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="111">黄</el-checkbox>
                  <el-checkbox label="112">黑</el-checkbox>
                  <el-checkbox label="113">白</el-checkbox>
                  <el-checkbox label="114">棕</el-checkbox>
                  <el-checkbox label="551">混</el-checkbox>
                </el-checkbox-group>
              </div>
            </td>
          </tr>
          <tr>
            <td>发育</td>
            <td colspan="2">
              <div style="width: 680px">
                <div class="df">
                  <p>身高</p>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input21"
                    clearable
                    style="width: 100px"
                  ></el-input>
                  <p style="margin-right: 40px">cm</p>
                  <p>体重</p>
                  <el-input
                    maxlength="16"
                    size="mini"
                    v-model="savemessage.extJson1.inputList.input22"
                    clearable
                    style="width: 100px"
                  ></el-input>
                  <p style="margin-right: 40px">KG</p>
                </div>
                <div class="df">
                  <p>检查人</p>
                  <input
                    type="checkbox"
                    class="checkbox"
                    v-model="adapterCheck"
                    @click="Setvadapterr"
                    style="width: 15px"
                  />
                  <input
                    style="width: 100px"
                    type="text"
                    v-model="savemessage.extJson1.inputList.adapterr"
                    maxlength="16"
                    disabled
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>医生</td>
            <td colspan="2">
              <div class="deadlineSave">
                <p style="margin: 0 15px">
                  {{ savemessage.extJson1.inputList.trueUserName }}
                </p>

                <vxe-button
                  status="warning"
                  class="save"
                  size="mini"
                  @click="save(1)"
                  :disabled="!voluntarilyFlag1"
                  >保存</vxe-button
                >
              </div>
            </td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="检查" name="second">
        <table class="newExamine2" ref="newExamine2">
          <tr>
            <td></td>
            <td>眼别</td>
            <td colspan="16" class="bdr">OD</td>
            <td colspan="16">OS</td>
          </tr>
          <!-- 裂隙灯检查 -->
          <tr>
            <td rowspan="4">裂隙灯检测</td>
            <td rowspan="3">眼器官</td>
            <!-- OD -->
            <td colspan="2">
              <p>上眼睑</p>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input24"
                name
                id
                maxlength="16"
                v-direction="{ x: 2, y: 0 }"
              />
            </td>
            <td colspan="2">
              <p>下眼睑</p>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input25"
                name
                id
                maxlength="16"
                v-direction="{ x: 4, y: 0 }"
              />
            </td>
            <td>
              <p>眼袋</p>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input26"
                name
                id
                maxlength="16"
                v-direction="{ x: 6, y: 0 }"
              />
            </td>
            <td>
              <p>眼圈</p>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input27"
                name
                id
                maxlength="16"
                v-direction="{ x: 8, y: 0 }"
              />
            </td>
            <td>
              <p>眼角</p>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input28"
                name
                id
                maxlength="16"
                v-direction="{ x: 10, y: 0 }"
              />
            </td>
            <td>
              <p>眼位</p>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input29"
                name
                id
                maxlength="16"
                v-direction="{ x: 12, y: 0 }"
              />
            </td>
            <td>
              <p>震颤</p>
            </td>
            <td class="bdr">
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input30"
                name
                id
                maxlength="16"
                v-direction="{ x: 14, y: 0 }"
              />
            </td>
            <!-- OS -->
            <!-- 外观 -->
            <td colspan="2">
              <p>上眼睑</p>
            </td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson3.inputList.input45"
                maxlength="16"
                v-direction="{ x: 16, y: 0 }"
              />
            </td>
            <td colspan="2">
              <p>下眼睑</p>
            </td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson3.inputList.input46"
                maxlength="16"
                v-direction="{ x: 18, y: 0 }"
              />
            </td>
            <td>
              <p>眼袋</p>
            </td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson3.inputList.input47"
                maxlength="16"
                v-direction="{ x: 20, y: 0 }"
              />
            </td>
            <td>
              <p>眼圈</p>
            </td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson3.inputList.input48"
                maxlength="16"
                v-direction="{ x: 22, y: 0 }"
              />
            </td>
            <td>
              <p>眼角</p>
            </td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson3.inputList.input49"
                maxlength="16"
                v-direction="{ x: 24, y: 0 }"
              />
            </td>
            <td>
              <p>眼位</p>
            </td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson3.inputList.input50"
                maxlength="16"
                v-direction="{ x: 26, y: 0 }"
              />
            </td>
            <td>
              <p>震颤</p>
            </td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson3.inputList.input51"
                maxlength="16"
                v-direction="{ x: 28, y: 0 }"
              />
            </td>
          </tr>
          <tr>
            <td>睫毛</td>
            <td colspan="2">上睑缘</td>
            <td colspan="2">下睑缘</td>
            <td>睑肉</td>
            <td>胬肉</td>
            <td>泪器</td>
            <td>结膜</td>
            <td>巩膜</td>
            <td>角膜</td>
            <td>前房</td>
            <td>虹膜</td>
            <td>瞳孔</td>
            <td>晶体</td>
            <td class="bdr">玻璃体</td>
            <td>睫毛</td>
            <td colspan="2">上睑缘</td>
            <td colspan="2">下睑缘</td>
            <td>睑肉</td>
            <td>胬肉</td>
            <td>泪器</td>
            <td>结膜</td>
            <td>巩膜</td>
            <td>角膜</td>
            <td>前房</td>
            <td>虹膜</td>
            <td>瞳孔</td>
            <td>晶体</td>
            <td>玻璃体</td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input31"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 1, y: 1 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input32"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 2, y: 1 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input33"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 3, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input34"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 4, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input35"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 5, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input36"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 6, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input37"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 7, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input38"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 8, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input39"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 9, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input40"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 10, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input41"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 11, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input42"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 12, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input43"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 13, y: 1 }"
              />
            </td>
            <td class="bdr">
              <input
                type="text"
                v-model="savemessage.extJson2.inputList.input44"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 14, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input52"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 15, y: 1 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input53"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 16, y: 1 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input54"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 17, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input55"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 18, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input56"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 19, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input57"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 20, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input58"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 21, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input59"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 22, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input60"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 23, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input61"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 24, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input62"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 25, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input63"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 26, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input64"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 27, y: 1 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson3.inputList.input65"
                maxlength="16"
                :disabled="Slitlamp"
                v-direction="{ x: 28, y: 1 }"
              />
            </td>
          </tr>
          <tr>
            <td>医生</td>
            <td colspan="16" class="bdr">
              <div class="deadlineSave">
                <p>{{ savemessage.extJson2.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click.native="normal(1)"
                  >检查正常</vxe-button
                >
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(2)"
                  :disabled="!voluntarilyFlag2"
                  >保存</vxe-button
                >
              </div>
            </td>
            <td colspan="16">
              <div class="deadlineSave">
                <p>{{ savemessage.extJson3.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click.native="normal(2)"
                  >检查正常</vxe-button
                >
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(3)"
                  :disabled="!voluntarilyFlag3"
                  >保存</vxe-button
                >
              </div>
            </td>
          </tr>
          <!-- 屈光检查 -->
          <tr>
            <td rowspan="7">屈光检查</td>
            <td rowspan="2">电脑验光</td>
            <td colspan="2">球镜</td>
            <td colspan="2">柱镜</td>
            <td colspan="2">轴向</td>
            <td colspan="2">KF</td>
            <td>KS</td>
            <td>K值</td>
            <td>CYL</td>
            <td>AX</td>
            <td>ROCS</td>
            <td colspan="2">ROCF</td>
            <td class="bdr">AVG</td>
            <td colspan="2">球镜</td>
            <td colspan="2">柱镜</td>
            <td colspan="2">轴向</td>
            <td colspan="2">KF</td>
            <td>KS</td>
            <td>K值</td>
            <td>CYL</td>
            <td>AX</td>
            <td>ROCS</td>
            <td colspan="2">ROCF</td>
            <td>AVG</td>
          </tr>
          <tr>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightEyeball"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 1, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightColumnMirror"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 2, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightAxialDirection"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 3, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightKF"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 5, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightKS"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 7, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightkValue"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 8, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightCYL"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 9, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightAX"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 10, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightROCS"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 11, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightROCF"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 13, y: 2 }"
              />
            </td>
            <td class="bdr">
              <input
                type="text"
                v-model="savemessage.extJson8.inputList.rightAVG"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 14, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftEyeball"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 15, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftColumnMirror"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 16, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftAxialDirection"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 18, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftKF"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 19, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftKS"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 21, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftkValue"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 22, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftCYL"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 23, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftAX"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 24, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftROCS"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 25, y: 2 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftROCF"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 26, y: 2 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson9.inputList.leftAVG"
                maxlength="16"
                :disabled="PcOptometry"
                v-direction="{ x: 28, y: 2 }"
              />
            </td>
          </tr>
          <tr>
            <td rowspan="4">综合验光</td>
            <td></td>
            <td>矫视</td>
            <td colspan="2">裸视</td>
            <td colspan="2">球镜</td>
            <td colspan="2">柱镜</td>
            <td colspan="2">轴位</td>
            <td colspan="2">棱镜</td>
            <td colspan="2">底向</td>
            <td class="bdr" colspan="2">视力</td>
            <td></td>
            <td>矫视</td>
            <td colspan="2">裸视</td>
            <td colspan="2">球镜</td>
            <td colspan="2">柱镜</td>
            <td colspan="2">轴位</td>
            <td colspan="2">棱镜</td>
            <td colspan="2">底向</td>
            <td colspan="2">视力</td>
          </tr>
          <tr>
            <td>视远</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightTeleopsia1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 1, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightNakedLook"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 2, y: 3 }"
              />
            </td>
            <!-- K28 -->
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightSph"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 3, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightColumnMirror"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 5, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightAxialView"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 7, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightLingMirror"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 9, y: 3 }"
              />
            </td>

            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.rightEndThe"
                :disabled="optometry"
              >
                <el-option label="BI" value="rightBI">BI</el-option>
                <el-option label="BO" value="rightBO">BO</el-option>
                <el-option label="BU" value="rightBU">BU</el-option>
                <el-option label="BD" value="rightBD">BD</el-option>
              </el-select>
              <!-- <input
                type="text"
                v-model="savemessage.extJson4.inputList.input85"
                maxlength="16"
                :disabled="optometry"
              /> -->
            </td>
            <td class="bdr" colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightVision"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 14, y: 3 }"
              />
            </td>
            <td>视远</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftTeleopsia1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 15, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftNakedLook"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 16, y: 3 }"
              />
            </td>
            <!-- OS球镜 -->

            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftSph"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 18, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftColumnMirror"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 19, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftAxialView"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 21, y: 3 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftLingMirror"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 23, y: 3 }"
              />
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.leftEndThe"
                :disabled="optometry"
              >
                <el-option label="BI" value="leftBI">BI</el-option>
                <el-option label="BO" value="leftBO">BO</el-option>
                <el-option label="BU" value="leftBU">BU</el-option>
                <el-option label="BD" value="leftBD">BD</el-option>
              </el-select>
              <!-- <input
                type="text"
                v-model="savemessage.extJson5.inputList.input120"
                maxlength="16"
                :disabled="optometry"
              /> -->
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftVision"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 28, y: 3 }"
              />
            </td>
          </tr>
          <tr>
            <td>视近</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightTeleopsia2"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 1, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightNakedLook1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 2, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightSph1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 3, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightColumnMirror1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 5, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightAxialView1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 7, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightLingMirror1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 9, y: 4 }"
              />
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.rightEndThe1"
                :disabled="optometry"
              >
                <el-option label="BI" value="rightBI1">BI</el-option>
                <el-option label="BO" value="rightBO1">BO</el-option>
                <el-option label="BU" value="rightBU1">BU</el-option>
                <el-option label="BD" value="rightBD">BD</el-option>
              </el-select>
              <!-- <input
                type="text"
                v-model="savemessage.extJson4.inputList.input93"
                maxlength="16"
                :disabled="optometry"
              /> -->
            </td>
            <td class="bdr" colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightVision1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 14, y: 4 }"
              />
            </td>

            <td>视近</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftTeleopsia2"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 15, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftNakedLook1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 16, y: 4 }"
              />
            </td>

            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftSph1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 18, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftColumnMirror1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 19, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftAxialView1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 21, y: 4 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftLingMirror1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 23, y: 4 }"
              />
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.leftEndThe1"
                :disabled="optometry"
              >
                <el-option label="BI" value="leftBI1">BI</el-option>
                <el-option label="BO" value="leftBO1">BO</el-option>
                <el-option label="BU" value="leftBU1">BU</el-option>
                <el-option label="BD" value="leftBD">BD</el-option>
              </el-select>
              <!-- <input
                type="text"
                v-model="savemessage.extJson5.inputList.input128"
                maxlength="16"
                :disabled="optometry"
              /> -->
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftVision1"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 28, y: 4 }"
              />
            </td>
          </tr>
          <tr>
            <td>立体</td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.rightStereoscopic"
                :disabled="optometry"
              >
                <el-option label="正常" value="rightStereoscopic1"
                  >正常</el-option
                >
                <el-option label="异常" value="rightStereoscopic2"
                  >异常</el-option
                >
                <el-option label="没有" value="rightStereoscopic3"></el-option>
              </el-select>
            </td>
            <td>
              <span>融合</span>
            </td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.rightFuse"
                :disabled="optometry"
              >
                <el-option label="正常" value="rightFuse1">正常</el-option>
                <el-option label="异常" value="rightFuse2">异常</el-option>
                <el-option label="参差" value="rightFuse3">参差</el-option>
                <el-option label="没有" value="rightFuse4">没有</el-option>
              </el-select>
            </td>
            <td>
              <span>色觉</span>
            </td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.rightColourVision"
                :disabled="optometry"
              >
                <el-option label="正常" value="rightColourVision0"></el-option>
                <el-option label="异常" value="rightColourVision1"></el-option>
                <el-option label="红弱" value="rightColourVision2"></el-option>
                <el-option label="绿弱" value="rightColourVision3"></el-option>
                <el-option label="蓝弱" value="rightColourVision4"></el-option>
                <el-option label="黄弱" value="rightColourVision5"></el-option>
                <el-option label="色弱" value="rightColourVision6"></el-option>
                <el-option label="色盲" value="rightColourVision7"></el-option>
              </el-select>
            </td>

            <td>
              <span>红绿</span>
            </td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.rightRedGreen"
                :disabled="optometry"
              >
                <el-option label="正常" value="rightRedGreen1"></el-option>
                <el-option label="异常" value="rightRedGreen2"></el-option>
                <el-option label="平衡" value="rightRedGreen3"></el-option>
                <el-option label="红强" value="rightRedGreen4"></el-option>
                <el-option label="绿强" value="rightRedGreen5"></el-option>
                <el-option label="其它" value="rightRedGreen6"></el-option>
              </el-select>
            </td>
            <td>
              <span>散瞳</span>
            </td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.rightMydriasis"
                :disabled="optometry"
              >
                <el-option label="是" value="rightMydriasis1"></el-option>
                <el-option label="否" value="rightMydriasis2"></el-option>
              </el-select>
            </td>
            <td>
              <span>瞳距</span>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightCentrometer"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 9, y: 5 }"
              />
            </td>
            <td>
              <span>瞳高</span>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightPupilHigh"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 13, y: 5 }"
              />
            </td>
            <td>
              <span>ADD</span>
            </td>
            <td class="bdr">
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.rightADD"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 14, y: 5 }"
              />
            </td>

            <td>立体</td>
            <el-select
              size="mini"
              v-model="savemessage.extJson5.inputList.leftStereoscopic"
              :disabled="optometry"
            >
              <el-option label="正常" value="leftStereoscopic1">正常</el-option>
              <el-option label="异常" value="leftStereoscopic2">异常</el-option>
              <el-option label="没有" value="leftStereoscopic3">没有</el-option>
            </el-select>
            <td>
              <span>融合</span>
            </td>
            <el-select
              size="mini"
              v-model="savemessage.extJson5.inputList.leftFuse"
              :disabled="optometry"
            >
              <el-option label="正常" value="leftFuse1">正常</el-option>
              <el-option label="异常" value="leftFuse2">异常</el-option>
              <el-option label="参差" value="leftFuse3">参差</el-option>
              <el-option label="没有" value="leftFuse4">没有</el-option>
            </el-select>
            <td>
              <span>色觉</span>
            </td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson5.inputList.leftColourVision"
                :disabled="optometry"
              >
                <el-option label="正常" value="leftColourVision0"></el-option>
                <el-option label="异常" value="leftColourVision1"></el-option>
                <el-option label="红弱" value="leftColourVision2"></el-option>
                <el-option label="绿弱" value="leftColourVision3"></el-option>
                <el-option label="蓝弱" value="leftColourVision4"></el-option>
                <el-option label="黄弱" value="leftColourVision5"></el-option>
                <el-option label="色弱" value="leftColourVision6"></el-option>
                <el-option label="色盲" value="leftColourVision7"></el-option>
              </el-select>
            </td>
            <td>
              <span>红绿</span>
            </td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson5.inputList.leftRedGreen"
                :disabled="optometry"
              >
                <el-option label="正常" value="leftRedGreen1"></el-option>
                <el-option label="异常" value="leftRedGreen2"></el-option>
                <el-option label="平衡" value="leftRedGreen3"></el-option>
                <el-option label="红强" value="leftRedGreen4"></el-option>
                <el-option label="绿强" value="leftRedGreen5"></el-option>
                <el-option label="其它" value="leftRedGreen6"></el-option>
              </el-select>
            </td>
            <td>
              <span>散瞳</span>
            </td>
            <td>
              <el-select
                size="mini"
                v-model="savemessage.extJson4.inputList.leftMydriasis"
                :disabled="optometry"
              >
                <el-option label="是" value="leftMydriasis1"></el-option>
                <el-option label="否" value="leftMydriasis2"></el-option>
              </el-select>
            </td>
            <td>
              <span>瞳距</span>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftCentrometer"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 23, y: 5 }"
              />
            </td>
            <td>
              <span>瞳高</span>
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftPupilHigh"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 24, y: 5 }"
              />
            </td>
            <td>
              <span>ADD</span>
            </td>
            <td style="border-right: none">
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.leftADD"
                maxlength="16"
                :disabled="optometry"
                v-direction="{ x: 28, y: 5 }"
              />
            </td>
          </tr>
          <tr>
            <td>医生</td>
            <td colspan="16" class="bdr">
              <div class="deadlineSave">
                <p>{{ savemessage.extJson4.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(4)"
                  :disabled="!voluntarilyFlag4"
                  >保存</vxe-button
                >
              </div>
            </td>
            <td colspan="16">
              <div class="deadlineSave">
                <p>{{ savemessage.extJson5.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(5)"
                  :disabled="!voluntarilyFlag5"
                  >保存</vxe-button
                >
              </div>
            </td>
          </tr>
          <tr>
            <td rowspan="10">眼生理检查</td>
            <td @click="gocorneaImages" rowspan="3" class="gofundus">
              角膜地图
            </td>
            <td colspan="2">7mm</td>
            <td>Kf1</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson6.inputList.inputODKF1"
                :disabled="topography"
                v-direction="{ x: 2, y: 6 }"
              />
            </td>
            <td>Kf2</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.inputODKF2"
                :disabled="topography"
                v-direction="{ x: 3, y: 6 }"
              />
            </td>
            <td>Ks1</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.inputODKS1"
                :disabled="topography"
                v-direction="{ x: 6, y: 6 }"
              />
            </td>
            <td>Ks2</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.inputODKS2"
                :disabled="topography"
                v-direction="{ x: 7, y: 6 }"
              />
            </td>
            <td>DC</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.extJson6.inputList.input3005"
                :disabled="topography"
                v-direction="{ x: 9, y: 6 }"
              />
            </td>
            <td colspan="4" class="bdr">诊断</td>
            <td colspan="2">7mm</td>
            <td>Kf1</td>
            <td>
              <input
                type="text"
                name
                id
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.inputOSKF1"
                v-direction="{ x: 16, y: 6 }"
              />
            </td>
            <td>Kf2</td>
            <td>
              <input
                type="text"
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.inputOSKF2"
                v-direction="{ x: 18, y: 6 }"
              />
            </td>
            <td>Ks1</td>
            <td>
              <input
                type="text"
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.inputOSKS1"
                v-direction="{ x: 19, y: 6 }"
              />
            </td>
            <td>Ks2</td>
            <td>
              <input
                type="text"
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.inputOSKS2"
                v-direction="{ x: 21, y: 6 }"
              />
            </td>
            <td>DC</td>
            <td>
              <input
                type="text"
                name
                id
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.input1318"
                v-direction="{ x: 23, y: 6 }"
              />
            </td>
            <td colspan="4">诊断</td>
          </tr>
          <tr>
            <td colspan="2">曲率</td>
            <td>KF</td>
            <td>
              <input type="text" v-model="ODKF" maxlength="16" readonly />
            </td>
            <td>KS</td>
            <td>
              <input type="text" v-model="ODKS" maxlength="16" readonly />
            </td>
            <td>CYL</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input802"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 6, y: 7 }"
              />
            </td>
            <td>Es</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input803"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 7, y: 7 }"
              />
            </td>
            <td>Em</td>
            <td>
              <input
                type="text"
                :disabled="topography"
                v-model="savemessage.extJson6.inputList.input1319"
                v-direction="{ x: 9, y: 7 }"
              />
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson6.dropDown.dropDown9"
                :disabled="topography"
              >
                <el-option label="正常" value="2043">正常</el-option>
                <el-option label="曲率" value="2044">曲率</el-option>
                <el-option label="散光" value="2045">散光</el-option>
                <el-option label="圆锥" value="2046">圆锥</el-option>
              </el-select>
            </td>
            <td colspan="2" class="bdr">
              <el-select
                size="mini"
                v-model="savemessage.extJson6.dropDown.dropDown10"
                :disabled="topography"
              >
                <el-option label="顺规" value="2047">顺规</el-option>
                <el-option label="逆规" value="2048">逆规</el-option>
              </el-select>
            </td>
            <td colspan="2">曲率</td>
            <td>KF</td>
            <td>
              <input type="text" v-model="OSKF" maxlength="16" readonly />
            </td>
            <td>KS</td>
            <td>
              <input type="text" v-model="OSKS" maxlength="16" readonly />
            </td>
            <td>CYL</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input903"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 19, y: 7 }"
              />
            </td>
            <td>Es</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input904"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 21, y: 7 }"
              />
            </td>
            <td>Em</td>
            <td>
              <input
                type="text"
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.input1320"
                v-direction="{ x: 23, y: 7 }"
              />
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson7.dropDown.dropDown14"
                :disabled="topography"
              >
                <el-option label="正常" value="2056">正常</el-option>
                <el-option label="曲率" value="2057">曲率</el-option>
                <el-option label="散光" value="2058">散光</el-option>
                <el-option label="圆锥" value="2059">圆锥</el-option>
              </el-select>
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson7.dropDown.dropDown15"
                :disabled="topography"
              >
                <el-option label="顺规" value="2060">顺规</el-option>
                <el-option label="逆规" value="2061">逆规</el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td colspan="2">直径</td>
            <td>瞳径</td>
            <td>90°</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input3006"
                :disabled="topography"
                v-direction="{ x: 2, y: 8 }"
              />
            </td>
            <td>180°</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input5001"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 3, y: 8 }"
              />
            </td>
            <td>角径</td>
            <td>45°</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input5002"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 7, y: 8 }"
              />
            </td>
            <td>135°</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input3007"
                :disabled="topography"
                v-direction="{ x: 9, y: 8 }"
              />
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson6.dropDown.dropDown11"
                :disabled="topography"
              >
                <el-option label="规则" value="2049">规则</el-option>
                <el-option label="对称" value="2050">对称</el-option>
                <el-option label="葫芦形" value="2051">葫芦形</el-option>
              </el-select>
            </td>
            <td class="bdr" colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson6.dropDown.dropDown12"
                :disabled="topography"
              >
                <el-option label="高" value="2052">高</el-option>
                <el-option label="中" value="2053">中</el-option>
                <el-option label="低" value="2054">低</el-option>
                <el-option label="无" value="2055">无</el-option>
              </el-select>
            </td>
            <td colspan="2">直径</td>
            <td>瞳径</td>
            <td>90°</td>
            <td>
              <input
                type="text"
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.input1321"
                v-direction="{ x: 16, y: 8 }"
              />
            </td>
            <td>180°</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5020"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 18, y: 8 }"
              />
            </td>
            <td>角径</td>
            <td>45°</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5021"
                maxlength="16"
                :disabled="topography"
                v-direction="{ x: 21, y: 8 }"
              />
            </td>
            <td>135°</td>
            <td>
              <input
                type="text"
                :disabled="topography"
                v-model="savemessage.extJson7.inputList.input1322"
                v-direction="{ x: 23, y: 8 }"
              />
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson7.dropDown.dropDown16"
                :disabled="topography"
              >
                <el-option label="规则" value="2062">规则</el-option>
                <el-option label="对称" value="2063">对称</el-option>
                <el-option label="葫芦形" value="2064">葫芦形</el-option>
              </el-select>
            </td>
            <td colspan="2">
              <el-select
                size="mini"
                v-model="savemessage.extJson7.dropDown.dropDown17"
                :disabled="topography"
              >
                <el-option label="高" value="2065">高</el-option>
                <el-option label="中" value="2066">中</el-option>
                <el-option label="低" value="2067">低</el-option>
                <el-option label="无" value="2068">无</el-option>
              </el-select>
            </td>
          </tr>

          <tr>
            <td>眼压</td>
            <td colspan="2">早上</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresODJson.inputList.rightIPO1"
                maxlength="16"
                v-direction="{ x: 2, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>上午</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresODJson.inputList.rightIPO2"
                maxlength="16"
                v-direction="{ x: 3, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>中午</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresODJson.inputList.rightIPO3"
                maxlength="16"
                v-direction="{ x: 6, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>下午</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresODJson.inputList.rightIPO4"
                maxlength="16"
                v-direction="{ x: 9, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>晚上</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresODJson.inputList.rightIPO5"
                maxlength="16"
                v-direction="{ x: 14, y: 9 }"
              />
            </td>
            <td class="bdr">mmHG</td>
            <td colspan="2">早上</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresOSJson.inputList.leftIPO1"
                maxlength="16"
                v-direction="{ x: 16, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>上午</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresOSJson.inputList.leftIPO2"
                maxlength="16"
                v-direction="{ x: 18, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>中午</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresOSJson.inputList.leftIPO3"
                maxlength="16"
                v-direction="{ x: 19, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>下午</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresOSJson.inputList.leftIPO4"
                maxlength="16"
                v-direction="{ x: 23, y: 9 }"
              />
            </td>
            <td>mmHG</td>
            <td>晚上</td>
            <td>
              <input
                type="text"
                v-model="savemessage.intraPresOSJson.inputList.leftIPO5"
                maxlength="16"
                v-direction="{ x: 28, y: 9 }"
              />
            </td>
            <td>mmHG</td>
          </tr>
          <tr>
            <td>扩瞳</td>
            <td colspan="16" class="bdr">
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson6.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="144" style="width: 100px !important"
                    >短效/快</el-checkbox
                  >
                  <el-checkbox label="145" style="width: 100px !important"
                    >中效/中速</el-checkbox
                  >
                  <el-checkbox label="146" style="width: 100px !important"
                    >长效/慢速</el-checkbox
                  >
                </el-checkbox-group>
                <div>
                  <span>其它：</span>
                  <input
                    style="width: 70%"
                    type="text"
                    v-model="savemessage.extJson6.inputList.input145"
                    maxlength="16"
                    v-direction="{ x: 14, y: 10 }"
                  />
                </div>
              </div>
            </td>
            <td colspan="16">
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson7.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="144" style="width: 100px !important"
                    >短效/快</el-checkbox
                  >
                  <el-checkbox label="145" style="width: 100px !important"
                    >中效/中速</el-checkbox
                  >
                  <el-checkbox label="146" style="width: 100px !important"
                    >长效/慢速</el-checkbox
                  >
                </el-checkbox-group>
                <div>
                  <span>其它：</span>
                  <input
                    style="width: 70%"
                    type="text"
                    v-model="savemessage.extJson7.inputList.input5003"
                    maxlength="16"
                    v-direction="{ x: 28, y: 10 }"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td @click="gofundusImages" class="gofundus">眼底</td>
            <td colspan="16" class="bdr">
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson6.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="148" :disabled="fundus">视盘</el-checkbox>
                  <el-checkbox label="149" :disabled="fundus">黄斑</el-checkbox>
                  <el-checkbox label="150" :disabled="fundus"
                    >视网膜</el-checkbox
                  >
                  <el-checkbox label="151" :disabled="fundus"
                    >动脉血管</el-checkbox
                  >
                  <el-checkbox label="152" :disabled="fundus"
                    >静脉血管</el-checkbox
                  >
                </el-checkbox-group>
                <div>
                  <span>其它：</span>
                  <input
                    style="width: 70%"
                    type="text"
                    v-model="savemessage.extJson6.inputList.input146"
                    maxlength="16"
                    :disabled="fundus"
                    v-direction="{ x: 14, y: 11 }"
                  />
                </div>
              </div>
            </td>
            <td colspan="16">
              <!-- 眼底 -->
              <div>
                <el-checkbox-group
                  v-model="savemessage.extJson7.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="148" :disabled="fundus">视盘</el-checkbox>
                  <el-checkbox label="149" :disabled="fundus">黄斑</el-checkbox>
                  <el-checkbox label="150" :disabled="fundus"
                    >视网膜</el-checkbox
                  >
                  <el-checkbox label="151" :disabled="fundus"
                    >动脉血管</el-checkbox
                  >
                  <el-checkbox label="152" :disabled="fundus"
                    >静脉血管</el-checkbox
                  >
                </el-checkbox-group>
                <div>
                  <span>其它：</span>
                  <input
                    style="width: 70%"
                    type="text"
                    v-model="savemessage.extJson7.inputList.input5004"
                    maxlength="16"
                    :disabled="fundus"
                    v-direction="{ x: 28, y: 11 }"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>眼轴</td>
            <td colspan="2">总长</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input147"
                maxlength="16"
                v-direction="{ x: 2, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>角膜</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input148"
                maxlength="16"
                v-direction="{ x: 3, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>前轴</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input149"
                maxlength="16"
                v-direction="{ x: 6, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>晶体</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input150"
                maxlength="16"
                v-direction="{ x: 9, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>后轴</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input151"
                maxlength="16"
                v-direction="{ x: 14, y: 12 }"
              />
            </td>
            <td class="bdr">um</td>
            <td colspan="2">总长</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5005"
                maxlength="16"
                v-direction="{ x: 16, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>角膜</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5006"
                maxlength="16"
                v-direction="{ x: 18, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>前轴</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5007"
                maxlength="16"
                v-direction="{ x: 19, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>晶体</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5055"
                maxlength="16"
                v-direction="{ x: 23, y: 12 }"
              />
            </td>
            <td>um</td>
            <td>后轴</td>
            <td>
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5009"
                maxlength="16"
                v-direction="{ x: 28, y: 12 }"
              />
            </td>
            <td>um</td>
          </tr>
          <tr>
            <td>OCT</td>
            <td colspan="16" class="bdr">
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input152"
                maxlength="16"
                v-direction="{ x: 2, y: 13 }"
              />
            </td>
            <td colspan="16">
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5010"
                maxlength="16"
                v-direction="{ x: 25, y: 13 }"
              />
            </td>
          </tr>
          <tr>
            <td>视野</td>
            <td colspan="16" class="bdr">
              <input
                type="text"
                v-model="savemessage.extJson6.inputList.input153"
                maxlength="16"
                v-direction="{ x: 1, y: 14 }"
              />
            </td>
            <td colspan="16">
              <input
                type="text"
                v-model="savemessage.extJson7.inputList.input5012"
                maxlength="16"
                v-direction="{ x: 2, y: 14 }"
              />
            </td>
          </tr>
          <tr>
            <td>医生</td>
            <td colspan="16" class="bdr">
              <div class="deadlineSave">
                <p>{{ savemessage.extJson6.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(6)"
                  :disabled="!voluntarilyFlag6"
                  >保存</vxe-button
                >
              </div>
            </td>
            <td colspan="16">
              <div class="deadlineSave">
                <p>{{ savemessage.extJson7.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(7)"
                  :disabled="!voluntarilyFlag7"
                  >保存</vxe-button
                >
              </div>
            </td>
          </tr>
          <!-- 病史 -->
          <tr>
            <td rowspan="5">病史</td>
            <td rowspan="3">既往史</td>

            <td colspan="6">初次发现</td>
            <td colspan="3">首次配镜</td>
            <td>配镜</td>
            <td colspan="3">间隔</td>
            <td colspan="3" class="bdr">最后配镜</td>

            <td colspan="6">初次发现</td>
            <td colspan="3">首次配镜</td>
            <td>配镜</td>
            <td colspan="3">间隔</td>
            <td colspan="3">最后配镜</td>
          </tr>
          <tr>
            <td>年龄</td>
            <td colspan="2">DS</td>
            <td>视力</td>
            <td colspan="2">疗法</td>
            <td>年龄</td>
            <td colspan="2">DS</td>
            <td>总量</td>
            <td>月</td>
            <td colspan="2">均加深</td>
            <td>年龄</td>
            <td colspan="2" class="bdr">DS</td>

            <td>年龄</td>
            <td colspan="2">DS</td>
            <td>视力</td>
            <td colspan="2">疗法</td>
            <td>年龄</td>
            <td colspan="2">DS</td>
            <td>总量</td>
            <td>月</td>
            <td colspan="2">均加深</td>
            <td>年龄</td>
            <td colspan="2">DS</td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input170"
                maxlength="16"
                :class="{
                  colorRde:
                    savemessage.checkjson.inputList.input170 > teacherAge,
                }"
                v-direction="{ x: 1, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input171"
                maxlength="16"
                pattern="[0-9]"
                v-direction="{ x: 2, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input1710"
                maxlength="16"
                pattern="[0-9]"
                v-direction="{ x: 4, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input172"
                maxlength="16"
                v-direction="{ x: 6, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input173"
                maxlength="16"
                v-direction="{ x: 7, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input174"
                maxlength="16"
                v-direction="{ x: 8, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input175"
                maxlength="16"
                v-direction="{ x: 10, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input176"
                maxlength="16"
                v-direction="{ x: 11, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input177"
                maxlength="16"
                v-direction="{ x: 12, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input001"
                maxlength="16"
                v-direction="{ x: 13, y: 15 }"
              />
            </td>
            <td colspan="2" class="bdr">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input178"
                maxlength="16"
                v-direction="{ x: 14, y: 15 }"
              />
            </td>

            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input187"
                maxlength="16"
                :class="{
                  colorRde:
                    savemessage.checkjson.inputList.input187 > teacherAge,
                }"
                v-direction="{ x: 15, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input20086"
                maxlength="16"
                v-direction="{ x: 16, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input200860"
                maxlength="16"
                v-direction="{ x: 18, y: 15 }"
              />
            </td>

            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input189"
                maxlength="16"
                v-direction="{ x: 20, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input190"
                maxlength="16"
                v-direction="{ x: 21, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input191"
                maxlength="16"
                v-direction="{ x: 22, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input192"
                maxlength="16"
                v-direction="{ x: 23, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input193"
                maxlength="16"
                v-direction="{ x: 24, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input194"
                maxlength="16"
                v-direction="{ x: 26, y: 15 }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input195"
                maxlength="16"
                v-direction="{ x: 27, y: 15 }"
              />
            </td>
            <td colspan="2">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input196"
                maxlength="16"
                v-direction="{ x: 28, y: 15 }"
              />
            </td>
          </tr>
          <tr>
            <td>均速</td>
            <td colspan="2">年均</td>
            <!-- G42 -->
            <td>
              <input
                type="text"
                name
                id
                v-model="oDbalanceYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>月均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDbalanceMonth"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>日均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDbalanceDate"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDbalanceDateAdd"
                maxlength="16"
                readonly
              />
            </td>
            <td colspan="2">天加</td>
            <td>1</td>
            <td colspan="2" class="bdr">度</td>
            <td colspan="2">年均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSbalanceYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>月均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSbalanceMonth"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>日均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSbalanceDate"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSbalanceDateAdd"
                maxlength="16"
                readonly
              />
            </td>
            <td colspan="2">天加</td>
            <td>1</td>
            <td colspan="2">度</td>
          </tr>
          <tr>
            <td>近速</td>
            <td colspan="2">年均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDrapidYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>月均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDrapidMonth"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>日均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDrapidDate"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDrapidDateAdd"
                maxlength="16"
                readonly
              />
            </td>
            <td colspan="2">天加</td>
            <td>1</td>
            <td colspan="2" class="bdr">度</td>
            <td colspan="2">年均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSrapidYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>月均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSrapidMonth"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>日均</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSrapidDate"
                maxlength="16"
                readonly
              />
            </td>
            <td>D</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSrapidDateAdd"
                maxlength="16"
                readonly
              />
            </td>
            <td colspan="2">天加</td>
            <td>1</td>
            <td colspan="2">度</td>
          </tr>

          <tr>
            <td rowspan="4">诊断</td>
            <td rowspan="2">屈光</td>
            <td colspan="16" class="bdr">
              <div>
                <el-checkbox-group
                  v-model="savemessage.checkjson.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="1790">PL</el-checkbox>
                  <el-checkbox label="179">近</el-checkbox>
                  <el-checkbox label="180">远</el-checkbox>
                  <el-checkbox label="181">弱</el-checkbox>
                  <el-checkbox label="182">老</el-checkbox>
                  <el-checkbox label="183">斜</el-checkbox>
                  <el-checkbox label="184">低</el-checkbox>
                  <el-checkbox label="185">盲</el-checkbox>
                  <el-checkbox label="186">散光</el-checkbox>
                  <el-checkbox label="187">参差</el-checkbox>
                  <el-checkbox label="188">圆锥</el-checkbox>
                  <el-checkbox label="189">震颤</el-checkbox>
                </el-checkbox-group>
              </div>
            </td>
            <td colspan="16">
              <div>
                <el-checkbox-group
                  v-model="savemessage.checkjson.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="2000">PL</el-checkbox>
                  <el-checkbox label="200">近</el-checkbox>
                  <el-checkbox label="201">远</el-checkbox>
                  <el-checkbox label="202">弱</el-checkbox>
                  <el-checkbox label="203">老</el-checkbox>
                  <el-checkbox label="204">斜</el-checkbox>
                  <el-checkbox label="205">低</el-checkbox>
                  <el-checkbox label="206">盲</el-checkbox>
                  <el-checkbox label="207">散光</el-checkbox>
                  <el-checkbox label="208">参差</el-checkbox>
                  <el-checkbox label="209">圆锥</el-checkbox>
                  <el-checkbox label="210">震颤</el-checkbox>
                </el-checkbox-group>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="16" class="bdr">
              <div>
                <el-checkbox-group v-model="savemessage.checkjson.checkList">
                  <el-checkbox label="1900">深</el-checkbox>
                  <el-checkbox label="190">高</el-checkbox>
                  <el-checkbox label="191">中</el-checkbox>
                  <el-checkbox label="192">低</el-checkbox>
                  <el-checkbox label="193">无</el-checkbox>
                  <el-checkbox label="194">单纯</el-checkbox>
                  <el-checkbox label="195">复性</el-checkbox>
                  <el-checkbox label="196">原发</el-checkbox>
                  <el-checkbox label="197">继发</el-checkbox>
                  <el-checkbox label="198">遗传</el-checkbox>
                  <el-checkbox label="199">病理</el-checkbox>
                </el-checkbox-group>
              </div>
            </td>
            <td colspan="16">
              <div>
                <el-checkbox-group
                  v-model="savemessage.checkjson.checkList"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox label="211">深</el-checkbox>
                  <el-checkbox label="211">高</el-checkbox>
                  <el-checkbox label="212">中</el-checkbox>
                  <el-checkbox label="213">低</el-checkbox>
                  <el-checkbox label="214">无</el-checkbox>
                  <el-checkbox label="215">单纯</el-checkbox>
                  <el-checkbox label="216">复性</el-checkbox>
                  <el-checkbox label="217">原发</el-checkbox>
                  <el-checkbox label="218">继发</el-checkbox>
                  <el-checkbox label="219">遗传</el-checkbox>
                  <el-checkbox label="220">病理</el-checkbox>
                </el-checkbox-group>
              </div>
            </td>
          </tr>
          <tr>
            <td rowspan="2">生理</td>
            <td colspan="16" class="bdr">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input206"
                maxlength="16"
                v-direction="{ x: 1, y: 17 }"
              />
            </td>
            <td colspan="16">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input208"
                maxlength="16"
                v-direction="{ x: 2, y: 17 }"
              />
            </td>
          </tr>
          <tr>
            <td colspan="16" class="bdr">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input207"
                maxlength="16"
                v-direction="{ x: 1, y: 18 }"
              />
            </td>
            <td colspan="16">
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.input209"
                maxlength="16"
                v-direction="{ x: 2, y: 18 }"
              />
            </td>
          </tr>
          <tr>
            <td rowspan="2">预测</td>
            <td>自然</td>
            <td>设</td>
            <!-- F49 -->
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.checkjson.inputList.input211"
                maxlength="16"
                v-direction="{ x: 1, y: 19 }"
              />
            </td>
            <td>现龄</td>
            <!-- J49 -->
            <td>
              <input
                type="text"
                name
                id
                v-model="teacherAge"
                maxlength="16"
                readonly
              />
            </td>
            <td>岁</td>
            <td>现有</td>
            <td colspan="2">
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="savemessage.extJson4.inputList.rightSph"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
            <td colspan="2">年均</td>
            <td>
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="oDbalanceYear"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
            <td>余年</td>
            <!-- Y49 -->
            <td>
              <input
                type="text"
                name
                id
                v-model="oDremainingYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>年</td>
            <td>加深</td>
            <td class="bdr">
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="oDdeepen"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
            <td>设</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.checkjson.inputList.input223"
                maxlength="16"
                v-direction="{ x: 2, y: 19 }"
              />
            </td>
            <td>现龄</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="teacherAge"
                maxlength="16"
                readonly
              />
            </td>
            <td>岁</td>
            <td>现有</td>
            <td colspan="2">
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="savemessage.extJson5.inputList.leftSph"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
            <td colspan="2">年均</td>
            <td>
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="oSbalanceYear"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
            <td>余年</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSremainingYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>年</td>
            <td>加深</td>
            <td>
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="oSdeepen"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
          </tr>
          <tr>
            <td rowspan="2">干预</td>
            <td>设</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.checkjson.inputList.input217"
                maxlength="16"
                v-direction="{ x: 1, y: 20 }"
              />
            </td>
            <td>现龄</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="teacherAge"
                maxlength="16"
                readonly
              />
            </td>
            <td>岁</td>
            <td>现有</td>
            <td colspan="2">
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="savemessage.extJson4.inputList.rightSph"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
            <td colspan="2">年均</td>
            <td>
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="savemessage.checkjson.inputList.input220"
                  maxlength="16"
                  v-direction="{ x: 2, y: 20 }"
                />
                <p>D</p>
              </div>
            </td>
            <td>余年</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oDinterveneYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>年</td>
            <td>加深</td>
            <td class="bdr">
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="oDintervenedeepen"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>

            <td>设</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="savemessage.checkjson.inputList.input229"
                maxlength="16"
                v-direction="{ x: 3, y: 20 }"
              />
            </td>
            <td>现龄</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="teacherAge"
                maxlength="16"
                readonly
              />
            </td>
            <td>岁</td>
            <td>现有</td>
            <td colspan="2">
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="savemessage.extJson5.inputList.leftSph"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
            <td colspan="2">年均</td>
            <td>
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="savemessage.checkjson.inputList.input232"
                  maxlength="16"
                  v-direction="{ x: 4, y: 20 }"
                />
                <p>D</p>
              </div>
            </td>
            <td>余年</td>
            <td>
              <input
                type="text"
                name
                id
                v-model="oSinterveneYear"
                maxlength="16"
                readonly
              />
            </td>
            <td>年</td>
            <td>加深</td>
            <td>
              <div>
                <input
                  type="text"
                  name
                  id
                  v-model="oSintervenedeepen"
                  maxlength="16"
                  readonly
                />
                <p>D</p>
              </div>
            </td>
          </tr>
        </table>
        <section class="informed-footer">
          <h4>请选择矫治方案:</h4>
          <el-select size="mini" v-model="savemessage.checkjson.value">
            <el-option
              v-for="item in scheme"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </section>

        <footer>
          <!-- 角塑术   -->
          <section
            class="goniometer ocular-region"
            v-show="savemessage.checkjson.value == '1'"
          >
            <section class="goniometer-left" style="width: 953px">
              <h1 style>角塑术</h1>
              <div class="goniometer-one">
                <ul class="goniometer-one-left">
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input236"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input237"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input238"
                      maxlength="16"
                    />
                  </li>
                </ul>
                <ul class="goniometer-one-right">
                  <li>DS</li>
                  <li>DC</li>
                  <li>CYL</li>
                </ul>
              </div>
              <div class="goniometer-two">
                <div>
                  <h4>BC</h4>
                  <ul>
                    <li>AW</li>
                    <li>KF</li>
                    <li>SPH</li>
                  </ul>
                  <ul>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input400"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input401"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input402"
                        maxlength="16"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>AC</h4>
                  <ul>
                    <li>KF</li>
                    <li>KS</li>
                  </ul>
                  <ul>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input403"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input404"
                        maxlength="16"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="goniometer-three">
                <ul class="goniometer-three-o">
                  <li>
                    <h4>OAD</h4>
                  </li>
                  <li>
                    <h4>片色</h4>
                  </li>
                  <li>
                    <h4>品牌</h4>
                  </li>
                  <li>
                    <h4>视力</h4>
                  </li>
                </ul>
                <ul class="goniometer-three-i">
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input239"
                      maxlength="16"
                    />
                  </li>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown18"
                    class="drop-down-box1"
                  >
                    <el-option label="无" value="2069">无</el-option>
                    <el-option label="绿" value="2070">绿</el-option>
                    <el-option label="蓝" value="2071">蓝</el-option>
                    <el-option label="橙" value="2072">橙</el-option>
                    <el-option label="紫" value="2073">紫</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown19"
                    class="drop-down-box1"
                  >
                    <el-option label="追梦莱特" value="2074"
                      >追梦莱特</el-option
                    >
                    <el-option label="欧几里德" value="2075"
                      >欧几里德</el-option
                    >
                    <el-option label="阿尔法" value="2076">阿尔法</el-option>
                  </el-select>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input242"
                      maxlength="16"
                    />
                  </li>
                </ul>
              </div>
              <div class="goniometer-four">
                <h4>镜片类型</h4>
                <div>
                  <ul>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1008">常1</el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1009">常2</el-checkbox>
                      </el-checkbox-group>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1100">特</el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1101">散</el-checkbox>
                      </el-checkbox-group>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="goniometer-left" style="border-right: none">
              <div class="goniometer-one">
                <ul class="goniometer-one-left">
                  <li style="width: 80px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input243"
                      maxlength="16"
                    />
                  </li>
                  <li style="width: 80px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input244"
                      maxlength="16"
                    />
                  </li>
                  <li style="width: 80px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input245"
                      maxlength="16"
                    />
                  </li>
                </ul>
                <ul class="goniometer-one-right">
                  <li>DS</li>
                  <li>DC</li>
                  <li>CYL</li>
                </ul>
              </div>
              <div class="goniometer-two">
                <div>
                  <h4>BC</h4>
                  <ul>
                    <li>BC</li>
                    <li>BCS</li>
                    <li>SPH</li>
                  </ul>
                  <ul>
                    <li>
                      <input
                        type="text"
                        savemessage.checkjson.inputList.input305
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        savemessage.checkjson.inputList.input306
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        savemessage.checkjson.inputList.input307
                        maxlength="16"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>AC</h4>
                  <ul>
                    <li>KF</li>
                    <li>KS</li>
                  </ul>
                  <ul>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input405"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input406"
                        maxlength="16"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="goniometer-three">
                <ul class="goniometer-three-o">
                  <li>
                    <h4>OAD</h4>
                  </li>
                  <li>
                    <h4>片色</h4>
                  </li>
                  <li>
                    <h4>品牌</h4>
                  </li>
                  <li>
                    <h4>视力</h4>
                  </li>
                </ul>
                <ul class="goniometer-three-i">
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input246"
                      maxlength="16"
                    />
                  </li>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown20"
                    class="drop-down-box1"
                  >
                    <el-option label="无" value="2077">无</el-option>
                    <el-option label="绿" value="2078">绿</el-option>
                    <el-option label="蓝" value="2079">蓝</el-option>
                    <el-option label="橙" value="2080">橙</el-option>
                    <el-option label="紫" value="2081">紫</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown21"
                    class="drop-down-box1"
                  >
                    <el-option label="追梦莱特" value="2082"
                      >追梦莱特</el-option
                    >
                    <el-option label="欧几里德" value="2083"
                      >欧几里德</el-option
                    >
                    <el-option label="阿尔法" value="2084">阿尔法</el-option>
                  </el-select>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input249"
                      maxlength="16"
                    />
                  </li>
                </ul>
              </div>
              <div class="goniometer-four">
                <h4>镜片类型</h4>
                <div>
                  <ul>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1ccc">常1</el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1001">常2</el-checkbox>
                      </el-checkbox-group>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1002">特</el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="1003">散</el-checkbox>
                      </el-checkbox-group>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
          <!-- RGP   -->
          <section
            class="goniometer ocular-region"
            v-show="
              savemessage.checkjson.value == '2' ||
              savemessage.checkjson.value == '3'
            "
          >
            <section class="goniometer-left" style="width: 953px">
              <h1>RGP</h1>
              <div class="goniometer-one">
                <ul class="goniometer-one-left">
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input250"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input251"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input252"
                      maxlength="16"
                    />
                  </li>
                </ul>
                <ul class="goniometer-one-right">
                  <li>DS</li>
                  <li>DC</li>
                  <li>CYL</li>
                </ul>
              </div>
              <div class="goniometer-two">
                <div>
                  <h4>BC</h4>
                  <ul>
                    <li>BC</li>
                    <li>BCS</li>
                    <li>SPH</li>
                  </ul>
                  <ul>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input407"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input408"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input409"
                        maxlength="16"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="goniometer-three">
                <ul class="goniometer-three-o">
                  <li>
                    <h4>OAD</h4>
                  </li>
                  <li>
                    <h4>片色</h4>
                  </li>
                  <li>
                    <h4>品牌</h4>
                  </li>
                  <li>
                    <h4>视力</h4>
                  </li>
                </ul>
                <ul class="goniometer-three-i">
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input253"
                      maxlength="16"
                    />
                  </li>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown22"
                    class="drop-down-box1"
                  >
                    <el-option label="无" value="2085">无</el-option>
                    <el-option label="绿" value="2086">绿</el-option>
                    <el-option label="蓝" value="2087">蓝</el-option>
                    <el-option label="橙" value="2088">橙</el-option>
                    <el-option label="紫" value="2089">紫</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown23"
                    class="drop-down-box1"
                  >
                    <el-option label="追梦莱特" value="2090"
                      >追梦莱特</el-option
                    >
                    <el-option label="美尼康" value="2091">美尼康</el-option>
                    <el-option label="博士顿" value="2092">博士顿</el-option>
                  </el-select>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input256"
                      maxlength="16"
                    />
                  </li>
                </ul>
              </div>
              <div class="goniometer-four">
                <h4 style="width: 243px">镜片类型</h4>
                <div>
                  <ul>
                    <li>常1</li>
                    <li>常2</li>
                    <li>特</li>
                    <li>散</li>
                  </ul>
                  <ul>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="5220">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="221">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="222">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="223">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="goniometer-left" style="border: none">
              <div class="goniometer-one">
                <ul class="goniometer-one-left">
                  <li style="width: 78px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input257"
                      maxlength="16"
                    />
                  </li>
                  <li style="width: 78px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input258"
                      maxlength="16"
                    />
                  </li>
                  <li style="width: 78px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input259"
                      maxlength="16"
                    />
                  </li>
                </ul>
                <ul class="goniometer-one-right">
                  <li>DS</li>
                  <li>DC</li>
                  <li>CYL</li>
                </ul>
              </div>
              <div class="goniometer-two">
                <div>
                  <h4>BC</h4>
                  <ul>
                    <li>AW</li>
                    <li>KF</li>
                    <li>SPH</li>
                  </ul>
                  <ul>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input410"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input420"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.checkjson.inputList.input430"
                        maxlength="16"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="goniometer-three">
                <ul class="goniometer-three-o">
                  <li>
                    <h4>OAD</h4>
                  </li>
                  <li>
                    <h4>片色</h4>
                  </li>
                  <li>
                    <h4>品牌</h4>
                  </li>
                  <li>
                    <h4>视力</h4>
                  </li>
                </ul>
                <ul class="goniometer-three-i">
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input260"
                      maxlength="16"
                    />
                  </li>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown24"
                    class="drop-down-box1"
                  >
                    <el-option label="无" value="2093">无</el-option>
                    <el-option label="绿" value="2094">绿</el-option>
                    <el-option label="蓝" value="2095">蓝</el-option>
                    <el-option label="橙" value="2096">橙</el-option>
                    <el-option label="紫" value="2097">紫</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.checkjson.dropDown.dropDown25"
                    class="drop-down-box1"
                  >
                    <el-option label="追梦莱特" value="2098"
                      >追梦莱特</el-option
                    >
                    <el-option label="美尼康" value="2099">美尼康</el-option>
                    <el-option label="博士顿" value="2100">博士顿</el-option>
                  </el-select>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input263"
                      maxlength="16"
                    />
                  </li>
                </ul>
              </div>
              <div class="goniometer-four">
                <h4 style="width: 242px">镜片类型</h4>
                <div>
                  <ul>
                    <li>常1</li>
                    <li>常2</li>
                    <li>特</li>
                    <li>散</li>
                  </ul>
                  <ul>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="224">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="225">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="226">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                    <li>
                      <el-checkbox-group
                        v-model="savemessage.checkjson.checkList"
                        @change="handleCheckAllChange"
                      >
                        <el-checkbox label="227">
                          <span></span>
                        </el-checkbox>
                      </el-checkbox-group>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
          <!-- 框架镜 -->
          <section
            class="ocular-region"
            style="border-left: 1px solid #ccc"
            v-show="savemessage.checkjson.value == '4'"
          >
            <div class="ocular-region-header">
              <div class="ocular-region-header-one">
                <h1 style="height: 101px">框架镜</h1>
              </div>
            </div>
            <div class="ocular-region-left" style="width: 881">
              <!-- 综合验光 -->
              <ul class="ulO ulI">
                <li>/</li>
                <li>矫视</li>
                <li>裸视</li>
                <li>球镜</li>
                <li>柱镜</li>
                <li>轴位</li>
                <li>棱镜</li>
                <li>底向</li>
                <li>视力</li>
              </ul>
              <ul class="ulO ulI">
                <li>视远</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input264"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input265"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input267"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input268"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input269"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input270"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input271"
                    maxlength="16"
                  />
                </li>
                <li style="width: 101px">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input272"
                    maxlength="16"
                  />
                </li>
              </ul>
              <ul class="ulO ulI">
                <li>视近</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input273"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input274"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input275"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input276"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input277"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input278"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input279"
                    maxlength="16"
                  />
                </li>
                <li style="width: 101px">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input280"
                    maxlength="16"
                  />
                </li>
              </ul>
              <ul class="ulO ulI">
                <li>瞳距</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input281"
                    maxlength="16"
                  />
                </li>
                <li style="width: 25px">MM</li>
                <li>瞳高</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input282"
                    maxlength="16"
                  />
                </li>
                <li style="width: 25px">MM</li>
                <li>ADD</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input283"
                    maxlength="16"
                  />
                </li>
                <li style="width: 25px">D</li>
                <li>类型</li>
                <li style="border-right: none">其它</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input284"
                    maxlength="16"
                  />
                </li>
              </ul>
            </div>
            <div class="ocular-region-left" style="border-right: none">
              <!-- 综合验光 -->
              <ul class="ulO ulI">
                <li>/</li>
                <li>矫视</li>
                <li>裸视</li>
                <li>球镜</li>
                <li>柱镜</li>
                <li>轴位</li>
                <li>棱镜</li>
                <li>底向</li>
                <li>视力</li>
              </ul>
              <ul class="ulO ulI">
                <li>视远</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input285"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input286"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input287"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input288"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input289"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input290"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input291"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input292"
                    maxlength="16"
                  />
                </li>
              </ul>
              <ul class="ulO ulI">
                <li>视近</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input293"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input294"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input295"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input296"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input297"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input298"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input299"
                    maxlength="16"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input300"
                    maxlength="16"
                  />
                </li>
              </ul>
              <ul class="ulO ulI">
                <li>瞳距</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input301"
                    maxlength="16"
                  />
                </li>
                <li style="width: 25px">MM</li>
                <li>瞳高</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input302"
                    maxlength="16"
                  />
                </li>
                <li style="width: 25px">MM</li>
                <li>ADD</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input303"
                    maxlength="16"
                  />
                </li>
                <li style="width: 25px">D</li>
                <li>类型</li>
                <li style="border-right: none">其它</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input304"
                    maxlength="16"
                  />
                </li>
              </ul>
            </div>
          </section>
          <!-- 生理 -->
          <section
            class="ocular-region"
            v-show="savemessage.checkjson.value == '5'"
            style="border-left: 1px solid #ccc; height: 70px"
          >
            <div class="ocular-region-header">
              <h1 style="height: 70px">生理</h1>
            </div>
            <div class="ocular-region-left">
              <div class="horizon" style="height: 35px">
                <input
                  type="text"
                  v-model="savemessage.checkjson.inputList.input305"
                  maxlength="16"
                />
              </div>
              <div class="horizon" style="height: 34px">
                <input
                  type="text"
                  v-model="savemessage.checkjson.inputList.input306"
                  maxlength="16"
                />
              </div>
            </div>
            <div class="ocular-region-left" style="border-right: none">
              <div class="horizon" style="height: 35px">
                <input
                  type="text"
                  v-model="savemessage.checkjson.inputList.input307"
                  maxlength="16"
                />
              </div>
              <div class="horizon" style="height: 34px">
                <input
                  type="text"
                  v-model="savemessage.checkjson.inputList.input308"
                  maxlength="16"
                />
              </div>
            </div>
          </section>
        </footer>
        <div class="deadlineSave">
          <p>{{ savemessage.checkjson.inputList.trueUserName }}</p>
          <vxe-button
            status="warning"
            size="mini"
            @click="save(8)"
            :disabled="!checkjson"
            >保存</vxe-button
          >
        </div>

        <v-signature />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
//展示组件
import shengwuCheliang from "./components/shengwuCheliang";
import yandiZhaopian from "./components/yandiZhaopian";
import yanyaCeshi from "./components/yanyaCeshi";
import jiaoduji from "../common/jiaoduji";
import diannaoYanguang from "../common/diannaoYanguang";
import jiaomodixing from "../common/jiaomodixing";
import zongheYanguang from "../common/jiaoduji";
import liexiDeng from "../common/jiaoduji";
//签名板
import vSignature from "../../../components/signature/signature";

import {
  SelectCustomerById,
  GetCustomerExamListByEmaKeyid,
  GetCheckList,
} from "@/api/clientRecord";
import {
  AddExamItemDetail,
  GetExamDetail,
  GetDoctorIdByEmaKeyId,
} from "@/api/doctorRecord";

import { Signature } from "../../../api/DownHandler";

import ROLEID from "../../../utils/roleId";

export default {
  data() {
    return {
      activeName: "second",
      imgUrl: "",
      //是否自动保存
      voluntarilyFlag1: false,
      voluntarilyFlag2: false,
      voluntarilyFlag3: false,
      voluntarilyFlag4: false,
      voluntarilyFlag5: false,
      voluntarilyFlag6: false,
      voluntarilyFlag7: false,
      checkjson: false,
      //获取表单付费列表
      getExamitemList: [],
      //验光师列表
      doctorListL: [],
      topography: true, //角膜是否可用
      Slitlamp: true, //裂隙是否可用
      optometry: true, //综合验光
      PcOptometry: true, //电脑验光
      pressure: true, //眼压计
      fundus: true, //眼底
      adapterCheck: false, //验配师多选
      //档案ID
      emaKeyId: this.$route.query.emaKeyId,
      //用户信息
      formInline: {},
      //监护人1
      scheme: [
        {
          value: "1",
          label: "角塑术",
        },
        {
          value: "2",
          label: "RGP",
        },
        {
          value: "3",
          label: "圆锥",
        },
        {
          value: "4",
          label: "框架镜",
        },
        {
          value: "5",
          label: "生理",
        },
        {
          value: "6",
          label: "无",
        },
      ],
      organCode: "",
      savemessage: {
        extJson1: {
          checkList: [],
          inputList: { trueUserName: "", adapterr: "" },
          dropDown: {},
        },
        extJson2: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        extJson3: {
          checkList: [],
          inputList: {
            trueUserName: "",
          },
          dropDown: {},
        },
        extJson4: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        extJson5: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        extJson8: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        extJson9: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        extJson6: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        extJson7: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        intraPresODJson: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },
        intraPresOSJson: {
          checkList: [],
          inputList: { trueUserName: "" },
          dropDown: {},
        },

        checkjson: {
          //复选框
          checkList: [],
          //输入框
          inputList: {
            //主诉医生名字
            trueUserName: "",
            input170: "",
            input17: "",

            oDbalanceYear: "",
            oDbalanceMonth: "",
            oDbalanceDate: "",
            oDbalanceDateAdd: "",
            oDremainingYear: "",
            oDdeepen: "",
            oDinterveneYear: "",
            oDintervenedeepen: "",
            oDrapidYear: "",
            oDrapidMonth: "",
            oDrapidDate: "",
            oDrapidDate: "",

            oSbalanceYear: "",
            oSbalanceMonth: "",
            oSbalanceDate: "",
            oSbalanceDateAdd: "",
            oSrapidYear: "",
            oSrapidMonth: "",
            oSrapidDate: "",
            oSremainingYear: "",
            oSdeepen: "",
            oSinterveneYear: "",
            oSintervenedeepen: "",
          },
          //诊断方案
          dropDown: {},
          //方案ID
          value: "",
        },
      },
      createDoctorId: "",
      //医生ID（档案的创建者）
      doctorId: "",
    };
  },

  created() {
    let direction = this.$getDirection();
    direction.on("keyup", function (e, val) {
      console.log(e, val);
      if (e.keyCode === 39) {
        direction.next();
      }
      if (e.keyCode === 37) {
        direction.previous();
      }
      if (e.keyCode === 38) {
        direction.previousLine();
      }
      if (e.keyCode === 40) {
        direction.nextLine();
      }
    });

    const organList = JSON.parse(
      window.localStorage.getItem("organizationList")
    );
    this.organCode = organList.organCode;
    this.selectCustomerById();
    this.getExamDetail();
    this.getExamitem();
    this.getCheckList();
    this.doctorIdByEmaKeyId();
    this.$nextTick(() => {
      setTimeout(() => {
        window.onresize = () => {
          return () => {
            this.$refs.newExamine2.style.tableLayout = "fixed";
            const screenWidth = document.body.clientWidth;
            this.$refs.imageWrapper.style.width = screenWidth.toString();
          };
        };
      }, 1000);
    });
  },

  beforeDestroy() {
    // if (this.voluntarilyFlag1) {
    //   this.save(1);
    // }
    // if (this.voluntarilyFlag2) {
    //   this.save(2);
    // }
    // if (this.voluntarilyFlag3) {
    //   this.save(3);
    // }
    // if (this.voluntarilyFlag4) {
    //   this.save(4);
    // }
    // if (this.voluntarilyFlag5) {
    //   this.save(5);
    // }
    // if (this.voluntarilyFlag6) {
    //   this.save(6);
    // }
    // if (this.voluntarilyFlag7) {
    //   this.save(7);
    // }
    // if (this.checkjson) {
    //   this.save(8);
    // }
  },
  mounted() {},
  updated() {
    this.emaKeyId = this.$route.query.emaKeyId;
  },
  components: {
    vSignature,
  },
  methods: {
    normal(index) {
      if (index === 2) {
        console.log(index);
        this.$set(this.savemessage.extJson3.inputList, "input45", "-");
        this.savemessage.extJson3.inputList.input45 = "(一)";
        this.savemessage.extJson3.inputList.input46 = "(一)";
        this.savemessage.extJson3.inputList.input47 = "(一)";
        this.savemessage.extJson3.inputList.input48 = "(一)";
        this.savemessage.extJson3.inputList.input49 = "(一)";
        this.savemessage.extJson3.inputList.input50 = "(一)";
        this.savemessage.extJson3.inputList.input51 = "(一)";
        this.savemessage.extJson3.inputList.input52 = "(一)";
        this.savemessage.extJson3.inputList.input53 = "(一)";
        this.savemessage.extJson3.inputList.input54 = "(一)";
        this.savemessage.extJson3.inputList.input55 = "(一)";
        this.savemessage.extJson3.inputList.input56 = "(一)";
        this.savemessage.extJson3.inputList.input57 = "(一)";
        this.savemessage.extJson3.inputList.input58 = "(一)";
        this.savemessage.extJson3.inputList.input59 = "(一)";
        this.savemessage.extJson3.inputList.input60 = "(一)";
        this.savemessage.extJson3.inputList.input61 = "(一)";
        this.savemessage.extJson3.inputList.input62 = "(一)";
        this.savemessage.extJson3.inputList.input63 = "(一)";
        this.savemessage.extJson3.inputList.input64 = "(一)";
        this.savemessage.extJson3.inputList.input65 = "(一)";
      } else {
        console.log(index);
        this.$set(this.savemessage.extJson2.inputList, "input24", "-");

        this.savemessage.extJson2.inputList.input24 = "(一)";
        this.savemessage.extJson2.inputList.input25 = "(一)";
        this.savemessage.extJson2.inputList.input26 = "(一)";
        this.savemessage.extJson2.inputList.input27 = "(一)";
        this.savemessage.extJson2.inputList.input28 = "(一)";
        this.savemessage.extJson2.inputList.input29 = "(一)";
        this.savemessage.extJson2.inputList.input30 = "(一)";
        this.savemessage.extJson2.inputList.input31 = "(一)";
        this.savemessage.extJson2.inputList.input32 = "(一)";
        this.savemessage.extJson2.inputList.input33 = "(一)";
        this.savemessage.extJson2.inputList.input34 = "(一)";
        this.savemessage.extJson2.inputList.input35 = "(一)";
        this.savemessage.extJson2.inputList.input36 = "(一)";
        this.savemessage.extJson2.inputList.input37 = "(一)";
        this.savemessage.extJson2.inputList.input38 = "(一)";
        this.savemessage.extJson2.inputList.input39 = "(一)";
        this.savemessage.extJson2.inputList.input40 = "(一)";
        this.savemessage.extJson2.inputList.input41 = "(一)";
        this.savemessage.extJson2.inputList.input42 = "(一)";
        this.savemessage.extJson2.inputList.input43 = "(一)";
        this.savemessage.extJson2.inputList.input44 = "(一)";
      }
    },
    websockSend(msg, userid) {
      // this.$websocket.dispatch("WEBSOCKET_SEND", {
      //   Text: msg,
      //   Type: 1,
      //   Userid: userid,
      // });
      let fromuserid = this.$store.state.userInfo.Id;
      let data = {
        Text: msg,
        Type: 1,
        Userid: userid,
      };
      this.$stompStore.dispatch("STOMP_SEND", {
        fromuserid: fromuserid,
        touserid: userid,
        p: data,
      });
    },
    //获取表单付费列表
    async getExamitem() {
      let emaKeyId = this.$route.query.emaKeyId;
      this.topography = true;
      this.optometry = true;
      this.Slitlamp = true;
      this.PcOptometry = true;
      this.pressure = true;
      this.fundus = true;
      //console.log("输出emakeyid:", this.$route.query.emaKeyId);
      const { data: res } = await GetCustomerExamListByEmaKeyid(
        this.organCode,
        emaKeyId
      ).then();
      this.getExamitemList = res.data;
      console.log("表单付费列表", this.getExamitemList);
      this.getExamitemList.forEach((element) => {
        if (element.examItemId == 4) {
          //角膜地形图
          this.topography = false;
        }
        if (element.examItemId == 3) {
          //综合验光
          this.optometry = false;
        }
        if (element.examItemId == 8) {
          //裂隙灯
          this.Slitlamp = false;
        }
        if (element.examItemId == 2) {
          //电脑验光
          this.PcOptometry = false;
        }
        if (element.examItemId == 5) {
          //眼压
          this.pressure = false;
        }
        if (element.examItemId == 6) {
          //眼底
          this.fundus = false;
        }
      });
    },
    handleCheckAllChange(value) {},
    gocorneaImages() {
      const cusKeyId = JSON.parse(window.sessionStorage.getItem("cusKeyId"));
      this.$router.push({
        path: `/corneaImages?cusKeyId=${cusKeyId}&&patientId=${this.$route.query.patientId}`,
        query: {
          id: this.$route.query.id,
          patientId: this.$route.query.patientId,
        },
      });
    },
    gofundusImages() {
      const cusKeyId = JSON.parse(window.sessionStorage.getItem("cusKeyId"));
      this.$router.push({
        path: `/fundusImages?cusKeyId=${cusKeyId}&&patientId=${this.$route.query.patientId}`,
        query: {
          id: this.$route.query.id,
          patientId: this.$route.query.patientId,
        },
      });
    },
    //检查人列表
    async getCheckList() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.CHECKER
      ).then();
      this.doctorListL = res.data;
      console.log("检查人", res.data);
    },

    //保存新建档案
    async save(mark) {
      let saveFieldName = "";
      let checkjson = "";
      switch (mark) {
        case 1:
          {
            saveFieldName = "extJson1";
            checkjson = this.savemessage.extJson1;
            this.voluntarilyFlag1 = false;
          }
          break;
        case 2:
          {
            saveFieldName = "extJson2";
            checkjson = this.savemessage.extJson2;
            this.voluntarilyFlag2 = false;
          }
          break;
        case 3:
          {
            saveFieldName = "extJson3";
            checkjson = this.savemessage.extJson3;
            this.voluntarilyFlag3 = false;
          }
          break;
        case 4:
          {
            const { data: res } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.extJson4),
              "extJson4"
            ).then();
            const { data: jes } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.extJson8),
              "extJson8"
            ).then();
            this.voluntarilyFlag4 = false;
          }
          break;
        case 5:
          {
            const { data: res } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.extJson5),
              "extJson5"
            ).then();
            const { data: jes } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.extJson9),
              "extJson9"
            ).then();
            this.voluntarilyFlag5 = false;
          }
          break;
        case 6:
          {
            const { data: res } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.extJson6),
              "extJson6"
            ).then();
            const { data: jes } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.intraPresODJson),
              "intraPresODJson"
            ).then();
            this.voluntarilyFlag6 = false;
          }
          break;
        case 7:
          {
            const { data: res } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.extJson7),
              "extJson7"
            ).then();
            const { data: jes } = await AddExamItemDetail(
              this.emaKeyId,
              JSON.stringify(this.savemessage.intraPresOSJson),
              "intraPresOSJson"
            ).then();
            this.voluntarilyFlag7 = false;
          }
          break;
        case 8:
          {
            saveFieldName = "";
            checkjson = this.savemessage.checkjson;
            this.checkjson = false;
          }
          break;
      }
      console.log(JSON.stringify(checkjson));
      const { data: res } = await AddExamItemDetail(
        this.emaKeyId,
        JSON.stringify(checkjson),
        saveFieldName
      ).then();
      if (res.code == 0) {
        this.$message({
          message: "保存成功",
          type: "success",
        });

        //保存发出消息
        const getExamitemList = [];
        this.getExamitemList.forEach((res) => {
          console.log(res.name);
          getExamitemList.push(res.name);
        });
        console.log(getExamitemList);
        const RoleCode = this.$store.state.userInfo.RoleCode;
        let strArr = RoleCode.split(",");
        console.log("获取角色种类", strArr);
        strArr.forEach((res) => {
          switch (res) {
            // case "doctor":
            //   {
            //     let msg = `【${this.$store.state.userInfo.TrueUserName}】已将【${this.$store.state.target.name}】分配至您的检查队列中：${getExamitemList}`;
            //     this.websockSend(msg, "39");
            //     //this.websockSend(msg, "40");
            //   }
            //   break;
            case "verifier":
              {
                let msg = `【${this.$store.state.userInfo.TrueUserName}】已完成【${this.$store.state.target.name}】的验光检查`;
                //this.websockSend(msg, this.createDoctorId);
              }
              break;
            case "adapter":
              {
                let msg = `【${this.$store.state.userInfo.TrueUserName}】已完成【${this.$store.state.target.name}】的适配检查`;
                //this.websockSend(msg, this.createDoctorId);
              }
              break;
          }
        });
      }
    },
    async Setvadapterr() {
      if (this.adapterCheck == true) {
        this.savemessage.extJson1.inputList.adapterr = null; //取消选择设置为空
        this.adapterCheck = false;
      } else {
        var rolecode = this.$store.state.userInfo.RoleCode;
        // if (rolecode.indexOf("adapter") !== -1) {
        this.savemessage.extJson1.inputList.adapterr = this.$store.state.userInfo.TrueUserName; //如果角色符合设置为当前姓名

        // } else {
        //   //没有这个角色的时候
        // }
        this.adapterCheck = true;
      }
    },
    //查询档案创建人
    //api/EMR/GetDoctorIdByEmaKeyId

    async doctorIdByEmaKeyId() {
      const { data: res } = await GetDoctorIdByEmaKeyId(
        this.$route.query.emaKeyId
      ).then();
      this.createDoctorId = res.data;
      console.log("档案创建人", res);
    },
    //查询患者信息详情
    async selectCustomerById() {
      const cusKeyId = JSON.parse(window.sessionStorage.getItem("cusKeyId"));
      const { data: res } = await SelectCustomerById(cusKeyId).then();
      this.formInline = res.data;
    },

    //查看病例信息/api/EMR/GetExamItemDetail
    async getExamDetail() {
      const { data: res } = await GetExamDetail(
        this.$route.query.emaKeyId
      ).then();
      if (res.code == 0) {
        const Detail = res.data;
        console.log(Detail);
        for (let key in Detail) {
          if (Detail[key] && Detail[key] != '""') {
            this.savemessage[key] = JSON.parse(Detail[key]);
          } else {
            if (key == "checkjson") {
              console.log("checkjson");
              this.savemessage.checkjson = {
                //复选框
                checkList: [],
                //输入框
                inputList: {
                  //主诉医生名字
                  trueUserName: this.$store.state.userInfo.TrueUserName,
                  input170: "",
                  input17: "",

                  oDbalanceYear: "",
                  oDbalanceMonth: "",
                  oDbalanceDate: "",
                  oDbalanceDateAdd: "",
                  oDremainingYear: "",
                  oDdeepen: "",
                  oDinterveneYear: "",
                  oDintervenedeepen: "",
                  oDrapidYear: "",
                  oDrapidMonth: "",
                  oDrapidDate: "",
                  oDrapidDate: "",

                  oSbalanceYear: "",
                  oSbalanceMonth: "",
                  oSbalanceDate: "",
                  oSbalanceDateAdd: "",
                  oSrapidYear: "",
                  oSrapidMonth: "",
                  oSrapidDate: "",
                  oSremainingYear: "",
                  oSdeepen: "",
                  oSinterveneYear: "",
                  oSintervenedeepen: "",
                },
                //诊断方案
                dropDown: {},
                //方案ID
                value: "",
              };
            } else {
              console.log("else");
              this.savemessage[key] = {
                checkList: [],
                inputList: {
                  trueUserName: this.$store.state.userInfo.TrueUserName,
                  adapterr: "",
                  input1: "",
                },
                //诊断方案
                dropDown: {},
              };
            }
          }
          if (
            !this.savemessage.extJson1.inputList.adapterr == "" ||
            !this.savemessage.extJson1.inputList.adapterr == null
          ) {
            this.adapterCheck = true;
          }
        }
      }
    },
  },
  computed: {
    //判断用户的年龄
    teacherAge: function () {
      let birthdays = new Date(this.formInline.birthDate);
      let d = new Date();
      let age =
        d.getFullYear() -
        birthdays.getFullYear() -
        (d.getMonth() < birthdays.getMonth() ||
        (d.getMonth() == birthdays.getMonth() &&
          d.getDate() < birthdays.getDate())
          ? 1
          : 0);
      return age;
    },

    //OD均速年均
    oDbalanceYear: function () {
      if (
        this.savemessage.checkjson.inputList.input170 &&
        this.savemessage.checkjson.inputList.input171 &&
        this.savemessage.extJson4.inputList.rightSph
      ) {
        try {
          let temp = eval(
            this.savemessage.checkjson.inputList.input170 +
              this.savemessage.checkjson.inputList.input171
          );
          let oDbalanceYear =
            this.savemessage.extJson4.inputList.rightSph /
            (this.teacherAge - temp);
          this.savemessage.checkjson.inputList.oDbalanceYear = oDbalanceYear;
          return oDbalanceYear.toFixed(4);
        } catch (e) {}
      }
    },
    //月
    oDbalanceMonth: function () {
      if (
        this.savemessage.checkjson.inputList.input170 &&
        this.savemessage.checkjson.inputList.input171 &&
        this.savemessage.extJson4.inputList.rightSph
      ) {
        const oDbalanceMonth = this.oDbalanceYear / 12;
        this.savemessage.checkjson.inputList.oDbalanceMonth = oDbalanceMonth;
        return oDbalanceMonth.toFixed(4);
      }
    },

    //日
    oDbalanceDate: function () {
      if (
        this.savemessage.checkjson.inputList.input170 &&
        this.savemessage.checkjson.inputList.input171 &&
        this.savemessage.extJson4.inputList.rightSph
      ) {
        const oDbalanceDate = this.oDbalanceMonth / 30;
        this.savemessage.checkjson.inputList.oDbalanceDate = oDbalanceDate;
        return oDbalanceDate.toFixed(4);
      }
    },
    //一天加多少度
    oDbalanceDateAdd: function () {
      if (
        this.savemessage.checkjson.inputList.input170 &&
        this.savemessage.checkjson.inputList.input171 &&
        this.savemessage.extJson4.inputList.rightSph
      ) {
        const oDbalanceDateAdd = 1 / (this.oDbalanceDate * 100);
        this.savemessage.checkjson.inputList.oDbalanceDateAdd = oDbalanceDateAdd;
        return oDbalanceDateAdd.toFixed(4);
      }
    },
    //OD近速年均
    oDrapidYear: function () {
      if (
        this.savemessage.extJson4.inputList.rightSph &&
        this.savemessage.checkjson.inputList.input178 &&
        this.savemessage.checkjson.inputList.input001
      ) {
        let letf = eval(
          this.savemessage.extJson4.inputList.rightSph -
            this.savemessage.checkjson.inputList.input178
        );
        let right = eval(
          this.teacherAge - this.savemessage.checkjson.inputList.input001
        );
        const oDrapidYear = letf / right;
        this.savemessage.checkjson.inputList.oDrapidYear = oDrapidYear;
        return oDrapidYear.toFixed(4);
      }
    },
    //月
    oDrapidMonth: function () {
      if (
        this.savemessage.extJson4.inputList.rightSph &&
        this.savemessage.checkjson.inputList.input178 &&
        this.savemessage.checkjson.inputList.input001
      ) {
        const oDrapidMonth = this.oDrapidYear / 12;
        this.savemessage.checkjson.inputList.oDrapidMonth = oDrapidMonth;
        return oDrapidMonth.toFixed(4);
      }
    },
    //日
    oDrapidDate: function () {
      if (
        this.savemessage.extJson4.inputList.rightSph &&
        this.savemessage.checkjson.inputList.input178 &&
        this.savemessage.checkjson.inputList.input001
      ) {
        const oDrapidDate = this.oDrapidMonth / 30;
        this.savemessage.checkjson.inputList.oDrapidDate = oDrapidDate;
        return oDrapidDate.toFixed(4);
      }
    },
    //一天加多少度
    oDrapidDateAdd: function () {
      if (
        this.savemessage.extJson4.inputList.rightSph &&
        this.savemessage.checkjson.inputList.input178 &&
        this.savemessage.checkjson.inputList.input001
      ) {
        const oDbalanceDateAdd = 1 / (this.oDrapidDate * 100);
        this.savemessage.checkjson.inputList.oDbalanceDateAdd = oDbalanceDateAdd;
        return oDbalanceDateAdd.toFixed(4);
      }
    },
    //自然余年
    oDremainingYear: function () {
      if (this.savemessage.checkjson.inputList.input211) {
        const oDremainingYear =
          this.savemessage.checkjson.inputList.input211 - this.teacherAge;
        this.savemessage.checkjson.inputList.oDremainingYear = oDremainingYear;
        return oDremainingYear.toFixed(4);
      }
    },
    //自然加深
    oDdeepen: function () {
      if (
        this.oDbalanceYear &&
        this.oDremainingYear &&
        this.savemessage.extJson4.inputList.rightSph
      ) {
        const oDdeepen = eval(
          this.oDbalanceYear * this.oDremainingYear +
            Number(this.savemessage.extJson4.inputList.rightSph)
        );

        this.savemessage.checkjson.inputList.oDdeepen = oDdeepen;

        return oDdeepen.toFixed(4);
      }
    },
    //干预余年
    oDinterveneYear: function () {
      if (this.savemessage.checkjson.inputList.input217) {
        const oDinterveneYear =
          this.savemessage.checkjson.inputList.input217 - this.teacherAge;
        this.savemessage.checkjson.inputList.oDinterveneYear = oDinterveneYear;

        return oDinterveneYear.toFixed(4);
      }
    },
    //干预加深
    oDintervenedeepen: function () {
      if (
        this.savemessage.checkjson.inputList.input220 &&
        this.savemessage.checkjson.inputList.input217
      ) {
        const oDintervenedeepen =
          Number(this.savemessage.extJson4.inputList.rightSph) +
          this.savemessage.checkjson.inputList.input220 * this.oDinterveneYear;
        this.savemessage.checkjson.inputList.oDintervenedeepen = oDintervenedeepen;
        return oDintervenedeepen.toFixed(4);
      }
    },

    //OS均速年均
    oSbalanceYear: function () {
      if (
        this.savemessage.checkjson.inputList.input187 &&
        this.savemessage.checkjson.inputList.input20086 &&
        this.savemessage.extJson5.inputList.leftSph
      ) {
        let temp = eval(
          this.savemessage.checkjson.inputList.input187 +
            this.savemessage.checkjson.inputList.input20086
        );
        let oSbalanceYear =
          this.savemessage.extJson5.inputList.leftSph /
          (this.teacherAge - temp);
        this.savemessage.checkjson.inputList.oSbalanceYear = oSbalanceYear;
        return oSbalanceYear.toFixed(4);
      }
    },
    oSbalanceMonth: function () {
      if (this.oSbalanceYear) {
        const oSbalanceMonth = this.oSbalanceYear / 12;
        this.savemessage.checkjson.inputList.oSbalanceMonth = oSbalanceMonth;
        return oSbalanceMonth.toFixed(4);
      }
    },
    oSbalanceDate: function () {
      if (this.oSbalanceYear) {
        const oSbalanceDate = this.oSbalanceMonth / 30;
        this.savemessage.checkjson.inputList.oSbalanceDate = oSbalanceDate;
        return oSbalanceDate.toFixed(4);
      }
    },
    oSbalanceDateAdd: function () {
      if (this.oSbalanceYear) {
        const oSbalanceDateAdd = 1 / (this.oSbalanceDate * 100);
        this.savemessage.checkjson.inputList.oSbalanceDateAdd = oSbalanceDateAdd;
        return oSbalanceDateAdd.toFixed(4);
      }
    },
    //OS 近速年均
    oSrapidYear: function () {
      if (
        this.savemessage.extJson5.inputList.leftSph &&
        this.savemessage.checkjson.inputList.input196 &&
        this.savemessage.checkjson.inputList.input195
      ) {
        try {
          const oSbalanceYear =
            (this.savemessage.extJson5.inputList.leftSph -
              this.savemessage.checkjson.inputList.input196) /
            (this.teacherAge - this.savemessage.checkjson.inputList.input195);
          return oSbalanceYear.toFixed(4);
        } catch (e) {}
      }
    },
    oSrapidMonth: function () {
      if (this.oSrapidYear) {
        const oSrapidMonth = this.oSrapidYear / 12;
        this.savemessage.checkjson.inputList.oSrapidMonth = oSrapidMonth;
        return oSrapidMonth.toFixed(4);
      }
    },
    oSrapidDate: function () {
      if (this.oSrapidMonth) {
        const oSrapidDate = this.oSrapidMonth / 30;
        this.savemessage.checkjson.inputList.oSrapidDate = oSrapidDate;
        return oSrapidDate.toFixed(4);
      }
    },
    oSrapidDateAdd: function () {
      if (this.oSrapidYear) {
        const oSrapidDateAdd = 1 / (this.oSrapidDate * 100);
        this.savemessage.checkjson.inputList.oSrapidDateAdd = oSrapidDateAdd;
        return oSrapidDateAdd.toFixed(4);
      }
    },

    //余年
    oSremainingYear: function () {
      if (this.savemessage.checkjson.inputList.input223) {
        const oSremainingYear =
          this.savemessage.checkjson.inputList.input223 - this.teacherAge;
        this.savemessage.checkjson.inputList.oSremainingYear = oSremainingYear;

        return oSremainingYear.toFixed(4);
      }
    },
    //加深
    oSdeepen: function () {
      if (this.oSremainingYear && this.savemessage.extJson5.inputList.leftSph) {
        const oSdeepen =
          this.oSbalanceYear * this.oSremainingYear +
          Number(this.savemessage.extJson5.inputList.leftSph);
        this.savemessage.checkjson.inputList.oSdeepen = oSdeepen;
        return oSdeepen.toFixed(4);
      }
    },
    //干预余年
    oSinterveneYear: function () {
      if (this.savemessage.checkjson.inputList.input229) {
        const oSinterveneYear =
          this.savemessage.checkjson.inputList.input229 - this.teacherAge;
        this.savemessage.checkjson.inputList.oSinterveneYear = oSinterveneYear;

        return oSinterveneYear.toFixed(4);
      }
    },
    //干预加深
    oSintervenedeepen: function () {
      if (
        this.savemessage.extJson5.inputList.leftSph &&
        this.savemessage.checkjson.inputList.input232
      ) {
        const oSintervenedeepen =
          Number(this.savemessage.extJson5.inputList.leftSph) +
          this.savemessage.checkjson.inputList.input232 * this.oSinterveneYear;
        this.savemessage.checkjson.inputList.oSintervenedeepen = oSintervenedeepen;
        return oSintervenedeepen.toFixed(4);
      }
    },
    //ODKF
    ODKF: function () {
      if (
        this.savemessage.extJson6.inputList.inputODKF1 &&
        this.savemessage.extJson6.inputList.inputODKF2
      ) {
        const ODKF =
          (Number(this.savemessage.extJson6.inputList.inputODKF1) +
            Number(this.savemessage.extJson6.inputList.inputODKF2)) /
          2;
        return ODKF.toFixed(4);
      }
    },
    ODKS: function () {
      if (
        this.savemessage.extJson6.inputList.inputODKS1 &&
        this.savemessage.extJson6.inputList.inputODKS2
      ) {
        const ODKS =
          (Number(this.savemessage.extJson6.inputList.inputODKS1) +
            Number(this.savemessage.extJson6.inputList.inputODKS2)) /
          2;
        return ODKS.toFixed(4);
      }
    },
    OSKF: function () {
      if (
        this.savemessage.extJson7.inputList.inputOSKF1 &&
        this.savemessage.extJson7.inputList.inputOSKF2
      ) {
        const OSKF =
          (Number(this.savemessage.extJson7.inputList.inputOSKF1) +
            Number(this.savemessage.extJson7.inputList.inputOSKF2)) /
          2;
        return OSKF.toFixed(4);
      }
    },
    OSKS: function () {
      if (
        this.savemessage.extJson7.inputList.inputOSKS1 &&
        this.savemessage.extJson7.inputList.inputOSKS2
      ) {
        const OSKS =
          (Number(this.savemessage.extJson7.inputList.inputOSKS1) +
            Number(this.savemessage.extJson7.inputList.inputOSKS2)) /
          2;
        return OSKS.toFixed(4);
      }
    },
  },

  watch: {
    $route(newValue, oldValue) {
      // if (this.voluntarilyFlag1) {
      //   this.save(1);
      // }
      // if (this.voluntarilyFlag2) {
      //   this.save(2);
      // }
      // if (this.voluntarilyFlag3) {
      //   this.save(3);
      // }
      // if (this.voluntarilyFlag4) {
      //   this.save(4);
      // }
      // if (this.voluntarilyFlag5) {
      //   this.save(5);
      // }
      // if (this.voluntarilyFlag6) {
      //   this.save(6);
      // }
      // if (this.voluntarilyFlag7) {
      //   this.save(7);
      // }
      // if (this.checkjson) {
      //   this.save(8);
      // }
      this.getExamDetail();
      this.getExamitem();
    },
    "savemessage.extJson1": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag1 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson2": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag2 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson3": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag3 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson4": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag4 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson5": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag5 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson6": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag6 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson7": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag7 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.checkjson": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.checkjson = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson8": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag4 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.extJson9": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag5 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.intraPresODJson": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag6 = true;
        }
      },
      deep: true, //true 深度监听
    },
    "savemessage.intraPresOSJson": {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag7 = true;
        }
      },
      deep: true, //true 深度监听
    },
  },
};
</script>

<style lang="less" scoped>
.newExamine {
  border: 5px solid #b9d9fd;
  margin: 15px;
  table {
    border-top: 5px solid #b9d9fd !important;
    border-collapse: collapse;
    background: #f2f2f2;
  }

  th {
    writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;
  }
  table,
  th,
  tr,
  td {
    border: 1px solid #ccc;
    text-align: center;
    font-size: 12px;
    color: #000;
    input {
      width: 96%;
      height: 30px;
      text-align: center;
    }
  }
  td {
    border: 1px dashed #ccc;
    > ul {
      display: flex;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > span {
        width: 280px;
        line-height: 30px;
        font-size: 12px;
      }
    }
  }
  tr {
    > div {
      display: flex;
      align-items: center;
      text-align: justify;
      flex-wrap: wrap;
      div {
        display: flex;
      }
    }
  }
}

.bdr {
  border-right: 4px double #c2c2c2 !important;
}
.deadlineSave {
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  margin: 0 20px;
  p {
    margin-right: 20px;
  }
}
.newExamine {
  .drop-down-box1 {
    width: 82px;
    .el-input__suffix {
      right: 0px;
    }

    input {
      height: 51px !important;
      width: 50px !important;
      border: none !important;
      border-right: 1px dashed #ccc !important;
      border-bottom: 1px solid #ccc !important;
      border-radius: 0 !important;
      padding: 0;
    }
    i {
      display: none;
    }
  }

  .gofundus {
    cursor: pointer;
    &:hover {
      background-color: #5fa0c6;
      color: #fff;
    }
  }

  .inquiry-header {
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    h1 {
      width: 70px;
      border-bottom: 1px solid #ccc;
      height: 100px;
      line-height: 70px;
      font-size: 12px;
      font-weight: 400;
      background: #f2f2f2;
    }
  }
  h1 {
    display: inline-block;
    text-align: center;
    writing-mode: vertical-lr;
    font-weight: 400;
    background: #f2f2f2;
  }
  .checkbox {
    display: flex;
    height: 45px;
    line-height: 45px;
    width: 1460px;
    background-color: #f2f2f2;
    p {
      font-size: 12px;
    }
    .checkbox-info {
      border-right: 1px solid #ccc;
      width: 65px;
      text-align: center;
      margin-right: 20px;
    }
  }

  .ocular-region {
    background-color: #f2f2f2;
    display: flex;
    h1 {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      height: 152px;
      line-height: 66px;
      font-weight: 400;
      background: #f2f2f2;
    }

    .ocular-region-header {
      .ocular-region-header-one {
        display: flex;

        h1 {
          font-size: 12px;
          font-weight: 400;
          background: #f2f2f2;
        }
        p {
          text-align: center;
          line-height: 50px;
          width: 66px;
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
          font-size: 12px;
        }
      }
      .ocular-region-header-two {
        height: 101px;
        width: 66px;
      }
    }
    .ocular-region-left,
    .ocular-region-right {
      margin-left: 1px;
      width: 882px;
      border-right: 1px solid #ccc;
      h2 {
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        text-align: center;
      }
      ul {
        display: flex;
        li {
          width: 50px;
          border-right: 1px dashed #ccc;
          border-bottom: 1px solid #ccc;
          height: 50px;
          text-align: center;
          line-height: 50px;
          input {
            width: 90%;
            height: 90%;
          }
        }
      }

      .ulO {
        li {
          line-height: 25px;
          height: 24.5px;
        }
      }
      .ulI {
        li {
          width: 97px;
        }
      }
      .ulW {
        li {
          height: 37px;
          line-height: 37px;
          input {
            width: 100%;
            height: 100%;
          }
        }
      }
      .ulq {
        li {
          width: 60px;
          border-right: none;
        }
      }
    }
  }

  input {
    text-align: center;
  }
  .informed-consent {
    display: flex;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    padding-left: 130px;
    > div {
      width: 766px;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      p {
        margin-right: 20px;
      }
    }
  }
  .mydriatic {
    p {
      line-height: 44px;
    }
  }
  .axis-oculi {
    ul {
      border-bottom: 1px solid #ccc;
      li {
        height: 46px !important;
        border-right: none !important;
        padding: 2px 0;
        box-sizing: border-box;
        border: 0 !important;
        input {
          width: 100%;
          height: 90%;
        }
      }
    }
  }
  .horizon {
    height: 46px;
    border-bottom: 1px solid #ccc;
    input {
      width: 96%;
      height: 90%;
    }
  }
  .informed-footer {
    display: flex;
    line-height: 50px;
    border: 1px solid #ccc;
    h4 {
      margin: 0 20px;
      font-size: 20px;
    }
  }
  .checkboxs {
    color: #000;
  }
  .goniometer {
    display: flex;
  }
  .goniometer-left {
    display: flex;
    border-right: 1px solid #ccc;
    h1 {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      height: 152px;
      line-height: 69px;
      font-weight: 400;
      background: #f2f2f2;
    }
    .goniometer-one {
      display: flex;
      .goniometer-one-left {
        li {
          border-right: 1px dashed #ccc;
          border-bottom: 1px dashed #ccc;
          height: 50px;
          width: 80px;
          input {
            text-align: center;
            width: 90%;
            height: 90%;
          }
        }
      }
      .goniometer-one-right {
        li {
          border-right: 1px dashed #ccc;
          border-bottom: 1px dashed #ccc;
          width: 66px;
          height: 50px;
          text-align: center;
          line-height: 50px;
        }
      }
    }
    .goniometer-two {
      display: flex;
      > div {
        h4 {
          text-align: center;
          line-height: 50px;
          border-bottom: 1px dashed #ccc;
          border-right: 1px dashed #ccc;
        }
        ul {
          display: flex;
          li {
            width: 55px;
            height: 50px;
            border-right: 1px dashed #ccc;
            border-bottom: 1px dashed #ccc;
            text-align: center;
            line-height: 50px;
            input {
              width: 96%;
              height: 99%;
            }
          }
        }
      }
    }
    .goniometer-three {
      .goniometer-three-o {
        display: flex;
        li {
          width: 83px;
          h4 {
            border-bottom: 1px dashed #ccc;
            border-right: 1px dashed #ccc;
            height: 101px;
            text-align: center;
            line-height: 101px;
          }
        }
      }
      .goniometer-three-i {
        display: flex;
        li {
          width: 83px;
          height: 50px;
          border-right: 1px dashed #ccc;
          border-bottom: 1px dashed #ccc;
          input {
            width: 96%;
            height: 99%;
            text-align: center;
          }
        }
      }
    }
    .goniometer-four {
      h4 {
        width: 121px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-right: 1px dashed #ccc;
        border-bottom: 1px dashed #ccc;
      }
      ul {
        display: flex;
        li {
          width: 60px;
          height: 50px;
          border-right: 1px dashed #ccc;
          border-bottom: 1px dashed #ccc;
          text-align: center;
          line-height: 50px;
        }
      }
    }
  }
}
.fuxi {
  .el-checkbox {
    width: 40px !important;
  }
}
</style>