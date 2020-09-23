<template>
  <div class="navigation-bar-wrapper">
    <div class="container">
      <a-menu v-model="current" :selectable="false" mode="horizontal">
        <a-menu-item key="home" class="text titleFontEn">Home</a-menu-item>
        <a-menu-item key="code" class="text titleFontEn">Code</a-menu-item>
        <a-menu-item key="photo" class="text titleFontEn">Photo</a-menu-item>
        <a-menu-item key="music" class="text titleFontEn">Music</a-menu-item>
        <a-menu-item key="about" class="text titleFontEn">About</a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavigationBar extends Vue {
  current: Array<string> = ['mail']
}
</script>

<style lang="less" scoped>
@import url('/assets/css/theme.less');
.navigation-bar-wrapper {
  .container {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-menu-horizontal {
      border: initial;
    }
    .text {
      font-size: 26px;
      padding: 0 28px;
    }
    .text:hover {
      color: #f9bb4b;
    }
    .ant-menu-item:hover {
      border-bottom: 2px solid #f9bb4b;
    }
  }
}
</style>
