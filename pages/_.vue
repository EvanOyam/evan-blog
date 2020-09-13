<template>
  <div class="not-found-wrapper">404</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
.not-found-wrapper {
  font-size: 36px;
}
</style>
