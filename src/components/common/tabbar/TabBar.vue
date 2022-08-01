<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components:{},
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
#tab_bar{
  display: flex;
  background-color: #ffffff;
  box-shadow: 0 -1px 1px rgba(112, 107, 107, 0.146);
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
}

</style>