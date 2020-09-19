<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other"  >
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props:{
    goods:{
      defult(){
        return{}
      }
    }
  },
  created(){

  }
}
</script>

<style scoped>
.base-info{
  padding: 0px 5px
}
.info-title{
  margin: 12px 0px 7px 0px;
}
.info-price{
  margin-bottom: 5px;
  
}
.info-price span{
  display: inline-block;
  vertical-align: middle;
}
.n-price{
  color: var(--color-tint);
  font-size: 20px;
  margin-right: 8px;
}
.o-price{
  text-decoration:line-through;
  font-size: 14px ;
  color: #999999;
  margin-right: 3px;
}
.discount{
  width: 48px;
  height: 19px;
  line-height: 19px;
  font-size: 13px;
  display: inline-block;
  color: white; 
  background-color: var(--color-tint);
  position: relative;
  top: -10px;
  border-radius: 8px;
  text-align: center;
}
  .info-other {
    height: 36px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    border-bottom: 5px solid #eee;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
