<template>
<!-- 等待买家付款列表组件 -->
  <div class="order-shut">
    <a class="order-code" href="/pages/orderPay/main">
      <span class="code-num">订单编号:201201010102108</span>
      <span class="order-status">等待买家付款</span>
    </a>
    <m-productInfo></m-productInfo>
    <div class="order-price">
      <span>合计:</span>
      <span class="price-num">￥30.00</span>
      <button class="btn cancel">取消订单</button>
      <button class="btn confirm">确认收货</button>
    </div>
  </div>
</template>

<script>
import productInfo from '@/components/productInfo'

export default {
  data () {
    return {}
  },
  components: {
    'm-productInfo': productInfo
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.order-shut{
  width: 750rpx;
  height: 376rpx;
  background: #fff;
  font-size: 25rpx;
  margin-bottom: 20rpx;
  overflow: hidden;
}
.order-code{
  display: block;
  width: 100%;
  height: 87rpx;
  padding-left: 30rpx;
  color: #606060;
  border-bottom: 1rpx solid #E5E5E5;
}

.order-status{
  position: absolute;
  right: 0;
  height: 87rpx;
  line-height: 87rpx;
  margin-right: 30rpx;
  text-align: right;
  color:#FFAD33;
}
.order-price{
  width: 100%;
  height: 87rpx;
  padding-left: 30rpx;
  border-top: 1rpx solid #E5E5E5;
}
.code-num{
  height: 87rpx;
  line-height: 87rpx;
}
.price-num{
  color:#FF66A6;
  height: 87rpx;
  line-height: 87rpx;
}
.btn{
  display: inline-block;
  width: 150rpx;
  height: 60rpx;
  line-height: 60rpx;
  margin-top: 15rpx;
  border: 1rpx solid #ddd;
  border-radius: 30rpx;
  background: #fff;
}
.confirm{
  position: absolute;
  right: 0;
  margin-right: 30rpx;
  color:#FF66A6;
  border: 1rpx solid #FF66A6;
}
.cancel{
  position: absolute;
  right: 0;
  margin-right: 190rpx;
}
</style>
