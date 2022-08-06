<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy" @click="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      this.$emit('addCart')

      // 点击加入购物车的时候，由子组件触发事件传到父组件上
      // if(this.$store.state.islogin == false){
      //   this.$toast.show('未登录账号，无法添加购物车',1000)
      // }else {
      //   this.$emit('addToCart')
      //   this.$toast.show('添加购物车成功',1000)
      // }
      
      
    },
    buy() {
      console.log('abc')
      // if(this.$store.state.islogin == false){
      //   this.$toast.show('未登录账号，无法购买',1000)
      // }else {
      //   this.$emit('buy')
      //   this.$toast.show('购买成功',1000)
      // }
      
    }
  },
}
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: rgb(255, 255, 255);
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }
</style>