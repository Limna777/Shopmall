<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods"
      :goodsItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {

  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
