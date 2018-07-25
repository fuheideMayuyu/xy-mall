<template>
<!-- 店铺信息组件 -->
  <div>
    <a class="shop-info">
      <image class="shop-info-icon" src="/static/images/icon-img/logo.png"></image>
      <span class="shop-info-name">小梦的店铺</span>
      <image class="go-shop-icon" src="/static/images/icon-img/go-icon.png"></image>
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
/* 店铺信息 */
.shop-info{
  width: 750rpx;
  height: 120rpx;
  margin-top: 20rpx;
  line-height: 120rpx;
  background: #fff;
  font-size: 30rpx;
}
.shop-info-icon{
  width: 65rpx;
  height: 65rpx;
  vertical-align: middle;
  margin-left: 30rpx;
}
.shop-info-name{
  margin-left: 20rpx;
  color:#696969;
}
.go-shop-icon{
  width: 16.8rpx;
  height: 30rpx;
  vertical-align: middle;
  margin-left: 450rpx;
}
</style>
