<template>
<!-- 待付款订单 -->
  <div class="wait-pay">
    <!-- 增加收货地址 -->
    <div class="address">
      <image class="address-icon" src="/static/images/icon-img/receipt-icon-active.png"></image>
      <span>新增收货地址</span>
    </div>
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
    <a class="shop-info">
      <image class="shop-info-icon" src="/static/images/icon-img/logo.png"></image>
      <span class="shop-info-name">小梦的店铺</span>
      <image class="go-shop-icon" src="/static/images/icon-img/go-icon.png"></image>
    </a>
    <!-- 商品 -->
    <div class="product-info">
      <image class="product-info-img" src="/static/images/icon-img/product-icon.png"></image>
      <div class="product-txt">
        <p class="product-name">这里是名称这里是名称</p>
        <p class="product-size">这里是规格</p>
        <span class="product-price">￥10.00</span>
        <span class="product-num">&times;1</span>
      </div>
    </div>
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
    <div class="cost">
      <div class="product-cost">
        <span class="cost-txt">商品总额</span>
        <span class="cost-num">￥10.00</span>
      </div>
      <div class="product-cost">
        <span class="cost-txt">运费</span>
        <span class="cost-num">￥10.00</span>
      </div>
    </div>
    <!-- 提交订单 -->
    <div class="submit-order">
      <span class="total-txt-bottom">合计:</span>
      <span class="total-price">￥20.00</span>
      <a class="submit-order-a">提交订单</a>
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
/* 新增收货地址 */
.address{
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
/* 店铺信息 */
.shop-info{
  width: 750rpx;
  height: 120rpx;
  margin-top: 20rpx;
  line-height: 120rpx;
  background: #fff;
  font-size: 30rpx;
}
.shop-info-icon{
  width: 65rpx;
  height: 65rpx;
  vertical-align: middle;
  margin-left: 30rpx;
}
.shop-info-name{
  margin-left: 20rpx;
  color:#696969;
}
.go-shop-icon{
  width: 16.8rpx;
  height: 30rpx;
  vertical-align: middle;
  margin-left: 450rpx;
}
/* 商品信息 */
.product-info{
  width: 750rpx;
  height: 200rpx;
  background: #fff;
  margin-top: 2rpx;
}
.product-info-img{
  display: inline-block;
  margin-left: 30rpx;
  width: 120rpx;
  height: 120rpx;
  vertical-align: bottom;
}
.product-txt{
  display: inline-block;
  margin-left: 20rpx;
}
.product-name{
  overflow:hidden;
  width: 300rpx;
  font-size: 30rpx;
  margin-top: 30rpx;
  margin-bottom: 20rpx;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.product-size{
  font-size:25rpx;
  color:#A6A6A6;
  margin-bottom: 30rpx;
}
.product-price{
  color:#FF66A6;
}
.product-num{
 margin-left: 440rpx;
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
/* 商品总额和运费 */
.cost{
  width: 750rpx;
  height: 134rpx;
  margin-top: 20rpx;
  background: #fff;
  margin-bottom: 75rpx;
  font-size:30rpx;
}
.product-cost{
  width: 100%;
  height: 67rpx;
  line-height: 67rpx;
}
.cost-txt{
  margin-left: 30rpx;
}
.cost-num{
  text-align: right;
  position: absolute;
  right: 0;
  margin-right: 30rpx;
}
/* 提交订单 */
.submit-order{
  width: 750rpx;
  height: 100rpx;
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
