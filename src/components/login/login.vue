<template>
   <div class="loginWrapper">
       <div class="bg_img">
           <img  style="width:100%;height:100%;display:inline-block;" src="../../assets/img/300.jpg" alt="背景">
       </div>
       <div class="login_info">
         <div class="input_item">
           <!-- <el-input name="mobile" v-validate="'required|mobile'" style="width:300px;margin-bottom:40px;" type="text" :class="{'input':true,'is-danger':errors.has('mobile')}" placeholder="请输入手机号">
        </el-input>
        <span v-show="errors.has('mobile')" class="help is-danger has-text-right">{{errors.first('mobile')}}</span> -->
        <el-input name="userCode" v-validate="'required|min:3|max:9|alpha_dash'" style="width:300px;margin-bottom:40px;"
         type="text" :class="{'input':true,'is-danger':errors.has('userCode')}" v-model="userCode" placeholder="请输入手机号">
        </el-input>
        <span v-show="errors.has('userCode')" class="help is-danger has-text-right">{{errors.first('userCode')}}</span>
       </div>
         
        <div class="input_item">
            <el-input name="password" v-validate="'required|min:3|max:9|alpha_dash'" v-model="password" style="width:300px;margin-bottom:50px;" type="password" :class="{'input':true,'is-danger':errors.has('password')}" placeholder="请输入密码"></el-input>
          <span v-show="errors.has('password')" class="help is-danger has-text-right">{{errors.first('password')}}</span> 
        </div>

          <el-button type="primary" style="width:300px;" @click="login" >登&nbsp;&nbsp;录</el-button>
        <span class="regist" @click="regist">还没有账号?点击我注册</span>
       </div>
   
   </div>
    
</template>
<script>
import arabic from 'vee-validate/dist/locale/zh_CN';

export default {
    data:()=>({
        email:'',
        input:'',
        phone:'',
        // locale:'zh_CN',
        userCode:'',
        password:''
    }),
    created(){
        this.$validator.localize('zh_CN',{
            message:arabic.message,
            attributes:{

            }
        });
        this.$validator.localize('zh_CN');
    },
    computed:{
     
    },
    methods:{
    login(){
        this.$validator.validateAll().then((result)=>{
            if(!result){
                //如果不成功就不执行下去了
                return ;
            }
            let body={
                userCode:this.userCode,
                password:this.password
            };
            //执行成功后，进行存储
            let user = JSON.parse(localStorage.getItem('user'))||[];
            let index = user.findIndex(item=>item.userCode===body.userCode);
            if(index!==-1){
                if(user[index].password===body.password){
                    this.$alert('请求成功');
                    localStorage.setItem('loginInfo',JSON.stringify(body));
                    this.$router.push('/home');
                }else{
                    this.$alert('账号或密码输入错误');
                }
            }else if(body.userCode=='admin'&&body.password=='123456'){
                console.log('ok')
                    localStorage.setItem('loginInfo',JSON.stringify(body));
               
                    this.$router.push('/home')
            }else{
                this.$alert('账号或密码错误')
            }

        })
    },
    regist(){
    this.$router.push()
    }
    },


}
</script>
<style scoped>
.loginWrapper{
 
    height: 100%;
    width: 100%;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 left: 0;
  z-index: 99; 
}
.bg_img{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    -webkit-filter: blur(9px);
}
.login_info{
    margin-top:50px;
    width: 100%;
}
.is-danger{
    color: #ff0000;
}
.input_item{
    position: relative;
}
.has-text-right{
    position: absolute;
    top: 45px;
    left: 30px;
    font-size: 12px;
}
.regist{
    color: #ff0000;
    font-size:12px;
    padding-top:20px;
    display: block;
}

</style>
