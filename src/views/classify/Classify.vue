<template>
<div class="wrapper" ref="aaaa">
  <ul class="content">
    <button @click="btnClick">按钮</button>
    <li>feilei1</li>
    <li>feilei2</li>
    <li>feilei3</li>
    <li>feilei4</li>
    <li>feilei5</li>
    <li>feilei6</li>
    <li>feilei7</li>
    <li>feilei8</li>
    <li>feilei9</li>
    <li>feilei10</li>
    <li>feilei11</li>
    <li>feilei12</li>
    <li>feilei13</li>
    <li>feilei14</li>
    <li>feilei15</li>
    <li>feilei16</li>
    <li>feilei17</li>
    <li>feilei18</li>
    <li>feilei19</li>
    <li>feilei20</li>
    <li>feilei21</li>
    <li>feilei22</li>
    <li>feilei23</li>
    <li>feilei24</li>
    <li>feilei25</li>
    <li>feilei26</li>
    <li>feilei27</li>
    <li>feilei28</li>
    <li>feilei29</li>
    <li>feilei30</li>
    <li>feilei31</li>
    <li>feilei32</li>
    <li>feilei33</li>
    <li>feilei34</li>
    <li>feilei35</li>
    <li>feilei36</li>
    <li>feilei37</li>
    <li>feilei38</li>
    <li>feilei39</li>
    <li>feilei40</li>
    <li>feilei41</li>
    <li>feilei42</li>
    <li>feilei43</li>
    <li>feilei44</li>
    <li>feilei45</li>
    <li>feilei46</li>
    <li>feilei47</li>
    <li>feilei48</li>
    <li>feilei49</li>
    <li>feilei50</li>
    <li>feilei51</li>
    <li>feilei52</li>
    <li>feilei53</li>
    <li>feilei54</li>
    <li>feilei55</li>
    <li>feilei56</li>
    <li>feilei57</li>
    <li>feilei58</li>
    <li>feilei59</li>
    <li>feilei60</li>
    <li>feilei61</li>
    <li>feilei62</li>
    <li>feilei63</li>
    <li>feilei64</li>
    <li>feilei65</li>
    <li>feilei66</li>
    <li>feilei67</li>
    <li>feilei68</li>
    <li>feilei69</li>
    <li>feilei70</li>
    <li>feilei71</li>
    <li>feilei72</li>
    <li>feilei73</li>
    <li>feilei74</li>
    <li>feilei75</li>
    <li>feilei76</li>
    <li>feilei77</li>
    <li>feilei78</li>
    <li>feilei79</li>
    <li>feilei80</li>
    <li>feilei81</li>
    <li>feilei82</li>
    <li>feilei83</li>
    <li>feilei84</li>
    <li>feilei85</li>
    <li>feilei86</li>
    <li>feilei87</li>
    <li>feilei88</li>
    <li>feilei89</li>
    <li>feilei90</li>
    <li>feilei91</li>
    <li>feilei92</li>
    <li>feilei93</li>
    <li>feilei94</li>
    <li>feilei95</li>
    <li>feilei96</li>
    <li>feilei97</li>
    <li>feilei98</li>
    <li>feilei99</li>
    <li>feilei100</li>
  </ul>
</div>
  
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Classify',
  components:{},
  props:{},
  data(){
    return {
      scroll:null
    }
  },
  watch:{},
  computed:{},
  methods:{
    btnClick(){
      console.log("btnClick");
    }
  },
  // created是组件创建完后调用，此时没有挂载模板template
  created(){},
  mounted(){
    this.scroll = new BScroll(this.$refs.aaaa,{
      probeType : 3,
      click: true,
      pullUpLoad : true
    })
    this.scroll.on('scroll',(position) =>{
      // console.log(position);
    })
    this.scroll.on('pullingUp',() =>{
      console.log("上拉加载");
    })
  }
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: rgb(127, 255, 140);
  /* 原生滚动 */
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>