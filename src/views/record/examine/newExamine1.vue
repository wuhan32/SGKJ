<template>
  <!-- 编辑新建检查档案 -->
  <div class="newExamine" ref="imageWrapper">
    <el-tabs tab-position="left">
      <el-tab-pane label="主诉&问诊">
        <main>
          <!-- 患者信息 -->
          <!-- <section class="patientInfo">
        <div class="patientInfo-header">
          <h1>患者信息</h1>
        </div>
        <div class="patientInfo-body">
          <ul>
            <li>
              <span>姓名</span>
              <el-input size="mini" disabled v-model="formInline.customerName"></el-input>
            </li>
            <li>
              <span>性别</span>
              <el-input disabled size="mini"></el-input>
            </li>
            <li>
              <span>年龄</span>
              <el-input disabled size="mini" v-model="teacherAge"></el-input>
            </li>
            <li>
              <span>电话</span>
              <el-input disabled size="mini" v-model="formInline.phone1"></el-input>
            </li>
          </ul>
          <ul>
            <li>
              <span>单位</span>
              <el-input disabled size="mini" v-model="formInline.comment"></el-input>
            </li>
            <li>
              <span>出生:</span>
              <el-input disabled size="mini" v-model="formInline.birthDate"></el-input>
            </li>
            <li>
              <span>住址:</span>
              <el-input disabled size="mini" v-model="formInline.streetAddress"></el-input>
            </li>
          </ul>
          <div v-if="formInline.guardians">
            <ul v-if="formInline.guardians.length > 0">
              <li>
                <span>监护人</span>
                <el-input disabled size="mini" v-model="formInline.guardians[0].guardianName"></el-input>
              </li>
              <li>
                <span>单位</span>
                <el-input disabled size="mini" v-model="formInline.guardians[0].occupation"></el-input>
              </li>
              <li>
                <span>电话</span>
                <el-input disabled size="mini" v-model="formInline.guardians[0].phone"></el-input>
              </li>
            </ul>
          </div>
          <div v-if="formInline.guardians">
            <ul v-if="formInline.guardians.length > 1">
              <li>
                <span>监护人</span>
                <el-input disabled size="mini" v-model="formInline.guardians[1].guardianName"></el-input>
              </li>
              <li>
                <span>单位</span>
                <el-input disabled size="mini" v-model="formInline.guardians[1].occupation"></el-input>
              </li>
              <li>
                <span>电话</span>
                <el-input disabled size="mini" v-model="formInline.guardians[1].phone"></el-input>
              </li>
            </ul>
          </div>
        </div>
          </section>-->

          <!-- 主诉 -->
          <section class="principle">
            <!-- <h3>主诉</h3> -->
            <div class="principle-header">
              <h1 style="border-bottom: 1px solid #ccc; height: 181px">主诉</h1>
            </div>
            <div class="principle-body">
              <div class="principle-eye">
                <span>右眼</span>
                <div>
                  <div class="checkboxO">
                    <span class="checkbox-info">视力</span>
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
                    <div style="margin-left: 80px">
                      <span style="margin-right: 20px">其它</span>
                      <el-input
                        maxlength="16"
                        size="mini"
                        placeholder="请输入内容"
                        v-model="savemessage.extJson1.inputList.input1"
                        clearable
                        style="width: 280px"
                      ></el-input>
                    </div>
                  </div>
                  <div class="checkboxO">
                    <span class="checkbox-info">生理</span>
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
                        placeholder="请输入内容"
                        v-model="savemessage.extJson1.inputList.input2"
                        clearable
                        style="width: 280px"
                      ></el-input>
                    </div>
                  </div>
                </div>
              </div>
              <div class="principle-eye">
                <span>左眼</span>
                <div>
                  <div class="checkboxO">
                    <span class="checkbox-info">视力</span>
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
                    <div style="margin-left: 80px">
                      <span style="margin-right: 20px">其它</span>
                      <el-input
                        maxlength="16"
                        size="mini"
                        placeholder="请输入内容"
                        v-model="savemessage.extJson1.inputList.input3"
                        clearable
                        style="width: 280px"
                      ></el-input>
                    </div>
                  </div>
                  <div class="checkboxO">
                    <span class="checkbox-info">生理</span>
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
                        placeholder="请输入内容"
                        v-model="savemessage.extJson1.inputList.input4"
                        clearable
                        style="width: 280px"
                      ></el-input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 病史 -->
          <section class="inquiry">
            <!-- <h3>病史</h3> -->
            <div class="inquiry-header">
              <h1 style="height: 137px">病史</h1>
            </div>
            <div class="inquiry-body">
              <div>
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">疾病</span>
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
                  <span style="margin-right: 20px; margin-left: 311px"
                    >其它</span
                  >
                  <el-input
                    maxlength="16"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input5"
                    clearable
                    style="width: 280px"
                  ></el-input>
                </div>
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">过敏</span>
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
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input6"
                    clearable
                    style="width: 200px"
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
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input7"
                    clearable
                    style="width: 100px"
                  ></el-input>
                  <p class="checkboxs">现在可用药物</p>
                  <el-input
                    maxlength="16"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input888"
                    clearable
                    style="width: 200px"
                  ></el-input>
                  <p class="checkboxs">病理</p>
                  <el-input
                    maxlength="16"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input8"
                    clearable
                    style="width: 200px"
                  ></el-input>
                </div>
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">眼睛</span>
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
                  <span style="margin-right: 20px">其它</span>
                  <el-input
                    maxlength="16"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input9"
                    clearable
                    style="width: 280px"
                  ></el-input>
                </div>
              </div>
            </div>
          </section>

          <!-- 饮食环境 -->
          <section class="inquiry">
            <!-- <h3>饮食环境</h3> -->
            <div class="inquiry-header">
              <h1 style="height: 137px">饮食环境</h1>
            </div>
            <div class="inquiry-body">
              <div>
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">饮食</span>
                  <p class="checkboxs">肝脏</p>
                  <el-checkbox-group
                    v-model="savemessage.extJson1.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="70">多</el-checkbox>
                    <el-checkbox label="71">中</el-checkbox>
                    <el-checkbox label="72">少</el-checkbox>
                    <el-checkbox label="73">无</el-checkbox>
                  </el-checkbox-group>
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
                  <p class="checkboxs">其它</p>
                  <el-input
                    maxlength="16"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input10"
                    clearable
                    style="width: 200px"
                  ></el-input>
                </div>
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">视距</span>
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
                    style="width: 200px"
                  >
                    <el-checkbox label="90" style="width: 20px !important"
                      >多</el-checkbox
                    >
                    <el-checkbox label="91" style="width: 20px !important"
                      >中</el-checkbox
                    >
                    <el-checkbox label="92" style="width: 20px !important"
                      >少</el-checkbox
                    >
                    <el-checkbox label="93" style="width: 20px !important"
                      >无</el-checkbox
                    >
                  </el-checkbox-group>
                  <p class="checkboxs" style="margin-left: 231px">其它</p>
                  <el-input
                    maxlength="16"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input11"
                    clearable
                    style="width: 200px"
                  ></el-input>
                </div>
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">时段</span>
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
                  <span style="margin-left: 397px; margin-right: 10px"
                    >其它</span
                  >
                  <el-input
                    maxlength="16"
                    size="mini"
                    placeholder="请输入内容"
                    v-model="savemessage.extJson1.inputList.input12"
                    clearable
                    style="width: 200px"
                  ></el-input>
                </div>
              </div>
            </div>
          </section>

          <!-- 家族 -->
          <section class="inquiry jiazhu">
            <!-- <h3>家族</h3> -->
            <div class="inquiry-header">
              <h1 style="height: 91px">家族</h1>
            </div>
            <div class="inquiry-body">
              <div>
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">父系</span>
                  <p style="font-size: 14px">爷/奶：R</p>
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
                  <p style="margin: 0 8px; font-size: 14px">父亲：R</p>
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
                <div class="checkbox" style="border-bottom: 1px solid #ccc">
                  <span class="checkbox-info">母系</span>
                  <p style="font-size: 14px">公/婆：R</p>
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
                  <p style="margin: 0 8px; font-size: 14px">母亲：R</p>
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
                    <el-checkbox label="552">混</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </section>

          <!-- 发育 -->
          <section class="inquiry">
            <!-- <h3>发育</h3> -->
            <div class="inquiry-header">
              <h1 style="height: 45px">发育</h1>
            </div>
            <div class="checkbox" style="border-bottom: 1px solid #ccc">
              <span class="checkbox-info">身体</span>
              <p>身高</p>
              <el-input
                maxlength="16"
                size="mini"
                placeholder="请输入内容"
                v-model="savemessage.extJson1.inputList.input21"
                clearable
                style="width: 150px"
              ></el-input>
              <p style="margin-right: 40px">cm</p>
              <p>体重</p>
              <el-input
                maxlength="16"
                size="mini"
                placeholder="请输入内容"
                v-model="savemessage.extJson1.inputList.input22"
                clearable
                style="width: 150px"
              ></el-input>
              <p style="margin-right: 40px">KG</p>
              <p>检查人</p>
              <!-- <el-input
                maxlength="16"
                size="mini"
                placeholder="请输入内容"
                v-model="savemessage.extJson1.inputList.input23"
                clearable
                style="width:350px"
              ></el-input>-->
              <input
                type="checkbox"
                class="checkbox"
                v-model="adapterCheck"
                @click="Setvadapterr"
                style="width: 15px"
              />
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.adapterCheck"
                maxlength="16"
                disabled
              />
            </div>
          </section>

          <section class="inquiry">
            <div class="inquiry-header">
              <h1 style="height: 45px">医生</h1>
            </div>
            <div class="checkbox doctoreNamen">
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
          </section>
        </main>
      </el-tab-pane>
      <el-tab-pane label="检查">
        <main>
          <div class="addstyle">
            <div class="aroundEye">
              <h2 style="width: 916">OD</h2>
              <h2>OS</h2>
            </div>
            <!-- 眼部 -->
            <section class="ocular-region">
              <div class="ocular-region-header">
                <div class="ocular-region-header-one">
                  <h1 style="height: 100px; border-top: 1px solid #ccc">
                    眼部
                  </h1>
                  <div>
                    <p>外观</p>
                    <p>裂隙灯</p>
                  </div>
                </div>
              </div>
              <div class="df">
                <div class="ocular-region-left">
                  <!-- 外观 -->
                  <ul>
                    <li>
                      <p>上眼睑</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input24"
                        name
                        id
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>下眼睑</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input25"
                        name
                        id
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼袋</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input26"
                        name
                        id
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼圈</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input27"
                        name
                        id
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼角</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input28"
                        name
                        id
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼位</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input29"
                        name
                        id
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼球</p>
                    </li>
                    <li style="border-right: none">
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input30"
                        name
                        id
                        maxlength="16"
                      />
                    </li>
                  </ul>
                  <!-- 裂隙灯 -->
                  <ul class="ulO">
                    <li>睫毛</li>
                    <li>上睑缘</li>
                    <li>下睑缘</li>
                    <li>睑肉</li>
                    <li>胬肉</li>
                    <li>泪器</li>
                    <li>结膜</li>
                    <li>巩膜</li>
                    <li>角膜</li>
                    <li>前房</li>
                    <li>虹膜</li>
                    <li>瞳孔</li>
                    <li>晶体</li>
                    <li style="border-right: none">玻璃体</li>
                  </ul>
                  <ul class="ulO">
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input31"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input32"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input33"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input34"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input35"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input36"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input37"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input38"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input39"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input40"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input41"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input42"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input43"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li style="border-right: none">
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input44"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                  </ul>
                </div>
                <div class="ocular-region-left">
                  <!-- 外观 -->
                  <ul>
                    <li>
                      <p>上眼睑</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.extJson2.inputList.input45"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>下眼睑</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.extJson2.inputList.input46"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼袋</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.extJson2.inputList.input47"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼圈</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.extJson2.inputList.input48"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼角</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.extJson2.inputList.input49"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼位</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.extJson2.inputList.input50"
                        maxlength="16"
                      />
                    </li>
                    <li>
                      <p>眼球</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        name
                        id
                        v-model="savemessage.extJson2.inputList.input51"
                        maxlength="16"
                      />
                    </li>
                  </ul>
                  <!-- 裂隙灯 -->
                  <ul class="ulO">
                    <li>睫毛</li>
                    <li>上睑缘</li>
                    <li>下睑缘</li>
                    <li>睑肉</li>
                    <li>胬肉</li>
                    <li>泪器</li>
                    <li>结膜</li>
                    <li>巩膜</li>
                    <li>角膜</li>
                    <li>前房</li>
                    <li>虹膜</li>
                    <li>瞳孔</li>
                    <li>晶体</li>
                    <li>玻璃体</li>
                  </ul>
                  <ul class="ulO">
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input52"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input53"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input54"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input55"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input56"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input57"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input58"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input59"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input60"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input61"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input62"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input63"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input64"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson2.inputList.input65"
                        maxlength="16"
                        :disabled="Slitlamp"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="informed-consent">
              <div>
                <p>{{ savemessage.extJson2.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(2)"
                  :disabled="!voluntarilyFlag2"
                  >保存</vxe-button
                >
              </div>
              <div>
                <p>{{ savemessage.extJson3.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(3)"
                  :disabled="!voluntarilyFlag3"
                  >保存</vxe-button
                >
              </div>
              <!-- <p>检查人：</p>
              <input type="text" name id v-model="savemessage.checkjson.inputList.input67" maxlength="16" />
              <p>检查人：</p>
              <input type="text" name id v-model="savemessage.checkjson.inputList.input67" maxlength="16" />-->
            </section>

            <!-- 屈光检查 -->
            <section class="ocular-region" style="height: 153px">
              <div class="ocular-region-header">
                <div class="ocular-region-header-one">
                  <h1>屈光检查</h1>
                  <div>
                    <p>电脑验光</p>
                    <h1 class="ocular-region-header-two">综合验光</h1>
                  </div>
                </div>
              </div>
              <div class="ocular-region-left">
                <!-- 电脑验光 -->
                <ul class="ulO ulI">
                  <li>眼球</li>
                  <li>柱镜</li>
                  <li>轴向</li>
                  <li>KF</li>
                  <li>KS</li>
                  <li>K值</li>
                  <li>CVL</li>
                  <li>AX</li>
                  <li>ROCS</li>
                  <li>ROCF</li>
                  <li style="border-right: none">AVG</li>
                </ul>
                <ul class="ulO ulI">
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input68"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input69"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input70"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input71"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input72"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input73"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input74"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input75"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input76"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input77"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input78"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                </ul>
                <!-- 综合验光 -->
                <ul class="ulO ulI">
                  <li>/</li>
                  <li>矫视</li>
                  <li>裸视</li>
                  <li>球镜</li>
                  <li>柱镜</li>
                  <li>轴位</li>
                  <li>凌镜</li>
                  <li>底向</li>
                  <li style="border-right: none">视力</li>
                </ul>
                <ul class="ulO ulI">
                  <li>视远</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input79"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input80"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <!-- K28 -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input81"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input82"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input83"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input84"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input85"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input86"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                </ul>
                <ul class="ulO ulI">
                  <li>视近</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input87"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input88"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input89"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input90"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input91"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input92"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input93"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input94"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                </ul>
                <ul class="liti">
                  <li>立体</li>
                  <el-select
                    v-model="savemessage.extJson3.dropDown.dropDown1"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2001">正常</el-option>
                    <el-option label="异常" value="2002">异常</el-option>
                    <el-option label="没有" value="2003">没有</el-option>
                  </el-select>
                  <li>
                    <span>融合</span>
                  </li>
                  <el-select
                    v-model="savemessage.extJson3.dropDown.dropDown2"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2004">正常</el-option>
                    <el-option label="异常" value="2005">异常</el-option>
                    <el-option label="参差" value="2006">参差</el-option>
                    <el-option label="没有" value="2007">没有</el-option>
                  </el-select>
                  <li>
                    <span>色觉</span>
                  </li>
                  <el-select
                    v-model="savemessage.extJson3.dropDown.dropDown3"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2008"></el-option>
                    <el-option label="异常" value="2009"></el-option>
                    <el-option label="红弱" value="2010"></el-option>
                    <el-option label="绿弱" value="2011"></el-option>
                    <el-option label="蓝弱" value="2012"></el-option>
                    <el-option label="黄弱" value="2013"></el-option>
                    <el-option label="色弱" value="2014"></el-option>
                    <el-option label="色盲" value="2015"></el-option>
                  </el-select>
                  <li>
                    <span>红绿</span>
                  </li>
                  <el-select
                    v-model="savemessage.extJson3.dropDown.dropDown4"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2016"></el-option>
                    <el-option label="异常" value="2017"></el-option>
                    <el-option label="平衡" value="2018"></el-option>
                    <el-option label="红强" value="2019"></el-option>
                    <el-option label="绿强" value="2020"></el-option>
                    <el-option label="其它" value="2021"></el-option>
                  </el-select>
                  <li>
                    <span>瞳距</span>
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input100"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <span>瞳高</span>
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input101"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <span>ADD</span>
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson3.inputList.input102"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                </ul>
              </div>

              <div class="ocular-region-left">
                <!-- 电脑验光 -->
                <ul class="ulO ulI">
                  <li>眼球</li>
                  <li>柱镜</li>
                  <li>轴向</li>
                  <li>KF</li>
                  <li>KS</li>
                  <li>K值</li>
                  <li>CVL</li>
                  <li>AX</li>
                  <li>ROCS</li>
                  <li>ROCF</li>
                  <li style="border-right: none">AVG</li>
                </ul>
                <ul class="ulO ulI">
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input103"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input104"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input105"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input106"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input107"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input108"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input109"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input110"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input111"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input112"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input113"
                      maxlength="16"
                      :disabled="PcOptometry"
                    />
                  </li>
                </ul>
                <!-- 综合验光 -->
                <ul class="ulO ulI">
                  <li>/</li>
                  <li>矫视</li>
                  <li>裸视</li>
                  <li>球镜</li>
                  <li>柱镜</li>
                  <li>轴位</li>
                  <li>凌镜</li>
                  <li>底向</li>
                  <li style="border-right: none">视力</li>
                </ul>
                <ul class="ulO ulI">
                  <li>视远</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input114"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input115"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <!-- OS球镜 -->

                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input116"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input117"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input118"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input119"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input120"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input121"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                </ul>
                <ul class="ulO ulI">
                  <li>视近</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input122"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input123"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>

                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input124"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input125"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input126"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input127"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input128"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input129"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                </ul>
                <ul class="liti">
                  <li>立体</li>
                  <el-select
                    v-model="savemessage.extJson5.dropDown.dropDown5"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2022">正常</el-option>
                    <el-option label="异常" value="2023">异常</el-option>
                    <el-option label="没有" value="2024">没有</el-option>
                  </el-select>
                  <li>
                    <span>融合</span>
                  </li>
                  <el-select
                    v-model="savemessage.extJson5.dropDown.dropDown6"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2025">正常</el-option>
                    <el-option label="异常" value="2026">异常</el-option>
                    <el-option label="参差" value="2027">参差</el-option>
                    <el-option label="没有" value="2028">没有</el-option>
                  </el-select>
                  <li>
                    <span>色觉</span>
                  </li>
                  <el-select
                    v-model="savemessage.extJson5.dropDown.dropDown7"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2029"></el-option>
                    <el-option label="异常" value="2030"></el-option>
                    <el-option label="红弱" value="2031"></el-option>
                    <el-option label="绿弱" value="2032"></el-option>
                    <el-option label="蓝弱" value="2033"></el-option>
                    <el-option label="黄弱" value="2034"></el-option>
                    <el-option label="色弱" value="2035"></el-option>
                    <el-option label="色盲" value="2036"></el-option>
                  </el-select>
                  <li>
                    <span>红绿</span>
                  </li>
                  <el-select
                    v-model="savemessage.extJson5.dropDown.dropDown8"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="optometry"
                  >
                    <el-option label="正常" value="2037"></el-option>
                    <el-option label="异常" value="2038"></el-option>
                    <el-option label="平衡" value="2039"></el-option>
                    <el-option label="红强" value="2040"></el-option>
                    <el-option label="绿强" value="2041"></el-option>
                    <el-option label="其它" value="2042"></el-option>
                  </el-select>
                  <li>
                    <span>瞳距</span>
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input130"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <span>瞳高</span>
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input131"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                  <li>
                    <span>ADD</span>
                  </li>
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.extJson5.inputList.input132"
                      maxlength="16"
                      :disabled="optometry"
                    />
                  </li>
                </ul>
              </div>
            </section>

            <section class="informed-consent">
              <div>
                <p>{{ savemessage.extJson4.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(4)"
                  :disabled="!voluntarilyFlag4"
                  >保存</vxe-button
                >
              </div>
              <div>
                <p>{{ savemessage.extJson5.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(5)"
                  :disabled="!voluntarilyFlag5"
                  >保存</vxe-button
                >
              </div>
              <!-- <p>检查人：</p> -->
              <!-- <input type="text" name id  maxlength="16" /> -->
              <!-- 检查师1-->
              <!-- <el-select v-model="savemessage.checkjson.inputList.input138" placeholder="请选择">
                <el-option
                  v-for="item in doctorListL"
                  :key="item.keyId"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>-->
            </section>
            <!-- 眼心理检查 -->
            <section class="ocular-region">
              <div class="ocular-region-header">
                <div class="ocular-region-header-one">
                  <div>
                    <p
                      style="line-height: 76px"
                      class="gofundus"
                      @click="gofundus"
                    >
                      角膜地图
                    </p>
                    <p style="line-height: 45px">眼压</p>
                    <p style="line-height: 45px">扩瞳</p>
                    <p style="line-height: 45px">眼底</p>
                    <p style="line-height: 46px">眼轴</p>
                    <p style="line-height: 46px">OCT</p>
                    <p style="line-height: 46px">视野</p>
                  </div>
                </div>
              </div>
              <!-- 角膜地图 -->

              <div class="ocular-region-left" style="width: 766px">
                <ul class="ulO ulI">
                  <li style="border-bottom: none; width: 63px">7mm</li>
                  <li style="width: 64px">Kf1</li>
                  <li style="width: 63px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.extJson6.inputList.input3001"
                      :disabled="topography"
                    />
                  </li>
                  <li style="width: 64px">Kf2</li>
                  <li style="width: 63px">
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input3002"
                      :disabled="topography"
                    />
                  </li>
                  <li style="width: 64px">Ks1</li>
                  <li style="width: 63px">
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input3003"
                      :disabled="topography"
                    />
                  </li>
                  <li style="width: 64px">Ks2</li>
                  <li style="width: 63px">
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input3004"
                      :disabled="topography"
                    />
                  </li>
                  <li style="width: 64px">DC</li>
                  <li style="width: 63px">
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.extJson6.inputList.input3005"
                      :disabled="topography"
                    />
                  </li>
                  <li style="border-right: none; width: 127px">诊断</li>
                </ul>
                <ul class="ulO ulI">
                  <li style="border-bottom: none">曲率</li>
                  <li>KF</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input800"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>KS</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input801"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>CYL</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input802"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>Es</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input803"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>Em</li>
                  <li>
                    <input type="text" :disabled="topography" />
                  </li>
                  <el-select
                    v-model="savemessage.extJson6.dropDown.dropDown9"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="topography"
                  >
                    <el-option label="正常" value="2043">正常</el-option>
                    <el-option label="曲率" value="2044">曲率</el-option>
                    <el-option label="散光" value="2045">散光</el-option>
                    <el-option label="圆锥" value="2046">圆锥</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.extJson6.dropDown.dropDown10"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="topography"
                  >
                    <el-option label="顺规" value="2047">顺规</el-option>
                    <el-option label="逆规" value="2048">逆规</el-option>
                  </el-select>
                </ul>
                <ul class="ulO ulI">
                  <li>直径</li>
                  <li>瞳径</li>
                  <li>90°</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input3006"
                      :disabled="topography"
                    />
                  </li>
                  <li>180°</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input5001"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>角径</li>
                  <li>45°</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input5002"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>135°</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson6.inputList.input3007"
                      :disabled="topography"
                    />
                  </li>
                  <el-select
                    v-model="savemessage.extJson6.dropDown.dropDown11"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="topography"
                  >
                    <el-option label="规则" value="2049">规则</el-option>
                    <el-option label="对称" value="2050">对称</el-option>
                    <el-option label="葫芦形" value="2051">葫芦形</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.extJson6.dropDown.dropDown12"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="topography"
                  >
                    <el-option label="高" value="2052">高</el-option>
                    <el-option label="中" value="2053">中</el-option>
                    <el-option label="低" value="2054">低</el-option>
                    <el-option label="无" value="2055">无</el-option>
                  </el-select>
                </ul>

                <!-- 眼压 -->
                <div class="role-definition">
                  <el-checkbox-group
                    v-model="savemessage.extJson6.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="140" :disabled="pressure"
                      >正常</el-checkbox
                    >
                    <el-checkbox label="141" :disabled="pressure"
                      >曲率</el-checkbox
                    >
                    <el-checkbox label="142" :disabled="pressure"
                      >散光</el-checkbox
                    >
                    <el-checkbox label="143" :disabled="pressure"
                      >圆锥</el-checkbox
                    >
                  </el-checkbox-group>
                </div>
                <!-- 扩瞳 -->
                <div class="role-definition mydriatic">
                  <el-checkbox-group
                    v-model="savemessage.extJson6.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="144" style="width: 150px !important"
                      >短效/快</el-checkbox
                    >
                    <el-checkbox label="145" style="width: 150px !important"
                      >中效/中速</el-checkbox
                    >
                    <el-checkbox label="146" style="width: 180px !important"
                      >长效/慢速</el-checkbox
                    >
                  </el-checkbox-group>
                  <p>其它：</p>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input145"
                    maxlength="16"
                  />
                </div>
                <!-- 眼底 -->
                <div class="role-definition mydriatic">
                  <el-checkbox-group
                    v-model="savemessage.extJson6.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="148" :disabled="fundus"
                      >视盘</el-checkbox
                    >
                    <el-checkbox label="149" :disabled="fundus"
                      >黄斑</el-checkbox
                    >
                    <el-checkbox label="150" :disabled="fundus"
                      >视网膜</el-checkbox
                    >
                    <el-checkbox
                      label="151"
                      :disabled="fundus"
                      style="width: 130px !important"
                      >动脉血管</el-checkbox
                    >
                    <el-checkbox
                      label="152"
                      :disabled="fundus"
                      style="width: 130px !important"
                      >静脉血管</el-checkbox
                    >
                  </el-checkbox-group>
                  <p>其它：</p>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input146"
                    maxlength="16"
                    :disabled="fundus"
                  />
                </div>
                <!-- 眼轴 -->
                <div class="axis-oculi">
                  <ul>
                    <li>总长</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson6.inputList.input147"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>角膜</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson6.inputList.input148"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>前轴</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson6.inputList.input149"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>晶体</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson6.inputList.input150"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>后轴</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson6.inputList.input151"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                  </ul>
                </div>
                <!-- OCT -->
                <div class="horizon">
                  <input
                    type="text"
                    v-model="savemessage.extJson6.inputList.input152"
                    maxlength="16"
                  />
                </div>
                <!-- 视野 -->
                <div class="horizon">
                  <input
                    type="text"
                    v-model="savemessage.extJson6.inputList.input153"
                    maxlength="16"
                  />
                </div>
              </div>
              <!--角膜地图 -->
              <div class="ocular-region-left">
                <ul class="ulO ulI">
                  <li style="border-bottom: none; width: 63px">7mm</li>
                  <li style="width: 64px">Kf1</li>
                  <li style="width: 63px">
                    <input type="text" name id :disabled="topography" />
                  </li>
                  <li style="width: 64px">Kf2</li>
                  <li style="width: 63px">
                    <input type="text" :disabled="topography" />
                  </li>
                  <li style="width: 64px">Ks1</li>
                  <li style="width: 63px">
                    <input type="text" :disabled="topography" />
                  </li>
                  <li style="width: 64px">Ks2</li>
                  <li style="width: 63px">
                    <input type="text" :disabled="topography" />
                  </li>
                  <li style="width: 64px">DC</li>
                  <li style="width: 63px">
                    <input type="text" name id :disabled="topography" />
                  </li>
                  <li style="border-right: none; width: 127px">诊断</li>
                </ul>
                <ul class="ulO ulI">
                  <li style="border-bottom: none">曲率</li>
                  <li>KF</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson7.inputList.input901"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>KS</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson7.inputList.input902"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>CYL</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson7.inputList.input903"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>Es</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson7.inputList.input904"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>Em</li>
                  <li>
                    <input type="text" :disabled="topography" />
                  </li>
                  <el-select
                    v-model="savemessage.extJson7.dropDown.dropDown14"
                    placeholder="请选择"
                    class="drop-down-box"
                    style="border-right: none"
                    :disabled="topography"
                  >
                    <el-option label="正常" value="2056">正常</el-option>
                    <el-option label="曲率" value="2057">曲率</el-option>
                    <el-option label="散光" value="2058">散光</el-option>
                    <el-option label="圆锥" value="2059">圆锥</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.extJson7.dropDown.dropDown15"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="topography"
                  >
                    <el-option label="顺规" value="2060">顺规</el-option>
                    <el-option label="逆规" value="2061">逆规</el-option>
                  </el-select>
                </ul>
                <ul class="ulO ulI">
                  <li>直径</li>
                  <li>瞳径</li>
                  <li>90°</li>
                  <li>
                    <input type="text" :disabled="topography" />
                  </li>
                  <li>180°</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson7.inputList.input5020"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>角径</li>
                  <li>45°</li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.extJson7.inputList.input5021"
                      maxlength="16"
                      :disabled="topography"
                    />
                  </li>
                  <li>135°</li>
                  <li>
                    <input type="text" :disabled="topography" />
                  </li>
                  <el-select
                    v-model="savemessage.extJson7.dropDown.dropDown16"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="topography"
                  >
                    <el-option label="规则" value="2062">规则</el-option>
                    <el-option label="对称" value="2063">对称</el-option>
                    <el-option label="葫芦形" value="2064">葫芦形</el-option>
                  </el-select>
                  <el-select
                    v-model="savemessage.extJson7.dropDown.dropDown17"
                    placeholder="请选择"
                    class="drop-down-box"
                    :disabled="topography"
                  >
                    <el-option label="高" value="2065">高</el-option>
                    <el-option label="中" value="2066">中</el-option>
                    <el-option label="低" value="2067">低</el-option>
                    <el-option label="无" value="2068">无</el-option>
                  </el-select>
                </ul>

                <!-- 眼压 -->
                <div class="role-definition">
                  <el-checkbox-group
                    v-model="savemessage.extJson7.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="140" :disabled="pressure"
                      >正常</el-checkbox
                    >
                    <el-checkbox label="141" :disabled="pressure"
                      >曲率</el-checkbox
                    >
                    <el-checkbox label="142" :disabled="pressure"
                      >散光</el-checkbox
                    >
                    <el-checkbox label="143" :disabled="pressure"
                      >圆锥</el-checkbox
                    >
                  </el-checkbox-group>
                </div>
                <!-- 扩瞳 -->
                <div class="role-definition mydriatic">
                  <el-checkbox-group
                    v-model="savemessage.extJson7.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="144" style="width: 140px !important"
                      >短效/快</el-checkbox
                    >
                    <el-checkbox label="145" style="width: 140px !important"
                      >中效/中速</el-checkbox
                    >
                    <el-checkbox label="146" style="width: 140px !important"
                      >长效/慢速</el-checkbox
                    >
                  </el-checkbox-group>
                  <p>其它：</p>
                  <input
                    type="text"
                    v-model="savemessage.extJson7.inputList.input5003"
                    maxlength="16"
                  />
                </div>
                <!-- 眼底 -->
                <div class="role-definition mydriatic">
                  <el-checkbox-group
                    v-model="savemessage.extJson7.checkList"
                    @change="handleCheckAllChange"
                  >
                    <el-checkbox label="148" :disabled="fundus"
                      >视盘</el-checkbox
                    >
                    <el-checkbox label="149" :disabled="fundus"
                      >黄斑</el-checkbox
                    >
                    <el-checkbox label="150" :disabled="fundus"
                      >视网膜</el-checkbox
                    >
                    <el-checkbox
                      label="151"
                      :disabled="fundus"
                      style="width: 100px !important"
                      >动脉血管</el-checkbox
                    >
                    <el-checkbox
                      label="152"
                      :disabled="fundus"
                      style="width: 100px !important"
                      >静脉血管</el-checkbox
                    >
                  </el-checkbox-group>
                  <p>其它：</p>
                  <input
                    type="text"
                    v-model="savemessage.extJson7.inputList.input5004"
                    maxlength="16"
                    :disabled="fundus"
                  />
                </div>
                <!-- 眼轴 -->
                <div class="axis-oculi">
                  <ul>
                    <li>总长</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson7.inputList.input5005"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>角膜</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson7.inputList.input5006"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>前轴</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson7.inputList.input5007"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>晶体</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson7.inputList.input5007"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                    <li>后轴</li>
                    <li>
                      <input
                        type="text"
                        v-model="savemessage.extJson7.inputList.input5009"
                        maxlength="16"
                      />
                    </li>
                    <li>um</li>
                  </ul>
                </div>
                <!-- OCT -->
                <div class="horizon">
                  <input
                    type="text"
                    v-model="savemessage.extJson7.inputList.input5010"
                    maxlength="16"
                  />
                </div>
                <!-- 视野 -->
                <div class="horizon">
                  <input
                    type="text"
                    v-model="savemessage.extJson7.inputList.input5012"
                    maxlength="16"
                  />
                </div>
              </div>
            </section>
            <section class="informed-consent">
              <div>
                <p>{{ savemessage.extJson6.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(6)"
                  :disabled="!voluntarilyFlag6"
                  >保存</vxe-button
                >
              </div>
              <div>
                <p>{{ savemessage.extJson7.inputList.trueUserName }}</p>
                <vxe-button
                  size="mini"
                  status="warning"
                  @click="save(7)"
                  :disabled="!voluntarilyFlag7"
                  >保存</vxe-button
                >
              </div>
              <!-- <p>检查人：</p> -->
              <!-- <input type="text" name id v-model="savemessage.checkjson.inputList.input169" maxlength="16" /> -->
              <!-- 检查师2 -->
              <!-- <el-select v-model="savemessage.checkjson.inputList.input169" placeholder="请选择">
                <el-option
                  v-for="item in doctorListL"
                  :key="item.keyId"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>-->
            </section>
            <!-- 病史 -->
            <section class="ocular-region">
              <div class="ocular-region-header">
                <div class="ocular-region-header-one">
                  <div>
                    <p style="line-height: 76px">即往史</p>
                    <p style="line-height: 37px">均速</p>
                    <p style="line-height: 37px">近速</p>
                  </div>
                </div>
              </div>
              <div class="ocular-region-left" style="width: 766px">
                <!-- 即往史 -->
                <ul class="ulO ulI">
                  <li style="width: 229px">初次发现</li>
                  <li style="width: 150px">首次配镜</li>
                  <li style="width: 75px">配镜</li>
                  <li style="width: 76px">间隔</li>
                  <li style="width: 229px">最后配镜</li>
                </ul>
                <ul class="ulO ulI">
                  <li>年龄</li>
                  <li>DS</li>
                  <li>疗法</li>
                  <li>配镜</li>
                  <li>DS</li>
                  <li>配量</li>
                  <li>间隔</li>
                  <li>加深</li>
                  <li>最后</li>
                  <li style="border-right: none">DS</li>
                </ul>
                <ul class="ulO ulI">
                  <!-- E41 -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input170"
                      maxlength="16"
                      :class="{
                        colorRde:
                          savemessage.checkjson.inputList.input170 > teacherAge,
                      }"
                    />
                  </li>
                  <!-- H41 -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input171"
                      maxlength="16"
                      pattern="[0-9]"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input172"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input173"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input174"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input175"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input176"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input177"
                      maxlength="16"
                    />
                  </li>
                  <!-- AB41 -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input001"
                      maxlength="16"
                    />
                  </li>
                  <!-- AD41 -->
                  <li style="border-right: none">
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input178"
                      maxlength="16"
                    />
                  </li>
                </ul>
                <!-- 均速 -->
                <ul class="ulI ulW">
                  <li>年均</li>
                  <!-- G42 -->
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDbalanceYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>月均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDbalanceMonth"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>日均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDbalanceDate"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDbalanceDateAdd"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li>天加</li>
                  <li style="width: 30px">1</li>
                  <li style="border-right: none">度</li>
                </ul>
                <!-- 近速 -->
                <ul class="ulI ulW">
                  <li>年均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDrapidYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>月均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDrapidMonth"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>日均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDrapidDate"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDrapidDateAdd"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li>天加</li>
                  <li style="width: 30px">1</li>
                  <li style="border-right: none">度</li>
                </ul>
              </div>
              <div class="ocular-region-left" style="border-right: none">
                <!-- 即往史 -->
                <ul class="ulO ulI">
                  <li style="width: 229px">初次发现</li>
                  <li style="width: 150px">首次配镜</li>
                  <li style="width: 75px">配镜</li>
                  <li style="width: 76px">间隔</li>
                  <li style="width: 229px">最后配镜</li>
                </ul>
                <ul class="ulO ulI">
                  <li>年龄</li>
                  <li>DS</li>
                  <li>疗法</li>
                  <li>配镜</li>
                  <li>DS</li>
                  <li>配量</li>
                  <li>间隔</li>
                  <li>加深</li>
                  <li>最后</li>
                  <li style="border-right: none">DS</li>
                </ul>
                <ul class="ulO ulI">
                  <!-- OS发现 -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input187"
                      maxlength="16"
                      :class="{
                        colorRde:
                          savemessage.checkjson.inputList.input187 > teacherAge,
                      }"
                    />
                  </li>
                  <!-- OSDS -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input20086"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input189"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input190"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input191"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input192"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input193"
                      maxlength="16"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input194"
                      maxlength="16"
                    />
                  </li>
                  <!-- OS最后 -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input195"
                      maxlength="16"
                    />
                  </li>
                  <!-- OSDS -->
                  <li>
                    <input
                      type="text"
                      v-model="savemessage.checkjson.inputList.input196"
                      maxlength="16"
                    />
                  </li>
                </ul>
                <!-- OS均速 -->
                <ul class="ulI ulW">
                  <li>年均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSbalanceYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>月均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSbalanceMonth"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>日均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSbalanceDate"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSbalanceDateAdd"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li>天加</li>
                  <li style="width: 30px">1</li>
                  <li style="border-right: none">度</li>
                </ul>
                <!-- OS近速 -->
                <ul class="ulI ulW">
                  <li>年均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSrapidYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>月均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSrapidMonth"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>日均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSrapidDate"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSrapidDateAdd"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li>天加</li>
                  <li style="width: 30px">1</li>
                  <li>度</li>
                </ul>
              </div>
            </section>
            <!-- <section class="informed-consent">
          <p>检查人：</p>
          <input type="text" name id v-model="savemessage.checkjson.inputList.input205" maxlength="16" />
            </section>-->
            <!-- 屈光 -->
            <section class="ocular-region">
              <div class="ocular-region-header">
                <div class="ocular-region-header-one">
                  <h1 style="height: 90px">屈光</h1>
                </div>
                <h1 style="height: 70px">生理</h1>
              </div>
              <div class="ocular-region-left" style="width: 766px">
                <div
                  class="role-definition role-definition-O quguang"
                  style="border-bottom: none"
                >
                  <el-checkbox-group
                    v-model="savemessage.checkjson.checkList"
                    @change="handleCheckAllChange"
                  >
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
                <div
                  class="role-definition role-definition-O quguang"
                  @change="handleCheckAllChange"
                >
                  <el-checkbox-group v-model="savemessage.checkjson.checkList">
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
                <!-- 生理 -->
                <div class="horizon" style="height: 35px">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input206"
                    maxlength="16"
                  />
                </div>
                <div class="horizon" style="height: 34px">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input207"
                    maxlength="16"
                  />
                </div>
              </div>
              <div class="ocular-region-left" style="border-right: none">
                <div
                  class="role-definition role-definition-O quguang"
                  style="border-bottom: none"
                >
                  <el-checkbox-group
                    v-model="savemessage.checkjson.checkList"
                    @change="handleCheckAllChange"
                  >
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
                <div class="role-definition role-definition-O quguang">
                  <el-checkbox-group
                    v-model="savemessage.checkjson.checkList"
                    @change="handleCheckAllChange"
                  >
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
                <!-- 生理 -->
                <div class="horizon" style="height: 35px">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input208"
                    maxlength="16"
                  />
                </div>
                <div class="horizon" style="height: 34px">
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.input209"
                    maxlength="16"
                  />
                </div>
              </div>
            </section>
            <!-- <section class="informed-consent">
          <p>检查人：</p>
          <input type="text" name id v-model="savemessage.checkjson.inputList.input210" maxlength="16" />
            </section>-->
            <!-- 预测 -->
            <section class="ocular-region">
              <div class="ocular-region-header">
                <div class="ocular-region-header-one">
                  <div>
                    <p style="line-height: 37px">自然</p>
                    <p style="line-height: 37px">干预</p>
                  </div>
                </div>
              </div>
              <div class="ocular-region-left" style="width: 767px">
                <!-- 自然 -->
                <ul class="ulI ulW">
                  <li style="width: 30px">设</li>
                  <!-- F49 -->
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input211"
                      maxlength="16"
                    />
                  </li>
                  <li>现龄</li>
                  <!-- J49 -->
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="teacherAge"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">岁</li>
                  <li>现有</li>
                  <!-- T49 -->
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.extJson3.inputList.input81"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>年均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDbalanceYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>余年</li>
                  <!-- Y49 -->
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDremainingYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">年</li>
                  <li>加深</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDdeepen"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px; border-right: none">D</li>
                </ul>
                <!-- 干预 -->
                <ul class="ulI ulW">
                  <li style="width: 30px">设</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input217"
                      maxlength="16"
                    />
                  </li>
                  <li>现龄</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="teacherAge"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">岁</li>
                  <li>现有</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.extJson3.inputList.input81"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>年均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input220"
                      maxlength="16"
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>余年</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDinterveneYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">年</li>
                  <li>加深</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oDintervenedeepen"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px; border-right: none">D</li>
                </ul>
              </div>
              <div class="ocular-region-left">
                <!-- 自然 -->
                <ul class="ulI ulW">
                  <li style="width: 30px">设</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input223"
                      maxlength="16"
                    />
                  </li>
                  <li>现龄</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="teacherAge"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">岁</li>
                  <li>现有</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input116"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>年均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSbalanceYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>余年</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSremainingYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">年</li>
                  <li>加深</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSdeepen"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px; border-right: none">D</li>
                </ul>
                <!-- 干预 -->
                <ul class="ulI ulW">
                  <li style="width: 30px">设</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input229"
                      maxlength="16"
                    />
                  </li>
                  <li>现龄</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="teacherAge"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">岁</li>
                  <li>现有</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="this.savemessage.checkjson.inputList.input116"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>年均</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="savemessage.checkjson.inputList.input232"
                      maxlength="16"
                    />
                  </li>
                  <li style="width: 30px">D</li>
                  <li>余年</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSinterveneYear"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px">年</li>
                  <li>加深</li>
                  <li>
                    <input
                      type="text"
                      name
                      id
                      v-model="oSintervenedeepen"
                      maxlength="16"
                      readonly
                    />
                  </li>
                  <li style="width: 30px; border-right: none">D</li>
                </ul>
              </div>
            </section>

            <!-- <section class="informed-consent">
          <p>检查人：</p>
          <input type="text" name id v-model="savemessage.checkjson.inputList.input235" maxlength="16" />
            </section>-->

            <section class="informed-footer">
              <h4>请选择矫治方案:</h4>
              <el-select
                v-model="savemessage.checkjson.value"
                clearable
                placeholder="请选择"
              >
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
                <section class="goniometer-left" style="width: 910px">
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
                        placeholder="请选择"
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
                        placeholder="请选择"
                        class="drop-down-box1"
                      >
                        <el-option label="追梦莱特" value="2074"
                          >追梦莱特</el-option
                        >
                        <el-option label="欧几里德" value="2075"
                          >欧几里德</el-option
                        >
                        <el-option label="阿尔法" value="2076"
                          >阿尔法</el-option
                        >
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
                            <el-checkbox label="1100">常3</el-checkbox>
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
                        <li>AW</li>
                        <li>KF</li>
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
                        placeholder="请选择"
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
                        placeholder="请选择"
                        class="drop-down-box1"
                      >
                        <el-option label="追梦莱特" value="2082"
                          >追梦莱特</el-option
                        >
                        <el-option label="欧几里德" value="2083"
                          >欧几里德</el-option
                        >
                        <el-option label="阿尔法" value="2084"
                          >阿尔法</el-option
                        >
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
                <section class="goniometer-left" style="width: 910px">
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
                        placeholder="请选择"
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
                        placeholder="请选择"
                        class="drop-down-box1"
                      >
                        <el-option label="追梦莱特" value="2090"
                          >追梦莱特</el-option
                        >
                        <el-option label="欧几里德" value="2091"
                          >欧几里德</el-option
                        >
                        <el-option label="阿尔法" value="2092"
                          >阿尔法</el-option
                        >
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
                      <li style="width: 58px">
                        <input
                          type="text"
                          name
                          id
                          v-model="savemessage.checkjson.inputList.input257"
                          maxlength="16"
                        />
                      </li>
                      <li style="width: 58px">
                        <input
                          type="text"
                          name
                          id
                          v-model="savemessage.checkjson.inputList.input258"
                          maxlength="16"
                        />
                      </li>
                      <li style="width: 58px">
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
                        placeholder="请选择"
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
                        placeholder="请选择"
                        class="drop-down-box1"
                      >
                        <el-option label="追梦莱特" value="2098"
                          >追梦莱特</el-option
                        >
                        <el-option label="欧几里德" value="2099"
                          >欧几里德</el-option
                        >
                        <el-option label="阿尔法" value="2100"
                          >阿尔法</el-option
                        >
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
                <div class="ocular-region-left" style="width: 778px">
                  <!-- 综合验光 -->
                  <ul class="ulO ulI">
                    <li>/</li>
                    <li>矫视</li>
                    <li>裸视</li>
                    <li>球镜</li>
                    <li>柱镜</li>
                    <li>轴位</li>
                    <li>凌镜</li>
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
                    <li>凌镜</li>
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
                <div class="ocular-region-left" style="width: 830px">
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

            <section class="inquiry" style="padding: 0">
              <div class="inquiry-header">
                <h1 style="height: 60px">签名</h1>
              </div>
              <div class="signatureImg" style="height: 60px">
                <img :src="signatureImg" alt="" />
                <div>
                  <vxe-button
                    status="warning"
                    class="save"
                    size="mini"
                    @click="signature"
                    :disabled="!signatureFlg"
                  >
                    开始签名</vxe-button
                  >
                  <vxe-button
                    status="warning"
                    class="save"
                    size="mini"
                    @click="signature"
                    :disabled="!signatureFlg"
                  >
                    重新签名</vxe-button
                  >
                </div>
              </div>
              <div class="checkbox doctoreNamen" style="height: 60px">
                <p>{{ savemessage.checkjson.inputList.trueUserName }}</p>
                <vxe-button
                  status="warning"
                  class="save"
                  size="mini"
                  @click="save(8)"
                  :disabled="!checkjson"
                  style="margin-left: 20px"
                  >保存</vxe-button
                >
                <vxe-button class="save" status="warning" @click="toImage"
                  >截图</vxe-button
                >
              </div>
            </section>
          </div>
        </main>
      </el-tab-pane>
    </el-tabs>
    <!-- <header>
      <vxe-button type="warning" class="save" @click="save">保 存</vxe-button>
    </header>-->
    <img :src="imgUrl" alt="" />
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

import html2canvas from "html2canvas";

export default {
  data() {
    return {
      imgUrl: "",
      signatureFlg: true,
      signatureImg: "",
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
          inputList: { trueUserName: "" },
          //诊断方案
          dropDown: {},
        },
        extJson2: {
          checkList: [],
          inputList: { trueUserName: "" },
          //诊断方案
          dropDown: {},
        },
        extJson3: {
          checkList: [],
          inputList: {
            input81: "",
            trueUserName3: "",
          },
          //诊断方案
          dropDown: {},
        },
        extJson4: {
          checkList: [],
          inputList: { trueUserName: "" },
          //诊断方案
          dropDown: {},
        },
        extJson5: {
          checkList: [],
          inputList: { trueUserName: "" },
          //诊断方案
          dropDown: {},
        },
        extJson6: {
          checkList: [],
          inputList: { trueUserName: "" },
          //诊断方案
          dropDown: {},
        },
        extJson7: {
          checkList: [],
          inputList: { trueUserName: "" },
          //诊断方案
          dropDown: {},
        },

        checkjson: {
          //复选框
          checkList: [],
          //输入框
          inputList: {
            adapterCheck: "",
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
    const organList = JSON.parse(
      window.localStorage.getItem("organizationList")
    );
    this.organCode = organList.organCode;
    this.selectCustomerById();
    this.getExamDetail();
    this.getCheckList();
    this.doctorIdByEmaKeyId();
  },
  mounted() {},
  updated() {
    this.emaKeyId = this.$route.query.emaKeyId;
  },
  beforeDestroy() {
    if (this.voluntarilyFlag1) {
      this.save(1);
    }
    if (this.voluntarilyFlag2) {
      this.save(2);
    }
    if (this.voluntarilyFlag3) {
      this.save(3);
    }
    if (this.voluntarilyFlag4) {
      this.save(4);
    }
    if (this.voluntarilyFlag5) {
      this.save(5);
    }
    if (this.voluntarilyFlag6) {
      this.save(6);
    }
    if (this.voluntarilyFlag7) {
      this.save(7);
    }
    if (this.checkjson) {
      this.save(8);
    }
  },
  methods: {
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
    gofundus() {
      const cusKeyId = JSON.parse(window.sessionStorage.getItem("cusKeyId"));
      this.$router.push({
        path: `/corneaImages?cusKeyId=${cusKeyId}&&patientId=${this.$route.query.patientId}`,
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
          }
          break;
        case 2:
          {
            saveFieldName = "extJson2";
            checkjson = this.savemessage.extJson2;
          }
          break;
        case 3:
          {
            saveFieldName = "extJson3";
            checkjson = this.savemessage.extJson3;
          }
          break;
        case 4:
          {
            saveFieldName = "extJson4";
            checkjson = this.savemessage.extJson4;
          }
          break;
        case 5:
          {
            saveFieldName = "extJson5";
            checkjson = this.savemessage.extJson5;
          }
          break;
        case 6:
          {
            saveFieldName = "extJson6";
            checkjson = this.savemessage.extJson6;
          }
          break;
        case 7:
          {
            saveFieldName = "extJson7";
            checkjson = this.savemessage.extJson7;
          }
          break;
        case 8:
          {
            saveFieldName = "";
            checkjson = this.savemessage.checkjson;
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
                this.websockSend(msg, this.createDoctorId);
              }
              break;
            case "adapter":
              {
                let msg = `【${this.$store.state.userInfo.TrueUserName}】已完成【${this.$store.state.target.name}】的适配检查`;
                this.websockSend(msg, this.createDoctorId);
              }
              break;
          }
        });
      }
    },
    async Setvadapterr() {
      if (this.adapterCheck == true) {
        this.savemessage.checkjson.inputList.adapterCheck = null; //取消选择设置为空
        this.adapterCheck = false;
      } else {
        var rolecode = this.$store.state.userInfo.RoleCode;
        // if (rolecode.indexOf("adapter") !== -1) {
        this.savemessage.checkjson.inputList.adapterCheck = this.$store.state.userInfo.TrueUserName; //如果角色符合设置为当前姓名

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
      console.log(res);
      if (res.code == 0) {
        const obj = res.data;
        for (let key in obj) {
          if (obj[key]) {
            console.log("+++++", key, obj[key]);
            this.savemessage[key] = JSON.parse(obj[key]);
          } else if (key == "checkjson") {
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
            this.savemessage[key] = {
              checkList: [],
              inputList: {
                trueUserName: this.$store.state.userInfo.TrueUserName,
              },
              //诊断方案
              dropDown: {},
            };
          }
        }
        console.log(this.savemessage);

        //this.savemessage = JSON.parse(res.data);
      }
    },
    //调用签名板
    async signature() {
      try {
        this.signatureFlg = false;
        this.signatureImg = "";
        const { data: res } = await Signature().then();
        console.log("签名板===", res);
        if (res.code == 0) {
          this.signatureImg = "data:image/jpg;base64," + res.message;
          this.signatureFlg = true;

          console.log("签名图片", this.signatureImg);
        } else {
          this.$message({
            message: res.message,
            type: "warning",
          });
        }
      } catch (err) {
        this.$message({
          message: "未开启服务",
          type: "warning",
        });
        //在此处理错误
      }
    },
    toImage() {
      html2canvas(this.$refs.imageWrapper).then((canvas) => {
        let dataURL = canvas.toDataURL("image/png");
        // 调用方法传入对应的参数
        this.getImgUrl({
          url: dataURL,
          content: "视光科技",
          cb: (base64Url) => {
            // 使用两种方法设置显示img的src都可以
            // document.getElementById('myimg').src = base64Url
          },
        });
      });
    },
    getImgUrl({
      url = "",
      textAlign = "left",
      textBaseline = "top",
      font = "18px Microsoft Yahei",
      fillStyle = "rgba(0,135,157, 0.5)",
      content = "我是默认的水印参数",
      cb = null,
      textX = 100,
      textY = 30,
    } = {}) {
      // 创建所需要添加水印的img图片
      const img = new Image();
      img.src = url;
      img.crossOrigin = "anonymous";
      img.onload = function () {
        // 创建canvas，并将创建的img绘制成canvas
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0);
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.font = font;
        ctx.fillStyle = fillStyle;
        ctx.rotate((Math.PI / 180) * 15);
        // 循环绘制水印
        // ctx.fillText(content, img.width - textX, img.height - textY)
        for (let i = 0; i < img.height / 120; i++) {
          for (let j = 0; j < img.width / 50; j++) {
            ctx.fillText(content, i * 200, j * 100, img.width);
          }
        }
        // 将绘制完成的canvas转换为base64的地址
        const base64Url = canvas.toDataURL();
        cb && cb(base64Url);
        this.imgUrl = base64Url;
        console.log("图片地址", this.imgUrl);
      };
    },
  },
  computed: {
    //判断用户的年龄
    teacherAge: function () {
      let birthdays = new Date(123);
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
        this.savemessage.extJson3.inputList.input81
      ) {
        try {
          let temp = eval(
            this.savemessage.checkjson.inputList.input170 +
              this.savemessage.checkjson.inputList.input171
          );
          let oDbalanceYear =
            this.savemessage.extJson3.inputList.input81 /
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
        this.savemessage.extJson3.inputList.input81
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
        this.savemessage.extJson3.inputList.input81
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
        this.savemessage.extJson3.inputList.input81
      ) {
        const oDbalanceDateAdd = 1 / (this.oDbalanceDate * 100);
        this.savemessage.checkjson.inputList.oDbalanceDateAdd = oDbalanceDateAdd;
        return oDbalanceDateAdd.toFixed(4);
      }
    },
    //OD近速年均
    oDrapidYear: function () {
      if (
        this.savemessage.extJson3.inputList.input81 &&
        this.savemessage.checkjson.inputList.input178 &&
        this.savemessage.checkjson.inputList.input001
      ) {
        let letf = eval(
          this.savemessage.extJson3.inputList.input81 -
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
        this.savemessage.extJson3.inputList.input81 &&
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
        this.savemessage.extJson3.inputList.input81 &&
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
        this.savemessage.extJson3.inputList.input81 &&
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
        this.savemessage.extJson3.inputList.input81
      ) {
        const oDdeepen = eval(
          this.oDbalanceYear * this.oDremainingYear +
            Number(this.savemessage.extJson3.inputList.input81)
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
          Number(this.savemessage.extJson3.inputList.input81) +
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
        this.savemessage.checkjson.inputList.input116
      ) {
        let temp = eval(
          this.savemessage.checkjson.inputList.input187 +
            this.savemessage.checkjson.inputList.input20086
        );
        let oSbalanceYear =
          this.savemessage.checkjson.inputList.input116 /
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
        this.savemessage.checkjson.inputList.input116 &&
        this.savemessage.checkjson.inputList.input196 &&
        this.savemessage.checkjson.inputList.input195
      ) {
        try {
          const oSbalanceYear =
            (this.savemessage.checkjson.inputList.input116 -
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
      if (
        this.oSremainingYear &&
        this.savemessage.checkjson.inputList.input116
      ) {
        const oSdeepen =
          this.oSbalanceYear * this.oSremainingYear +
          Number(this.savemessage.checkjson.inputList.input116);
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
        this.savemessage.checkjson.inputList.input116 &&
        this.savemessage.checkjson.inputList.input232
      ) {
        const oSintervenedeepen =
          Number(this.savemessage.checkjson.inputList.input116) +
          this.savemessage.checkjson.inputList.input232 * this.oSinterveneYear;
        this.savemessage.checkjson.inputList.oSintervenedeepen = oSintervenedeepen;
        return oSintervenedeepen.toFixed(4);
      }
    },
  },

  watch: {
    $route(newValue, oldValue) {
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
  },
};
</script>

<style lang="less" scope>
.newExamine {
  .el-tabs {
    width: 1672px;
  }
  .el-tabs--left {
    overflow: none !important;
  }
  margin-top: 20px;
  .drop-down-box1 {
    width: 51px;
    .el-input__suffix {
      right: 0px;
    }
    input {
      height: 51px;
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
  .drop-down-box {
    width: 94px;
    .el-input__suffix {
      right: 0px;
    }
    input {
      height: 26px;
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
      font-size: 14px;
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
      font-size: 14px;
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
          font-size: 14px;
          font-weight: 400;
          background: #f2f2f2;
        }
        p {
          text-align: center;
          line-height: 50px;
          width: 66px;
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
          font-size: 14px;
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
      width: 695px;
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
          width: 93px;
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
  .role-definition {
    display: flex;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    .vxe-radio {
      margin: 0;
      .vxe-radio__label {
        padding-left: 0;
        margin: 0 6px;
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
      width: 99%;
      height: 90%;
    }
  }
  .informed-footer {
    display: flex;
    line-height: 50px;
    h4 {
      margin: 0 20px;
      font-size: 20px;
    }
  }
  .checkboxs {
    color: #000;
    margin: 0 10px;
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
          width: 60px;
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
            width: 50px;
            height: 50px;
            border-right: 1px dashed #ccc;
            border-bottom: 1px dashed #ccc;
            text-align: center;
            line-height: 50px;
            input {
              width: 99%;
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
          width: 51px;
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
          width: 50px;
          height: 50px;
          border-right: 1px dashed #ccc;
          border-bottom: 1px dashed #ccc;
          input {
            width: 90%;
            height: 90%;
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
  .el-checkbox__label {
    padding-right: 2px;
  }

  .role-definition-O {
    .el-checkbox__label {
      padding-left: 0;
    }
    .el-checkbox {
      margin: 0 4px;
    }
  }
  .quguang {
    .el-checkbox {
      margin-right: 0 !important;
      width: 55px !important;
    }
  }
  span {
    color: #000;
    font-size: 14px;
  }
  p {
    color: #000;
    font-size: 14px;
  }
  ul {
    li {
      color: #000;
    }
  }
  padding-bottom: 70px;
  footer {
    border: 1px solid #ccc;
  }
  main {
    border: 1px solid #ccc;
    // 患者信息
    .patientInfo {
      display: flex;
      border-bottom: 1px dashed #555;
      .patientInfo-header {
        height: 137px;
        width: 70px;
        border-right: 1px solid #ccc;
        h1 {
          display: inline-block;
          height: 100%;
          text-align: center;
          line-height: 70px;
          writing-mode: vertical-lr;
          font-weight: 400;
          font-size: 14px;
          background: #f2f2f2;
        }
      }
      .patientInfo-body {
        ul {
          display: flex;
          margin: 5px;
          li {
            margin-right: 50px;
            display: flex;
            align-items: center;
            margin: 0;
            span {
              width: 80px;
              line-height: 28px;
              font-size: 14px;
              text-align: center;
            }
          }
        }
      }
    }
    //主诉
    .principle {
      background-color: #d2dff4;
      padding: 10px 10px 10px 10px;
      display: flex;
      h2 {
        border-bottom: 1px solid #ccc;
        text-align: center;
      }
      .principle-header {
        height: 180px;
        border-right: 1px solid #ccc;
        h1 {
          height: 180px;
          line-height: 70px;
          font-weight: 400;
          font-size: 14px;
          background: #f2f2f2;
        }
      }
      .principle-body {
        background-color: #f2f2f2;
        .principle-eye {
          height: 90px;
          border-bottom: 1px solid #ccc;
          display: flex;
          > span {
            width: 70px;
            line-height: 90px;
            text-align: center;
            border-right: 1px solid #ccc;
          }
          > div {
            width: 1386px;
            > :nth-child(1) {
              border-bottom: 1px solid #ccc;
            }
          }
          .checkboxO {
            display: flex;
            height: 45px;
            line-height: 45px;
            .checkbox-info {
              border-right: 1px solid #ccc;
              width: 65px;
              text-align: center;
              margin-right: 20px;
            }
            p {
              font-size: 12px;
              margin: 0 5px 0 10px;
            }
          }
        }
      }
    }
    //问诊
    .inquiry {
      display: flex;
      background: #d2dff4;
      padding: 0 10px 10px 10px;
      .inquiry-body {
        background-color: #f2f2f2;
        display: flex;
      }
    }
  }
  .colorRde {
    color: red;
  }
}

.liti {
  > li {
    height: 24px !important;
    line-height: 24px !important;
  }
  .drop-down-box {
    width: 49px !important;
  }
}

h3 {
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.addstyle {
  background-color: #d2dff4;
  padding: 10px;
}
.aroundEye {
  display: flex;
  :nth-child(1) {
    border-right: 1px solid #ccc;
    padding-left: 136px;
  }
  h2 {
    width: 60%;
    line-height: 35px;
    text-align: center;
  }
}
.doctoreNamen {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.jiazhu {
  .el-checkbox {
    margin-right: 0 !important;
    width: 70px !important;
  }
}
.signatureImg {
  height: 100%;
  display: flex;
  background: #fff;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 50px;
  img {
    margin-right: 20px;
    min-width: 100px;
    height: 100%;
  }
}
</style>