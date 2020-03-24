import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import stocks from './modulos/stocks'
import portfolio from './modulos/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules:{
        stocks,
        portfolio
    }
})