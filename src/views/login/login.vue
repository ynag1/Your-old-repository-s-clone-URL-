<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-nav-bar title="面经登录" />
    <van-form @submit="onsubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { validator: valname, message: '密码至少包含6个字符' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" @click="add"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link class="link" to="/register">注册账号</router-link>
  </div>
</template>

<script>
import { loginAPI } from '@/api/user'
import { KEY, setKey } from '@/utils/stoage'

export default {
  components: { // 引入组件
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  watch: {},
  created () { },
  methods: {
    async onsubmit (val) {
      // console.log(val)
      try {
        const { data: { token } } = await loginAPI(val)
        setKey(KEY, token)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
    valname (value) {
      console.log(value)
      //  <!-- \w 字母数字_   \d 数字0-9 -->
      return /^[\w-]{6,}$/.test(value)
    }
  },
  mounted () { },
  computed: { // 计算属性

  }
}
</script>
<style scoped lang='less'>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
