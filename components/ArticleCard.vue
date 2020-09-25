<template>
  <div class="article-card-wrapper">
    <img src="@/assets/img/home/default.png" alt="articleImg" />
    <div class="content">
      <div class="tag-box">
        <div class="tag normalFontCuteEn">
          <i class="iconfont">&#xe618;</i>
          <span>Code</span>
        </div>
        <div class="tag normalFontCuteEn">
          <i class="iconfont">&#xe618;</i>
          <span>JavaScript</span>
        </div>
      </div>
      <div class="title">如何用 Nuxt 搭建一个博客</div>
      <div class="desc">
        面试风格这一块腾讯比较喜欢深挖原理，只要写在简历上的，都会把你问个底朝天。建议没有十足把握的（我指的是有自己见解或者看过源码）项目或者技术不要写上，千万不要觉得看过一点甚至只是听过某个框架，就写上去...否则会死的很惨...算法问的不算多，谈不上难，刷过一定题量的同学应该问题不大。
      </div>
      <div class="more">
        <span>查看文章</span>
        <i class="iconfont">&#xe673;</i>
      </div>
      <div class="date">
        <i class="iconfont">&#xe634;</i>
        <span>2020/9/25</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ArticleCard extends Vue {}
</script>

<style lang="less" scoped>
@import url('/assets/css/theme.less');
.article-card-wrapper {
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
  padding: 20px;
  display: flex;
  width: 100%;
  height: 280px;
  img {
    height: 100%;
    width: 320px;
  }
  .content {
    flex: 1;
    padding-left: 10px;
    position: relative;
    .tag-box {
      display: flex;
      font-size: 16px;
      .tag {
        padding: 0 8px;
        margin: 0 8px;
        cursor: pointer;
        background-color: #f5f5f5;
        border-radius: 4px;
        color: @primaryColor;
      }
      .tag:first-child {
        margin: 0;
      }
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-top: 8px;
    }
    .desc {
      font-size: 14px;
      margin-top: 8px;
      display: -webkit-box !important;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
    }
    .more {
      position: absolute;
      bottom: 0;
      left: 10px;
      color: @primaryColor;
      font-weight: bold;
      cursor: pointer;
      i {
        font-size: 12px;
        position: relative;
        top: -1px;
      }
    }
    .date {
      position: absolute;
      bottom: 0;
      right: 10px;
      i {
        position: relative;
        font-size: 14px;
      }
    }
  }
}
</style>
