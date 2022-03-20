import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        printFlag:false,
        menuValue:'',
        userName:'',
    }
})
export default store
