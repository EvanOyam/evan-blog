<template>
  <div class="detail-wrapper">
    <div class="left-part">
      <div
        :style="{
          backgroundImage:
            'url(https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)',
        }"
        class="cover"
      ></div>
      <div class="content">
        <div class="navigation">
          <nuxt-link to="/">
            <span>Home</span>
          </nuxt-link>
          <nuxt-link to="/">
            <span>All articles</span>
          </nuxt-link>
          <SearchInput />
        </div>
        <div class="base-info">{{ createdAt }} • Evan</div>
        <h1 class="title titleFontEn">{{ article.title }}</h1>
        <a-tag color="green">Code</a-tag>
        <a-tag color="green">JavaScript</a-tag>
      </div>
    </div>
    <div class="right-part">
      <div class="content">
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
    </div>
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
  min-width: 1280px;
  min-height: 100vh;
  .left-part {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    min-width: 640px;
    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      filter: brightness(0.7);
      transition: all 0.5s;
    }
    .content {
      position: absolute;
      width: 100%;
      height: 460px;
      transition: all 0.5s;
      padding: 56px 42px;
      .navigation {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          margin: 0 12px;
          padding: 0;
          color: #fff;
          cursor: pointer;
          font-size: 22px;
          transition: all 0.3s;
        }
        span:hover {
          color: #f9bb4b;
        }
      }
      .base-info {
        font-size: 18px;
        color: #fff;
        margin-top: 66px;
      }
      .title {
        font-size: 68px;
        color: #fff;
        margin: 12px 0 0 0;
      }
    }
  }
  .right-part {
    position: absolute;
    min-width: 640px;
    width: 50%;
    top: 0;
    right: 0;
    background-color: #fff;
    .content {
      margin: 52px;
    }
  }
  .left-part:hover {
    .cover {
      filter: initial;
    }
  }
}
</style>
