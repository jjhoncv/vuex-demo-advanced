<template>
  <div id="app">
    <header>
      <Menu/>
    </header>
    <main>
      <Message/>
      <Users/>
      <User/>
      <Login/>
    </main>
    <footer>
      <Menu/>
    </footer>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Users from './Users.vue'
import User from './User.vue'
import Login from './Login.vue'
import Message from './Message.vue'

export default {
  name: 'app',
  components : {
    Menu,
    Users,
    User,
    Login,
    Message
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
