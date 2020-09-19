<template>
  <div class="bottom-bar">
    <div class="B-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click.preventDefault="Collect">
        <i class="icon select" :class="{collect:isCollect}"></i>
        <span class="text" :class="{collect:isCollect}">收藏</span>
      </div>
    </div>
    <div class="B-right">
      <div class="B-cart" @click="addToGoods"> 
        <span>加入购物车</span>
      </div>
      <div class="B-buy">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data(){
    return{
      isCollect:false
    }
  },
  methods: {
    Collect(){
      // window.addEventListener('cilck', func, { passive: false })
      // console.log("sss");
      this.isCollect=!this.isCollect;
    },
    addToGoods(){
      this.$emit('addGoods')
    }
  },
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  height: 49px;
  background-color: white;
  width: 100%;
  position: relative;
  bottom: 49px;
  z-index: 100;
  box-shadow: 0 0 3px rgba(1, 1, 1,.2);
}
.B-left{
  width: 160px;
  display: flex;
  text-align: center;
  font-size: 12px;
}
.B-left div{
  flex: 1;
}
.B-left span{
  position: relative;
  
  top: -1px;
}
.B-left .icon {
  display: block;
  width: 20px;
  height: 18px;
  margin: 10px auto 3px;
  position: relative;
  top: -3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/90%;
  background-position:-17px 1px;
  }
  .B-left .service {
  background-position: -17px -166px;
}
  .B-left .shop {
  background-position: 1px -81px;
}
.B-right{
  display: flex;
}
.B-right div{
  font-size: 13px;
  line-height: 49px;
  text-align: center;
  width: 80px;
  flex: 1;
}
.B-cart{
  background-color: #EDD817;
}
.B-buy{
  color: white;
  background-color: #FF6699;
}
.collect{
  background-position: 1px -22px !important;
  color: rgb(209, 78, 100);
}
</style>
