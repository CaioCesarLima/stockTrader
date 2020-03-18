import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modulos/stocks'
import portfolio from './modulos/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        stocks,
        portfolio
    }
})