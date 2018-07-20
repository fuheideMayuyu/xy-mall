<template>
  <div class="bg">
    <m-swiper></m-swiper>
    <div class="product">
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
    </div>
    <div class="product">
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
    </div>
    <div class="product">
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
    </div>
    <div class="product">
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
      <div class="product-modul">
        <a class="product-a">
            <image class="product-img" src="/static/images/product-img/1.jpg"/>
            <p class="product-description">这里是产品名称，这...</p>
            <span class="price-o">￥5.00</span>
            <span class="price-n">￥10.00</span>
        </a>
      </div>
    </div>
    <div class="all-product">
      查看全部商品
    </div>
  </div>
</template>

<script>
import swiper from '@/components/swiper'

export default {
  data () {
    return {}
  },

  components: {
    'm-swiper': swiper
  },
  methods: {},
  created () {}
}
</script>

<style scoped>
/* 背景 */
  .bg{
    background: #F4F4F4;
  }
  /* 商品 */
  .product{
    overflow: hidden;
    margin-top: 15rpx;
    margin-left: 20rpx;
    font-size: 28rpx;
  }
  /* 单个商品模块 */
  .product-modul{
    display: inline-block;
    margin-left: 15rpx;
    background: #fff;
    border-bottom-right-radius: 10rpx;
    border-bottom-left-radius: 10rpx;
  }
  /* 商品跳转链接 */
  .product-a{
    display: block;
  }
  /* 商品图片 */
  .product-img{
    width: 335rpx;
    height: 313rpx;
    border-top-left-radius: 10rpx;
    border-top-right-radius: 10rpx;

  }
  /* 商品名称 */
  .product-description{
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
  /* 商品现价 */
  .price-o{
    margin-left: 15rpx;
    margin-right: 15rpx;
    color:#FF66A6;
    margin-left: 10rpx;
  }
  /* 商品原价 */
  .price-n{
    margin-left: 15rpx;
    margin-right: 15rpx;
    font-size: 20rpx;
    text-decoration:line-through
  }
  /* 查看所有商品 */
  .all-product{
    margin-top: 15rpx;
    margin-left: 32rpx;
    width: 685rpx;
    height: 80rpx;
    background: #fff;
    border-radius: 10rpx;
    font-size: 30rpx;
    color: #FF66A6;
    line-height: 80rpx;
    text-align: center;
  }
</style>
