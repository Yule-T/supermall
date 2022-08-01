<template>
  <div class='tab-control'>
    <div v-for="(item,index) in titles" :key="index" 
         class="tab-control-item"
         :class="{active:index === currentIndex}"
         @click="indexClick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name:'TabControl',
  props:{
    titles:{
        type:Array,
        default(){
            return []
        }
    }
  },
  data() {
    return {
      currentIndex:0
    };
  },
  methods:{
    indexClick(index){ 
      this.currentIndex=index;
      this.$emit('tabClick',index)
    }
  }
}
</script> 
<style>
.tab-control{ 
    background-color: white;
    display: flex;
    text-align: center;
    font-size: 16px;
    z-index: 2;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span{
    padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid red;
}
</style>