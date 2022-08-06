<template>
   <tab-bar>
      <tab-bar-item path="/home" activeColor="rgb(0, 115, 255)">
        <!-- 具名插槽 -->
        <img slot="item-icon" src="~assets/img/tabbar/home_page.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_page_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      

      <tab-bar-item path="/classify" activeColor="rgb(0, 115, 255)">
        <img slot="item-icon" src="~assets/img/tabbar/classify.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/classify_active.png" alt="">
        <div slot="item-text">分类</div></tab-bar-item>

      <tab-bar-item path="/cart" activeColor="rgb(0, 115, 255)">
        <img slot="item-icon" src="~assets/img/tabbar/shopping_cart.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopping_cart_active.png" alt="">
        <div slot="item-text">购物车</div></tab-bar-item>


      <tab-bar-item path="/profile" activeColor="rgb(0, 115, 255)">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div></tab-bar-item>

    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem  from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style>

</style>