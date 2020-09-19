import { ADD_COUNTER, ADD_TO_CART } from "@/store/mutation-types";


export default {
  //唯一目的就是修改state中的状态
  //每个方法尽可能完成的比较单一
  addCart(context, payload) {
    /*  let oldProduct = null;
      for(item of state.cartList){
        if (payload.iid === item.iid) {
          oldProduct = item
        } */
    let Product = context.state.cartList.find(item => item.iid === payload.iid);
    if (Product) {
      context.commit(ADD_COUNTER, Product);
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
    }
  }
};