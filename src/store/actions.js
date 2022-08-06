export default {
  addCart(context, payload) {
     return new Promise((resolve, reject) => {
      let oldProduct= context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('addtoCounter',oldProduct);
        resolve('当前商品数量 + 1')
        resolve('---')
      } else {
        payload.count = 1;
        context.commit('addtoCart',payload);
        resolve('已添加当前商品')

      }
    });
  
  }
}