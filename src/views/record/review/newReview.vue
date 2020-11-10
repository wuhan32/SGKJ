<template>
  <!-- 复查档案 -->
  <div class="review">
    <header>
      <div class="header-left">
        日期:
        <el-date-picker
          v-model="savemessage.checkjson.inputList.input777"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          size="mini"
        ></el-date-picker>
      </div>
      <div class="header-right">
        <el-checkbox v-model="adapterCheck" @change="Setvadapterr"
          >检查人</el-checkbox
        >
        <!-- 检查人: -->
        <!-- 检查师1-->
        <!-- <el-select v-model="savemessage.checkjson.inputList.input138" placeholder="请选择" size="mini">
          <el-option
            v-for="item in doctorListL"
            :key="item.keyId"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>-->
        <!-- <input type="checkbox" class="checkbox" v-model="adapterCheck" @click="Setvadapterr" /> -->
        <input
          type="text"
          v-model="savemessage.checkjson.inputList.adapterCheck"
          maxlength="16"
          disabled
        />
        <!-- 检查师1-->
        <!-- <el-select v-model="savemessage.checkjson.inputList.input139" placeholder="请选择">
          <el-option
            v-for="item in doctorListL"
            :key="item.doctorId"
            :label="item.doctorName"
            :value="item.doctorName"
          ></el-option>
        </el-select>-->
      </div>
    </header>
    <div class="save">
      <vxe-button status="warning" @click="save(1)" :disabled="!voluntarilyFlag"
        >保存</vxe-button
      >
    </div>
    <main>
      <ul class="main-tab">
        <li>
          <h1 style="height: 185px">主诉</h1>
        </li>
        <li>
          <h1 style="height: 57px">问诊</h1>
        </li>
        <li>
          <h1 style="height: 150px">视力光度</h1>
        </li>
        <li>
          <h1 style="height: 150px">染色观察</h1>
        </li>
        <li>
          <h1 style="height: 181px">眼生理检测</h1>
        </li>
        <li>
          <h1 style="height: 88px">镜片检测</h1>
        </li>
        <li>
          <h1 style="height: 88px">处置 1</h1>
        </li>
        <li>
          <h1 style="height: 88px">处置2</h1>
        </li>
        <li>
          <h1 style="height: 88px">处置3</h1>
        </li>
        <li>
          <h1 style="height: 63px; border-bottom: none">处置4</h1>
        </li>
        <li></li>
      </ul>
      <ul class="main-header">
        <li>
          <ul>
            <li>眼别</li>
            <li>视力</li>
            <li>眼表</li>
            <li>感觉</li>
            <li>戴镜</li>
            <li>其它</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>治疗周期</li>
            <li>其它</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>裸眼视力</li>
            <li>片上视力</li>
            <li>片上光度</li>
            <li>片下光度</li>
            <li></li>
          </ul>
        </li>
        <li>
          <ul>
            <li>静态</li>
            <li>动态</li>
            <li>移动</li>
            <li>弧区</li>
            <li>片径</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>角膜地图</li>
            <li>眼压检测</li>
            <li>眼底照相</li>
            <li>眼轴检测</li>
            <li>OCT检测</li>
            <li>裂隙灯</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>镜片状况</li>
            <li>表面状况</li>
            <li>边缘状况</li>
          </ul>
        </li>
        <li
          style="
            line-height: 92px;
            font-size: 15px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
          "
        >
          据角膜状况
        </li>
        <li
          style="
            line-height: 92px;
            font-size: 15px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
          "
        >
          据镜片状况
        </li>
        <li
          style="
            line-height: 92px;
            font-size: 15px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
          "
        >
          据视力状况
        </li>
        <li
          style="
            line-height: 78px;
            font-size: 15px;
            border-right: 1px solid #ccc;
          "
        >
          据护理产品
        </li>
      </ul>

      <ul class="main-body" style="border-right: 1px solid #ccc">
        <li>
          <ul>
            <li style="font-weight: 700">右(OD)</li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="1">正常</el-checkbox>
                <el-checkbox label="2">重影</el-checkbox>
                <el-checkbox label="3">虚影</el-checkbox>
                <el-checkbox label="4">不清</el-checkbox>
                <el-checkbox label="5">波动</el-checkbox>
                <el-checkbox label="6">远/近青</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="7">眼红</el-checkbox>
                <el-checkbox label="8">水肿</el-checkbox>
                <el-checkbox label="9">出血</el-checkbox>
                <el-checkbox label="10">流泪</el-checkbox>
                <el-checkbox label="11">分泌物多</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="12">痒</el-checkbox>
                <el-checkbox label="13">痛</el-checkbox>
                <el-checkbox label="14">干</el-checkbox>
                <el-checkbox label="15">酸</el-checkbox>
                <el-checkbox label="16">涨</el-checkbox>
                <el-checkbox label="17">畏光</el-checkbox>
                <el-checkbox label="18">异物感</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="19">戴</el-checkbox>
                <el-checkbox label="20">摘</el-checkbox>
                <el-checkbox label="21">难</el-checkbox>
                <el-checkbox label="22">干</el-checkbox>
                <el-checkbox label="23">痒</el-checkbox>
                <el-checkbox label="24">疼</el-checkbox>
                <el-checkbox label="25">异物感</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu1"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <ul>
                <li>总</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2"
                    maxlength="16"
                  />
                </li>
                <li>年</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu3"
                    maxlength="16"
                  />
                </li>
                <li>月</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu4"
                    maxlength="16"
                  />
                </li>
                <li>连续</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu5"
                    maxlength="16"
                  />
                </li>
                <li>日</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu6"
                    maxlength="16"
                  />
                </li>
                <li>昨夜</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu7"
                    maxlength="16"
                  />
                </li>
                <li>H</li>
              </ul>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu8"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.leftNakedEyeVision"
                maxlength="16"
                :disabled="optometry"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.extJson4.inputList.leftOnChipVision"
                maxlength="16"
                :disabled="optometry"
              />
            </li>
            <li>
              <ul>
                <li>电脑:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="savemessage.extJson4.inputList.leftOnChipBreadth"
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>
                <li>插片:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="savemessage.extJson4.inputList.leftOnChipBreadth1"
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>电脑:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="savemessage.extJson4.inputList.leftDowChipBreadth"
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>

                <li>插片:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="savemessage.extJson4.inputList.leftDowChipBreadth1"
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>
              </ul>
            </li>
            <li style="text-align: right">
              <vxe-button status="warning" @click="save(8)" size="mini"
                >保存</vxe-button
              >
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="200">偏上</el-checkbox>
                <el-checkbox label="201">偏下</el-checkbox>
                <el-checkbox label="202">偏内</el-checkbox>
                <el-checkbox label="203">偏外</el-checkbox>
                <el-checkbox label="204">居中</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="205">上下顺滑</el-checkbox>
                <el-checkbox label="206">左右摇摆</el-checkbox>
                <el-checkbox label="207">C型外旋</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="208">&lt;1mm</el-checkbox>
                <el-checkbox label="209">1-2mm</el-checkbox>
                <el-checkbox label="210">2-3mm</el-checkbox>
                <el-checkbox label="220">&gt;3mm</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <ul>
                <li>BC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2002"
                    maxlength="16"
                  />
                </li>
                <li>RC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2003"
                    maxlength="16"
                  />
                </li>
                <li>AC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2004"
                    maxlength="16"
                  />
                </li>
                <li>PC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2005"
                    maxlength="16"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="245">过小</el-checkbox>
                <el-checkbox label="246">偏小</el-checkbox>
                <el-checkbox label="247">适中</el-checkbox>
                <el-checkbox label="248">偏大</el-checkbox>
                <el-checkbox label="249">过大</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu19"
                maxlength="16"
                :disabled="topography"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu20"
                maxlength="16"
              />mmHG
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu21"
                maxlength="16"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu22"
                maxlength="16"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu23"
                maxlength="16"
              />
            </li>
            <li>
              <ul>
                <li>角膜:</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu24"
                    maxlength="16"
                    :disabled="Slitlamp"
                  />
                </li>
                <li>结膜:</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu25"
                    maxlength="16"
                    :disabled="Slitlamp"
                  />
                </li>
                <li>其它</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu26"
                    maxlength="16"
                    :disabled="Slitlamp"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="26" :disabled="inspection"
                  >新镜</el-checkbox
                >
                <el-checkbox label="27" :disabled="inspection"
                  >旧镜</el-checkbox
                >
                <el-checkbox label="28" :disabled="inspection"
                  >补镜</el-checkbox
                >
                <el-checkbox label="29" :disabled="inspection"
                  >换镜</el-checkbox
                >
                <el-checkbox label="30" :disabled="inspection"
                  >备镜</el-checkbox
                >
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="31" :disabled="inspection"
                  >光洁</el-checkbox
                >
                <el-checkbox label="32" :disabled="inspection"
                  >划痕</el-checkbox
                >
                <el-checkbox label="33" :disabled="inspection"
                  >油污</el-checkbox
                >
                <el-checkbox label="34" :disabled="inspection"
                  >污染</el-checkbox
                >
                <el-checkbox label="35" :disabled="inspection"
                  >破损</el-checkbox
                >
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="36" :disabled="inspection"
                  >光滑</el-checkbox
                >
                <el-checkbox label="37" :disabled="inspection"
                  >损伤</el-checkbox
                >
                <el-checkbox label="38" :disabled="inspection"
                  >裂痕</el-checkbox
                >
                <el-checkbox label="39" :disabled="inspection"
                  >变形</el-checkbox
                >
                <el-checkbox label="40" :disabled="inspection"
                  >破损</el-checkbox
                >
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="41">正常</el-checkbox>
                <el-checkbox label="42">暂停</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="43">停戴</el-checkbox>
                <el-checkbox label="44">用药</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu27"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="45">正常佩戴</el-checkbox>
                <el-checkbox label="46">间断佩戴</el-checkbox>
                <el-checkbox label="47">清洁消毒</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="48">抛光修片</el-checkbox>
                <el-checkbox label="49">更换镜片</el-checkbox>
                <el-checkbox label="50">旧镜回收</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu28"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li style="display: flex">
              <span style="margin: 0 20px">片位:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="51">上调</el-checkbox>
                <el-checkbox label="52">下调</el-checkbox>
                <el-checkbox label="53">内调</el-checkbox>
                <el-checkbox label="54">外调</el-checkbox>
              </el-checkbox-group>
            </li>
            <li style="display: flex">
              <span style="margin: 0 20px">姿势:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="55">上调</el-checkbox>
                <el-checkbox label="56">下调</el-checkbox>
                <el-checkbox label="57">内调</el-checkbox>
                <el-checkbox label="58">外调</el-checkbox>
              </el-checkbox-group>
            </li>
            <li style="display: flex">
              <span style="margin: 0 20px">时长:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="59">上调</el-checkbox>
                <el-checkbox label="60">下调</el-checkbox>
                <el-checkbox label="61">内调</el-checkbox>
                <el-checkbox label="62">外调</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li style="display: flex">
              <span style="margin: 0 20px">用液:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="63">润</el-checkbox>
                <el-checkbox label="64">护</el-checkbox>
                <el-checkbox label="65">洁</el-checkbox>
                <el-checkbox label="66">购买</el-checkbox>
                <el-checkbox label="67">更换</el-checkbox>
                <el-checkbox label="68">保质期</el-checkbox>
              </el-checkbox-group>
            </li>
            <li style="display: flex; border-bottom: none">
              <span style="margin: 0 20px">用具:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="69">棒</el-checkbox>
                <el-checkbox label="70">盒</el-checkbox>
                <el-checkbox label="71">购买</el-checkbox>
                <el-checkbox label="72">更换</el-checkbox>
                <el-checkbox label="73">保质期</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="main-body">
        <li>
          <ul>
            <li style="font-weight: 700">左(OS)</li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="74">正常</el-checkbox>
                <el-checkbox label="75">重影</el-checkbox>
                <el-checkbox label="76">虚影</el-checkbox>
                <el-checkbox label="77">不清</el-checkbox>
                <el-checkbox label="78">波动</el-checkbox>
                <el-checkbox label="79">远/近青</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="80">眼红</el-checkbox>
                <el-checkbox label="81">水肿</el-checkbox>
                <el-checkbox label="82">出血</el-checkbox>
                <el-checkbox label="83">流泪</el-checkbox>
                <el-checkbox label="84">分泌物多</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="85">痒</el-checkbox>
                <el-checkbox label="86">痛</el-checkbox>
                <el-checkbox label="87">干</el-checkbox>
                <el-checkbox label="88">酸</el-checkbox>
                <el-checkbox label="89">涨</el-checkbox>
                <el-checkbox label="90">畏光</el-checkbox>
                <el-checkbox label="91">异物感</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="92">戴</el-checkbox>
                <el-checkbox label="93">摘</el-checkbox>
                <el-checkbox label="94">难</el-checkbox>
                <el-checkbox label="95">干</el-checkbox>
                <el-checkbox label="96">痒</el-checkbox>
                <el-checkbox label="97">疼</el-checkbox>
                <el-checkbox label="98">异物感</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu29"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <ul>
                <li>总</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu30"
                    maxlength="16"
                  />
                </li>
                <li>年</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu31"
                    maxlength="16"
                  />
                </li>
                <li>月</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu32"
                    maxlength="16"
                  />
                </li>
                <li>连续</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu33"
                    maxlength="16"
                  />
                </li>
                <li>日</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu34"
                    maxlength="16"
                  />
                </li>
                <li>昨夜</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu35"
                    maxlength="16"
                  />
                </li>
                <li>H</li>
              </ul>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu36"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.rightNakedEyeVision"
                maxlength="16"
                :disabled="optometry"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.extJson5.inputList.rightOnChipVision"
                maxlength="16"
                :disabled="optometry"
              />
            </li>
            <li>
              <ul>
                <li>电脑:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="savemessage.extJson5.inputList.rightOnChipBreadth"
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>

                <li>插片:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="
                      savemessage.extJson5.inputList.rightOnChipBreadth1
                    "
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>电脑:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="
                      savemessage.extJson5.inputList.rightDowChipBreadth
                    "
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>

                <li>插片:</li>
                <li style="width: 200px">
                  <input
                    type="text"
                    v-model="
                      savemessage.extJson5.inputList.rightDowChipBreadth1
                    "
                    maxlength="16"
                    :disabled="optometry"
                  />
                </li>
              </ul>
            </li>
            <li style="text-align: right">
              <vxe-button status="warning" @click="save(9)" size="mini"
                >保存</vxe-button
              >
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="226">偏上</el-checkbox>
                <el-checkbox label="227">偏下</el-checkbox>
                <el-checkbox label="228">偏内</el-checkbox>
                <el-checkbox label="229">偏外</el-checkbox>
                <el-checkbox label="230">居中</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="231">上下顺滑</el-checkbox>
                <el-checkbox label="232">左右摇摆</el-checkbox>
                <el-checkbox label="233">C型外旋</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="234">&lt;1mm</el-checkbox>
                <el-checkbox label="235">1-2mm</el-checkbox>
                <el-checkbox label="236">2-3mm</el-checkbox>
                <el-checkbox label="237">&gt;3mm</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <ul>
                <li>BC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2012"
                    maxlength="16"
                  />
                </li>
                <li>RC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2013"
                    maxlength="16"
                  />
                </li>
                <li>AC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2014"
                    maxlength="16"
                  />
                </li>
                <li>PC</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu2015"
                    maxlength="16"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="238">过小</el-checkbox>
                <el-checkbox label="239">偏小</el-checkbox>
                <el-checkbox label="240">适中</el-checkbox>
                <el-checkbox label="241">偏大</el-checkbox>
                <el-checkbox label="242">过大</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li></li>
        <li>
          <ul style="en">
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu47"
                maxlength="16"
                :disabled="topography"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu48"
                maxlength="16"
              />mmHG
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu49"
                maxlength="16"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu50"
                maxlength="16"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu51"
                maxlength="16"
              />
            </li>
            <li>
              <ul>
                <li>角膜:</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu52"
                    maxlength="16"
                    :disabled="Slitlamp"
                  />
                </li>
                <li>结膜:</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu53"
                    maxlength="16"
                    :disabled="Slitlamp"
                  />
                </li>
                <li>其它</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu54"
                    maxlength="16"
                    :disabled="Slitlamp"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="99" :disabled="inspection"
                  >新镜</el-checkbox
                >
                <el-checkbox label="100" :disabled="inspection"
                  >旧镜</el-checkbox
                >
                <el-checkbox label="101" :disabled="inspection"
                  >补镜</el-checkbox
                >
                <el-checkbox label="102" :disabled="inspection"
                  >换镜</el-checkbox
                >
                <el-checkbox label="103" :disabled="inspection"
                  >备镜</el-checkbox
                >
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="104" :disabled="inspection"
                  >光洁</el-checkbox
                >
                <el-checkbox label="105" :disabled="inspection"
                  >划痕</el-checkbox
                >
                <el-checkbox label="106" :disabled="inspection"
                  >油污</el-checkbox
                >
                <el-checkbox label="107" :disabled="inspection"
                  >污染</el-checkbox
                >
                <el-checkbox label="108" :disabled="inspection"
                  >破损</el-checkbox
                >
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="109" :disabled="inspection"
                  >光滑</el-checkbox
                >
                <el-checkbox label="110" :disabled="inspection"
                  >损伤</el-checkbox
                >
                <el-checkbox label="111" :disabled="inspection"
                  >裂痕</el-checkbox
                >
                <el-checkbox label="112" :disabled="inspection"
                  >变形</el-checkbox
                >
                <el-checkbox label="113" :disabled="inspection"
                  >破损</el-checkbox
                >
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="114">正常</el-checkbox>
                <el-checkbox label="115">暂停</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="116">停戴</el-checkbox>
                <el-checkbox label="117">用药</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu55"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="118">正常佩戴</el-checkbox>
                <el-checkbox label="119">间断佩戴</el-checkbox>
                <el-checkbox label="120">清洁消毒</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="121">抛光修片</el-checkbox>
                <el-checkbox label="122">更换镜片</el-checkbox>
                <el-checkbox label="123">旧镜回收</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.checkjson.inputList.intpu56"
                maxlength="16"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li style="display: flex">
              <span style="margin: 0 20px">片位:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="124">上调</el-checkbox>
                <el-checkbox label="125">下调</el-checkbox>
                <el-checkbox label="126">内调</el-checkbox>
                <el-checkbox label="127">外调</el-checkbox>
              </el-checkbox-group>
            </li>
            <li style="display: flex">
              <span style="margin: 0 20px">姿势:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="128">上调</el-checkbox>
                <el-checkbox label="129">下调</el-checkbox>
                <el-checkbox label="130">内调</el-checkbox>
                <el-checkbox label="131">外调</el-checkbox>
              </el-checkbox-group>
            </li>
            <li style="display: flex">
              <span style="margin: 0 20px">时长:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="132">上调</el-checkbox>
                <el-checkbox label="133">下调</el-checkbox>
                <el-checkbox label="134">内调</el-checkbox>
                <el-checkbox label="135">外调</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li style="display: flex">
              <span style="margin: 0 20px">用液:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="136">润</el-checkbox>
                <el-checkbox label="137">护</el-checkbox>
                <el-checkbox label="138">洁</el-checkbox>
                <el-checkbox label="139">购买</el-checkbox>
                <el-checkbox label="140">更换</el-checkbox>
                <el-checkbox label="141">保质期</el-checkbox>
              </el-checkbox-group>
            </li>
            <li style="display: flex; border-bottom: none">
              <span style="margin: 0 20px">用具:</span>
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="142">棒</el-checkbox>
                <el-checkbox label="143">盒</el-checkbox>
                <el-checkbox label="144">购买</el-checkbox>
                <el-checkbox label="145">更换</el-checkbox>
                <el-checkbox label="146">保质期</el-checkbox>
              </el-checkbox-group>
            </li>
          </ul>
        </li>
      </ul>
    </main>
    <footer style="border-top: none">
      <ul class="main-tab">
        <li>
          <h1 style="height: 88px; border-bottom: none">提醒事项</h1>
        </li>
      </ul>
      <ul class="main-header">
        <li>
          <ul>
            <li>下次复查</li>
            <li>清洁消毒</li>
            <li style="border-bottom: none">镜片更换</li>
          </ul>
        </li>
      </ul>
      <ul class="main-body">
        <li>
          <ul>
            <li style="width: 1337px">
              <ul class="xiacif">
                <li style="width: 150px">
                  <input
                    type="text"
                    name
                    id
                    v-model="savemessage.checkjson.inputList.intpu57"
                    maxlength="16"
                    style="width: 150px"
                  />
                </li>
                <li>日</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu58"
                    maxlength="16"
                  />
                </li>
                <li>月</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.checkjson.inputList.intpu59"
                    maxlength="16"
                  />
                </li>
                <li>其它</li>
                <li>
                  <input
                    type="text"
                    name
                    id
                    v-model="savemessage.checkjson.inputList.intpu60"
                    maxlength="16"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li style="width: 1337px">
              <el-checkbox-group v-model="savemessage.checkjson.checkList">
                <el-checkbox label="74" style="width: 180px !important"
                  >温开水洗镜</el-checkbox
                >
                <el-checkbox label="75" style="width: 180px !important"
                  >护理,消毒分开使用双联盒</el-checkbox
                >
                <el-checkbox label="76" style="width: 180px !important"
                  >每周消毒一次</el-checkbox
                >
                <el-checkbox label="77" style="width: 180px !important"
                  >清洁消毒后再反复查</el-checkbox
                >
              </el-checkbox-group>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li style="border-bottom: 0px solid #ccc" class="footer-li">
              <ul>
                <li>
                  <el-checkbox-group v-model="savemessage.checkjson.checkList">
                    <el-checkbox label="78">右镜</el-checkbox>
                  </el-checkbox-group>
                </li>
                <li>
                  <el-checkbox-group v-model="savemessage.checkjson.checkList">
                    <el-checkbox label="79">左镜</el-checkbox>
                  </el-checkbox-group>
                </li>
                <li style="width: 160px">建议时间:</li>
                <el-date-picker
                  v-model="savemessage.checkjson.inputList.intpu61"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  size="mini"
                ></el-date-picker>
                <!-- <li>
                  <input type="text" name id v-model="savemessage.checkjson.inputList.intpu61" maxlength="16" />
                </li>
                <li>年</li>
                <li>
                  <input type="text" name id v-model="savemessage.checkjson.inputList.intpu62" maxlength="16" />
                </li>
                <li>月</li>
                <li>
                  <input type="text" name id v-model="savemessage.checkjson.inputList.intpu63" maxlength="16" />
                </li>-->
                <!-- <li>日左右</li> -->
                <li>其它</li>
                <li>
                  <input
                    type="text"
                    name
                    id
                    v-model="savemessage.checkjson.inputList.intpu64"
                    maxlength="16"
                    style="width: 250px"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
    <div>
      <span style="font-size: 15px">其它</span>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="savemessage.checkjson.inputList.intpu65"
        maxlength="30"
        show-word-limit
      ></el-input>
    </div>
  </div>
