<template>
  <!-- 新镜染色 -->
  <div class="Adaptive">
    <header>
      <vxe-button
        class="save"
        status="warning"
        @click="save"
        :disabled="!voluntarilyFlag"
        >保存</vxe-button
      >
    </header>
    <div class="Adaptive-header">
      <ul class="Adaptive-header-left">
        <li>日期</li>
        <li>眼别</li>
        <li style="line-height: 61px">镜片规格</li>
      </ul>
      <ul class="Adaptive-header-right" style="border-right: 1px solid #ccc">
        <li>
          <ul>
            <li>
              <el-date-picker
                v-model="savemessage.inputList.input1"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                size="mini"
              ></el-date-picker>
              <!-- <input type="text" v-model="savemessage.inputList.input1" maxlength="16" /> -->
            </li>
            <li>品牌</li>
            <li style="border-right: 0px solid #ccc">
              <el-select v-model="savemessage.inputList.dropDown19" size="mini">
                <el-option label="追梦莱特" value="2074">追梦莱特</el-option>
                <el-option label="欧几里德" value="2075">欧几里德</el-option>
                <el-option label="阿尔法" value="2076">阿尔法</el-option>
              </el-select>
            </li>
          </ul>
        </li>
        <li style="border-bottom: 1px solid #ccc; border-right: 0px solid #ccc">
          OD
        </li>
        <li>
          <ul>
            <li>SPH</li>
            <li>AC/KF</li>
            <li>AC/KS</li>
            <li>OAD</li>
            <li>ID</li>
          </ul>
          <ul>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input3"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input4"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input5"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input6"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input6666"
                maxlength="555"
                :disabled="verifierDisable"
              />
            </li>
          </ul>
        </li>
      </ul>
      <!-- 设置自己为检查人的部分 -->
      <ul class="Adaptive-header-right">
        <li>
          <ul>
            <li>
              <el-checkbox v-model="adapterCheck" @change="Setvadapterr"
                >适配师</el-checkbox
              >
            </li>
            <li>
              <!-- <el-select v-model="savemessage.inputList.input7" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in doctorListL"
                  :key="item.keyId"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>-->
              <div>
                <!-- <input
                  type="checkbox"
                  v-model="adapterCheck"
                  @click="Setvadapterr"
                /> -->
                <input
                  type="text"
                  v-model="savemessage.inputList.adapterCheck"
                  maxlength="16"
                  disabled
                />
              </div>
              <!-- <input type="text" v-model="savemessage.inputList.input7" maxlength="999" /> -->
            </li>
            <li>
              <el-checkbox v-model="verifierCheck" @change="Setverifier"
                >验配师</el-checkbox
              >
            </li>
            <li style="border-right: none">
              <!-- <el-select v-model="savemessage.inputList.input8" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in doctorListL2"
                  :key="item.keyId"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>-->
              <div>
                <!-- <input
                  type="checkbox"
                  v-model="verifierCheck"
                  @click="Setverifier"
                  :disabled="verifierCheckState"
                /> -->
                <input
                  type="text"
                  v-model="savemessage.inputList.verifierCheck"
                  maxlength="16"
                  disabled
                />
              </div>
              <!-- <input type="text" v-model="savemessage.inputList.input8" maxlength="16" /> -->
            </li>
          </ul>
        </li>
        <li style="border-bottom: 1px solid #ccc">OS</li>
        <li>
          <ul>
            <li>SPH</li>
            <li>AC/KF</li>
            <li>AC/KS</li>
            <li>OAD</li>
            <li tyle="border-right: none;">ID</li>
          </ul>
          <ul>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input9"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input10"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li>
              <input
                type="text"
                v-model="savemessage.inputList.input11"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li style="border-right: none">
              <input
                type="text"
                v-model="savemessage.inputList.input12"
                maxlength="16"
                :disabled="verifierDisable"
              />
            </li>
            <li style="border-right: none">
              <input
                type="text"
                v-model="savemessage.inputList.input667"
                maxlength="556"
                :disabled="verifierDisable"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <main>
      <ul class="main-tab">
        <li>
          <p style="height: 61px">居中性</p>
        </li>
        <li>
          <p style="line-height: 30px">移动量</p>
        </li>
        <li>
          <h1 style="height: 61px">基弧</h1>
        </li>
        <li>
          <h1 style="height: 119px">反转弧</h1>
        </li>
        <li>
          <h1 style="height: 119px">定位弧</h1>
        </li>
        <li>
          <h1 style="height: 119px">边弧</h1>
        </li>
        <li>
          <p style="line-height: 26px">片径</p>
        </li>
        <li>
          <p style="line-height: 30px">检测</p>
        </li>
        <!-- <li>
          <p style="height: 61px">备注</p>
        </li> -->
        <li v-show="examCategory == 60">
          <p style="height: 61px">结论</p>
        </li>
      </ul>
      <ul class="main-header">
        <li>
          <ul>
            <li>眨眼前</li>
            <li>眨眼后</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>眨眼时</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>面积</li>
            <li>颜色</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>弧型</li>
            <li>弧宽</li>
            <li>颜色</li>
            <li>弧界</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>弧型</li>
            <li>弧宽</li>
            <li>颜色</li>
            <li>弧界</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>弧型</li>
            <li>弧宽</li>
            <li>颜色</li>
            <li>弧界</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>面积</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>戴镜</li>
          </ul>
        </li>
        <li v-show="examCategory == 60">
          <ul>
            <li>注意</li>
            <li>处理</li>
          </ul>
        </li>
      </ul>
      <ul class="main-body" style="border-right: 1px solid #ccc">
        <li>
          <ul>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="1">居中</el-checkbox>
                <el-checkbox label="2">上偏</el-checkbox>
                <el-checkbox label="3">下偏</el-checkbox>
                <el-checkbox label="4">内偏</el-checkbox>
                <el-checkbox label="5">外偏</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input13"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="6">居中</el-checkbox>
                <el-checkbox label="7">上偏</el-checkbox>
                <el-checkbox label="8">下偏</el-checkbox>
                <el-checkbox label="9">内偏</el-checkbox>
                <el-checkbox label="10">外偏</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input14"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="11">&lt; 1mm</el-checkbox>
                <el-checkbox label="12">1-2mm</el-checkbox>
                <el-checkbox label="13">2-3mm</el-checkbox>
                <el-checkbox label="14">>3mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input15"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="15">&lt;3.5mm</el-checkbox>
                <el-checkbox label="16">3.5-5.5mm</el-checkbox>
                <el-checkbox label="17">>5.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input16"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="18">浓绿</el-checkbox>
                <el-checkbox label="19">淡绿</el-checkbox>
                <el-checkbox label="20">淡黑</el-checkbox>
                <el-checkbox label="21">黑</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input17"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="22">360度</el-checkbox>
                <el-checkbox label="23">270度</el-checkbox>
                <el-checkbox label="24">180度</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input18"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="25">&lt;1mm</el-checkbox>
                <el-checkbox label="26">1-1.5mm</el-checkbox>
                <el-checkbox label="27">1.5-2.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input19"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="28">浓绿</el-checkbox>
                <el-checkbox label="29">淡绿</el-checkbox>
                <el-checkbox label="30">淡黑</el-checkbox>
                <el-checkbox label="31">黑色</el-checkbox>
                <el-checkbox label="32">不进</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="33">清晰</el-checkbox>
                <el-checkbox label="34">飘逸</el-checkbox>
                <el-checkbox label="35">模糊</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input20"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="36">360度</el-checkbox>
                <el-checkbox label="37">270度</el-checkbox>
                <el-checkbox label="38">180度</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input21"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="39">&lt;1mm</el-checkbox>
                <el-checkbox label="40">1-1.5mm</el-checkbox>
                <el-checkbox label="41">1.5-2.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input22"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="42">浓绿</el-checkbox>
                <el-checkbox label="43">淡绿</el-checkbox>
                <el-checkbox label="44">淡黑</el-checkbox>
                <el-checkbox label="45">黑色</el-checkbox>
                <el-checkbox label="46">不进</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="47">清晰</el-checkbox>
                <el-checkbox label="48">飘逸</el-checkbox>
                <el-checkbox label="49">模糊</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input23"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="50">360度</el-checkbox>
                <el-checkbox label="51">270度</el-checkbox>
                <el-checkbox label="52">180度</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input24"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="53">&lt;1mm</el-checkbox>
                <el-checkbox label="54">1-1.5mm</el-checkbox>
                <el-checkbox label="55">1.5-2.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input25"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="56">浓绿</el-checkbox>
                <el-checkbox label="57">淡绿</el-checkbox>
                <el-checkbox label="58">淡黑</el-checkbox>
                <el-checkbox label="59">黑色</el-checkbox>
                <el-checkbox label="60">不进</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="61">清晰</el-checkbox>
                <el-checkbox label="62">飘逸</el-checkbox>
                <el-checkbox label="63">模糊</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input26"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="64">&lt;90%</el-checkbox>
                <el-checkbox label="65">90-92%</el-checkbox>
                <el-checkbox label="66">92-94%</el-checkbox>
                <el-checkbox label="67">94-95%</el-checkbox>
                <el-checkbox label="68">>95%</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <ul class="vision">
                <li>视力</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.inputList.input27"
                    maxlength="16"
                    :disabled="PcOptometry"
                  />
                </li>
                <li>电脑验光</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.inputList.input28"
                    maxlength="16"
                    :disabled="PcOptometry"
                  />
                </li>
                <li>插片验光</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.inputList.input29"
                    maxlength="16"
                    :disabled="PcOptometry"
                  />
                </li>
              </ul>
            </li>
            <li v-show="examCategory == 60">
              <el-checkbox-group v-model="savemessage.checkList">
                <el-checkbox label="1103">正常戴镜</el-checkbox>
              </el-checkbox-group>
              <span style="color: #20232c; margin-left: -60px; font-size: 15px">
                首日戴</span
              >
              <input
                type="text"
                style="width: 40px"
                v-model="savemessage.inputList.input1000"
              />
              <p style="margin-left: -18px">小时</p>
              <el-checkbox
                v-model="savemessage.inputList.input1104"
                style="margin-left: -18px"
              >
              </el-checkbox>
              <span style="margin-right: -40px">其它</span>
              <input
                type="text"
                style="width: 145px"
                v-model="savemessage.inputList.input1001"
              />
            </li>
            <li v-show="examCategory == 60">
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="1100" style="width: 150px !important"
                  >可以交付</el-checkbox
                >
                <el-checkbox label="1101" style="width: 150px !important"
                  >上报会诊</el-checkbox
                >
                <el-checkbox label="1102" style="width: 150px !important"
                  >暂不交付</el-checkbox
                >
              </el-checkbox-group>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="main-body" style="border-right: 1px solid #ccc">
        <li>
          <ul>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="69">居中</el-checkbox>
                <el-checkbox label="70">上偏</el-checkbox>
                <el-checkbox label="71">下偏</el-checkbox>
                <el-checkbox label="72">内偏</el-checkbox>
                <el-checkbox label="73">外偏</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input30"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="74">居中</el-checkbox>
                <el-checkbox label="75">上偏</el-checkbox>
                <el-checkbox label="76">下偏</el-checkbox>
                <el-checkbox label="77">内偏</el-checkbox>
                <el-checkbox label="78">外偏</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input31"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="79">&lt;1mm</el-checkbox>
                <el-checkbox label="80">1-2mm</el-checkbox>
                <el-checkbox label="81">2-3mm</el-checkbox>
                <el-checkbox label="82">>3mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input32"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="83">&lt;3.5mm</el-checkbox>
                <el-checkbox label="84">3.5-5.5mm</el-checkbox>
                <el-checkbox label="85">>5.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input33"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="86">浓绿</el-checkbox>
                <el-checkbox label="87">淡绿</el-checkbox>
                <el-checkbox label="88">淡黑</el-checkbox>
                <el-checkbox label="89">黑</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input34"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="90">360度</el-checkbox>
                <el-checkbox label="91">270度</el-checkbox>
                <el-checkbox label="92">180度</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input35"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="93">&lt;1mm</el-checkbox>
                <el-checkbox label="94">1-1.5mm</el-checkbox>
                <el-checkbox label="95">1.5-2.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input36"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="96">浓绿</el-checkbox>
                <el-checkbox label="97">淡绿</el-checkbox>
                <el-checkbox label="98">淡黑</el-checkbox>
                <el-checkbox label="99">黑色</el-checkbox>
                <el-checkbox label="100">不进</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="101">清晰</el-checkbox>
                <el-checkbox label="102">飘逸</el-checkbox>
                <el-checkbox label="103">模糊</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input37"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="104">360度</el-checkbox>
                <el-checkbox label="105">270度</el-checkbox>
                <el-checkbox label="106">180度</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input38"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="107">&lt;1mm</el-checkbox>
                <el-checkbox label="108">1-1.5mm</el-checkbox>
                <el-checkbox label="109">1.5-2.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input39"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="110">浓绿</el-checkbox>
                <el-checkbox label="111">淡绿</el-checkbox>
                <el-checkbox label="112">淡黑</el-checkbox>
                <el-checkbox label="113">黑色</el-checkbox>
                <el-checkbox label="114">不进</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="115">清晰</el-checkbox>
                <el-checkbox label="116">飘逸</el-checkbox>
                <el-checkbox label="117">模糊</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input40"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="118">360度</el-checkbox>
                <el-checkbox label="119">270度</el-checkbox>
                <el-checkbox label="120">180度</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input41"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="121">&lt;1mm</el-checkbox>
                <el-checkbox label="122">1-1.5mm</el-checkbox>
                <el-checkbox label="123">1.5-2.5mm</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input42"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="124">浓绿</el-checkbox>
                <el-checkbox label="125">淡绿</el-checkbox>
                <el-checkbox label="126">淡黑</el-checkbox>
                <el-checkbox label="127">黑色</el-checkbox>
                <el-checkbox label="128">不进</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="129">清晰</el-checkbox>
                <el-checkbox label="130">飘逸</el-checkbox>
                <el-checkbox label="131">模糊</el-checkbox>
              </el-checkbox-group>
              <div>
                <span>其它</span>
                <input
                  type="text"
                  style="width: 150px"
                  v-model="savemessage.inputList.input43"
                  maxlength="16"
                  :disabled="verifierDisable"
                />
              </div>
            </li>
            <li>
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="132">&lt;90%</el-checkbox>
                <el-checkbox label="133">90-92%</el-checkbox>
                <el-checkbox label="134">92-94%</el-checkbox>
                <el-checkbox label="135">94-95%</el-checkbox>
                <el-checkbox label="136">>95%</el-checkbox>
              </el-checkbox-group>
            </li>
            <li>
              <ul class="vision">
                <li>视力</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.inputList.input44"
                    maxlength="16"
                    :disabled="PcOptometry"
                  />
                </li>
                <li>电脑验光</li>
                <li>
                  <input
                    type="text"
                    v-model="savemessage.inputList.input45"
                    maxlength="16"
                    :disabled="PcOptometry"
                  />
                </li>
                <li>插片验光</li>
                <li style="border-right: none">
                  <input
                    type="text"
                    v-model="savemessage.inputList.input46"
                    maxlength="16"
                    :disabled="PcOptometry"
                  />
                </li>
              </ul>
            </li>
            <li v-show="examCategory == 60">
              <el-checkbox-group v-model="savemessage.checkList">
                <el-checkbox label="1110">正常戴镜</el-checkbox>
                <!-- <el-checkbox label="1111">
                  首日戴

                </el-checkbox> -->
              </el-checkbox-group>
              <span style="color: #20232c; margin-left: -60px; font-size: 15px">
                首日戴</span
              >
              <input
                type="text"
                style="width: 40px"
                v-model="savemessage.inputList.input1002"
              />
              <p style="margin-left: -18px">小时</p>
              <el-checkbox
                v-model="savemessage.inputList.input1111"
                style="margin-left: -18px"
              >
              </el-checkbox>
              <span style="margin-right: -40px">其它</span>
              <input
                type="text"
                style="width: 150px"
                v-model="savemessage.inputList.input1003"
              />
            </li>
            <li v-show="examCategory == 60">
              <el-checkbox-group
                v-model="savemessage.checkList"
                :disabled="verifierDisable"
              >
                <el-checkbox label="1112" style="width: 150px !important"
                  >可以交付</el-checkbox
                >
                <el-checkbox label="1113" style="width: 150px !important"
                  >上报会诊</el-checkbox
                >
                <el-checkbox label="1114" style="width: 150px !important"
                  >暂不交付</el-checkbox
                >
              </el-checkbox-group>
            </li>
          </ul>
        </li>
      </ul>
    </main>
    <!-- <footer style="width:100%" >
      <p style="width:168px">备注 </p>
       <div style=" width: 100%; border-right: 1px solid #ccc">
         <input
          type="text"
          v-model="savemessage.inputList.mark"
          maxlength="16" style="width: 100% !important; " />
      </div>

    </footer> -->
    <footer v-show="examCategory == 20">
      <p>结论</p>
      <div style="border-right: 1px solid #ccc">
        <el-checkbox-group v-model="savemessage.checkList">
          <el-checkbox label="137" style="width: 120px !important"
            >平躺30分钟</el-checkbox
          >
          <el-checkbox label="138" style="width: 120px !important"
            >平躺60分钟</el-checkbox
          >
          <el-checkbox label="139" style="width: 120px !important"
            >会诊上交</el-checkbox
          >
        </el-checkbox-group>
        <span style="font-size: 15px">备注</span>
        <input
          type="text"
          v-model="savemessage.inputList.markOD"
          style="width: 104px !important; margin-left: 26px"
        />
      </div>
      <div style="border-right: 1px solid #ccc">
        <el-checkbox-group v-model="savemessage.checkList">
          <el-checkbox label="140" style="width: 120px !important"
            >平躺30分钟</el-checkbox
          >
          <el-checkbox label="141" style="width: 120px !important"
            >平躺60分钟</el-checkbox
          >
          <el-checkbox label="142" style="width: 120px !important"
            >会诊上交</el-checkbox
          >
        </el-checkbox-group>
        <span style="font-size: 15px">备注</span>
        <input
          type="text"
          v-model="savemessage.inputList.markOS"
          style="width: 104px !important ; margin-left: 26px"
        />
      </div>
    </footer>
  </div>
