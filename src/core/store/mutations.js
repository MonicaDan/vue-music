//对state数据进行操作
import * as types from './types';
import getters from './getters'

const state={
    count:15
}
 
const mutations={
    [types.COUNT](state,param){
        //加上参数值
      state.count=param ;
    }
}
 export default {
        state,
        mutations,
        getters
 }
 