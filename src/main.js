import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

// 引入vue-amap
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'aaf3394c5303d92ea5fc8636c5fc76ad',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
