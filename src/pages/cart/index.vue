<template>
<!-- 购物车 -->
  <div class="cart">
    <div class="edit">
      <radio class="all-radio" color="#FF66A6"/>
      <span class="edit-txt">编辑</span>
    </div>
    <!-- 商品组件 -->
    <m-cartShip></m-cartShip>
    <m-cartShip></m-cartShip>
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
import cartShip from '@/components/cartShip'

export default {
  data () {
    return {}
  },
  components: {
    'm-cartShip': cartShip
  },
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
  font-size: 28rpx;
  font-family: SourceHanSansCN;
  padding-left: 585rpx;
  color:#FF66A6;
}

/* 结算模块 */
.settlement{
  position: fixed;
  width: 750rpx;
  height: 98rpx;
  line-height: 98rpx;
  font-family: SourceHanSansCN;
  bottom: 0;
  background: #fff;
}
.settlement-l{
  display: inline-block;
  width: 200rpx;
  height: 100%;
  padding-bottom: 20rpx;
  overflow: hidden;
}
.all-txt{
  margin-left: 20rpx;
  font-size:28rpx;
}
.settlement-r{
  display: inline-block;
  position: absolute;
  right: 0;
  margin-right: 220rpx;
  text-align: right;
  /* overflow: hidden; */
}
.price-txt{
  display: inline-block;
  vertical-align:top;
  font-size: 24rpx;
  margin-top: -20rpx;
}
.price{
  display: inline-block;
  vertical-align:top;
  margin-top: -20rpx;
  color:#FF66A6;
}
.freight-txt{
  display: inline-block;
  margin-top: 18rpx;
  margin-left: -95rpx;
  font-size:20rpx;
  color:#999999;
  vertical-align:bottom;
}
.settlement-txt{
  position: absolute;;
  display: inline-block;
  right: 0;
  font-size: 28rpx;
  width: 200rpx;
  height: 100%;
  color: #fff;
  background: #FF66A6;
  text-align: center;
}
</style>
