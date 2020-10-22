import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isDark: null,
};

const getters = {
  getIsDark: (state) => {
    return state.isDark;
  },
};

const mutations = {
  setIsDark: (state, isDark) => {
    state.isDark = isDark;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
