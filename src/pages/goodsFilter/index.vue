<template>
<!-- 分类筛选 -->
  <div>
    <div class="bg">
      <m-search></m-search>
    </div>
    <div class="filter">
      <div class="filter-w">
        <span>最新</span>
        <span class="down new-down"></span>
      </div>
      <div class="filter-w">
        <span>价格</span>
        <span class="up"></span>
        <span class="down"></span>
      </div>
      <div class="filter-w">
        <span>销量</span>
        <span class="up"></span>
        <span class="down"></span>
      </div>
    </div>
    <m-product></m-product>
    <m-product></m-product>
    <m-product></m-product>
  </div>
</template>

<script>
import search from '@/components/search'
import product from '@/components/product'

export default {
  data () {
    return {}
  },
  components: {
    'm-search': search,
    'm-product': product
  },
  methods: {},
  created () {}
}
</script>

<style scoped>
.bg{
  width: 750rpx;
  height: 80rpx;
  background: #fff;
}
/* 商品排序 */
.filter{
  width: 750rpx;
  height: 80rpx;
  font-size:28rpx;
  font-family: PingFang;
  color: #303030;
  background: #fff;
  border-top: 1rpx solid #f5f5f5;
  border-bottom: 1rpx solid #f5f5f5;
  box-shadow: 0px 10px 10px -10px #999 inset;
}
.filter-w{
  display: inline-block;
  width: 250rpx;
  height: 100%;
  line-height: 80rpx;
  text-align: center;
  margin-left: -10rpx;
}
.up{
  display:block;
  margin-left: 165rpx;
  margin-top: -50rpx;
  width:0;
  height:0;
  border-width:0 10rpx 10rpx;
  border-style:solid;
  border-color:transparent transparent 	#D3D3D3;
}
.down{
  display:block;
  margin-left: 165rpx;
  margin-top: 5rpx;
  width:0;
  height:0;
  border-width: 10rpx 10rpx 0;
  border-style:solid;
  border-color:  	#D3D3D3 transparent transparent;
}
.new-down{
  margin-top: -36rpx;
}
/* 商品列表 */
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
    width: 305rpx;
    margin-left: 15rpx;
    margin-right: 15rpx;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
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
</style>
