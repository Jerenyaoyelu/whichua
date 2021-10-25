export default {
  state: {
    uaMap: {},
  },
  actions: {
    setUA({ commit }, data) {
      commit("setUA", data);
    },
  },
  mutations: {
    setUA(state, obj) {
      state.uaMap = obj;
    },
  },
  getters: {
    uaMap: (state) => state.uaMap,
  },
};
