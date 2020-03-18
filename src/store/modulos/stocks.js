import stocks from '@/data/stocks'
export default {
    state:{
        stocks:[]
    },
    mutations:{
        setStocks(state, stock){
            state.stocks = stock
        }
    },
    actions:{
        buyStock({commit}, order){
            commit('buyStock', order)
        },
        initStocks({commit}){
            commit('setStocks', stocks)
        }
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}