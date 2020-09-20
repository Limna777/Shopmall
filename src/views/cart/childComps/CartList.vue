<template>
  <div class="cart-list">
      <cart-list-item v-for="(item,index) in cartList" 
      :product="item"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from '@/views/cart/childComps/CartListItem'

export default {
  name: 'CartList',
  components:{
    CartListItem
  },
  created(){
  },
  activated(){
  },
  computed:{
    ...mapGetters([
      'cartList',
    ])
  }
}
</script>

<style scoped>
.cart-list{
  width: 100vw;
  overflow: hidden;
  /* height: 100vh; */
}
.content{
  /* height: calc(100%-44px); */
}
.list-title{
  font-size: 12px
}
</style>
