import Vue from 'vue'
import VeeValidate from 'vee-validate';
import {Validator} from 'vee-validate'
Validator.extend('mobile',{
    // messages:{
    //    zh_CN:field =>`${field}`
    // },
    validate:value=>{
        return value.length==11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
    }
} )
const dict = {
    zh_CN: {
        messages: {
            required: function(field){
                return '请输入' + field ;
            },
            confirmed: function(field) {
                return '两次输入的密码不一致';
            },
            min:function (field,number) {
                return `${field}不小于${number}位`
            },
            max:function (field, number) {
                return `${field}不大于${number}位`
            },
            alpha_dash:function (field) {
                return `${field}只能包含英文、数字、下划线、破折号`
            },
            mobile:function(field){
                return `请输入正确的${field}`
            }
            
        },
        attributes: {
            userName:'昵称',
            userCode:'账号',
            password: '密码',
            confirmPassword: '确认密码',
            mobile:'手机号'
          
        }
    }
};
VeeValidate.Validator.localize('zh_CN', dict.zh_CN);
Vue.use(VeeValidate);