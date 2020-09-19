<template>
  <div id="detail-wrap">
    <detail-nav-bar class="detail-nav" ></detail-nav-bar>
    <scroll class="content1" 
    ref="scroll"
     @scroll="changeScroll"
     :probe-type="3" >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
    <back-top @click.native="topClick" v-show="isShow"></back-top>
    <detail-bottom-bar @addGoods="addToGoods"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from '@/views/details/childComps/DetailSwiper'
import DetailBaseInfo from '@/views/details/childComps/DetailBaseInfo'
import DetailShopInfo from '@/views/details/childComps/DetailShopInfo'
import DetailGoodsInfo from '@/views/details/childComps/DetailGoodsInfo'
import DetailParamInfo from '@/views/details/childComps/DetailParamInfo'
import DetailBottomBar from '@/views/details/childComps/DetailBottomBar'

import BackTop from '@/components/content/backTop/BackTop'
import Scroll from '@/components/common/scroll/Scroll'

import {getDetail , Goods , Shop , GoodsParam} from 'network/detail'
export default {
  name: 'Detail',
  data(){
    return{
      iid:null,
      res:null,
      topImages:[],
      desc:[],
      price:[],
      columns:[],
      goods:{},
      shop:{},
      detailInfo:[],
      paramInfo:[],
      bottom:[''],
      isShow:false,
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    BackTop,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar
  },
  created(){
    this.iid = this.$route.params.iid;
    // console.log(this.$route.params.iid);

    this.getDetail()
  },
  methods: {
    getDetail(){
      getDetail(this.iid).then(res=>{
        console.log(res);
        this.res = res;
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // console.log(this.detailInfo);
        // this.goodsParam

      })
    },
    imageLoad(){
      // console.log(this.$refs.scroll);
      this.$refs.scroll.refresh()
    },
    topClick(){
      this.$refs.scroll.scrollTo(0,0,250)
    },
    changeScroll(position){
      this.isShow = (-position.y) > 2000;
    },
    addToGoods(){
      //1、获取
      // console.log(this.res);
      const product = {}
      product.image = this.topImages[0]
      product.title = this.title
      product.price = this.goods.newPrice
      product.desc = this.goods.desc
      product.iid = this.iid

      //2放到购物车里，利用vuex
      this.$store.dispatch('addCart',product)

    }
  },
}
</script>

<style scoped>
#detail-wrap{
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;

}

.content1{
  height: calc(100% - 44px);
  touch-action: none
}
</style>

