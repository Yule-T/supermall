<template>
  <div class='cart-list'>
    <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList" 
                        :key="index"
                        :item-info="item" />
    </scroll>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue';

import Scroll from "components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";

export default {
  name:'CartList',
  props:{},
  components: {
    Scroll,
    CartListItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated(){
    // console.log('----');
    this.$refs.scroll.refresh()
  },
  watch: {},
  methods: {},
  created() {}, 
  mounted() {}, 
}
</script>
<style scoped>
.cart-list{
    height: calc(100vh - 44px - 49px - 40px);
    /* background-color: rgb(127, 255, 129); */
    overflow: hidden;
}
.content{
    height: 100%;
}
</style>