export default {
    namespaced: true,
    state : {
        page: "login"
    },
    actions : {
        setPage({ commit, state }, page) {
            commit('SET_PAGE', page)
            commit('message/UPDATE_MESSAGE', "", { root: true })
        }
    },
    mutations: {
        ['SET_PAGE'] (state, page) {
            state.page = page
        }     
    }
}
  