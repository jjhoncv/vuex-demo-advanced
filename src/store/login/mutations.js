const UPDATE_LOGIN = 'UPDATE_LOGIN'

export default {
  [UPDATE_LOGIN] (state, status) {
    state.login = status
  }
}
