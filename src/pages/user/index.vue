<template>
  <div class="user">
    <div class="user-module">
      <img class="user-img" src="/static/images/icon-img/avatar.png">
      <span class="user-txt">点击获取头像</span>
    </div>
    <div class="order">
      <span class="my-order">我的订单</span>
      <span class="all-order">查看全部订单</span>
      <image class="go-icon" src="/static/images/icon-img/go-icon.png"></image>
    </div>
    <div class="order-status">
      <a class="wait-pay public">
        <image class="wait-pay-icon public-icon" src="/static/images/icon-img/wait-pay-icon.png"></image>
        <span class="wait-pay-txt public-txt">待付款</span>
      </a>
      <a class="wait-ship public">
        <image class="wait-ship-icon public-icon" src="/static/images/icon-img/delivered-icon.png"></image>
        <span class="wait-ship-txt public-txt">待发货</span>
      </a>
      <a class="ship public">
        <image class="ship-icon public-icon" src="/static/images/icon-img/ship-icon.png"></image>
        <span class="ship-txt public-txt">已发货</span>
      </a>
      <a class="carry public">
        <image class="carry-icon public-icon" src="/static/images/icon-img/carry-icon.png"></image>
        <span class="carry-txt public-txt">已完成</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  components: {},
  methods: {},
  created () {}
}
</script>

<style scoped>
.user{
  background: #f5f5f5;
}
/* 用户模块 */
.user-module{
  font-size:25rpx;
  color:#FF66A6;
  text-align: center;
  background: #fff;
  margin-top: 30rpx;
}
.user-img{
  width: 200rpx;
  height: 200rpx;
}
.user-txt{
  display: block;
  margin-top: 20rpx;
  padding-bottom: 50rpx;
}
/* 订单模块 */
.order{
  width: 750rpx;
  height: 100rpx;
  margin-top: 20rpx;
  background: #fff;
  line-height: 100rpx;
  border-bottom:  1rpx solid #f5f5f5;
  font-size:30rpx;
}
.my-order{
  margin-left: 20rpx;
  color:#000;
}
.all-order{
  margin-left: 390rpx;
  font-size:25rpx;
  color:#808080;
}
.go-icon{
  display: inline-block;
  padding-top: 40rpx;
  padding-left: 20rpx;
  width: 30rpx;
  height: 30rpx;
}
/* 订单状态模块 */
.order-status{
  width: 750rpx;
  height: 250rpx;
  background: #fff;
  padding-top: 30rpx;
}
.public{
  width: 165rpx;
  height: 165rpx;
  display: inline-block;
  background: #f5f5f5;
  border-radius: 10rpx;
  margin-left: 16.6rpx;
  line-height: 170rpx;
  text-align: center;
}
.public-icon{
  width: 50rpx;
  height: 50rpx;
}
.public-txt{
  display: block;
  font-size:20rpx;
  margin-top: -130rpx;
}
.wait-pay{
  margin-left: 20rpx;
}
</style>
