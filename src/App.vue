<template>
  <div id="app">
    <header>
      <p>page: {{ page }}</p>
      <Menu/>
      <hr/>
    </header>
    <main>
      <Card description="hi!" title="is my title" :cssCard="cssCard"/>
      <Message/>
      <Users v-show="page == 'users'"/>
      <User v-show="page == 'profile'"/>
      <Login v-show="page == 'login'"/>
    </main>
    <footer>
      <hr/>
      <div class="copyright">@Copyrigth</div>
    </footer>
  </div>
</template>

<script>
import { cssCard } from "./services/styles/index";

import Menu from "./Menu.vue";
import Users from "./Users.vue";
import User from "./User.vue";
import Login from "./Login.vue";
import Message from "./Message.vue";

import { Card } from "./../library-components/ui/index";

import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      cssCard: cssCard
    };
  },
  name: "app",
  components: {
    Menu,
    Users,
    User,
    Card,
    Login,
    Message
  },
  computed: {
    ...mapState("page", ["page"])
  },
  methods: {
    ...mapActions("login", ["valid"])
  },
  mounted() {
    this.valid();
    console.log("init");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 800px;
}

body {
  display: flex;
  justify-content: center;
}

h1,
h2 {
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
main {
  min-height: 400px;
  display: flex;
  position: relative;
}
.copyright {
  text-align: left;
}
</style>
