<template>
  <div class="detail-wrapper"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'none',
  transition: 'bounce',
})
export default class Detail extends Vue {}
</script>

<style lang="less" scoped>
.detail-wrapper {
  width: 100vw;
  min-height: 100vh;
  background-color: #999;
}
</style>