</template>

<script>
//展示组件  眼压 眼底照片(眼底,眼轴) 生物(otc)  镜片检测
import jingpianJiance from "./components/jingpianJiance";
import jiaomodixing from "../common/jiaomodixing";
import zongheYanguang from "../common/zongheYanguang";
import liexiDeng from "../common/liexiDeng";

import {
  SelectCustomerById,
  GetCustomerExamListByEmaKeyid,
  GetDoctorsByOrganCode,
  GetCheckList,
} from "@/api/clientRecord";
import {
  AddExamItemDetail,
  GetExamDetail,
  GetDoctorIdByEmaKeyId,
} from "@/api/doctorRecord";
import { Form } from "element-ui";

import ROLEID from "../../../utils/roleId";

export default {
  data() {
    return {
      voluntarilyFlag: false,
      doctorListL: [],
      organCode: "",
      topography: true, //角膜是否可用
      Slitlamp: true, //裂隙是否可用
      inspection: true, //镜片检测
      optometry: true, //综合验光
      adapterCheck: false, //检查人
      //用户信息
      formInline: {},
      value: "",
      savemessage: {
        checkjson: {
          checkList: [],
          inputList: {
            input777: this.getNowTime(),
            adapterCheck: "",
          },
        },

        extJson4: {
          checkList: [],
          inputList: {
            trueUserName: "",
            leftNakedEyeVision: "",
            leftOnChipVision: "",
            leftOnChipBreadth: "",
            leftOnChipBreadth1: "",
            leftDowChipBreadth: "",
            leftDowChipBreadth1: "",
          },
        },
        extJson5: {
          checkList: [],
          inputList: {
            trueUserName: "",
            rightNakedEyeVision: "",
            rightOnChipVision: "",
            rightOnChipBreadth: "",
            rightDowChipBreadth: "",
            rightOnChipBreadth1: "",
            rightDowChipBreadth1: "",
          },
        },
      },
      emaKeyId: "",
      createDoctorId: "",
      getExamitemList: [],
    };
  },
  created() {
    this.emaKeyId = this.$route.query.emaKeyId;
    const organList = JSON.parse(
      window.localStorage.getItem("organizationList")
    );
    this.organCode = organList.organCode;
    this.selectCustomerById();
    this.getExamDetail();

    this.getCheckList();
    this.getExamitem();
    this.doctorIdByEmaKeyId();
  },
  updated() {
    this.emaKeyId = this.$route.query.emaKeyId;
  },

  mounted() {},
  beforeDestroy() {
    if (this.voluntarilyFlag) {
      //this.save();
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
    //检查人列表
    async getCheckList() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.CHECKER
      ).then();
      this.doctorListL = res.data;
      console.log("检查人", res.data);
    },

    //获取到当前检查档案的信息,然后设置可选以及不可选的项目
    async getExamitem() {
      //console.log("输出emakeyid:", this.$route.query.emaKeyId);
      //进来页面需要重新禁用
      this.topography = true;
      this.optometry = true;
      this.Slitlamp = true;
      this.inspection = true;
      // console.log("调用接口前打印输出字段:",this.topography,this.optometry,this.Slitlamp,this.inspection);
      const { data: res } = await GetCustomerExamListByEmaKeyid(
        this.organCode,
        this.$route.query.emaKeyId
      ).then();
      this.getExamitemList = res.data;
      //console.log(res.data);

      this.getExamitemList.forEach((element) => {
        //console.log("输出ITEM:",element);
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
        if (element.examItemId == 11) {
          //镜片检测
          this.inspection = false;
        }
      });
      //  console.log("调用接口后打印输出字段:",this.topography,this.optometry,this.Slitlamp,this.inspection);
    },
    handleCheckAllChange(value) {},

    //保存新建档案
    async save(mark) {
      let saveFieldName = "";
      let checkjson = {};
      switch (mark) {
        case 1:
          {
            checkjson = this.savemessage.checkjson;
          }
          break;
        case 8:
          {
            checkjson = this.savemessage.extJson4;
            saveFieldName = "extJson4";
          }
          break;
        case 9:
          {
            checkjson = this.savemessage.extJson5;
            saveFieldName = "extJson5";
          }
          break;
      }
      console.log("=================", checkjson, mark);
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
        this.voluntarilyFlag = false;
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

    async Setvadapterr() {
      //检查人
      if (this.adapterCheck != true) {
        this.savemessage.checkjson.inputList.adapterCheck = null; //取消选择设置为空
        // this.adapterCheck = false;
        this.voluntarilyFlag = true;
      } else {
        // var rolecode = this.$store.state.userInfo.RoleCode;
        // if (rolecode.indexOf("adapter") !== -1) {
        this.savemessage.checkjson.inputList.adapterCheck = this.$store.state.userInfo.TrueUserName; //如果角色符合设置为当前姓名
        this.voluntarilyFlag = true;
        // }
        //this.adapterCheck = true;
      }
    },

    //查看病例信息/api/EMR/GetExamItemDetail
    async getExamDetail() {
      const { data: res } = await GetExamDetail(
        this.$route.query.emaKeyId
      ).then();
      this.voluntarilyFlag = false;
      this.adapterCheck = false;
      console.log("============", res);
      if (res.code == 0) {
        const obj = res.data;
        for (let key in obj) {
          if (obj[key]) {
            console.log("+++++", key, obj[key]);
            this.savemessage[key] = JSON.parse(obj[key]);
          } else if (key == "checkjson") {
            // this.savemessage.checkjson = {
            //   checkjson: {
            //     checkList: [],
            //     inputList: {
            //       input777: this.getNowTime(),
            //       adapterCheck: "",
            //     },
            //   },
            // };
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

      // if (res.data.checkjson) {
      //   this.savemessage.checkjson = JSON.parse(res.data.checkjson);
      // } else {
      //   this.savemessage.checkjson = {
      //     checkList: [],
      //     inputList: { input777: this.getNowTime() },
      //   };
      // }
      if (
        this.savemessage.checkjson.inputList.adapterCheck == null ||
        this.savemessage.checkjson.inputList.adapterCheck == ""
      ) {
        //判断适配师是否有值
        this.adapterCheck = false;
      } else {
        this.adapterCheck = true;
      }
    },
    //处理默认选中当前日期
    getNowTime() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth(); //得到月份
      var date = now.getDate(); //得到日期
      var hour = " 00:00:00"; //默认时分秒 如果传给后台的格式为年月日时分秒，就需要加这个，如若不需要，此行可忽略
      month = month + 1;
      month = month.toString().padStart(2, "0");
      date = date.toString().padStart(2, "0");
      var defaultDate = `${year}-${month}-${date}${hour}`;
      console.log(defaultDate);
      return defaultDate;
      this.$set(this.info, "stockDate", defaultDate);
    },
  },
  watch: {
    $route(newValue, oldValue) {
      if (this.voluntarilyFlag) {
        //this.save();
      }
      this.getExamDetail();
      this.getExamitem();
    },
    savemessage: {
      handler(val, oldVal) {
        if (val == oldVal) {
          this.voluntarilyFlag = true;
        }
      },
      deep: true, //true 深度监听
    },
  },
};
</script>

<style lang="less" scoped>
.review {
  width: 1490px;
  padding-bottom: 70px;
  margin: 10px;
  padding: 2px;
  background-color: #d2dff4;
  header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    .header-right {
      .checkbox {
        width: 20px;
      }
    }
  }
  .save {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    background-color: #f2f2f2;
    .vxe-button {
      position: absolute;
      bottom: 10px;
      right: 150px;
      width: 100px;
      span {
        color: #fff;
      }
    }
  }
  main,
  footer {
    background-color: #f2f2f2;
    display: flex;
    border: 1px solid #ccc;
    h1 {
      display: inline-block;
      text-align: center;
      writing-mode: vertical-lr;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      color: #000;
    }
    .main-tab {
    }
    .main-header {
      border-left: 1px solid #ccc;
      > li {
        text-align: center;
        color: #000;
        li {
          height: 30px;
          left: 30px;
          width: 100px;
          text-align: center;
          line-height: 30px;
          font-size: 15px;
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .main-body {
      > li {
        > ul {
          > li {
            height: 30px;
            left: 30px;
            width: 668px;
            line-height: 30px;
            text-align: left;
            font-size: 15px;
            border-bottom: 1px solid #ccc;
            color: #000;
            input {
              width: 97%;
              height: 97%;
              text-align: center;
            }
            > ul {
              display: flex;
              > li {
                text-align: center;
                width: 100px;
                margin: 0 auto;
                input {
                  width: 98%;
                  height: 98%;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
.el-checkbox {
  margin: 0 10px;
}
.footer-li {
  ul {
    display: flex;
    li {
      height: 30px;
    }
  }
}
.xiacif {
  li {
    margin: 0 !important;
  }
}
</style>