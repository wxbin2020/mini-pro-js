<template>
  <div class="about">
    <block v-for="(item, index) in items" :key="index">
      <h5 v-text="item.name"></h5>
    </block>
    <h3 v-text="key" style="text-align: center;"></h3>

    <br>
    <hr>
    <HelloWorld :msg='items'> </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      items: [
        { id: 1, name: '121212' },
        { id: 2, name: 'liuad' },
        { id: 3, name: 'adad' },
        { id: 4, name: 'adf' },
        { id: 5, name: 'dddd' },
      ]
    }
  },
  created () {
    this.items[1].name = '二次元社区1'
  },
  mounted () {
    this.items[2].name = '二次元社区'
  },
  updated () {
    this.items[5].name = '二次元社区1'
    this.items[5].id = 6
  }
}
</script>
