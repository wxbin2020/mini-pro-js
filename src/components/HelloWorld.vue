<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorlddddd',
  props: {
  },
  data () {
    return {
      msg: '在此看阿卡看吧'
    }
  },
  created () {
    this.msg[2].name = 'map是返回处理后的数true'
  },
  mounted () {
    this.msg[3].name = 'map是返回处理后的数组, some是只要满足一个就返回true'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
