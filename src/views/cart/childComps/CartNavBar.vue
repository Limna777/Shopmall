<template>
  <div class="cartnavbar">
    <nav-bar class="nav-bar">
      <div slot="center" >购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'CartNavBar',
  components:{
    NavBar
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  },
}
</script>

<style scoped>
.cartnavbar{
  background-color: var(--color-tint);
  color:white;
  font-size: 18px
}
</style>
