<template>
  <div class="category">
    <nav-bar class="c-navBar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: "Category",
    created(){
      
    },
    components:{
      NavBar
    },
    mounted() {
    },
  }
</script>

<style scoped>
.c-navBar{
  background-color:var(--color-tint);
  color: white;
  font-size: 20px;
}
</style>
