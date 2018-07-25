<template>
<!-- 编辑收货地址 -->
  <div class="edit-address">
    <div class="edit-module">
      <span class="edit-left" for="">收货人</span>
      <input class="edit-right top-input" type="text" placeholder="请输入收货人姓名">
    </div>
    <!-- 横线 -->
    <div class="line"></div>
    <div class="edit-module">
      <span class="edit-left" >联系电话</span>
      <input class="edit-right" type="text" name="" id="" placeholder="请填写收货人姓名" >
    </div>
    <div class="line"></div>
    <div class="edit-module">
      <span class="edit-left">收货地区</span>
      <span class="edit-right select">请选择省、市、区</span>
      <image class="go-icon" src="/static/images/icon-img/go-icon.png"></image>
    </div>
    <div class="line"></div>
    <div class="edit-module">
      <span class="edit-left">详细地址</span>
      <input class="edit-right" type="text" placeholder="请输入接到门牌信息">
    </div>
    <div class="line"></div>
    <div class="edit-module">
      <span class="edit-left">邮政编码</span>
      <input class="edit-right" type="text" placeholder="邮政编码(选填)">
    </div>
    <div class="save">保存</div>
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
.edit-address{
  box-shadow: 0px 10px 10px -10px #999 inset;
  width: 750rpx;
  height: 456rpx;
  background: #fff;
  font-size: 30rpx;
}
.edit-module{
  width: 100%;
  padding-left: 30rpx;
  height: 90rpx;
  line-height: 90rpx;
}
.edit-left{
  display: inline-block;
  font-weight: bold;
}
.edit-right{
  display: inline-block;
  font-size: 28rpx;
  margin-left: 20rpx;
}
.top-input{
  margin-left: 50rpx;
}
.select{
  color:#A6A6A6;
  margin-left: 310rpx;
}
.go-icon{
  width: 15rpx;
  height: 30rpx;
  vertical-align: middle;
  margin-left: 20rpx;
}
.save{
  position: fixed;
  bottom: 0;
  width: 750rpx;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  background: #FF66A6;
  color:#fff;
  font-size: 30rpx;
}
/* 横线 */
.line{
  content:"";
  margin-left: 30rpx;
  width: 690rpx;
  height: 2rpx;
  background: #f5f5f5;
}
</style>
