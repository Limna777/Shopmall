<template>
  <div class="backtop">
    <img src="~assets/img/common/top.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
    }
  },
}
</script>

<style scoped>
 .backtop {
    position: fixed;
    right: 6px;
    bottom: 45px;
  }
  .backtop img {
    width: 43px;
    height: 43px;
  }
</style>
