<template>
  <div class="login">
     <div class="main">
             <div class="qr">
           <a href="#/login"></a>
         </div>
         <div class="content">
             <div class="logo">
                 <p>小米账号扫码登录</p>
                 <h5>请打开 「设置 > 小米账号 > 右上角扫一扫」 扫码登录</h5>
                 <div class="qr">
                     <img src="../../assets/images/loginqrcode.png" alt="">
                 </div>
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
export default {
  mounted(){
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
    overflow: hidden;
  }
 .login .main{
     position: relative;
     width: 854px;
     height: 620px;
     margin: 150px auto;
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
     .main .qr{
     position: absolute;
     top: 30px;
     right: 30px;
     width: 30px;
     height: 30px;
     text-align: center;
     background: #bdbdbd;
     border-radius: 50%;
     cursor: pointer;
    }
 .qr a{
     width: 14px;
     height:14px;
     margin-top: 7px;
     color: #757575;
     display: inline-block;
     background-size:100%;
     background-image: url('../../assets/images/close.png');
     background-repeat: no-repeat;
     }
 .content .logo p{
     font-size: 30px;
     padding: 0;
     margin: 0;
     padding-top: 22px;
     color: #ff6700;
    } 
    .logo h5{
        font-size: 14px;
        color: #757575;
        font-weight: normal;
        margin: 10px 0 50px;
        padding: 0;
    }
    .logo .qr{
        position: relative;
        height: 270px;
        width: 270px;
        margin: 10px 0 0 330px;
    }
    .logo .qr img{
        height: 100%;
        width: 100%;
        display: block;
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

