<template>
<!-- 购物车商品组件 -->
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
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style scoped>
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
  font-size: 28rpx;
  font-family: PingFang;
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
  width: 460rpx;
  color:#1C1C1C;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.product-price{
  color:#FF66A6;
}
.product-num{
  margin-left: 335rpx;
}
</style>
