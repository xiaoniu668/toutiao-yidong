<template>
   <div class="tab-bar">
       <!-- 子路由出口 -->
       <router-view></router-view>
       <!-- 子路由出口 -->

       <!-- tab-bar -->
        <van-tabbar route>
         <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
         <van-tabbar-item to="/qa" icon="comment-circle-o">问答</van-tabbar-item>
         <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
         <van-tabbar-item to="/my" icon="contact">
         {{$store.state.user ? '我的' : '未登录'}}
         </van-tabbar-item>
        </van-tabbar>
       <!-- tab-bar -->
   </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>

</style>
