<template>
  <div class="goods-item" @click="itemClick">
    <img
      v-lazy="goodsItem.show.img"
    @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('itemImage')
    },
    itemClick(){
      this.$router.push('/detail/'+ this.goodsItem.iid);
    }
  }
}
</script>

<style scoped>
.goods-item {
  border-radius: 7px;
  padding: 0px 0px 10px 0px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px #E1D4D4;
  width: 45%;
}
.goods-item img {
  border-radius: 7px 7px 0px 0px;
  margin-bottom: 5px;
  width: 100%;
}
.goods-info {
  font-size: 13px;
  position: relative;
}
.goods-info p {
  text-align: center;
  margin-bottom: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.price{
  margin-left: 16px;
  font-size: 14px;
  color: var(--color-tint)
}
.collect{
position: relative;
right: -30px;
}
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
