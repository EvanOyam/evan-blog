<template>
  <div class="mobile-page">
    <div class="bg">
      <div class="circle"></div>
    </div>
    <h1 class="title titleFontCuteEn">NOTHING HERE!!</h1>
    <h2 class="desc normalFontCuteEn">
      Please use the PC / Mac / iPad <br />
      platform visit this website
    </h2>
    <img src="@/assets/img/404/balloon.svg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  middleware({ req, redirect }: any): void {
    const ua = req.headers['user-agent']
    if (!ua.match(/(Android)|(iPhone)/)) {
      redirect('/')
    }
  },
})
export default class MobilePage extends Vue {
  $warning!: any

  /**
   * warning
   */
  public warning(): void {
    const h = this.$createElement
    this.$warning({
      title: '敬请期待',
      content: h('div', {}, [
        h(
          'p',
          {
            style: {
              'margin-bottom': 0,
            },
          },
          '移动端正在路上'
        ),
        h('p', '请用桌面或平板平台访问此网站'),
      ]),
      // content: (
      //   <div>
      //     <p>移动端正在路上</p>
      //     <p>请用桌面或平板平台访问此网站</p>
      //   </div>
      // ),
      centered: true,
    })
  }

  private mounted() {
    this.warning()
  }
}
</script>

<style lang="less" scoped>
.mobile-page {
  min-height: 100vh;
  min-width: 100vw;
  background-color: #566c73;
  .bg {
    position: relative;
    width: 100vw;
    overflow: hidden;
    height: 92vw;
    .circle {
      width: 200vw;
      height: 200vw;
      background-color: #947a6d;
      border-radius: 200vw;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
    }
  }
  .title {
    color: #d7f5dc;
    margin-top: 20vw;
    text-align: center;
    font-size: 10vw;
  }
  .desc {
    color: #effff2;
    text-align: center;
    font-size: 5vw;
  }
  img {
    width: 80vw;
    position: absolute;
    top: 20vw;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
