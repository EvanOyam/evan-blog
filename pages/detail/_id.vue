<template>
  <div class="detail-wrapper">
    <SearchInput />
    <ul>
      <!-- // todo link.depth -->
      <li
        v-for="link of article.toc"
        :key="link.id"
        :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
    <nuxt-content :document="article" />
    <p>Post created at: {{ createdAt }}</p>
    <p>Post last updated: {{ updatedAt }}</p>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'none',
  transition: 'bounce',
  async asyncData({ $content, params }: any) {
    const article = await $content(params.id).fetch()

    const [prev, next] = await $content()
      .only(['title', 'slug'])
      .sortBy('slug')
      .surround(params.id)
      .fetch()

    return { article, prev, next }
  },
})
export default class Detail extends Vue {
  article!: any
  get createdAt(): string {
    return new Date(this.article.createdAt).toLocaleDateString()
  }

  get updatedAt(): string {
    return new Date(this.article.updatedAt).toLocaleDateString()
  }
}
</script>

<style lang="less" scoped>
.detail-wrapper {
  width: 100vw;
  min-height: 100vh;
}
</style>
