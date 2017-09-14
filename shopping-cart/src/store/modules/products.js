import shop from '../../api/shop'
import * as types from '../mutation-types'
const state = {
  all: []
}
const getters = {
  allProducts: state => state.all
}
const actions = {
  // 负责api的请求 ，state.all被填充
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      // 不能直接修改vuex里的状态
      // this.state.all = products
      commit(types.RECEIVE_PRODUCTS, { products })
      console.log(products)
    })
  }
}
const mutations ={
  // ES６中定义常量的方式
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  // 模块内自我循环 Store 是独立的一个系统
  state, // 状态
  getters, // 获取
  actions, // 动作 由他来为组件的事件买单 处理api 提交修改的申请提交给mutation
  mutations
  //定义一些对状态的修改
}
