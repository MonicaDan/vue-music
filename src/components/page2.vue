<template>
    <div>
        page2 
        <div>

            <button @click="getsome">点击我获取</button>
   
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions,mapState} from 'vuex'
export default {
    data(){
        return {
          num:10,
          text:'',
       
        }
    },
    computed:{
        ...mapGetters(['getCount']),
       
    },
    watch:{
      getCount(value){ 
          this.text=value;
          
        }
    },
    created(){
 
    },
    methods:{
        getsome(){ 
           console.log(this.$store.getters.getCount) 
        },
        ...mapActions(['commitCount'])
    }
}
</script>
<style>


</style>
