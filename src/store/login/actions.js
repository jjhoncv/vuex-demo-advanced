import { Users } from './../../services/users.js'
let users = new Users();

export default {
    valid({ commit, state }) {
        if (sessionStorage.getItem("login") && 
                JSON.parse(sessionStorage.getItem("login")).status === true) {
                    commit('page/SET_PAGE', "profile", { root: true })
                    commit('UPDATE_LOGIN', { status: true, token: JSON.parse(sessionStorage.getItem("login")).token })
        } 
    },
    async login({ commit, state }, {user, pass}) {
        let data = await users.getUid(user, pass)
        if (data.length > 0) {
            commit('page/SET_PAGE', "profile", { root: true })
            commit('UPDATE_LOGIN', { status: true, token: data[0].id })
            sessionStorage.setItem("login", JSON.stringify({ status: true, token: data[0].id }))
            commit('message/UPDATE_MESSAGE', "", { root: true })
        } else {
            commit('message/UPDATE_MESSAGE', "User or password invalid!", { root: true })
        }
    },

    logout ({ commit, state }) {
        sessionStorage.removeItem("login")
        commit('UPDATE_LOGIN', { status: false, token: null })
        commit('user/UPDATE_USER', {}, { root: true })
    }
}