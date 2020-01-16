import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex: '1'
  },
  mutations: {
    changeActiveIndex(state, type) {
      state.activeIndex = type
    }
  },
  actions: {
    changeActiveIndex(context, type) {
      context.commit('changeActiveIndex', type)
    }
  },
  modules: {
  }
})
