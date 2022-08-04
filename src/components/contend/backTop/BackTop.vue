<template>
  <div class='back-top'>
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>

export default {
  name:'BackTop',
  props:{},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped>
.back-top{
    position: fixed;
    right: 15px;
    bottom: 58px;
}
.back-top img{
    height: 45px;
}
</style>