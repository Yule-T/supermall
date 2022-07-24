<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div> 
    <div v-else><slot name="item-icon-active"></slot></div> 
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  components:{},
  props:{
    path:String,
    activeColor:{
      type:String,
      //默认
      default:'red'
    }
  },
  computed:{
    isActive(){
      //为 -1 是没找到，不同
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  data(){
    return {
      // isActive: true,
      // path:'/home'
    }
  },
  methods: {
    itemClick(){
      // console.log('itemClick');
      this.$router.replace(this.path).catch(error=>error)
    }
  },
}
</script>
<style>
.tab_bar_item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  
}
.tab_bar_item img{
    width: 24px;
    margin-top: 3px;
    /* 去掉默认下面的3px */
    vertical-align: middle;
    margin-bottom: 2px;
}

</style>