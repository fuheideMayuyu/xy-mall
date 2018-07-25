<template>
  <!-- 全部订单列表 -->
  <div class="all-order">
  <!-- 导航栏 -->
    <div class="header">
      <a href="/pages/allOrderList/main">
        <span class="header-all">全部</span>
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
        <span>已完成</span>
      </a>
    </div>
    <!-- 交易关闭 -->
    <m-orderShut></m-orderShut>
    <m-payList></m-payList>
    <m-shipList></m-shipList>
    <m-orderCarry></m-orderCarry>
    <m-waitShip></m-waitShip>
  </div>

</template>

<script>
import orderShut from '@/components/orderShut'
import payList from '@/components/payList'
import shipList from '@/components/shipList'
import orderCarry from '@/components/orderCarry'
import waitShip from '@/components/waitShip'

export default {
  data () {
    return {}
  },
  components: {
    'm-orderShut': orderShut,
    'm-payList': payList,
    'm-shipList': shipList,
    'm-orderCarry': orderCarry,
    'm-waitShip': waitShip
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.all-order{
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
.header-all{
  display: inline-block;
  height: 85rpx;
  color:#FF66A6;
  border-bottom: 5rpx solid #FF66A6;
}

</style>
