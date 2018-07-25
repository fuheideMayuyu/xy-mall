<template>
<!-- 商品总额和运费组件 -->
  <div>
    <div class="cost">
      <div class="product-cost">
        <span class="cost-txt">商品总额</span>
        <span class="cost-num">￥10.00</span>
      </div>
      <div class="product-cost">
        <span class="cost-txt">运费</span>
        <span class="cost-num">￥10.00</span>
      </div>
    </div>
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
/* 商品总额和运费 */
.cost{
  width: 750rpx;
  height: 134rpx;
  margin-top: 20rpx;
  background: #fff;
  font-size:30rpx;
}
.product-cost{
  width: 100%;
  height: 67rpx;
  line-height: 67rpx;
}
.cost-txt{
  margin-left: 30rpx;
}
.cost-num{
  text-align: right;
  position: absolute;
  right: 0;
  margin-right: 30rpx;
}
</style>
