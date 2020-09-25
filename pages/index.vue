<template>
  <div class="home-wrapper">
    <div class="left-part">
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
    </div>
    <div class="right-part"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArticleCard from '@/components/ArticleCard.vue'

@Component({
  components: {
    ArticleCard,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home-wrapper {
  display: flex;
  .left-part {
    width: 720px;
  }
  .right-part {
    flex: 1;
  }
}
</style>
