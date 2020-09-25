<template>
  <div class="navigation-bar-wrapper">
    <div class="container">
      <a-menu v-model="current" :selectable="false" mode="horizontal">
        <a-menu-item key="home" class="text titleFontEn" @click="goto('/')"
          >Home</a-menu-item
        >
        <a-menu-item key="code" class="text titleFontEn" @click="goto('/code')"
          >Code</a-menu-item
        >
        <a-menu-item
          key="photo"
          class="text titleFontEn"
          @click="goto('/photo')"
          >Photo</a-menu-item
        >
        <a-menu-item
          key="music"
          class="text titleFontEn"
          @click="goto('/music')"
          >Music</a-menu-item
        >
        <a-menu-item
          key="about"
          class="text titleFontEn"
          @click="goto('/about')"
          >About</a-menu-item
        >
      </a-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavigationBar extends Vue {
  current: Array<string> = ['mail']

  /**
   * goto
   */
  public goto(route: string): void {
    this.$router.push(route)
  }
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
