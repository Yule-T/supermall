export default {
    addtoCounter(state,payload){
        payload.count++
    },
    addtoCart(state,payload){
        payload.checked = true
        state.cartList.push(payload)
    }
  }