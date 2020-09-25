<template>
  <div v-if="historyData.code === 10001" class="history-card-wrapper">
    <div class="title">
      <span>历史上的今天</span>
      <i class="iconfont">&#xe608;</i>
    </div>
    <div class="detail">
      <span class="date titleFontCuteEn">{{ historyData.whichYear }}: </span>
      <span class="normalFontCuteEn">{{ historyData.description }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { historyInterface } from '@/assets/interface/homePage'

@Component
export default class HistoryCard extends Vue {
  @Prop({
    type: Object as () => historyInterface,
    default: (): historyInterface => {
      return {
        code: 10002,
        message: '获取 “历史上的今天” 数据失败',
      }
    },
  })
  readonly historyData!: historyInterface
}
</script>

<style lang="less" scoped>
@import url('/assets/css/theme.less');
.history-card-wrapper {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  .title {
    font-weight: bold;
    font-size: 22px;
    color: @primaryColor;
    i {
      position: relative;
      top: -2px;
      margin-left: 2px;
    }
  }
  .detail {
    border-top: 1px solid #f5f5f5;
    margin-top: 20px;
    padding-top: 16px;
    .date {
      font-size: 16px;
    }
  }
}
</style>
