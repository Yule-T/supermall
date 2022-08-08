<template>
<div class="classify">

  <classify-list class="classLeft"></classify-list>
  <classify-content class="classRight"></classify-content>

</div>

</template>

<script>
import ClassifyList from './childcomps/ClassifyList.vue';
import ClassifyContent from './childcomps/ClassifyContent.vue';

export default {
  name: 'Classify',
  components:{
    ClassifyList,
    ClassifyContent,

  },
  props:{},
  data(){
    return {
      scroll:null
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>

<style scoped>
.classify{
  position: relative;
  display: flex;
  height: calc(100vh - 49px);
  font-size: 16px;
}
.classLeft{
  position: absolute;
  left: 0;
  width: 20%;
  height: 100%;
  background-color: aquamarine;
}
.classRight{
  position: absolute;
  right: 0;
  width: 80%;
  height: 100%;
  background-color: rgb(163, 255, 127);
}
</style>