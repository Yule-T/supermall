<template>
  <div class='recommends'>
    <div v-for="item in recommend" :key="item.name" class="recommend-item">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>

export default {
  name:'RecommendView',
  //父组件通过 props 向下传递数据给子组件
  props:{
    recommend:{
        type:Array,
        default(){
            return []
        }
    }
  },
  //import引入的组件需要注入此处能使用
  components: {},
  //此处存放数据
  data() {
    return {};
  },
  //计算属性
  computed: {},
  //监听data中数据变化
  watch: {},
  //方法集合
  methods: {},
  created() {}, //生命周期 - 创建完成
  mounted() {}, //生命周期 - 挂载完成
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //若页面有keep-alive缓存,此函数会触发
}
</script>
<style>
.recommends{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px 0 ;
    border-bottom: 10px solid rgba(108, 103, 103, 0.215);
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    margin-bottom: 5px;
}
</style>