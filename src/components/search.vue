<template>
  <!-- 搜索组件 -->
  <div class="search">
    <block>
      <icon class="search-icon" size='20' type='search'></icon>
      <input class="search-input"  type="text" placeholder="搜索店内商品" autofocus/>
    </block>
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
.search{
  margin-left: 20rpx;
  margin-bottom: 30rpx;
  width: 710rpx;
  height: 55rpx;
  line-height: 55rpx;
  font-size:30rpx;
  border: 2rpx solid #f5f5f5;
  border-radius: 30rpx;
  background: #f5f5f5;
}
/* 搜索图标 */
.search-icon{
  margin-top: 12rpx;
  margin-left: 40rpx;
  margin-right: 30rpx;
}
/* 搜索输入框 */
.search-input{
  display: inline-block;
  width: 500rpx;
  height: 55rpx;
  line-height: 55rpx;
  margin-top: -28rpx;
}
</style>
