import {LOGIN} from './type'
export default {
    // async login({commit},param){  //异步调用
    //     commit(LOGIN,await login(param).then((res)=>{
    //         return res
    //     }))
    // },
    login({commit},param){
        commit(LOGIN,param)  
    }
}