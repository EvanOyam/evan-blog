<template>
  <div class="prev-next-wrapper">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'detail-id', params: { id: prev.slug } }"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'detail-id', params: { id: next.slug } }"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PrevNext extends Vue {
  @Prop({
    type: Object,
    default: () => null,
  })
  prev!: object

  @Prop({
    type: Object,
    default: () => null,
  })
  next!: object
}
</script>

<style lang="less" scoped>
.prev-next-wrapper {
  a {
    width: 100px;
    height: 100px;
  }
}
</style>
