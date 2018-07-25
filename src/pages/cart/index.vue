<template>
<!-- 购物车 -->
  <div class="cart">
    <div class="edit">
      <radio class="all-radio" color="#FF66A6"/>
      <span class="edit-txt">编辑</span>
    </div>
    <div class="cart-product">
      <radio class="alone-radio" color="#FF66A6"/>
      <div class="cart-product-right">
        <image class="cart-img" src="/static/images/product-img/1.jpg"></image>
        <div class="cart-txt">
          <p class="product-name">这里是名称这里是名称这里是名称这里是名称这里是名称这里是名称这里是名称这里是名称</p>
          <p class="product-size">这里是规格</p>
          <span class="product-price">￥10.0</span>
          <span class="product-num">&times;2</span>
        </div>
      </div>
    </div>
    <div class="cart-product">
      <radio class="alone-radio" color="#FF66A6"/>
      <div class="cart-product-right">
        <image class="cart-img" src="/static/images/product-img/1.jpg"></image>
        <div class="cart-txt">
          <p class="product-name">这里是名称这里是名称这里是名称这里是名称这里是名称这里是名称这里是名称这里是名称</p>
          <p class="product-size">这里是规格</p>
          <span class="product-price">￥10.0</span>
          <span class="product-num">&times;1</span>
        </div>
      </div>
    </div>
    <div class="settlement">
      <div class="settlement-l">
        <radio class="all-radio" color="#FF66A6"/>
        <span class="all-txt">全选</span>
      </div>
      <div class="settlement-r">
        <span class="price-txt">总价: </span>
        <span class="price">￥10.0</span>
        <span class="freight-txt">(不含运费)</span>
      </div>
      <a href="/pages/orderSubmit/main" class="settlement-txt">去结算</a>
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
/* 购物车 */
.cart {
  width: 750rpx;
  background: #f5f5f5;
  font-size: 30rpx;
}
/* 上方编辑模块 */
.edit{
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  background: #fff;
  border-bottom: 1rpx solid #ddd;
  box-shadow: 0px 10px 10px -10px #999 inset;
}
.all-radio{
  padding-left: 30rpx;
  vertical-align: middle;
}
.edit-txt{
  padding-left: 565rpx;
  color:#FF66A6;
}
/* 商品模块 */
.cart-product{
  width: 100%;
  height: 200rpx;
  background: #fff;
  margin-bottom: 20rpx;
}
/* 单选按钮 */
.alone-radio{
  display: inline-block;
  margin-left: 30rpx;
  margin-bottom:100rpx;
  vertical-align: middle;
}
/* 右侧商品 */
.cart-product-right{
  display: inline-block;
  margin-left: 20rpx;
}
.cart-img{
  width: 140rpx;
  height: 140rpx;
  margin-top: 30rpx;
}

.cart-txt{
  display: inline-block;
  margin-left: 30rpx;
  vertical-align:top;
  margin-top: 38rpx;
}
.product-size{
  font-size:25rpx;
  color:#ddd;
  margin-top: 15rpx;
  margin-bottom: 30rpx;
}
.product-name{
  width: 450rpx;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.product-price{
  color:#FF66A6;
}
.product-num{
  margin-left: 310rpx;
}
/* 结算模块 */
.settlement{
  position: fixed;
  width: 750rpx;
  height: 100rpx;
  line-height: 100rpx;
  bottom: 0;
  background: #fff;
}
.settlement-l{
  display: inline-block;
  width: 200rpx;
  height: 100rpx;
  padding-bottom: 20rpx;
  overflow: hidden;
}
.all-txt{
  margin-left: 20rpx;
}
.settlement-r{
  display: inline-block;
  overflow: hidden;
}
.price-txt{
  display: inline-block;
  vertical-align:top;
  margin-top: -20rpx;
  margin-left: 150rpx;
}
.price{
  display: inline-block;
  vertical-align:top;
  margin-top: -20rpx;
  color:#FF66A6;
}
.freight-txt{
  display: inline-block;
  vertical-align:bottom;
  margin-top: 18rpx;
  margin-left: -95rpx;
  font-size:20rpx;
  color:#696969;
}
.settlement-txt{
  position: absolute;;
  display: inline-block;
  right: 0;
  font-size: 40rpx;
  width: 200rpx;
  height: 100%;
  color: #fff;
  background: #FF66A6;
  text-align: center;
}
</style>
