<template>
  <div class="login">
     <div class="main">
  
         <div class="content">
             <div class="logo">
                 <img src="../../assets/images/milogo.png" alt="">
                 <p>注册小米账号</p>
             </div>
         </div>
         <div class="input">
             <input type="text" v-model="tel" name="tel" placeholder="请输入手机号">
             <input type="password" v-model="pwd" name="pwd" placeholder="请输入密码">
             <input type="password" v-model="pwds"  name='pwds' @keyup.enter="woo()" placeholder="请输入确定密码">
         </div>
         <div class="error" v-show="pd" v-cloak>
             <p><i>!</i> {{test}}</p>
         </div>
         <button @click="woo()">立即注册</button>
         <div class="agree">
         <p>注册账号即表示您同意并愿意遵守小米 <a href="http://www.miui.com/res/doc/eula/cn.html">用户协议</a> 和 <a href="http://www.miui.com/res/doc/privacy/cn.html">隐私政策</a></p>
         </div>
        
     </div>
     <footer>
         <ul class="clearfix">
             <li>简体&nbsp;&nbsp;&nbsp;&nbsp;|</li>
             <li>繁体&nbsp;&nbsp;&nbsp;&nbsp;|</li>
             <li>English&nbsp;&nbsp;&nbsp;&nbsp;|</li>
             <li>常见问题</li>
         </ul>
         <p>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
     </footer>
  </div>
</template>
<script>
import {register} from '../../api/index'
export default {
    data(){
      return{
          pd:false,
          tel:'',
          pwd:'',
          pwds:'',
          test:''
      }  
    },

    methods:{
     woo(){
          var tel=this.tel;
          var pwd=this.pwd;
          var pwds=this.pwds;
          if(!tel){
              this.test='账户不能为空'
              this.pd=true
          }
        if(tel&&pwd&&pwds){
            this.$router.push({path:'/login'})
        }
     }
    },
    watch:{
     tel:function(val){
         $('input').css('borderColor','#ccc')
         if(!(/^1\d{10}$/.test(val))){
             this.pd=true;
             this.test='手机号必须是11位且第一个数字为1';
             $('input:first-child').css('borderColor','#ff6f3d')
         }else{
             this.pd=false;
         }
     },
     pwd:function(val){
          $('input').css('borderColor','#ccc')
         if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(val))){
              this.pd=true;
             this.test='密码必须是6-12位，数字和字母组合';
               $('input:nth-child('+2+')').css('borderColor','#ff6f3d')
         }else{
             this.pd=false;
           
         }
     },
     pwds:function(val){
          $('input').css('borderColor','#ccc')
         if(this.pwd!=val){
         this.pd=true;
         this.test='密码和确定密码不相等';
          $('input:nth-child('+3+')').css('borderColor','#ff6f3d')
         }else{
             this.pd=false;
         }
     }
    },
    mounted(){
      $('body').css('background','#f5f5f5');

  }
}
</script>
<style scoped>
 .login{
    font-size: 14px;
    font-family: arial,"Hiragino Sans GB","Microsoft YaHei","微软正黑体","儷黑 Pro",sans-serif;
    height:100%;
    width: 100%;
  }
 .login .main{
     position: relative;
     width: 854px;
     height: 620px;
     margin: 110px auto;
     border:1px solid transparent;
     background: #fff;
     margin-bottom: 80px;
 }
 .main .content{
     text-align: center;
   }
 .content .logo{
     margin-top: 50px;
    }
 .content .logo p{
     font-size: 30px;
     padding: 0;
     margin: 0;
     padding-top: 22px;
     color: #424242;
    } 
 .input{
     margin-top: 40px;
 }
 .input input{
     display: block;
     height: 40px;
     width: 358px;
     margin: 0 auto;
     padding-left: 10px;
     margin-bottom: 20px;
     border:1px solid #ccc;
 }
 .error {
     margin-left: 250px;
    
 }
 .error i{
     display: inline-block;
     width: 14px;
     height: 14px;
     padding: 0;
     line-height: 14px;
     margin: 0;
     font-style: normal;
      text-align: center;
     border: 1px solid red;
     border-radius: 50%;
 }
 .error p{
     margin: 0;
     padding: 0;
     color: #ff6f3d;
     font-size: 14px;
     font-weight: bold;
 }
 button{
     height: 40px;
     width: 371px;
     margin-left:241px;
     margin-top: 12px;
     background: #ef5b00;
     border: none;
     color: #fff;
 }
 .agree{
     position: relative;
     top: 10px;
     width: 371px;
     left: 240px;
 }
  p{
      margin: 0;
      padding:0;
      left: 234px;
      font-weight: normal;
      font-size: 14px;
      color: #9d9d9d;
  }
  p a{
      color: #000;
      font-weight:bold;
  }
 footer{
     width: 600px;
     margin: 0 auto;
     margin-top: -20px;
     text-align: center;
 }
 ul{
     padding: 0;
     margin: 0;
     margin-left: 140px;
     font-size: 14px;
     list-style: none;
 }
 li{
     padding: 0;
     margin: 0;
     color: #757575;
     float: left;
     padding: 10px;
     cursor: pointer;
 }
 .clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  height: 1%;
}
 footer p{
     margin: 0;
     padding: 0;
     color: #757575;
 }
</style>
