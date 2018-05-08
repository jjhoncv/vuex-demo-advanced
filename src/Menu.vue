<template>
  <div class="nav-menu">
      <nav class="nav-menu-bar">
          <ul>
              <li v-if="!status"><a class="ui-hand" @click="loginSession">Login</a> &nbsp;&nbsp;&nbsp;|</li> 
              <li><a class="ui-hand" @click="users">Users</a></li>
          </ul>
      </nav>
      <template v-if="status">
        <nav>
            <ul>
                <li v-if="user.uid">Hi! {{ user.uid }} &nbsp;&nbsp;|</li> 
                <li><a class="ui-hand" @click="profile">Profile</a></li> | 
                <li><a class="ui-hand" @click="logoutSession">Logout</a></li>
            </ul>
        </nav>
      </template>
      <template v-else>
        <nav class="nav-menu-user">
            <ul>
                <li>Hi! visitante</li>
            </ul>
        </nav>
      </template>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    computed : {
        ...mapState('user', ['user']),
        ...mapState('login', ['status'])
    },
    methods : {
        ...mapActions('login', ['logout']),
        ...mapActions('page', ['setPage']),
        ...mapActions('user', ['getUsers', 'getUser', 'setUser', 'setUsers']),
        users () {
            this.setPage("users")
            this.getUsers()

        },
        loginSession () {
            this.setPage("login")
        },
        logoutSession () {
            this.setPage("login")
            this.logout()
        },
        profile () {
            this.setPage("profile")
        }
    }
    
}
</script>

<style>
.ui-hand {
    cursor: pointer
}
.nav-menu {
    display: flex;
    justify-content: space-between;
}
</style>
