<template>
<div>
  <nav-bar class="home-nav">
    <div slot="center">购物车({{length}})</div>
  </nav-bar>
  <cart-list/>
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import CartList from './childcomps/CartList.vue';
import CartBottomBar from './childcomps/CartBottomBar.vue';

import { mapGetters } from "vuex";

export default {
  name: 'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar,

  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    //两种语法
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length:'cartLength',
      // list:'cartList'
    })
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);
}
.cart-list{
  height: 100vh;
}
</style>