<template>
  <div class="about">
    <div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
    <el-amap vid="amapContainer" :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
    </el-amap>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
export default {
  components: { Swiper, SwiperSlide },
  data () {
    return {
      zoom: 12,
      center: [116.239546, 39.961655],
      events: {
        init (o) {
          // eslint-disable-next-line no-undef
          let marker = new AMap.Marker({
            position: [121.59996, 31.197646]
          })
          marker.setMap(o)
        },

      }
    }
  },
  mounted () {
    window.VueAMap.lazyAMapApiLoaderInstance.load().then(() => {
      // eslint-disable-next-line no-undef
      this.map = new AMap.Map('amapContainer', {
        // eslint-disable-next-line no-undef
        center: new AMap.LngLat(121.59996, 31.197646),
        zoom: this.zoom
      })
    })
  }
}
</script>
<style lang="scss" scoped>
.amap-demo {
  height: 100vh;
}
</style>
