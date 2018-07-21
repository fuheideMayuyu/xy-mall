<template>
<!-- 轮播图组件 -->
  <swiper indicator-dots="true" indicator-color="#fff" indicator-active-color="#FF66A6" autoplay="true" circular="true" interval="5000" duration="1000">
    <block  v-for="(item, index) in listImg" :key="index">
        <swiper-item>
            <image :src="item" class="slide-image" mode="widthFix"/>
        </swiper-item>
    </block>
  </swiper>
</template>

<script>
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
  }
}
</script>

<style scoped>
.slide-image{
  width: 100%;
}
</style>
