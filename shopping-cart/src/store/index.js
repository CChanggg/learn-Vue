import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
import * as actions from './actions'
import products from './modules/products'
Vue.use(Vuex)
// 唯一状态树
export default new Vuex.Store({
  actions,
  // getters,
  modules: {
    products,
    // cart
  }
})
