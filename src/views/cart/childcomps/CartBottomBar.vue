<template>
  <div class='bottom-bar'>
    <div class="check-content">
        <check-button :is-checked="isSelectAll" 
                        class="check-button"
                        @click.native="checkClick" />
        <span class="check-span">全选</span>
    </div>
    <div class="price">
        合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
        去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/contend/checkButton/CheckButton.vue';
import { mapGetters } from 'vuex';

export default {
  name:'CartBottomBar',
  props:{},
  components: {
    CheckButton,

  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cartList']),

    totalPrice (){
        return '￥' + this.cartList.filter(item =>{
            return item.checked
        }).reduce((preValue,item) =>{
            return preValue + item.price * item.count
        },0).toFixed(2)
    },

    checkLength(){
        return this.cartList.filter(item => item.checked).length
    },

    isSelectAll(){
        if(this.cartList.length === 0) return false
        // return !(this.cartList.filter(item => !item.checked).length)
        // return this.cartList.length > 0 ? this.cartList.every(item => item.isChecked == true) : false
        return !this.cartList.find(item => !item.checked)
    }

  },
  watch: {},
  methods: {
    checkClick(){
        if(this.isSelectAll) {
            this.cartList.forEach(item => item.checked = false);
        }else{
            this.cartList.forEach(item => item.checked = true);
        }
        // this.cartList.forEach(item => item.checked = !this.isSelectAll);
    },
    calcClick(){
        if(!this.isSelectAll){
            this.$toast.show('请选择购买的商品',1500)
            // this.$toast.show()
        }
    },

  },
}
</script>
<style scoped>
.bottom-bar{
    height: 40px;
    background-color: rgb(211, 216, 216);
    position: relative;
    display: flex;
    /* z-index: 5; */
}
.check-content{
    display: flex;
    align-items: center;
    width: 60px;
    margin-left: 10px;
}
.check-button{
    width: 20px;
    height: 20px;
    margin-right: 5px;
    /* margin-top: 10px; */
    /* background-color: rgb(255, 179, 0); */
}
/* .check-span{
    margin-top: 10px;
} */
.price{
    margin-left: 20px;
    margin-top: 10px;
    flex: 1;
    /* background-color: blueviolet; */
}
.calculate{
    background-color: orangered;
    width: 120px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    color: rgb(248, 211, 218);
}
</style>