</template>
<script>
//展示组件
import diannaoYanguang from "../common/diannaoYanguang";
import zongheYanguang from "../common/zongheYanguang";

import {
  SelectCustomerById,
  GetDoctorsByOrganCode,
  GetCustomerExamListByEmaKeyid,
  GetCheckList,
} from "@/api/clientRecord";
import {
  AddExamItemDetail,
  GetExamDetail,
  GetDoctorIdByEmaKeyId,
} from "@/api/doctorRecord";
import ROLEID from "../../../utils/roleId";

export default {
  data() {
    return {
      examCategory: "",
      voluntarilyFlag: false,
      optometry: true, //综合验光
      dyeing: true, //染色评估
      PcOptometry: true, //电脑验光
      verifierCheck: false, //适配师多选
      adapterCheck: false, //验配师多选
      verifierDisable: true, //控制适配填写的控件
      verifierCheckState: false, //控制checkbox验配师

      //用户信息
      formInline: {},
      value: "",
      savemessage: {
        checkList: [],
        inputList: {
          input1: this.getNowTime(),
          verifierCheck: "",
          adapterCheck: "",
        },
      },
      emaKeyId: this.$route.query.emaKeyId,
      doctorListL: [],
      doctorListL2: [],
      organCode: "",
      createDoctorId: "",
      getExamitemList: [],
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
    this.getCheckList1();
    this.getExamList();
    this.doctorIdByEmaKeyId();
  },
  updated() {
    this.emaKeyId = this.$route.query.emaKeyId;
  },
  beforeDestroy() {
    if (this.voluntarilyFlag) {
      //this.save();
    }
  },

  mounted() {},
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
    handleCheckAllChange(value) {},
    async getExamList() {
      this.dyeing = true;
      this.optometry = true;
      this.PcOptometry = true;
      this.verifierDisable = true;

      if (this.savemessage.inputList.adapterCheck) {
        this.verifierDisable = false;
      }

      var emaKeyId = this.$route.query.emaKeyId;
      const { data: res } = await GetCustomerExamListByEmaKeyid(
        this.organCode,
        emaKeyId
      ).then();
      this.getExamitemList = res.data;
      this.getExamitemList.forEach((element) => {
        if (element.examItemId == 10) {
          //染色
          this.dyeing = false;
        }
        if (element.examItemId == 2) {
          //电脑验光
          this.PcOptometry = false;
        }
        if (element.examItemId == 3) {
          //综合验光
          this.optometry = false;
        }
      });
    },

    //适配师列表
    async getCheckList() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.ADAPTATION
      ).then();
      this.doctorListL = res.data;
      console.log("适配师列表", this.doctorListL);
    },
    //验光师列表
    async getCheckList1() {
      const { data: res } = await GetCheckList(
        this.organCode,
        ROLEID.FITTING
      ).then();
      this.doctorListL2 = res.data;
      console.log("验光师列表", this.doctorListL2);
    },
    //保存新建档案
    async save() {
      const { data: res } = await AddExamItemDetail(
        this.emaKeyId,
        JSON.stringify(this.savemessage)
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
            // case "doctor":
            //   {
            //     let msg = `【${this.$store.state.userInfo.TrueUserName}】已将【${this.$store.state.target.name}】分配至您的检查队列中：${getExamitemList}`;
            //     this.websockSend(msg, "39");
            //     this.websockSend(msg, "40");
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
    async Setverifier() {
      //验配师

      if (this.verifierCheck != true) {
        this.savemessage.inputList.verifierCheck = null; //取消选择设置为空
        // this.verifierCheck = false;
        this.verifierDisable = true;
        this.voluntarilyFlag = true;
      } else {
        var rolecode = this.$store.state.userInfo.RoleCode;
        console.log("输出rolecode:", rolecode);
        if (rolecode.indexOf("verifier") !== -1) {
          this.savemessage.inputList.verifierCheck = this.$store.state.userInfo.TrueUserName; //如果角色符合设置为当前姓名
          this.verifierDisable = false;
          this.voluntarilyFlag = true;
        }

        // this.verifierCheck = true;
      }
    },
    async Setvadapterr() {
      //适配师

      if (this.adapterCheck != true) {
        this.savemessage.inputList.adapterCheck = null; //取消选择设置为空
        // this.adapterCheck = false;
        this.voluntarilyFlag = true;
      } else {
        var rolecode = this.$store.state.userInfo.RoleCode;
        if (rolecode.indexOf("adapter") !== -1) {
          this.savemessage.inputList.adapterCheck = this.$store.state.userInfo.TrueUserName; //如果角色符合设置为当前姓名
          this.voluntarilyFlag = true;
        }
        //this.adapterCheck = true;
      }
    },
    //查看病例信息
    async getExamDetail() {
      this.voluntarilyFlag = false;
      const { data: res } = await GetExamDetail(
        this.$route.query.emaKeyId
      ).then();
      if (res.data.checkjson) {
        this.savemessage = JSON.parse(res.data.checkjson);

        // if (this.savemessage.inputList.verifierCheck) {
        //   this.verifierDisable = false;
        //   this.verifierCheckState = true;
        //   this.voluntarilyFlag = true;
        // }
      } else {
        this.savemessage = {
          checkList: [],
          inputList: { input1: this.getNowTime() },
        };
      }
      if (
        this.savemessage.inputList.verifierCheck == null ||
        this.savemessage.inputList.verifierCheck == ""
      ) {
        //判断获取的数据是否又值
        console.log("输出verifier:", this.verifierCheck);
        this.verifierDisable = true;
        this.verifierCheck = false;
      } else {
        console.log("else输出verifier:", this.verifierCheck);
        this.verifierDisable = false;
        this.verifierCheck = true;
      }
      if (
        this.savemessage.inputList.adapterCheck == null ||
        this.savemessage.inputList.adapterCheck == ""
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
      this.getExamList();
      const skipInfo = JSON.parse(window.sessionStorage.getItem("skipInfo"));
      this.examCategory = skipInfo.examCategory;
      console.log(this.examCategory);
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
.Adaptive {
  width: 1491px;
  background-color: #f6faf6;
  padding-bottom: 70px;
  margin: 10px;
  padding: 2px;
  background-color: #d2dff4;
  header {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    .vxe-button {
      position: absolute;
      bottom: 10px;
      right: 150px;
      width: 100px;
      span {
        color: #fff !important;
      }
    }
  }
  main {
    background-color: #f2f2f2;
    display: flex;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;

    h1 {
      display: inline-block;
      text-align: center;
      writing-mode: vertical-lr;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      color: #000;
    }
    .main-tab {
      p {
        text-align: center;
        line-height: 66px;
        border-bottom: 1px solid #ccc;
        font-size: 15px;
        color: #000;
      }
    }
    .main-header {
      border-left: 1px solid #ccc;
      > li {
        text-align: center;
        li {
          height: 30px;
          left: 30px;
          width: 100px;
          text-align: center;
          line-height: 30px;
          font-size: 15px;
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          color: #000;
        }
      }
    }
    .main-body {
      span {
        color: #000;
      }
      .vision {
        li {
          width: 110px;
          border-right: 1px solid #ccc;
          text-align: center;
          color: #000;
        }
      }
      > li {
        > ul {
          > li {
            display: flex;
            justify-content: space-between;
            height: 30px;
            width: 668px;
            line-height: 30px;
            font-size: 15px;
            border-bottom: 1px solid #ccc;
            .el-checkbox-group {
              margin: 0 40px;
            }
            input {
              width: 97%;
              height: 97%;
              text-align: center;
            }
            > ul {
              display: flex;
              > li {
                width: 70px;
                margin: 0 auto;
                input {
                  width: 90%;
                  height: 90%;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
  footer {
    background-color: #f2f2f2;
    display: flex;
    text-align: center;
    p {
      width: 151px;
      height: 30px;
      border: 1px solid #ccc;
      border-top: none;
      line-height: 30px;
      font-weight: 700;
      font-size: 15px;
      color: #000;
    }
    > div {
      display: flex;
      align-items: center;
      height: 30px;
      width: 669px;
      border-bottom: 1px solid #ccc;
      .el-checkbox-group {
        margin: 0 30px;
      }
      span {
        width: 50px;
      }
      input {
        border: 1px solid #ccc;
        width: 500px !important;
        height: 99%;
      }
    }
  }
  .Adaptive-header {
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-bottom: none;
    display: flex;
    .Adaptive-header-left {
      li {
        width: 150px;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        color: #000;
      }
    }

    .Adaptive-header-right {
      li {
        width: 669px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #000;
        > ul {
          display: flex;
          li {
            text-align: center;
            line-height: 30px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            > input {
              width: 90%;
              height: 90%;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>