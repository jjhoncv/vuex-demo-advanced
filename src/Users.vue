<template>
  <div v-if="users.length" class="card-users">
      <h4>Registered users</h4>
      <ul class="d-body">
          <li v-for="user in users" :key="user.id">{{ user.uid }}</li>
      </ul>
      <p>Password: 123456</p>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
    data () {
        return {
            user: {}
        }
    },
   computed : {
        ...mapState('user', ['users'])
    },
}
</script>

<style>
.card-users {
    width: 800px;
}
</style>
