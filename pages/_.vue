<template>
  <div class="not-found-wrapper">
    <!-- 状态栏 -->
    <div class="header">
      <div class="left-part">
        <template v-for="(item, index) in blockData">
          <a-popover :key="index">
            <template slot="content">
              <span style="font-weight: bolder" class="back-text titlefonten">
                {{ item.text }}
              </span>
            </template>
            <div
              class="color-block"
              :class="[item.className]"
              @click="goBackHome"
            ></div>
          </a-popover>
        </template>
      </div>
      <div class="right-part"></div>
    </div>

    <!-- 404 -->
    <div class="container">
      <img src="@/assets/img/404/404.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface blockItem {
  text: String
  className: String
}

@Component
export default class NotFound extends Vue {
  /**
   * 左上角返回按钮相关的数据
   */
  blockData: Array<blockItem> = [
    {
      text: 'Oops...',
      className: 'red-block',
    },
    {
      text: 'Go Back Home',
      className: 'orange-block',
    },
    {
      text: 'Nothing Here, But Me!',
      className: 'green-block',
    },
  ]

  /**
   * 回到首页
   */
  public goBackHome(): void {
    this.$router.replace('/')
  }
}
</script>

<style lang="less" scoped>
.not-found-wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  .header {
    width: 100vw;
    height: 10vh;
    display: flex;
    .left-part {
      background-color: #7d8d9c;
      width: 30vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .color-block {
        width: 3.5vh;
        height: 3.5vh;
        transition: all 0.5s;
      }
      .color-block:hover {
        cursor: pointer;
        border-radius: 100%;
      }
      .red-block {
        background-color: #e1462b;
      }
      .orange-block {
        background-color: #f9bb4b;
      }
      .green-block {
        background-color: #55b56a;
      }
    }
    .right-part {
      background-color: #aabece;
      flex: 1;
    }
  }
  .container {
    background-color: #394d5c;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      height: 100%;
      transform: translate(0, -10%);
    }
  }
}
</style>
