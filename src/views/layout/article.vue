<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="article-page">
      <nav class="my-nav van-hairline--bottom">
        <a
          :class="process.sorter === 'weight_desc' ? 'active' : ''"
          href="javascript:;"
          @click="changA('weight_desc')"
          >推荐</a
        >
        <a
          :class="process.sorter === 'weight_desc' ? '' : 'active'"
          href="javascript:;"
          @click="changA('')"
          >最新</a
        >
      </nav>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <articleItem
        @click.native="$router.push(`/detail?id=${item.id}`)"
        v-for="(item, index) in data"
        :key="index"
        :article="item"
      ></articleItem>
    </van-list>
  </div>
</template>

<script>
import articleItem from '@/components/article-item.vue'
import { articleAPI } from '@/api/article'
export default {
  components: { // 引入组件
    articleItem
  },
  data () {
    return {
      process: {
        current: 1,
        pageSize: 10,
        sorter: 'weight_desc'
      },
      data: [],
      finished: false,
      loading: false,
      total: 0
    }
  },
  watch: {},
  created () {
    this.articleAPIlist()
    this.onLoad()
  },
  methods: {
    // 调用首页文章接口
    async articleAPIlist () {
      const { data: { rows, total } } = await articleAPI(this.promise)
      this.total = total
      this.data = [...this.data, ...rows]
    },
    // 加载数量
    async onLoad () {
      this.process.current++
      await this.articleAPIlist()
      this.loading = false
      if (this.data.length >= this.total) {
        this.finished = true
      }
    },
    changA (val) {
      this.process.sorter = val
      this.process.current = 0
      this.data = []
      this.loading = false
      this.finished = false
      this.total = 0
      this.articleAPIlist()
    }
  }
}
</script>
<style scoped lang='less'>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
