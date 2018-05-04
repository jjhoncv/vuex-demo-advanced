import { Users } from './../../services/users.js'
let users = new Users();

export default {
    valid({ commit, state }) {
        if (window.sessionStorage("login") === true) {
            commit('UPDATE_LOGIN', true)
        } else {
            commit('UPDATE_LOGIN', false)
        }
    },
    login({ commit, state }, {user, pass}) {
        users.getUser(user, pass).then((data)=>{
            
            // if (data.filter(user => user.uid == user))
            
            if (data.length > 0) {
                commit('UPDATE_LOGIN', true)
            }
        })      
    }
}