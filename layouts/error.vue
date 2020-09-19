<template>
  <div class="error-page">
    <h1>{{ error.message }}</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { errorInterface } from '@/assets/interface/errorPage'

@Component
export default class ErrorPage extends Vue {
  @Prop({
    type: Object as () => errorInterface,
    default: (): errorInterface => {
      return {
        statusCode: 403,
        message: 'hello world',
      }
    },
  })
  readonly error!: errorInterface

  $warning!: any

  /**
   * warning
   */
  public warning(): void {
    this.$warning({
      title: this.error.statusCode,
      content: this.error.message,
      centered: true,
    })
  }

  private mounted() {
    this.warning()
  }
}
</script>

<style lang="less" scoped>
.error-page {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
