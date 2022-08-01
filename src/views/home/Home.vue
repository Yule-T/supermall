<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <featurre-view></featurre-view>
    <tab-control class="tab-control" 
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    
    <div>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    <h5>hhhh</h5>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/contend/tabControl/TabControl.vue'
import GoodsList from 'components/contend/goods/GoodsList.vue';

import HomeSwiper from './childcomps/HomeSwiper.vue'
import RecommendView from './childcomps/RecommendView.vue'
import FeaturreView from './childcomps/FeaturreView.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components:{
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeaturreView,
    getHomeMultidata,
    getHomeGoods
  },
  props:{},
  //存储请求过来的数据
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page: 0,list:[]},
        'new':{page: 0,list:[]},
        'sell':{page: 0,list:[]},
      },
      currentType:'pop'
    }
  },
  watch:{},
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  // 生命周期函数
  created(){
    // 1.请求多个数据
    //这是一个异步操作
    // getHomeMultidata().then(res=>{
    //   // console.log(res);
    //   this.banner = res.data.banner.list;
    //   this.recommend = res.data.recommend.list;
    // })
    this.getHomeMultidata()

    //2.请求商品数据
    // getHomeGoods('pop',1).then(res=>{
    //   console.log(res);
    // })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    /**
     * 事件监听相关的方法
     */
    tabClick(index){
      this.currentType = index == 0 ? 'pop' : index == 1 ? 'new' : 'sell';
      // console.log(this.currentType);
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
    const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res);
        // 把数组放到数组里
        this.goods[type].list.push(...res.data.list) 
        this.goods[type].page += 1

        // let totalsNum = []
        // const num1 = [20,11,50]
        // const num2 = [55,88,66]
        // for(let n of num1){  //1
        //   totalsNum.push(n)
        // }
        //...就相当于num1所有数据
        // totalsNum.push(...num1) //2
      })
    }
  }
}
</script>
<style>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;   
}
.tab-control{   
    position: sticky;
    top: 44px;
    /* z-index: 0; */
}
</style>