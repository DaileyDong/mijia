<template>
  <div class="login">
     <div class="main">
         <div class="qr">
          <a href="#/qrcodeLogin"></a>
         </div>
         <div class="content">
             <div class="logo">
                 <img src="../../assets/images/milogo.png" alt="">
                 <p>小米账号登录</p>
             </div>
         </div> 
         <div class="input">
             <input type="text" placeholder="手机号" name="tel" v-model="tel">
             <input type="password" placeholder="密码" name="pwd" @keyup.enter="dl()" v-model="pwd">
         </div>
         <div class="error" v-show="pd" v-cloak>
             <p><i>!</i> {{test}}</p>
         </div>
         <button @click="dl()">登录</button>
         <div class="register">
           <router-link to="/register">立即注册</router-link>
           <router-link to="">忘记密码？</router-link>
         </div>

         <div class="it">
               <div><span></span><i>其他方式登录</i><span></span></div>
             <div class="icon">
                     <div><router-link to=""></router-link></div>
                      <div><router-link to=""></router-link></div>
                       <div><router-link to=""></router-link></div>
                        <div><router-link to=""></router-link></div>
             </div>
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
import {userLogin} from '../../api/index.js'

export default {
    data(){
        return{
            tel:'',
            pwd:'',
            pd:false,
            test:'',
        }
    },
 methods:{
   dl(){
       if(!this.tel ||!this.pwd){
           this.test="账号或密码不能为空";
          return false;
       }
       
       var params={tel:this.tel,pwd:this.pwd};
       if(params){
           this.$router.push({path:'/home'})
       }

    //    userLogin(params).then(res=>{
    //        if(res.status==='0'){
    //         this.$router.push({path:'/home'})
    //         localStorage.setItem('tel',this.tel)
    //        }
    //    },err=>{
    //        console.log(err)
    //        this.pd=true;
    //        this.test='手机号或密码错误'
    //    })
       
    //    if(this.tel==user&&mima==pwd){
    //      window.location.replace('#/')
    //      localStorage.setItem('tel',this.user)
    //    }else{
    //         this.pd=true;
    //         this.test='手机号或密码错误'
    //    }
    },
 },
  mounted(){
      localStorage.clear()
      $('body').css('background','#f5f5f5')
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
 .main .qr{
     position: absolute;
     right: 0;
     width: 68px;
     height: 68px;
    }
 .qr a{
     width: 68px;
     height:68px;
     display: inline-block;
     background-size:100%;
     opacity: 0.3;
     background-image: url('../../assets/images/loginqr.gif');
     background-repeat: no-repeat;
     }
 .qr a:hover{
     opacity: 1;
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
 button{
     height: 40px;
     width: 371px;
     margin-left:241px;
     margin-top: 12px;
     background: #ef5b00;
     border: none;
     color: #fff;
 }
 .register{
     right: 0;
     width: 370px;
     margin: 10px 480px 0;
 }
 .register a{
     color: #757575;
     padding-right: 5px;
     border-right: 1px solid #e0e0e0;
     text-decoration: none;
 }
 .register a:hover{
     color:#ef5b00;
 }
 .register a:last-child{
     border-right: none;
 }
 .it{
     width: 358px;
     margin: 40px auto 0;
 }

 .it div span{
     display: inline-block;
     border-top: 1px solid #e0e0e0;
     width: 130px;
     height: 5px;
 }
 .it div i{
     color: #b0b0b0;
     font-style: normal;
 }
.icon{
    margin-top: 10px;
    text-align: center;
}
.icon div{
   width: 30px;
   height: 30px;
   border-radius: 50%;
   text-align: center;
   background: #999;
   display: inline-block;
   margin-right: 20px;
}
.icon div:first-child:hover{
    background: #0288d1;
}
.icon div:nth-child(2):hover{
    background: #d32f2f;
}
.icon div:nth-child(3):hover{
    background: #00aaee;
}
.icon div:last-child:hover{
    background: #00d20d;
}
.icon div a{
  display: block;
  background-repeat: no-repeat;
  background-image: url('../../assets/images/login.png');
}
.icon div:first-child a{
    height: 18px;
    width: 18px;
    margin: 4px auto 0;
    background-position: -19px 0;
}

.icon div:nth-child(2) a{
    height: 18px;
    width: 18px;
    margin: 4px auto 0;
    background-position: -38px 0;
}
.icon div:nth-child(3) a{
       height: 25px;
        width: 25px;
       margin: 4px 0 0 4px;
      background-position: -57px 0;
}
.icon div:last-child a{
    height: 25px;
    width: 25px;
     margin: 4px 0 0 4px;
     background-position: -84px 0;
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
</style>
