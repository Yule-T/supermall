<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tab-control1"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banner="banner"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <featurre-view></featurre-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
        v-show="!isTabFixed"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isBtnShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/contend/tabControl/TabControl.vue";
import GoodsList from "components/contend/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/contend/backTop/BackTop.vue";

import HomeSwiper from "./childcomps/HomeSwiper.vue";
import RecommendView from "./childcomps/RecommendView.vue";
import FeaturreView from "./childcomps/FeaturreView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeaturreView,
    getHomeMultidata,
    getHomeGoods,
    debounce,
  },
  props: {},
  //存储请求过来的数据
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isBtnShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // 生命周期函数
  created() {
    // 1.请求多个数据
    //这是一个异步操作
    // getHomeMultidata().then(res=>{
    //   // console.log(res);
    //   this.banner = res.data.banner.list;
    //   this.recommend = res.data.recommend.list;
    // })
    this.getHomeMultidata();

    //2.请求商品数据
    // getHomeGoods('pop',1).then(res=>{
    //   console.log(res);
    // })
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     */

    tabClick(index) {
      this.currentType = index == 0 ? "pop" : index == 1 ? "new" : "sell";
      // console.log(this.currentType);
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position);
      //判断backtop是否显示
      this.isBtnShow = position.y < -1000;
      //决定tabcontrol是否吸顶(position:fixed)
      this.isTabFixed = position.y < -this.tabOffsetTop;
    },
    loadMore() {
      // console.log('++++');
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // 把数组放到数组里
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();

        // this.$refs.scroll.scroll.refresh()

        // let totalsNum = []
        // const num1 = [20,11,50]
        // const num2 = [55,88,66]
        // for(let n of num1){  //1
        //   totalsNum.push(n)
        // }
        //...就相当于num1所有数据
        // totalsNum.push(...num1) //2
      });
    },
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    //1.监听item图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      refresh();
      // this.scroll && this.$refs.scroll.refresh()
    });

    //2.获取tabControl的offsetTop
    //所以的组件都有一个属性 $el ：用于获取组件中的元素
    // console.log(this.$refs.tabControl.$el.offsetTop);
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 10);
  },
  deactivated() {
    //1.保存y值
    this.saveY = this.$refs.scroll.getScrollY();
  },
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);

  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;    */
}
.tab-control1 {
  position: relative;
  z-index: 6;
}
.content {
  /* margin-top: -40px; */
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>