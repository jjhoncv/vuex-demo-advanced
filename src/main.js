import Vue from 'vue';
import App from './App.vue';
import store from './store';

// Vue.use(Card);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
