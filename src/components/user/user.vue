<template>
    <div>
       <div style="width:40px;height:40px;background:#ff3300;border-radius:50%;position:absolute;top:5px;left:5px;color:#ffffff;text-align:center;line-height:40px;" @click="back">back</div> 
      用户界面
    </div>
</template>
<script>
export default {
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
}
</script>
<style scoped>

</style>
