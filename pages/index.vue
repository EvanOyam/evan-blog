<template>
  <div class="home-wrapper">
    <div class="left-part">
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
    </div>
    <div class="right-part">
      <IntroductionCard></IntroductionCard>
      <TagsPanel></TagsPanel>
      <HistoryCard :history-data="historyData"></HistoryCard>
      <!-- // todo 图片模块 -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import ArticleCard from '@/components/home/ArticleCard.vue'
import TagsPanel from '@/components/home/TagsPanel.vue'
import HistoryCard from '@/components/home/HistoryCard.vue'
import IntroductionCard from '@/components/home/IntroductionCard.vue'
import { historyInterface } from '@/assets/interface/homePage'

@Component({
  components: {
    ArticleCard,
    TagsPanel,
    IntroductionCard,
    HistoryCard,
  },
  // todo 完善 asyncData 状态码规范
  async asyncData() {
    try {
      const month = new Date().getMonth() + 1
      const day = new Date().getDate()
      const history = await axios.get(
        `https://byabbe.se/on-this-day/${month}/${day}/events.json`
      )
      const historyData: historyInterface = {
        code: 10001,
        message: 'success',
        whichYear: history.data.events[0].year,
        description: history.data.events[0].description,
      }
      return { historyData }
    } catch (error) {
      console.log('get history error!!!', error)
      const historyData: historyInterface = {
        code: 10002,
        message: '获取 “历史上的今天” 数据失败',
      }
      return { historyData }
    }
  },
})
export default class Home extends Vue {
  $notification!: any
  historyData!: historyInterface
  private created() {
    if (this.historyData.code !== 10001) {
      this.$notification.error({
        message: this.historyData.message,
      })
    }
    console.log('this.historyData', this.historyData)
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  display: flex;
  .left-part {
    width: 720px;
  }
  .right-part {
    flex: 1;
    margin-left: 20px;
  }
}
</style>
