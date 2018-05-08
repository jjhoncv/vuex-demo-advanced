export default {
    namespaced: true,
    state : {
        msg: null
    },
    actions : {
        showMessage({ commit, state }, textMsg) {
            commit('UPDATE_MESSAGE', textMsg)
        }
    },
    mutations: {
        ['UPDATE_MESSAGE'] (state, textMsg) {
            state.msg = textMsg
        }     
    }
}
  