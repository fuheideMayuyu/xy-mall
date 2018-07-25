<template>
<!-- 商品模块组件 -->
  <div class="product">
    <div class="product-modul product-left">
      <a class="product-a" href="/pages/goodDetail/main">
        <image class="product-img" src="/static/images/product-img/1.jpg"/>
        <p class="product-description">这里是产品名称,这里是...</p>
        <span class="price-o">￥5.00</span>
        <span class="price-n">￥10.00</span>
      </a>
    </div>
    <div class="product-modul">
      <a class="product-a">
        <image class="product-img" src="/static/images/product-img/1.jpg"/>
        <p class="product-description">这里是产品名称,这里是...</p>
        <span class="price-o">￥5.00</span>
        <span class="price-n">￥10.00</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
  /* 商品 */
  .product{
    overflow: hidden;
    font-size:28rpx;
    font-family: PingFang;
    color: #303030;
    margin-top: 20rpx;
    margin-left: 30rpx;
  }
  .product-left{
    margin-right: 20rpx;
  }
  /* 单个商品模块 */
  .product-modul{
    display: inline-block;
    box-shadow:  2px #F0F0F0;
    width: 336rpx;
    height: 440rpx;
    background: #fff;
    border-radius: 10rpx;
  }
  /* 商品跳转链接 */
  .product-a{
    display: block;
  }
  /* 商品图片 */
  .product-img{
    width: 100%rpx;
    height: 312rpx;
    border-top-left-radius: 10rpx;
    border-top-right-radius: 10rpx;

  }
  /* 商品名称 */
  .product-description{
    overflow:hidden;
    width: 300rpx;
    margin-top: 25rpx;
    margin-bottom: 20rpx;
    margin-left: 18rpx;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  /* 商品现价 */
  .price-o{
    margin: auto 15rpx;
    color:#FF66A6;
  }
  /* 商品原价 */
  .price-n{
    margin: auto 15rpx;
    font-size: 20rpx;
    color: #a6a6a6;
    text-decoration:line-through
  }
</style>
