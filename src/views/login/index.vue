<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"/>
    <!-- 输入框栏 -->
    <van-cell-group>
      <van-field
      left-icon="contact"
      clearable
      placeholder="请输入用户名"
      >
      <i class="iconfont icon-shouji"></i></van-field>
       <van-field
      clearable
      left-icon="circle"
      placeholder="请输入密码"
      ><van-button  round slot="button" size="small" type="warning">发送验证码</van-button></van-field>
    </van-cell-group>
    <div class="login-wrap">
      <van-button type="info">登录</van-button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'LoginPage'
}
</script>

<style lang="less" scoped>
.login-wrap {
  padding: 27px 20px;
  .van-button {
    width: 100%;
  }
}
</style>
