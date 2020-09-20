<template>
  <div id="cart">
    <!-- 导航 -->
    <cart-nav-bar></cart-nav-bar>
    <!-- 列表 -->
    <scroll
    class="content"  
    :probe-type="3" 
    @scroll="changeScroll"
    ref="scroll"
    >
    <cart-list></cart-list>
    </scroll>
  </div>
</template>

<script>
import CartNavBar from '@/views/cart/childComps/CartNavBar'
import CartList from '@/views/cart/childComps/CartList'

import Scroll from '@/components/common/scroll/Scroll'


  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList,
      Scroll
    },
    activated() {
      //每次进入购物车页面就重新计算一下高度
      this.$refs.scroll.refresh();
    },
    methods: {
      changeScroll(position){
      this.isShow = (-position.y) > 2000;
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    },
  }
</script>

<style scoped>
#cart{
  height: 100vh;
  position: relative;
}
.content{
  touch-action: none;
  height: calc(100vh - 44px - 49px);
  overflow-y: hidden;
}
</style>
