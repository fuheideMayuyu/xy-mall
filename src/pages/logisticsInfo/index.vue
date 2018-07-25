<template>
<!-- 物流信息页 -->
  <div>
    <!-- 头部导航栏 -->
    <div class="header">
      <a>
        <span class="active">包裹1</span>
      </a>
      <a>
        <span>包裹2</span>
      </a>
      <a>
        <span>包裹3</span>
      </a>
    </div>
    <!-- 物流信息 -->
    <div class="logistics-info">
      <div class="left">
        <image class="ship-img" src="/static/images/good-detail/good-img-scale01_02_03.png"></image>
        <span>9件商品</span>
      </div>
      <div class="right">
        <p>物流状态: <span>已发货</span></p>
        <p class="store">共3件商品，由【CPS】承运</p>
        <p>运单编号: 123456789</p>
      </div>
    </div>
    <!-- 物流状态 -->
    <div class="logistics-status">
      <span class="status-left"></span>
      <div class="status-right">
        <p class="status-txt">货物已出库,通关中</p>
        <p class="status-time">2015-09-11 13:14:00</p>
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
/* 头部导航栏 */
.header{
  width: 750rpx;
  height: 90rpx;
  line-height: 90rpx;
  background: #fff;
  margin-bottom: 10rpx;
  font-size: 24rpx;
  font-family: FZLTHK;
  color:#1C1C1C;
  font-family: PingFang;
  box-shadow: 10rpx 0rpx 10rpx #999;
}
.header a{
  display: inline-block;
  width: 250rpx;
  height: 100%;
  text-align: center;
}
.header span{
  display: inline-block;
  height: 90rpx;

}
.active{
  color: #FF66A6;
  border-bottom: 5rpx solid #FF66A6;
}
/* 物流信息 */
.logistics-info{
  overflow: hidden;
  font-size: 24rpx;
  color:#2A2A2A;
  width: 750rpx;
  height: 190rpx;
  font-family: FZLTHK;
  background: #fff;
}
.left{
  display: inline-block;
  width: 120rpx;
  height: 190rpx;
  margin-left: 30rpx;
  background: #fff;
}
.ship-img{
  display: inline-block;
  width: 120rpx;
  height: 120rpx;
  vertical-align: bottom;
}
.left span{
  position: absolute;
  display: inline-block;
  margin-left: 30rpx;
  margin-top: 80rpx;
  left: 0;
  height: 40rpx;
  width: 120rpx;
  font-size: 22rpx;

  color:#fff;
  line-height: 40rpx;
  text-align: center;
  background: #FF85B8;
}
.right{
  display: inline-block;
  width: 560rpx;
  margin-left: 40rpx;
  height: 190rpx;
  margin-top: 35rpx;
}
.right span{
  color:#1DBF53;
}
.store{
  color:#666666;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}
.logistics-status{
  width: 750rpx;
  height: 120rpx;
  margin-top: 20rpx;
  background: #fff;
}
/* 物流状态 */
.status-left{
  display: inline-block;
  position: absolute;
  font-size: 24rpx;
  left: 0;
  margin-left: 30rpx;
  margin-top: 28rpx;
  width: 16rpx;
  height: 16rpx;
  background: #308DE5;
  border-radius: 50%;
  border: 7rpx solid #97C6F2;
  content: "";
}

.status-right{
  display: inline-block;
  width: 400rpx;
  margin-top: -30rpx;
  padding-top: 60rpx;
  margin-left: 96rpx;
}
.status-txt{
  color: #308DE5;
}
.status-time{
  color:#999999;
  margin-top: 15rpx;
}
</style>
