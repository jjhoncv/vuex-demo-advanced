<template>
  <div>
      <form @submit.prevent="submit">
          <input type="text" v-model="username" placeholder="Username">
          <input type="password" v-model="password" placeholder="Password">
          <button type="submit">Submit</button>
      </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data () {
        return {
            username: null,
            password: null,
        }
    },
    methods : {
        ...mapActions('login', ['login']),
        ...mapActions('message', ['showMessage']),
        submit () {
            if (this.validForm()) {
                this.login({user: this.username, pass: this.password});
            } else {
                this.showMessage("Error en la validación del formulario")
            }
        },
        validForm () {
            if (this.username && this.password) return true 
        }
    }
}
</script>

<style>

</style>
