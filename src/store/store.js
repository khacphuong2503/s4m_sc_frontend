import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Create a new store instance.
const store = new Vuex.Store({
  state: {
    serverAddress: 'localhost:15217'
  },

  getters: {
    getMyState: state => state.dataRtRms
  },

  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store