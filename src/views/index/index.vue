<template>
  <div class="about">
    <el-amap vid="amapContainer" :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
    </el-amap>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
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
