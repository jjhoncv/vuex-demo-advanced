const UPDATE_USER = 'UPDATE_USER'
const UPDATE_USERS = 'UPDATE_USERS'

export default {
  [UPDATE_USER] (state, user) {
    state.user = user
  },
  [UPDATE_USERS] (state, users) {
    state.users = users
  } 
}
