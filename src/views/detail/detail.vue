<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-nav-bar title="面经详情" left-arrow @click-left="$router.back()" />
    <header class="header">
      <h1>{{ data.stem }}</h1>
      <p>
        {{ data.createdAt }} | {{ data.views }} 浏览量 |
        {{ data.likeCount }} 点赞数
      </p>
      <p>
        <img :src="data.avatar" alt="" />
        <span>{{ data.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="data.content"></main>
    <!-- <div class="opt">
      <van-icon @click="toggleLike(1)" name="like-o" />
      <van-icon @click="toggleLike(2)" name="star-o" />
    </div> -->
  </div>
</template>

<script>
import { detailapi } from '@/api/article'
export default {
  components: { // 引入组件
  },
  data () {
    return {
      data: {}
    }
  },
  watch: {},
  created () {
    this.detailapi()
  },
  methods: {
    // 文章id
    async detailapi () {
      const { data } = await detailapi(this.$route.params.id)
      this.data = data
      console.log(data)
    }
    // // 收藏
    // // 喜欢,
    // async toggleLike (err) {
    //   await updateLike({
    //     id: this.data.id,
    //     err
    //   })
    //   this.detailapi()
    // }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
<style scoped lang='less'>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
