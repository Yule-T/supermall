<template>
  <div class="nav-bar">
    <!-- 具名插槽 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name:'NavBar',
  props:{},
  components: {},
  data() {
    return {};
  }
}
</script>
<style>
.nav-bar{
 display: flex;
 height: 44px;
 line-height: 44px;
 text-align: center;
 box-shadow: 0 1px 1px rgba(0, 0, 0, 0.032);
}
.left{
 width: 60px;
 /* background-color: aqua; */
}
.center{
/* 会将剩余部分全部占领 */
 flex: 1;
 /* background-color: rgb(68, 255, 0); */
}
.right{
 width: 60px;
 /* background-color: aqua; */
}
</style>