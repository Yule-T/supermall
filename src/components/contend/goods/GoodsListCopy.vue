<template>
  <div class='goods'>
    <goods-list-item v-for="item in goods" 
    :key="item.name"
    :goods-item="item"></goods-list-item>

  </div>
</template>

<script>
import GoodsListItem from './GoodsListItemCopy.vue';

export default {
  name:'GoodsListItemCopy',
  props:{
    goods:{
        type:Array,
        default(){
        return []
        }
    }
  },
  components: {
    GoodsListItem
  },
  data() {
    return {};
  },
  computed: {}
}
</script>
<style  scoped>
/* .goods{ 
  设置水平宽度，在灵设一个宽度
  display: flex;
  flex-wrap: wrap;
  均等分
  justify-content: space-around;
  为了两边和之间差不多宽
  padding: 5px;
} */
</style>