<template>
  <div>
    <div class="outter-container">
      <WebsiteInfoBar></WebsiteInfoBar>
      <div class="banner" alt="banner">
        <div class="text paintFontEn">Evan</div>
        <img src="@/assets/img/DefaultLayout/banner01.png" alt="banner" />
      </div>
      <NavigationBar></NavigationBar>
      <div class="main-container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WebsiteInfoBar from '@/components/WebsiteInfoBar.vue'
import NavigationBar from '@/components/NavigationBar.vue'

@Component({
  components: {
    WebsiteInfoBar,
    NavigationBar,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="less">
body {
  background-color: #f8f7f3;
}

.outter-container {
  width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 160px;
  background-color: #fff;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 564px;
    padding: 36px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      opacity: 0.7;
    }
    .text {
      cursor: default;
      font-size: 238px;
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .main-container {
    background-color: #f8f7f3;
    padding: 48px 80px;
    flex: 1;
  }
}
</style>
