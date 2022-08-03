<template>
  <div id="detail" name="Detail">
    <detail-nav-bar ref="nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" 
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue';
import DetailSwiper from './childcomps/DetailSwiper.vue';
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue';
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue';
import DetailParamInfo from './childcomps/DetailParamInfo.vue'
import DetailCommentInfo from './childcomps/DetailCommentInfo.vue'

import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/contend/goods/GoodsList.vue';

import {getDetail,Goods,Shop,GoodsParam,getReCommend} from 'network/detail';
import { debounce } from '../../common/utils';

export default {
  name:'Detail',
  props:{},
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList,


  },
  data() {
    return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo : {},
        paramInfo : {},
        commentInfo : {},
        recommends :[],
        themeTopYs :[],
        getThemeTopYs :null,
        currentIndex : 0,

    };
  },
  computed: {},
  methods: {
    imageLoad(){
      // console.log(this.$refs.scroll.refresh);
      this.$refs.scroll.refresh()
      this.$nextTick(()=>{
        this.themeTopYs  = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopYs);
      })
    },
    titleClick(index){
      // console.log(this.$refs.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position){
      // console.log(position);
      //1.取y值
      const positionY = -position.y
      // 2.positionY和整体对比
      let length = this.themeTopYs.length
      for (let i = 0;i < length; i++) {
        if(this.currentIndex !== i && ((i<length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))){
          this.currentIndex = i
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
        // console.log(res);
        const data = res.result
        //1.获取顶部图片轮播数据
        this.topImages= data.itemInfo.topImages
        //2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //3.店铺信息
        this.shop = new Shop(data.shopInfo)
        //4.保存商品的详情数据
        this.detailInfo = data.detailInfo
        //5.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //6.取出评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
        //7.请求体推荐数据
        getReCommend().then(res =>{
          // console.log(res);
          this.recommends = res.data.list
        })
        
    })
  
  }, 
  mounted() {},
  updated() {},
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 5;
  background-color: rgb(255, 255, 255);
}
.content{
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>