export default{
    state:{
        founds: 10000,
        stocks: []
    },
    mutations:{
        buyStock(state, {stockId, stockPrice, quantity}){
            const record = state.stocks.find(element=>element.id == stockId)
            if(record){
                record.quantity += quantity
            }else{
                state.stocks.push({
                    id: stockId,
                    quantity: quantity 
                })
            }
            state.founds -= stockPrice * quantity
        },
        sellStock(state, {stockId, stockPrice, quantity}){
            const record = state.stocks.find(element=>element.id == stockId)
            if(record.quantity > quantity){
                record.quantity -= quantity
            }else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.founds += stockPrice * quantity
        },
        setPortfolio(state, portfolio){
            state.founds = portfolio.founds
            state.stocks = portfolio.stocksPortfolio ? portfolio.stocksPortfolio : []
        }
    },
    actions:{
        sellStock({commit}, order){
            commit('sellStock', order)
        }
    },
    getters:{
        stockPortfolio(state, getters){
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        founds(state){
            return state.founds
        }
    }
}