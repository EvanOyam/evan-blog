<template>
  <div class="search-input-wrapper">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'detail-id', params: { id: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class SearchInput extends Vue {
  searchQuery: string = ''
  articles: any = []
  $content: any

  @Watch('searchQuery')
  async onSearchQueryChanged(val: string): Promise<void> {
    if (!val) {
      this.articles = []
    } else {
      this.articles = await this.$content()
        .limit(6)
        .search('title', val)
        .fetch()
    }
  }
}
</script>

<style lang="less" scoped>
.search-input-wrapper {
  // less
}
</style>
