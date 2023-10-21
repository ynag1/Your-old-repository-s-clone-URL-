<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-nav-bar title="面经注册" />
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
        <van-button block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { registerAPI } from '@/api/user'
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
      try {
        await registerAPI(val)
        this.$toast.success('注册成功')
        this.$router.push('/login')
      } catch (e) {
        console.log(e)
      }
    },
    valname (value) {
      console.log(value)
      // \w 字母数字_ \d 数字0-9 -
      return /^[\w-]{5,}$/.test(value)
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
  <style scoped lang=''>
</style>
