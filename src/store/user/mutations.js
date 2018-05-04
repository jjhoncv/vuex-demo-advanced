const UPDATE_USER = 'UPDATE_USER'

export default {
  [UPDATE_USER] (state, user) {
    state.user = user
  }
}
