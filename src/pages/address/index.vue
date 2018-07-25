<template>
<!-- 新增收货地址 -->
  <div class="add-address">
    <div class="no-address">
      <image class="no-address-img" src="/static/images/icon-img/no-address.png"></image>
      <p>暂无收货地址~</p>
    </div>
    <a class="add" href="/pages/editAddress/main">
      <image class="add-icon" src="/static/images/icon-img/add-icon.png"></image>
      <span href="/pages/editAddress/main">新增收货地址</span>
    </a>
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
/* 没有收货地址 */
.add-address{
  width: 750rpx;
  height: 350rpx;
  font-size: 30rpx;
  color: #606060;
  text-align: center;
  box-shadow: 0px 10px 10px -10px #999 inset;
}
.no-address p{
  margin-top: 30rpx;
}
.no-address-img{
  width: 240rpx;
  height: 268rpx;
  margin-top: 200rpx;
}
/* 首次新增收货地址 */
.add{
  display: block;
  position: fixed;
  bottom: 0;
  width: 750rpx;
  height: 100rpx;
  line-height: 100rpx;
  background: #fff;
  font-size: 30rpx;
  color: #FF66A6;
}
.add-icon{
  /* display: inline-block; */
  width: 40rpx;
  height: 40rpx;
  vertical-align: middle;
}
.add span{
  margin-left: 20rpx;
}
</style>
