import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        posts: []
    }
})