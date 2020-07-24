import { ADD_GOODS ,INIT_SHOP_CART} from './mutation-type'

export default {
    [ADD_GOODS](state,data) {  //添加购物车
        if(data.CartNum==0){
            delete state.shopCart[data.id]
            localStorage.setItem('shopCart', JSON.stringify(state.shopCart))
            return 
        }
        if (state.shopCart == ''||state.shopCart ==undefined) {
            state.shopCart[data.id]=data
            console.log(state.shopCart)
        } else {
            if(state.shopCart[data.id]){
                state.shopCart[data.id].CartNum = data.CartNum
            }else{
                state.shopCart[data.id]=data
            }
        }
        localStorage.setItem('shopCart', JSON.stringify(state.shopCart))
    },
    [INIT_SHOP_CART](state){
         if(JSON.parse(localStorage.getItem('shopCart'))){
            state.shopCart=JSON.parse(localStorage.getItem('shopCart'))
         }else{
            state.shopCart={}
         }
         
    }
}