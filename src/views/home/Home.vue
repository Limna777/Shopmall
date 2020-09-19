<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        :class="{fixed:isTabFixed}"
        ></tab-control>
      <scroll class="content" 
      ref="scroll" 
      :probe-type="3" 
      @scroll="changeScroll"
       :pull-up-load="true"
      @pullingUp="loadMore"
      >
        <home-swiper :banners="banners" @imgLoad="imgLoad"></home-swiper>
        <recommand-view :recommands="recommands"></recommand-view>
        <feature-view></feature-view>
        <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="topClick" v-show="isShow"></back-top>
    
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommandView from './childComps/RecommandView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from 'network/home'


export default {
  name: "Home",
  components: {
    HomeSwiper, 
    RecommandView, 
    FeatureView, 
    TabControl, 
    NavBar,
    GoodsList,
    Scroll,
    BackTop

  },
  data() {
    return {
      banners: [],
      recommands: [],
      goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType:'pop',
        isShow:false,
        isTabFixed:false,
        saveY:0,
        
    }
  },
  created() {
    //1、请求多个轮播图的数据
    this.getHomeMultidata()
    //2、请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    //已创建就监听图片的加载
  },
  destroyed(){
    console.log("aaa");
  },
  activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
  deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      //2、取消全局事件的监听
      this.$bus
    },
  
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /* 网络请求 */
    getHomeMultidata() {
      //1、请求多个数据，异步操作
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommands = res.data.recommend.list;
        //等到没有引用的时候就会垃圾回收
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
        // console.log(res);
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    },
    
    topClick(){
      //获取到scroll 点击回到顶部
      this.$refs.scroll.scrollTo(0,0,300);
    },
    changeScroll(position){
      this.isShow = (-position.y) > 2000;
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
    },
    imgLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
    
    
  },
}
</script>


<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
}
.fixed{
  position: fixed;
  z-index: 90;
  top: 44px;
  left: 0;
  right: 0;
}

.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
