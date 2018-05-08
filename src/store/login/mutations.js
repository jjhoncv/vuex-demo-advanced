const UPDATE_LOGIN = 'UPDATE_LOGIN'

export default {
  [UPDATE_LOGIN] (state, data) {
    state.status = data.status
    state.uid = data.uid
  }
}
