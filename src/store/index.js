import Vue from 'vue';
import Vuex from 'vuex';

import login from './login'
import message from './message'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        message
    }
})