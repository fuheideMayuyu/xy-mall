<template>
<!-- 待发货订单列表页 -->
  <div class="alreadyShipList">
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
        <span class="header-wait">已发货</span>
      </a>
      <a href="/pages/orderSuccessList/main">
        <span>已完成</span>
      </a>
    </div>
    <m-shipList></m-shipList>
    <m-shipList></m-shipList>
    <m-shipList></m-shipList>
    <m-shipList></m-shipList>
  </div>
</template>

<script>
import shipList from '@/components/shipList'

export default {
  data () {
    return {}
  },
  components: {
    'm-shipList': shipList
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.alreadyShipList{
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
  color:#308DE5;
  border-bottom: 5rpx solid #308DE5;
}
</style>
