<template>
<!-- 订单已完成列表组件 -->
  <div class="order-shut">
    <a class="order-code" href="/pages/successGoods/main">
      <span class="code-num">订单编号:201201010102108</span>
      <span class="order-status">订单已完成</span>
    </a>
    <m-productInfo></m-productInfo>
    <div class="order-price">
      <span>合计:</span>
      <span class="price-num">￥30.00</span>
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
  color:#1DBF53;
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
</style>

