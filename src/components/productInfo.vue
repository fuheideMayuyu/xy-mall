<template>
  <!-- 商品详情组件 -->
  <div class="product-info">
    <image class="product-info-img" src="/static/images/icon-img/product-icon.png"></image>
    <div class="product-txt">
      <p class="product-name">这里是名称这里是名称</p>
      <p class="product-size">这里是规格</p>
      <span class="product-price">￥10.00</span>
      <span class="product-num">&times;1</span>
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
/* 商品信息 */
.product-info{
  width: 750rpx;
  height: 200rpx;
  font-size:25rpx;
  background: #fff;
  margin-top: 2rpx;
}
.product-info-img{
  display: inline-block;
  margin-left: 30rpx;
  width: 120rpx;
  height: 120rpx;
  vertical-align: bottom;
}
.product-txt{
  display: inline-block;
  margin-left: 20rpx;
}
.product-name{
  overflow:hidden;
  width: 300rpx;
  margin-top: 30rpx;
  margin-bottom: 20rpx;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.product-size{
  font-size:22rpx;
  color:#A6A6A6;
  margin-bottom: 30rpx;
}
.product-price{
  color:#FF66A6;
}
.product-num{
  text-align: right;
  margin-left: 420rpx;
}
</style>
