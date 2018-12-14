import * as types from './types';
export default {
    commitCount({commit},param){
        commit(types.COUNT,param);
    }
}