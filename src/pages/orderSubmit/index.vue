<template>
<!-- 待付款订单详情页 -->
  <div class="wait-pay" >
    <!-- 增加收货地址 -->
    <a class="address" href="/pages/address/main">
      <image class="address-icon" src="/static/images/icon-img/receipt-icon-active.png"></image>
      <span>新增收货地址</span>
    </a>
   <!-- 信封图片 -->
    <image class="envelope-icon" src="/static/images/icon-img/envelope-icon.png"></image>
    <!-- 填写身份证信息 -->
    <div class="user-info">
      <image class="user-info-icon" src="/static/images/icon-img/user-info-icon.png"></image>
      <div class="user-info-center">
        <p class="user-id">身份证信息</p>
        <p class="prompt-info">根据海关规定，需要您完善收件人身份证信息</p>
      </div>
      <image class="edit-info-icon" src="/static/images/icon-img/edit-info-icon.png"></image>
    </div>
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
    <!-- 提交订单 -->
    <div class="submit-order">
      <span class="total-txt-bottom">合计:</span>
      <span class="total-price">￥20.00</span>
      <a class="submit-order-a" href="/pages/orderPay/main">提交订单</a>
    </div>
  </div>
</template>

<script>
import productInfo from '@/components/productInfo'
import shopInfo from '@/components/shopInfo'
import cost from '@/components/cost'

export default {
  data () {
    return {}
  },
  components: {
    'm-productInfo': productInfo,
    'm-shopInfo': shopInfo,
    'm-cost': cost
  },
  methods: {},
  created () {}
}
</script>

<style scoped>
/* 新增收货地址 */
.address{
  display: inline-block;
  width: 750rpx;
  height: 120rpx;
  line-height: 120rpx;
  background: #fff;
  font-size:35rpx;
  text-align: center;
  color: #FF66A6;
}
.address-icon{
  display: inline-block;
  margin-right: 15rpx;
  vertical-align: middle;
  width: 34rpx;
  height: 38rpx;
}
.envelope-icon{
  display: block;
  width: 750rpx;
  height: 15rpx;
}
/* 填写身份证信息 */
.user-info{
  width: 750rox;
  height: 120rpx;
  margin-top: 20rpx;
  background: #fff;
  overflow: hidden;
}
.user-info-center{
  display: inline-block;
  margin-left: 40rpx;
}
.user-info-icon{
  display: inline-block;
  margin-left: 30rpx;
  margin-top: 38rpx;
  width: 32rpx;
  height: 46rpx;
  vertical-align:  top;
}
.edit-info-icon{
  display: inline-block;
  margin-left: 55rpx;
  margin-top: 40rpx;
  width: 36rpx;
  height: 38rpx;
  padding-left: 20rpx;
  vertical-align:  top;
}
.user-id{
  font-weight: bold;
  font-size: 32rpx;
  margin-top: 30rpx;
  margin-bottom: 20rpx;
}
.prompt-info{
  color:#A6A6A6
}


/* 配送 */
.distribution{
  width: 750rpx;
  height: 125rpx;
  background: #fff;
}
/* 横线 */
.line{
  content:"";
  margin-left: 30rpx;
  width: 720rpx;
  height: 1rpx;
  background: #f5f5f5;
}
.distribution-way{
  display: inline-block;
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
  text-align:right
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
}
.total-num{
  text-align: right;
  position: absolute;
  right: 0;
  margin-right: 30rpx;
  color:#FF66A6;
}

/* 提交订单 */
.submit-order{
  width: 750rpx;
  height: 100rpx;
  margin-top: 20rpx;
  line-height: 100rpx;
  font-size: 30rpx;
  background: #fff;
}
.total-txt-bottom{
  margin-left: 30rpx;
  font-weight: bold;
}
.total-price{
  margin-left: 10rpx;
  color:#FF66A6;
}
.submit-order-a{
  display: inline-block;
  position: absolute;
  background: #A6A6A6;
  width: 186rpx;
  height: 100rpx;
  right: 0;
  color:#fff;
  text-align: center;
}
</style>
