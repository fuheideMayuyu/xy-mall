<template>
<!-- 已完成订单列表页 -->
  <div class="orderSuccessList">
    <div class="header">
      <a href="/pages/allOrderList/main">
        <span>全部</span>
      </a>
      <a href="/pages/waitPayList/main">
        <span>待付款</span>
      </a>
      <a href="/pages/waitShipList/main">
        <span>待发货</span>
      </a>
      <a href="/pages/alreadyShipList/main">
        <span>已发货</span>
      </a>
      <a href="/pages/orderSuccessList/main">
        <span class="header-wait">已完成</span>
      </a>
    </div>
    <m-orderCarry></m-orderCarry>
    <m-orderCarry></m-orderCarry>
    <m-orderCarry></m-orderCarry>
    <m-orderCarry></m-orderCarry>
  </div>
</template>

<script>
import orderCarry from '@/components/orderCarry'

export default {
  data () {
    return {}
  },
  components: {
    'm-orderCarry': orderCarry
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.orderSuccessList{
  width: 750rpx;
  overflow: hidden;
}
/* 头部导航栏 */
.header{
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  font-size:30rpx;
  margin-bottom: 10rpx;
  box-shadow: 10rpx 0rpx 10rpx #999;
}
.header a{
  display: inline-block;
  width: 150rpx;
  background: #fff;
  text-align: center;
}
.header-wait{
  display: inline-block;
  height: 85rpx;
  color:#1DBF53;
  border-bottom: 5rpx solid #1DBF53;
}
</style>
