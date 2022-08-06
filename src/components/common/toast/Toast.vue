<template>
  <div class='toast' v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>


export default {
  name:'Toast',
  props:{
    // message:{
    //     type: String,
    //     default:''
    // },
    // show:{
    //     type: Boolean,
    //     default:false
    // }
  },
  data() {
    return {
        message:'',
        isShow:false
    }
  },
  methods: {
    show(message = '这是一个默认信息',duration = 4000){
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
            this.isShow = false;
            this.message = '';
        }, duration);
    }
  },
}
</script>
<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50% , -50%);

    width: 140px;
    height: 32px;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    color: white;

    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.696);
}
</style>