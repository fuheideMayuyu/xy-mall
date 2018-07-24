<template>
<!-- 首页 -->
  <div class="bg">
    <m-swiper :listImg="listImg"></m-swiper>
    <m-product></m-product>
    <m-product></m-product>
    <m-product></m-product>
    <m-product></m-product>
    <div class="all-product">
      查看全部商品
    </div>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import product from '@/components/product'

export default {
  data () {
    return {
      listImg: [
        '/static/images/swiper-img/1.jpg',
        '/static/images/swiper-img/2.jpg',
        '/static/images/swiper-img/3.jpg',
        '/static/images/swiper-img/4.jpg'
      ]
    }
  },
  components: {
    'm-swiper': swiper,
    'm-product': product
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
  /* 查看所有商品 */
  .all-product{
    margin-top: 20rpx;
    margin-left: 30rpx;
    width: 690rpx;
    height: 90rpx;
    line-height: 90rpx;
    background: #fff;
    border-radius: 10rpx;
    font-size: 30rpx;
    color: #FF66A6;
    text-align: center;
  }
</style>
