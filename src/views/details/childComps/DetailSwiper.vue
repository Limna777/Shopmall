<template>
    <swiper class="Dswipper">
      <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  components:{
    Swiper,SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.Dswipper{
  height: 300px;
}
</style>
