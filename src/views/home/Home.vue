<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childcomps/HomeSwiper.vue'
import RecommendView from './childcomps/RecommendView.vue'

import {getHomeMultidata} from 'network/home'

export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    getHomeMultidata
  },
  props:{},
  //存储请求过来的数据
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  // 生命周期函数
  created(){
    // 1.请求多个数据
    //这是一个异步操作
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  },
  mounted(){}
}
</script>
<style>
.home-nav{
 background-color: var(--color-tint);
 color: white;
}
</style>