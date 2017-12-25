<template>
  <div class="m-bar">
      <ul class="nav"  >
          <li @mouseenter="enter1()" @mouseleave="leave1()">
             <a class="app"></a>
              <p>下载APP</p>
              <div class="inner1" >
                      <span class="pp"></span>
                      <span class="dd"></span>
                      <img src="../assets/images/qrcode.png" alt="">
                      <p>下载有品 APP得新人礼包</p>
              </div>
          </li>
          <li  @mouseenter='enter2()' @mouseleave='leave2()'>
               <a class="new"></a>
              <p>新人有礼</p>
              <div class="inner2" >
                     <span class="pp"></span>
                      <span class="dd"></span>
                       <img src="../assets/images/gd.png" class="gd" alt="">
                      <img src="../assets/images/qrcode.png" class="qr" alt="">
                     
                      <p>立刻扫码下载-有品APP</p>
              </div>
          </li>
          <li  @mouseenter='enter3()' @mouseleave='leave3()' @click="top()">
                  <a class="top"></a>
              <p>回到顶部</p>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  methods: {
    enter1() {
      $(".app").css("backgroundPosition", "0 -1148px");
      $(".app + p").css("color", "#845f3f");
      $('.inner1').fadeIn(100)
    },
    leave1() {
      $(".app").css("backgroundPosition", "0 -1454px");
      $(".app + p").css("color", "#000");
      $('.inner1').fadeOut(100)
    },

    enter2() {
      $(".new").css("backgroundPosition", "0 -740px");
      $(".new + p").css("color", "#845f3f");
      $('.inner2').fadeIn(100)
    },
    leave2() {
      $(".new").css("backgroundPosition", "0 -774px");
      $(".new + p").css("color", "#000");
     $('.inner2').fadeOut(100)
    },

    enter3() {
      $(".top").css("backgroundPosition", "0 -1250px");
      $(".top + p").css("color", "#845f3f");
    },
    leave3() {
      $(".top").css("backgroundPosition", "0 -1216px");
      $(".top + p").css("color", "#000");
    },
    //缓慢返回顶部
    top() {
        $('html,body').animate({scrollTop:'0'}, 500);
    }
  }
};
</script>
<style scoped>
.m-bar {
  position: fixed;
  top: 220px;
  right: 10px;
  z-index: 99;
  width: 71px;
  padding: 0 3px;
  background-color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);

}
.nav {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav li {
  position: relative;
  padding: 10px;
  font-style: 12px;
  text-align: center;
  border-bottom: 1px solid #e7e7e7;
  cursor: pointer;
}

li a {
  width: 30px;
  height: 30px;
  display: inline-block;
  text-decoration: none;
}
li p {
  margin: 0;
  font-size: 12px;
}
.app {
  background-image: url("../assets/images/icon.png");
  background-position: 0 -1454px;
}
.new {
  background-image: url("../assets/images/icon.png");
  background-position: 0 -774px;
}
.top {
  background-image: url("../assets/images/icon.png");
  background-position: 0 -1216px;
}
.inner1 {
  position: absolute;
  top: -1px;
  display: none;
  right: 80px;
  width: 109px;
  height: 160px;
  border: 1px solid #e7e7e7;
}
.inner1 img {
  margin-top: 13px;
  width: 88px;
  height: 88px;
}
.inner1 p {
  margin-top: 5px;
  border: none;
  padding: 0 10px 0;
}
.inner1 .pp {
  position: absolute;
  right: -17px;
  bottom: 120px;
  border-top: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #e7e7e7;
}
.inner1 .dd {
  position: absolute;
  right: -16px;
  bottom: 120px;
  border-top: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #fff;
}
.inner2{
  position: absolute;
  top:-65px;
  display: none;
  right: 80px;
  width: 190px;
  height: 320px;
  border: 1px solid #e7e7e7;
}
.inner2 .pp{
position: absolute;
  right: -17px;
  bottom: 210px;
  border-top: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #e7e7e7;
}
.inner2 .dd{
position: absolute;
  right: -16px;
  bottom: 210px;
  border-top: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #fff;
}
.inner2 .gd{
width: 170px;
height: 152px;
margin-top: 10px;
margin-bottom: 20px;
}
.inner2 .qr{
    width: 88px;
    height: 88px;
    padding: 5px;
    border: 1px solid #e7e7e7;
}
</style>
