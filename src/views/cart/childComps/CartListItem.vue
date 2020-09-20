<template>
  <div id="list-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked"
                    @click.native="checkClick">
      </check-button>
    </div>
    <div class="list-img">
      <img :src="product.image" alt="">
    </div>
    <div class="list-info">
      <div class="list-title">{{product.desc}}</div>
      <div class="list-desc">{{product.desc}}</div>
      <div class="info-button">
        <div class="list-price left">￥{{product.lowNowPrice}}</div>
        <div class="list-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>
x
<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  props:{
    product:{
      type:Object,
      default(){
        return{
        }
      }
    }
  },
  components:{
    CheckButton
  },
  methods: {
    checkClick(){
      this.product.checked =! this.product.checked
    }
  },
}
</script>

<style scoped>
#list-item{
   width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc
}
#list-item:first-child{
  border-top: 1px solid #ccc;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-img img{
  width: 80px;
    height: 110px;
    display: block;
    border-radius: 5px;
}
.list-info{
   width: 100%;
    text-align: center;
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.list-title{
   overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 18px;
  margin-bottom: 15px;
}
.list-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(129, 115, 115);
  font-size: 13px;
}
.list-price{
  color: var(--color-tint);
  margin-top:20px;
}
.list-count{
  margin-top: 20px;
}
</style>
