<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scope>
@import "./style/global.less";
@import "./style/element.less";
#app {
  padding: 0px;
}
#nprogress .bar {
  background: #ee9754 !important; //自定义颜色
}
</style>