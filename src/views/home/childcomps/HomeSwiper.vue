<template>
  <swiper>
      <!-- 会报错 -->
      <!-- <swiper-item v-for="item in banner">
      <swiper-item v-for="item in banner" :key="item"> -->
        <!-- 不会报错 -->
      <!-- <swiper-item v-for="(item,index) in banner" :key="index"> -->
      <swiper-item v-for="item in banner" :key="item.name">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name:'HomeSwiper',
  props:{
    banner:{
        type:Array,
        default(){
            return []
        }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  //此处存放数据
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad =true
      }
    }
  }
}
</script>
<style>
</style>