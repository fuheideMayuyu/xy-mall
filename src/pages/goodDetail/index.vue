<template>
  <div>
    <m-swiper height="700rpx" width="" :listImg="listImg"></m-swiper>
    <div class="good-desc box-padding">
      <p>这里是名称这里是名称这里是名称这里是名称这里
        是名称这里是名称这里是名称这里是名...</p>
      <div><span class="price-color">¥10.0</span><span class="icon-box float-right">
        <image class="share-icon arrow-icon" src="/static/images/icon-img/arrow-icon.png" alt="" mode="widthFix" /></span>
      </div>
    </div>
    <div class="good-info box-padding">
      <div class="display-box display-box_3 txt-box">运费: <span>¥10.0</span></div>
      <div class="display-box display-box_3 txt-box align-center ">剩余: <span>5</span></div>
      <div class="display-box display-box_3 txt-box align-right">月销量: <span>150</span></div>
    </div>
    <div class="store-info box-padding">
      <div class="store-logo display-box_3 float-left">
        <image src="/static/images/icon-img/logo.png" mode="widthFix"></image>
      </div>
      <div class="store-name display-box_3 float-left">小梦的店铺</div>
      <div class="more-icon display-box_3 float-right">
        <image src="/static/images/icon-img/go-icon.png" mode="widthFix"></image></div>
    </div>
    <!-- 底部按钮 -->
    <div class="footer">
      <div class="car-icon float-left align-center">
        <image src="/static/images/icon-img/shop-cart.png" mode="widthFix"></image>
      </div>
      <div class="add-good-btn float-left btn_orange btn-txt-color_white align-center" @click="addHandle">加入购物车</div>
      <div class="buy-now-btn float-left btn_purple btn-txt-color_white align-center">立即购买</div>
    </div>

    <!-- 点击加入购物车 -->
    <tempalte v-if="isShow">
      <div class="alert-mask"></div>
      <div class="alert-good ">
        <div class="edit-good">
          <div class="view-good">
            <div class="good-img float-left">
              <image src="/static/images/good-detail/good-img-scale01_02_03.png"  mode="widthFix"></image>
            </div>
            <div class="good-title float-left">
              <p>这里是名称这里是名称这里是名称这里是名称这里
                是名称</p>
              <p class="price-color">¥10.0</p>
            </div>
          </div>
          <div class="choice-some box-padding">
            <div class="choice-item">
              <div class="item-title">购买数量</div>
              <div class="list-content">
                <span class="item item-active display-box align-center btn-txt-color_white">50ml</span>
                <span class="item display-box align-center">100ml</span>
              </div>
            </div>
            <div class="choice-item">
              <div class="item-title">购买数量</div>
              <div class="list-content">
                <span class="item item-active display-box align-center btn-txt-color_white">荷兰</span>
                <span class="item display-box align-center">中国</span>
              </div>
            </div>
          </div>
          <div class="edit-num box-padding" style="position: relative">
            <div class="num-label display-box">购买数量<p class="stock">剩余 <span>15</span>件</p></div>
            <div class="num-box float-right">
              <span class="num-minus float-left align-center">-</span>
              <input class="num-input float-left align-center" type="text" value="99">
              <span class="num-plus float-left align-center price-color">+</span>
            </div>
          </div>
        </div>
        <div class="next-btn btn_purple btn-txt-color_white align-center" @click="nextHandle">下一步</div>
      </div>
    </tempalte>

  </div>
</template>
<script>
  import swiper from '@/components/swiper'
  export default {
    data () {
      return {
        isShow: false,
        listImg: [
          '/static/images/good-detail/good-img01_02.png',
          '/static/images/good-detail/good-img01_02.png',
          '/static/images/good-detail/good-img01_02.png',
          '/static/images/good-detail/good-img01_02.png'
        ]
      }
    },
    components: {
      'm-swiper': swiper
    },
    methods: {
      addHandle () {
        this.isShow = true
      },
      nextHandle () {
        let self = this
        wx.showToast({
          title: '加入购物车成功',
          duration: 2000,
          icon: 'none',
          success () {
            self.isShow = false
          }
        })
      }
    }
  }
</script>
<style scoped>
  .good-desc {
    padding-bottom:0;
  }
  .good-info {
    padding-top: 0;
    padding-bottom: 0;
  }
  .good-info .txt-box {
    height: 72rpx;
    line-height: 72rpx;
    color: #a6a6a6;
  }
  .store-info {
    height: 120rpx;
  }
  .store-info .store-logo {
    width: 60rpx;
    height: 60rpx;
  }
  .store-info .store-name {
    margin-left: 20rpx;
  }
  .more-icon {
    display: inline-block;
    width: 25rpx;
    height: 25rpx;
  }
  .arrow-icon{
    width: 36rpx;
    height: 36rpx;
  }
  .footer .car-icon {
    width: 20%;
    border-top: 1px solid #ccc;
  }
  .footer .car-icon image {
    width: 40%;
    margin-top: 14rpx;
  }
  .footer .add-good-btn, .footer .buy-now-btn {
    width: 40%;
  }

  .alert-good {
    background: #fff;
    position: absolute;
    bottom: 0;
    z-index: 0;
    width: 100%;
  }
  .edit-good {
    box-sizing: border-box;
    border-top: 1px solid #efefef;
  }
  .next-btn {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
  }
  .view-good {
    position: relative;
    height: 170rpx;
  }
  .view-good .good-img {
    position: relative;
    top:-30rpx;
    left:20rpx;
    width: 160rpx;
    height: 160rpx;
    box-shadow: 0 2rpx 10rpx 0 rgba(204,204,204,0.6);
  }
  .view-good .good-title {
    width: 70%;
    /*height:200rpx;*/
    line-height:140%;
    margin-left:40rpx;
    margin-top:20rpx;

  }
  .edit-num .num-box{
    box-sizing: border-box;
    border: 1px solid #ececec;
  }
  .edit-num, .choice-some {
    border-top: 1px solid #ececec;
  }
  .edit-num .stock {
    position: absolute;
    left:32rpx;
    top:64rpx;
    color: #999;
    font-size: 25rpx;
  }
  .num-box .num-minus {
    color: #b3b3b3;
  }

  .num-box .num-minus, .num-box .num-plus {
    width: 90rpx;
    background: #ececec;
    font-size:50rpx;
  }
  .num-box input{
    width: 100rpx;
  }
  .choice-item {
    margin-bottom: 20rpx;
  }
  .choice-some .item {
    width:156rpx;
    height:60rpx;
    line-height:60rpx;
    border-radius:30rpx;
    background: #ececec;
    margin-right: 20rpx;
  }
  .choice-some .item.item-active {
    background: #ff66a6;
  }
</style>
