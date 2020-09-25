<template>
  <div class="introduction-card-wrapper">
    <div class="title titleFontEn">ABOUT AUTHOR</div>
    <img
      src="@/assets/img/home/profile01.png"
      alt="profile"
      class="profile-photo"
    />
    <div class="name paintFontEn">Evan</div>
    <div class="desc">
      非典型码农，前端小朋友。目前就职于字节跳动，爱好摄影与吉他。喜欢折腾，喜欢旅游，整天搞事情。
    </div>
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
export default class IntroductionCard extends Vue {}
</script>

<style lang="less" scoped>
@import url('/assets/css/theme.less');
.introduction-card-wrapper {
  background-color: #fff;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 48px;
  .title {
    font-size: 26px;
  }
  .profile-photo {
    width: 148px;
    height: 148px;
    border-radius: 180px;
    border: 8px solid #eaeaea;
    margin-top: 16px;
  }
  .name {
    font-size: 32px;
    margin-top: 12px;
  }
  .desc {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
  }
  .icon-group {
    display: flex;
    margin-top: 12px;
    i {
      color: #fff;
      background-color: @primaryColor;
      border-radius: 100px;
      padding: 4px;
      font-size: 16px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 12px;
      cursor: pointer;
      transition: all 0.5s;
    }
    i:hover {
      background-color: #f0f0f0;
      color: @primaryColor;
    }
  }
}
</style>
