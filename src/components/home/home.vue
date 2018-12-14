<template>
  <div>
    <p>MONICA MUSIC</p> 
    <div style="width:40px;height:40px;background:#ff3300;border-radius:50%;position:absolute;top:5px;right:5px;color:#ffffff;text-align:center;line-height:40px;" @click="jumpToUser">user</div> 
<el-menu :default-active="activeIndex" router class="el-menu" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @selected="handleSelect">
  <el-menu-item class="el-menu-item" route="/home/recommend" index="1">推荐</el-menu-item>
  <el-menu-item class="el-menu-item" route="/home/singer" index="2">歌手</el-menu-item>
  <el-menu-item class="el-menu-item" route="/home/seniorty" index="3">排行</el-menu-item> 
  <el-menu-item class="el-menu-item" route="/home/search" index="4">搜索</el-menu-item>
    </el-menu>
  
    <div>
        <router-view>

        </router-view>
    </div>
  </div>

</template>
<script>
export default {
    data(){
        return {
            activeIndex:'1',

        }
    },
    components:{
      
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      jumpToUser(){
        
          this.$router.push('/user')
      }
    }
};
</script>

<style scoped>
.el-menu{
   display: flex;
   flex-direction: row;
    justify-content: center;
}
.el-menu-item{
 flex: 1;
}
</style>
