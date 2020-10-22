import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

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

const plugins = process.browser ? [createPersistedState()] : [];

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins,
});
