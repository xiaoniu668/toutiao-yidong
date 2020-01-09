<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"/>
    <!-- 输入框栏 -->
    <van-cell-group>
      <van-field
      left-icon="contact"
      clearable
      v-model="user.mobile"
      placeholder="请输入用户名"
      >
     </van-field>
       <van-field
      clearable
      left-icon="circle"
      v-model="user.code"
      placeholder="请输入密码"
      ><van-button
      v-if="!isCountDownShow"
       round slot="button"
       size="small"
       type="warning"
       @click="onSendSmsCode"
       >发送验证码</van-button>
         <van-count-down
         v-else
         slot="button"
         :time="1000*60"
          format="ss s"
          @finish="isCountDownShow = false"
         />
        </van-field>
    </van-cell-group>
    <div class="login-wrap">
      <van-button type="info" @click="onlogin">登录</van-button>
    </div>

  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: ''// 验证码
      },
      isCountDownShow: false // 是否显示倒计时
    }
  },
  methods: {
    async  onlogin () {
      const user = this.user// 获取表单数据
      // 表单验证
      // 开启登录中 loading
      this.$toast.loading({
        duration: 0,
        message: '登陆中....',
        forbidClick: true
      })
      // 手动停止提示

      // 请求登录
      try {
        const res = await login(user)
        console.log(res)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登陆失败', err)
        this.$toast.fail('登录失败')
      }
    },
    async onSendSmsCode () {
      try {
        const { mobile } = this.user
        // 1.验证手机号是否有效
        // 2.请求发送短信验证码
        const res = await getSmsCode(mobile)
        console.log(res)

        // 3.显示倒计时
        this.isCountDownShow = true
      } catch (err) {
        console.log(err)
        this.$toast('请勿频繁操作')
      }
    }
  }
}

</script>

<style lang="less" scoped>
.login-wrap {
  padding: 27px 20px;
  .van-button {
    width: 100%;
  }
}
.van-cell {
  align-items: center;
}
</style>
