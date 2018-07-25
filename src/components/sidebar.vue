<template>
<!-- 分类组件 -->
  <div class="sidebar">
    <a class="category-list top" href="/pages/goodsFilter/main">
      <span  class="category-txt">洗面奶</span>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </a>
    <a class="category-list">
      <sapn class="category-txt">卸妆水</sapn>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </a>
    <a class="category-list">
      <sapn class="category-txt">化妆水</sapn>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </a>
    <a class="category-list">
      <sapn class="category-txt">爽肤水</sapn>
      <image class="icon-btn" src='/static/images/icon-img/go-icon.png'></image>
    </a>
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
  display: inline-block;
  width: 750rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 20rpx;
}
.top{
  box-shadow: 0px 10px 10px -10px #999 inset;
}
/* 商品类目文本 */
.category-txt{
  display: inline-block;
  width: 690rpx;
  height: 80rpx;
}
/* 商品类目图标 */
.icon-btn{
  width: 15rpx;
  height: 30rpx;
}
</style>
