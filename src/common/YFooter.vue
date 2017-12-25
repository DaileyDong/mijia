<template>
  <div class="footer">
    <div class="container">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="logo">
        <p>版权归米家商城所有</p>
      </div>
      <div class="info">
        <p>©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号</p>
        <p>公司名称：小米科技有限责任公司  联系电话：010-60606666</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.footer{
   border-top: 1px solid #e7e7e7;
   margin-top: 90px;
   height: 45px;
   padding: 45px 0;
   line-height: 23px;
   background-color: #fff;
    color: #666;
}
.container{
  position: relative;
  width: 1080px;
  margin: 0 auto;
}
.logo{
  position: absolute;
    width: 300px;
}
.logo img{
  width:123px;
  height: 45px;
}
.logo p{
  position: absolute;
  display: inline-block;
  margin-left: 10px;
  margin-top:14px;
}
.info{
  position: absolute;
  right:0;
}
.info p{
  font-size: 12px;
  margin: 0;
}
</style>