<template>
<!-- 个人中心 -->
  <div class="user">
    <div class="user-module">
      <img class="user-img" src="/static/images/icon-img/avatar.png">
      <button class="user-txt">点击获取头像</button>
    </div>
    <a class="order" href="/pages/allOrderList/main">
      <span class="my-order">我的订单</span>
      <div class="all-order display-box">
        <span>查看全部订单</span>
        <image class="go-icon" src="/static/images/icon-img/go-icon.png"></image>
      </div>
    </a>
    <div class="order-status">
      <a class="wait-pay public" href="/pages/waitPayList/main">
        <image class="public-icon wait-pay-icon" src="/static/images/icon-img/wait-pay-icon.png"></image>
        <span class="public-txt">待付款</span>
      </a>
      <a class="wait-ship public" href="/pages/waitShipList/main">
        <image class="public-icon wait-ship-icon" src="/static/images/icon-img/delivered-icon.png"></image>
        <span class="public-txt">待发货</span>
      </a>
      <a class="ship public" href="/pages/alreadyShipList/main">
        <image class="public-icon ship-icon" src="/static/images/icon-img/ship-icon.png"></image>
        <span class="public-txt">已发货</span>
      </a>
      <a class="carry public" href="/pages/orderSuccessList/main">
        <image class="public-icon carry-icon" src="/static/images/icon-img/carry-icon.png"></image>
        <span class="public-txt">已完成</span>
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
  font-family: Adobe 黑体 Std;
}
/* 用户模块 */
.user-module{
  font-size:25rpx;
  color:#FF66A6;
  text-align: center;
  background: #fff;
  padding-top: 30rpx;
}
.user-img{
  width: 200rpx;
  height: 200rpx;
}
button{
  margin: 0;
  padding: 0;
  margin-top: 20rpx;
  padding-bottom: 50rpx;
  font-size: 24rpx;
  color:#FF66A6;
  background: #fff;
}
button::after{
  border:none;
}
/* 订单模块 */
.order{
  display: block;
  width: 750rpx;
  height: 100rpx;
  line-height: 100rpx;
  margin-top: 20rpx;
  background: #fff;
  line-height: 100rpx;
  border-bottom:  1rpx solid #f5f5f5;
  font-size:30rpx;
}
.my-order{
  margin-left: 20rpx;
  font-size: 28rpx;
  color: #262626;
}
.all-order{
  display: inline-block;
  margin-top: -25rpx;
  margin-left: 410rpx;
  font-size:22rpx;
  color:#A6A6A6;
  -webkit-tap-highlight-color:red;
}
.go-icon{
  display: inline-block;
  margin-top: -10rpx;
  vertical-align: middle;
  padding-left: 20rpx;
  width: 15rpx;
  height: 30rpx;
}
/* 订单状态模块 */
.order-status{
  width: 750rpx;
  height: 650rpx;
  font-size: 22rpx;
  color: #606060;
  line-height: 250rpx;
  background: #fff;
  padding-top: 30rpx;
}
.public{
  width: 162.5rpx;
  height: 165rpx;
  line-height: 165rpx;
  display: inline-block;
  background: #f5f5f5;
  border-radius: 10rpx;
  margin-left: 20rpx;
  line-height: 170rpx;
  text-align: center;
}
.wait-pay-icon{
  width: 52rpx;
  height: 44rpx;
}
.wait-ship-icon{
  width: 56rpx;
  height: 44rpx;
}
.ship-icon{
  width: 62rpx;
  height: 46rpx;
}
.carry-icon{
  width: 42rpx;
  height: 46rpx;
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
