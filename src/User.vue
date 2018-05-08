<template>
  <div v-if="status && user && user.uid" class="card-user">
      <h5>Hi {{ user.firstname }}</h5>
      <ul class="card-user-items">
          <li><span>uid:</span> {{ user.uid }}</li> |
          <li><span>surname:</span> {{ user.surname }}</li> |
          <li><span>age:</span> {{ user.age }}</li> |
          <li><span>registered:</span> {{ user.registered }}</li>
          
          
      </ul>  
      <p>{{ user.about }}</p>
      <h6> Address: {{ user.address }} </h6>
      <img :src=user.picture alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed : {
        ...mapState('login', ['status']),
        ...mapState('user', ['user'])
    }
}
</script>

<style>
.card-user{
    width: 800px;
}
.card-user-items {
    font-size: 12px
}
</style>