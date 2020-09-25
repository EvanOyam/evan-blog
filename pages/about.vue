<template>
  <div class="about-page-container">
    <h1>About</h1>
    <h2 @click="gotoHome">Go To Home</h2>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script lang="ts">
// todo about page
import { Component, Vue } from 'vue-property-decorator'

function getData(): Object {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Waited for two seconds to get the data')
    }, 2000)
  })
}

@Component({
  async asyncData() {
    const msg = await getData()
    return { msg }
  },
})
export default class About extends Vue {
  /**
   * gotoHome
   */
  public gotoHome() {
    this.$router.push('/')
  }
}
</script>

<style lang="less" scoped>
.about-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
