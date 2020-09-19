<template>
  <div>
    <!-- 导航 -->
    <cart-nav-bar></cart-nav-bar>
    <!-- 列表 -->
    <cart-list></cart-list>
  </div>
</template>

<script>
import CartNavBar from '@/views/cart/childComps/CartNavBar'
import CartList from '@/views/cart/childComps/CartList'

  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList
    }
  }
</script>

<style scoped>

</style>
