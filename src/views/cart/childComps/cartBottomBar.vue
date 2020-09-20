<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      <div> 
      <span>合计：</span>￥{{totalPrice}}
      </div>
    </div>
    <div class="caculate">
      结算：{{caculate}}
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components:{
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((preValue, item)=>{
        return preValue + item.lowNowPrice * item.count
      },0).toFixed(2)
    },
    caculate(){
      return this.cartList.filter(item => item.checked).length
      
    }
  },
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  position: relative;
  bottom: 40px;
  background-color: rgb(245, 233, 234);
  display: flex;
  line-height: 40px;
}
.check-content{
  line-height: 20px;
  width: 80px;
  display: flex;
  align-items: center;
}

.check-button{
  width: 20px;
  height: 20px;
}
.caculate{
  position: absolute;
  right: 0;
  text-align: center;
  width: 80px;
  color: white;
  background-color: #FF3656;
}

</style>
