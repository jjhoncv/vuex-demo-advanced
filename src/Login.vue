<template>
    <div v-if="!status" class="login">
        <div class="form">
            <h4>Login</h4>
            <form @submit.prevent="submit">
                <input type="text" v-model="username" placeholder="Username">
                <input type="password" v-model="password" placeholder="Password">
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            username: null,
            password: null,
        }
    },
    watch : {
        status (last, old) {
            if (last) {
                this.getUser(JSON.parse(sessionStorage.getItem("login")).token)
            } else {
                this.username = null
                this.password = null
            }
        }
    },
    computed : {
        ...mapState('login', ['status'])
    },
    methods : {
        ...mapActions('login', ['login']),
        ...mapActions('user', ['getUser']),
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
.login {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.login form{
    display: flex;
    flex-direction: column;
    padding: 40px;
    border: 1px solid #ddd
}

.login form input[type="text"], 
.login form input[type="password"],
.login form button[type="submit"]{
    padding: 5px;
    margin: 5px 0;
}

</style>
