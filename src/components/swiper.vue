<template>
  <swiper  indicator-dots="true" autoplay="true" circular="true" interval="5000" duration="1000">
    <block  v-for="(item, index) in listImg" :key="index">
        <swiper-item>
            <image :src="item" class="slide-image" mode="aspectFill"/>
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
</style>
