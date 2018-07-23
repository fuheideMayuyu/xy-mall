<template>
<!-- 商品分类 -->
  <div class="bg">
    <m-search></m-search>
    <m-sidebar></m-sidebar>
  </div>
</template>

<script>
import search from '@/components/search'
import sidebar from '@/components/sidebar'
export default {
  data () {
    return {}
  },
  components: {
    'm-search': search,
    'm-sidebar': sidebar
  },
  methods: {},
  created () {}
}
</script>

<style scoped>
.bg{
  background: #fff;
}
</style>
