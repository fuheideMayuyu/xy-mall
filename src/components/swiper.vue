<template>
<!-- 轮播图组件 -->
  <swiper indicator-dots="true" indicator-color="#fff" indicator-active-color="#FF66A6"
          autoplay="true" circular="true" interval="5000" duration="1000" :style="{ width: width , height: height }">
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
      listImg: []
    }
  },
  props: ['width', 'height', 'listImg'],
  watch: {
    width () {
      return this.width
    },
    height () {
      return this.height
    },
    listImg () {
      return this.listImg
    }
  }
}
</script>

<style scoped>
.slide-image{
  width: 100%;
}
</style>
