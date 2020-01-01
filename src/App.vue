<template>
  <div class="page-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style lang="scss">
.page-container {
  height: 100%;
}
  .swiper-pagination-bullet.swiper-pagination-bullet-active{
    background:white !important;
  }
</style>
