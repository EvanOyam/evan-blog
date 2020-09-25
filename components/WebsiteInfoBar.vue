<template>
  <div class="website-info-bar-wrapper">
    <div class="desc normalFontCuteEn">Design by Evan @2020</div>
    <div class="icon-group">
      <!-- // todo link to url -->
      <i class="iconfont">&#xe741;</i>
      <i class="iconfont">&#xe610;</i>
      <i class="iconfont">&#xe611;</i>
      <i class="iconfont">&#xe6fc;</i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WebsiteInfoBar extends Vue {}
</script>

<style lang="less" scoped>
@import url('/assets/css/theme.less');
.website-info-bar-wrapper {
  background-color: #9aa5a7;
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .desc {
    cursor: default;
  }
  .icon-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 36px;
    i {
      height: 36px;
      width: 36px;
      font-size: 18px;
      line-height: 36px;
      text-align: center;
    }
    i:hover {
      cursor: pointer;
    }
  }
}
</style>
