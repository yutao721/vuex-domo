import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);


//state
const state = {
  count: 0
}

//
// //mutations
// const mutations = {
//   increment(state){
//     state.count = state.count + 2
//   },
//   decrement(state){
//     state.count = state.count - 3
//   }
// }
//
//
// //actions
// const actions = {
//   increment:({commit}) => commit('increment'),
//   decrement:({commit}) => commit('decrement')
// }


const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})


export default store
