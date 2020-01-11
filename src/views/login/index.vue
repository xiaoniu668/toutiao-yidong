<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"/>
    <!-- 输入框栏 -->
      <!-- 登录表单 -->
       <ValidationObserver ref="form">
    <van-cell-group>
      <ValidationProvider name="手机号" rules="required|mobile" immediate>
      <van-field
      clearable
      v-model="user.mobile"
      placeholder="请输入用户名"
      >
      <i class="icon icon-shouji" slot="left-icon"></i>
     </van-field>
      </ValidationProvider>

      <ValidationProvider name="验证码" rules="required|code" immediate>
       <van-field
      clearable
      v-model="user.code"
      placeholder="请输入密码"
      >
      <i class="icon icon-yanzhengma" slot="left-icon"></i>
      <van-button
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
        </ValidationProvider>
     </van-cell-group>
      </ValidationObserver>
    <div class="login-wrap">
      <van-button type="info" @click="onlogin">登录</van-button>
    </div>

  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'
import { validate } from 'vee-validate'
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
      const success = await this.$refs.form.validate()
      if (!success) {
        // console.log('表单验证失败')
        const errors = this.$refs.form.errors
        for (let key in errors) {
          const item = errors[key]
          if (item[0]) {
            this.$toast(item[0])
            return
          }
        }
        return
      }
      // 开启登录中 loading
      this.$toast.loading({
        duration: 0,
        message: '登陆中....',
        forbidClick: true
      })
      // 手动停止提示

      // 请求登录
      try {
        const { data } = await login(user)
        // console.log(res)
        // 将登陆成功获取到的用户 token 相关数据存储到vuex容器
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登陆失败', err)
        this.$toast.fail('登录失败,手机号或验证码不正确')
      }
    },
    async onSendSmsCode () {
      try {
        const { mobile } = this.user
        // 1.验证手机号是否有效
        const validateResult = await validate(mobile, 'required|mobile', {
          name: '手机号'
        })
        if (!validateResult.valid) {
          this.$toast(validateResult.errors[0])
          return
        }
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
