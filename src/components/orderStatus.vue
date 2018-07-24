<template>
<!-- 订单状态组件 -->
  <div class="order-status">
    <span class="buyer txt">买家付款</span>
    <span class="seller txt">商家发货</span>
    <span class="transaction txt">交易完成</span>
    <image class="order-status-pay" src="/static/images/icon-img/order-status-pay.png"></image>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['imgUrl'],
  components: {},
  methods: {}
}
</script>

<style scoped>
/* 订单状态 */
.order-status{
  width: 750rpx;
  height: 140rpx;
  background-color: #fff;
}
.order-status-pay{
  width: 616rpx;
  height: 30rpx;
  margin-left: 67rpx;
}
.txt{
  display: inline-block;
  margin-top: 30rpx;
  margin-bottom: 20rpx;
  margin-left: 30rpx;
}
.seller{
  margin-left: 175rpx;
}
.transaction{
  margin-left: 175rpx;
}
</style>
