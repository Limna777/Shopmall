import { ADD_COUNTER , ADD_TO_CART} from '@/store/mutation-types'

export default {
  //添加相同的商品进入购物车
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  //添加不同的商品进入购物车列表
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  }
};