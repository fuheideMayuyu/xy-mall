<template>
<!-- 分类组件 -->
  <div class="sidebar">
    <div class="category-list top">
      <a href="/pages/goodsFilter/main" class="category-txt">洗面奶</a>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </div>
    <div class="category-list">
      <a class="category-txt">卸妆水</a>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </div>
    <div class="category-list">
      <a class="category-txt">化妆水</a>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </div>
    <div class="category-list">
      <a class="category-txt">爽肤水</a>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  components: {},
  methods: {},
  created () {}
}
</script>

<style scoped>
/* 商品类目 */
.category-list{
  width: 750rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 32rpx;
}
.top{
  border-top: 2px solid #f5f5f5;
}
/* 商品类目文本 */
.category-txt{
  display: inline-block;
  width: 665rpx;
  height: 80rpx;
}
/* 商品类目图标 */
.icon-btn{
  width: 15rpx;
  height: 30rpx;
}
</style>
