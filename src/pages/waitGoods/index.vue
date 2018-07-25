<template>
<!-- 订单待发货详情页 -->
  <div class="waitShip">
    <!-- 付款提示 -->
    <div class="pay-header">
      <image class="wait-pay-img" src="/static/images/icon-img/wait-ship-icon.png"></image>
      <span>等待商家发货</span>
    </div>
    <m-orderStatus></m-orderStatus>
    <!-- 收货地址 -->
    <div class="receipt">
      <image class="receipt-icon" src="/static/images/icon-img/receipt-icon.png"></image>
      <div class="receipt-txt">
        <span class="receipt-name">收货人:小梦</span>
        <span class="address-code">1300000000000</span>
        <p class="address">广东省深圳市南山区 软件产业基地 4栋A座501广东省深圳市南山区 软件产业基地 4栋A座501</p>
      </div>
    </div>
    <!-- 身份证信息 -->
    <div class="user-id">
      <div class="line"></div>
      <image class="user-icon" src="/static/images/icon-img/user-info-icon.png"></image>
      <span>456420199908023625</span>
    </div>
    <!-- 信封图片 -->
    <image class="envelope-icon" src="/static/images/icon-img/envelope-icon.png"></image>
    <!-- 店铺 -->
    <m-shopInfo></m-shopInfo>
    <!-- 商品 -->
    <m-productInfo></m-productInfo>
    <!-- 配送 -->
    <div class="distribution">
      <div class="line"></div>
      <span class="distribution-way">配送方式</span>
      <div class="distribution-right">
        <p class="distribution-price">￥10.00</p>
        <p class="distribution-prompt">快递发货</p>
      </div>
    </div>
    <!-- 留言 -->
    <div class="message">
      <div class="line"></div>
      <label class="message-txt" for="messageInput">留言</label>
      <input id="messageInput" class="message-input" type="text" placeholder="暂无留言">
    </div>
    <!-- 合计 -->
    <div class="total">
      <div class="line"></div>
      <span class="total-txt">合计</span>
      <span class="total-num">￥20.00</span>
    </div>
    <!-- 商品总额和运费 -->
    <m-cost></m-cost>
    <!-- 订单信息 -->
    <div class="order-info">
      <p>订单编号: 2018070902010203</p>
      <p>创建时间: 2018-07-09 15:30:56</p>
      <p>付款时间: 2018-07-09 15:30:56</p>
    </div>
  </div>
</template>

<script>
import orderStatus from '@/components/orderStatus'
import productInfo from '@/components/productInfo'
import shopInfo from '@/components/shopInfo'
import cost from '@/components/cost'

export default {
  data () {
    return {}
  },
  components: {
    'm-orderStatus': orderStatus,
    'm-productInfo': productInfo,
    'm-shopInfo': shopInfo,
    'm-cost': cost
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.waitShip{
  width: 750rpx;
  overflow: hidden;
  font-size:30rpx;
}
/* 付款提示 */
.pay-header{
  width: 100%;
  height: 120rpx;
  line-height: 120rpx;
  color:#fff;
  background: #FF66A6;
}
.wait-pay-img{
  width: 52rpx;
  height: 44rpx;
  margin: auto 30rpx;
  vertical-align: middle;
}
/* 收货信息 */
.receipt{
  width: 100%;
  height: 170rpx;
  margin-top: 20rpx;
  background: #fff;
}
.receipt-icon{
  display: inline-block;
  margin-left: 30rpx;
  width: 36rpx;
  height: 40rpx;
  margin-top: -100rpx;
  vertical-align: middle;
}
.receipt-txt{
  display: inline-block;
  margin-left: 45rpx;
  margin-top: 25rpx;
  width: 635rpx;
}
.receipt-name{
  font-weight: bold;
}
.address-code{
  position: absolute;
  margin-right: 30rpx;
  font-weight: bold;
  right: 0;
}
.address{
  margin-top: 20rpx;
  font-size: 25rpx;
  height: 40rpx;
  line-height: 40rpx;
  color:#888888;
}
/* 横线 */
.line{
  content:"";
  margin-left: 30rpx;
  width: 720rpx;
  height: 1rpx;
  background: #f5f5f5;
}
/* 身份证 */
.user-id{
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  font-size: 30rpx;
  background: #fff;
}
.user-icon{
  display: inline-block;
  margin-left: 30rpx;
  margin-right: 40rpx;
  width: 32rpx;
  height: 46rpx;
  vertical-align: middle;
}
/* 信封图片 */
.envelope-icon{
  display: block;
  width: 750rpx;
  height: 15rpx;
}

/* 配送 */
.distribution{
  width: 750rpx;
  height: 125rpx;
  background: #fff;
}
.distribution-way{
  display: inline-block;
  color:#696969;
  font-size: 30rpx;
  margin-left: 30rpx;
  margin-top: 50rpx;
}
.distribution-right{
  display: inline-block;
  position: absolute;
  right: 0;
  width: 350rpx;
  height: 125rpx;
  margin-top: 35rpx;
  margin-right: 30rpx;
}
.distribution-price{
  margin-bottom: 10rpx;
  text-align:right
}
.distribution-prompt{
  color:#A6A6A6;
  text-align:right;
   font-size: 25rpx
}
/* 留言 */
.message{
  width: 750rpx;
  height: 90rpx;
  line-height: 90rpx;
  background: #fff;
}
.message-txt{
  color:#696969;
  font-size: 30rpx;
  margin-left: 30rpx;
  width: 50rpx;
}
.message-input{
  display: inline-block;
  color:#A6A6A6;
  font-size:28rpx;
  width: 300rpx;
  margin-left: 90rpx;
}
/* 合计 */
.total{
  width: 750rpx;
  height: 90rpx;
  line-height: 90rpx;
  font-size:30rpx;
  background: #fff;
}
.total-txt{
  margin-left: 30rpx;
  color:#696969;
}
.total-num{
  text-align: right;
  position: absolute;
  right: 0;
  margin-right: 30rpx;
  color:#FF66A6;
}

/* 订单信息 */
.order-info{
  width: 100%;
  height: 200rpx;
  background: #fff;
  margin-top: 20rpx;
  padding-left: 30rpx;
  padding-top: 30rpx;
  font-size: 30rpx;
  color: #A6A6A6;
}
.order-info p{
  height: 60rpx;
  line-height: 60rpx;
}
</style>

