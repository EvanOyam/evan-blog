<template>
  <div class="prev-next-wrapper">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'detail-id', params: { id: prev.slug } }"
    >
      <a-button size="large" class="btn" type="primary">
        <i class="iconfont">&#xe685;</i>
        <span>上一篇：{{ prev.title }}</span>
      </a-button>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'detail-id', params: { id: next.slug } }"
    >
      <a-button size="large" class="btn" type="primary">
        <span>下一篇：{{ next.title }}</span>
        <i class="iconfont">&#xe687;</i>
      </a-button>
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
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 52px;
  .btn {
    background-color: #55b56a;
    border-color: #55b56a;
    span {
      margin: 0 6px;
    }
    i {
      font-weight: bolder;
    }
  }
  .btn:hover {
    background-color: #f9bb4b;
    border-color: #f9bb4b;
  }
}
</style>
