<template>
  <div class="detail-wrapper">
    <div class="left-part">
      <transition name="leftin">
        <ul v-if="showCatalog" class="catalog">
          <!-- // todo link.depth -->
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{
              'md-title-2': link.depth === 2,
              'md-title-3': link.depth === 3,
            }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </transition>
      <i
        :class="{ 'catalog-icon-dark': showCatalog }"
        class="catalog-icon iconfont"
        @click="toggleCatalog"
        >&#xe601;</i
      >
      <div
        :style="{ backgroundImage: `url(${article.cover})` }"
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
        <h1 class="title titleFontEn">{{ article.title }}</h1>
        <div class="base-info">{{ createdAt }} • Evan</div>
      </div>
    </div>
    <div class="right-part">
      <div class="content">
        <nuxt-content :document="article" />
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
  showCatalog: boolean = false
  article!: any
  get createdAt(): string {
    return new Date(this.article.createdAt).toLocaleDateString()
  }

  get updatedAt(): string {
    return new Date(this.article.updatedAt).toLocaleDateString()
  }

  /**
   * toggleCatalog
   */
  public toggleCatalog(): void {
    this.showCatalog = !this.showCatalog
  }
}
</script>

<style lang="less" scoped>
@import url('/assets/css/theme.less');
.detail-wrapper {
  min-width: 1280px;
  min-height: 100vh;
  .left-part {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    min-width: 640px;
    .catalog {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9;
      min-width: 320px;
      min-height: 100vh;
      background-color: #fff;
      box-shadow: 0 0 10px rgb(223, 223, 223);
      padding: 100px 20px 20px 42px;
      list-style: none;
      margin: 0;
      li:hover {
        a {
          color: @successColor;
        }
      }
    }
    .catalog-icon {
      position: fixed;
      top: 58px;
      left: 42px;
      font-size: 28px;
      cursor: pointer;
      color: #fff;
      z-index: 10;
    }
    .catalog-icon-dark {
      color: @primaryColor;
    }
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
        text-align: right;
      }
      .title {
        font-size: 68px;
        color: #fff;
        margin: 38px 0 0 0;
        text-align: right;
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
      padding: 52px;
      min-height: 100vh;
      padding-bottom: 148px;
    }
  }
  .left-part:hover {
    .cover {
      filter: initial;
    }
  }
}
</style>
