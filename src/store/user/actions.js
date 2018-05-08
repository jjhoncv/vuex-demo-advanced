import { Users } from './../../services/users.js'
let users = new Users();

export default {
    setUser({ commit, state }, {user}) {
        commit('UPDATE_USER', user)
    },
    setUsers({ commit, state }, users) {
        commit('UPDATE_USERS', users)
    },
    async getUser ({ commit, state }, uid) {
        let data = await users.getUser(uid)
        if (data.length > 0) {
            commit('UPDATE_USER', data[0])
        }
    },
    async getUsers ({ commit, state }) {
        let data = await users.getUsers()
        if (data.length > 0) {
            commit('UPDATE_USERS', data)
        }
    }
}