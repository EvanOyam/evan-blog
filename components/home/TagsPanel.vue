<template>
  <div class="tags-panel-wrapper">
    <div class="title">
      <span>标签</span>
      <i class="iconfont">&#xe618;</i>
    </div>
    <div class="tags-group">
      <a-tag class="tag">Code</a-tag>
      <a-tag class="tag">JavaScript</a-tag>
      <a-tag class="tag">Vue</a-tag>
      <a-tag class="tag">Nuxt</a-tag>
      <a-tag class="tag">Docker</a-tag>
      <a-tag class="tag">摄影</a-tag>
      <a-tag class="tag">后期</a-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TagsPanel extends Vue {}
</script>

<style lang="less" scoped>
@import url('/assets/css/theme.less');
.tags-panel-wrapper {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  .title {
    font-weight: bold;
    font-size: 22px;
    color: @primaryColor;
    i {
      position: relative;
      top: -1px;
    }
  }
  .tags-group {
    border-top: 1px solid #f5f5f5;
    margin-top: 20px;
    padding-top: 16px;
    .tag {
      margin: 4px;
    }
  }
}
</style>
