<template>
<!-- 待付款订单列表页 -->
  <div class="wait-pay-list">
    <div class="header">
      <a href="/pages/allOrderList/main">
        <span>全部</span>
      </a>
      <a href="/pages/waitPayList/main">
        <span class="header-wait">待付款</span>
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
    <m-payList></m-payList>
    <m-payList></m-payList>
    <m-payList></m-payList>
  </div>
</template>

<script>
import payList from '@/components/payList'

export default {
  data () {
    return {}
  },
  components: {
    'm-payList': payList
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.wait-pay-list{
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
  color:#FFAD33;
  border-bottom: 5rpx solid #FFAD33;
}
</style>
