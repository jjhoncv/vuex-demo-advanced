import { Users } from './../../services/users'

let users = new Users();

export default {
    getUser({ commit, state }, {user, pass}) {
        let user = users.getUser(user, pass);
        if (user.length > 0) {
            commit('UPDATE_LOGIN', true)
            commit('UPDATE_USER', user[0])
        }
    }
}