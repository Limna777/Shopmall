<template>
  <div>
    <nav-bar class="title-wrap" >
      <div slot="left" class="back" @click="backClick" >
        <img src="~assets/img/common/back.svg" alt="">
      </div>
        <div slot="center"class="D-title">
          <div  v-for="(item ,index) in title" 
          class="titleItem"
          @click="titleClick(index)"
          :class="{isPink:currentIndex === index}"
          >{{item}}</div>
      </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return{
      title:['商品','详情','评论','推介'],
      currentIndex:0
    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index;
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.D-title{
  display: flex;
}
.titleItem{
  flex:1;
}
.isPink{
  color:var(--color-tint)
}
.title-wrap{
  box-shadow: 0 0 1px rgb(100, 100, 100,0.3)
}
.back img{
  position: relative;
  top: 6px;
}
</style>
