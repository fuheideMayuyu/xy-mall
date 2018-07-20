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
  .bg{
    background: #F4F4F4;
  }
  .product{
    margin-top: 25rpx;
    margin-left: 23rpx;
    font-size: 28rpx;

  }
  .product-modul{
    display: inline-block;
    margin-left: 25rpx;
    background: #fff;
    border-bottom-right-radius: 10rpx;
    border-bottom-left-radius: 10rpx;
  }
  .product-a{
    display: block;
  }
  .product-img{
    width: 318rpx;
    height: 318rpx;
    border-top-left-radius: 10rpx;
    border-top-right-radius: 10rpx;

  }
  .product-description{
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
  .price-o{
    margin-left: 15rpx;
    margin-right: 15rpx;
    color:#FF66A6;
    margin-left: 10rpx;
  }
  .price-n{
    margin-left: 15rpx;
    margin-right: 15rpx;
    font-size: 20rpx;
    text-decoration:line-through
  }
</style>
