<template>
    <div>
        page1
 
<button style="margin-top:120px;" @click="addP">点击我</button>
        <div>{{count}}</div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {
     
         count: ''
        }
    },
    created(){
  
    },
    computed:{
        //导入获取的函数
        ...mapGetters(['getCount'])
    },
    watch:{
        //监听数据的变化
        getCount(value){
        this.count=value;
        console.log(value)
        }
    },
    methods:{
     
       addP(){
           this.commitCount(150);
     
       },
    //    导入提交函数
       ...mapActions(['commitCount'])
      
    },
 
}
</script>
<style>


</style>
