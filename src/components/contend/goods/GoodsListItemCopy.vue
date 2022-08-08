<template>
  <div class="goods-item">
    <img :src="shouImage" :key="shouImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItemCopy",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    shouImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    },
    // shouIid() {
    //   return this.goodsItem.shop_id || this.goodsItem.iid
    // }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
      // console.log();
    },
  },
};
</script>
<style scoped>
.goods-item {
  position: relative;
  /* width: 48%; */
  /* 水平分布 */
  width: 50%;
  display: inline-block;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
  padding: 3px;
  border-radius: 13px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: nowrap; /* 超出省略 */
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
/* 伪元素 */
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>