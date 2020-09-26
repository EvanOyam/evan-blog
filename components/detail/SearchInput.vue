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
@import url('/assets/css/theme.less');
.search-input-wrapper {
  display: inline-block;
  position: relative;
  margin-left: 12px;
  input {
    padding: 8px 26px;
    text-align: center;
    border: 3px solid @primaryColor;
    border-radius: 8px;
    transition: all 0.3s;
    line-height: 22px;
    font-size: 18px;
    caret-color: @successColor;
  }
  input:focus {
    outline: none;
    border: 3px solid @successColor;
  }
  input::placeholder {
    font-size: 18px;
  }
  input:focus::placeholder {
    transition: all 0.3s;
    color: @successColor;
  }
  ul {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    border-radius: 4px;
    border: 3px solid @primaryColor;
    transition: all 0.3s;
    background-color: #fff;
    transform: translate(0, 100%);
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      padding: 4px 8px;
    }
    li:hover {
      cursor: pointer;
      background-color: #f5f5f5;
      a {
        color: @successColor;
      }
    }
  }
  ul:hover {
    border: 3px solid @successColor;
  }
}
</style>
