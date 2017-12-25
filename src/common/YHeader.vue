<template>
<div class="home">
  <div class="m-site-top">
      <div class="container clearfix">
          <div class="fr">
            <div class="left fl">
          <!--未登录-->
           <div class="no-login" v-if="abc">
              <router-link to="login" class="login">登录</router-link>
              <router-link to="register" class="register">注册</router-link>
           </div>
           <!--登录-->
            <div class="logined" @mouseenter="loginenter()" @mouseleave="loginleave()" v-else>
               <a href="">
                 <span class="icon-user"></span>
                 <span class="username">董邦军</span>
                 <span class="icon-down"></span>
               </a>
                <div class="logined-nav">
                  <ul class="logined-ul" v-for="(login,i) in logined" :key="i">
                    <li><router-link :to="{path:login.url}">{{login.name}}</router-link></li>
                  </ul>
                  </div> 
              
           </div>
            </div>

            <span class="line fl"></span>
            <div class="right fr" @mouseenter="over1()" @mouseleave="out1()">
              <a class="h-icon"><span class="icon"></span>下载 APP</a>
              <div class="qrcode">
                    <img class="qr" src="../assets/images/qrcode.png" alt="">
                     <p>下载有品 APP<br>得 1000 元新人礼包</p>
              </div>
            </div>
          </div>
      </div>
  </div>

  <div class="m-header">
     <div class="container">
       <div class="m-header-top clearfix"> 
         <div class="m-logo"></div>
         <div class="card-wrap fr">
           <div class="m-card">
             <a class="m-icons"></a>
           </div>
         </div>
         <div class="m-search">
           <div class="search-form">
             <a class="search-icon"></a>
              <div class="search-input">
                <input type="text" placeholder="全天限时购 场场超低价" @focus="focus1()" @blur="blur1()">
              </div>
           </div>
         </div>
       </div>
     <!--列表-->
       <div class="m-nav">
         <ul class="nav-list clearfix">
          <li v-for="(t,i) in title" :key="t.i" @mouseenter="enter(i)" @mouseleave="leave(i)">
            <span class="item" :class="'a'+i" @click="click1(i)"><router-link :to="{path:t.url,query:{title:t.name}}">{{t.name}}</router-link></span>
            </li>
         </ul>
      <!--下拉框-->
         <div class="nav-menu" @mouseenter="enter1()" @mouseleave="leave1()">
           <ul class="clearfix">
             <li class="m-tag" v-for="(g,i) in goods[variate]" :key="g[i]">
               <router-link :to="{path:g.url,query:{title:g.name}}">
                <div class="img">
                  <img :src="g.src" :alt="g.alt">
                </div>
                <p>{{g.name}}</p>
               </router-link>
             </li>
           </ul>
         </div>
       </div>
     </div>
  </div>
</div>


</template>
<script>
export default {
  data() {
    return {
      strname:'',
      variate:'',
      abc:true,
      logined:[
        {name:'我的订单',url:'order'},
        {name:'我的资产',url:''},
        {name:'我的收藏',url:''},
        {name:'地址管理',url:''},
        {name:'退出登录',url:'loginout'}],
      title: [
        {name:"有品特惠",url:'discounts'},
        {name:"手机",url:'phone'},
        {name:"居家",url:'living'},
        {name:"服饰",url:'costumes'},
        {name:"餐厨",url:'kits'},
        {name:"影音",url:'avs'},
        {name:"家电",url:'homeapp'},
        {name:"饮食",url:'diets'},
        {name:"健康",url:'health'},
        {name:"洗护",url:'toiletries'},
        {name:"日杂",url:'za'},
        {name:'智能',url:'noopsyche'},
        {name:"箱包",url:'bags'},
        {name:"配件",url:'parts'},
        {name:"婴童",url:'babys'},
        {name:"出行",url:'trip'},
        {name:"品牌",url:'brands'}
       ],
    goods:{
      minGoods:[
           {id:1,src:'/static/images/header/有品特惠/新品.jpg',name:'新品',url:'/discounts'},
           {id:2,src:'/static/images/header/有品特惠/特惠.jpg',name:'特惠',url:'/discounts'},
           {id:3,src:'/static/images/header/有品特惠/套装.jpg',name:'套装',url:'/discounts'},
           {id:4,src:'/static/images/header/有品特惠/应季.jpg',name:'应季',url:'/discounts'},
           {id:5,src:'/static/images/header/有品特惠/男士.jpg',name:'男士',url:'/discounts'},
           {id:6,src:'/static/images/header/有品特惠/女士.jpg',name:'女士',url:'/discounts'},
        ],
      phones:[
            {id:1,src:'/static/images/header/手机/小米.jpg',name:'小米系列'},
            {id:2,src:'/static/images/header/手机/红米.jpg',name:'红米系列'}
       ],
      living:[
         {id:1,src:'/static/images/header/居家/床垫.jpg',name:"床垫"},
         {id:2,src:'/static/images/header/居家/被枕.jpg',name:"被枕"},
         {id:3,src:'/static/images/header/居家/床品.jpg',name:"床品"},
         {id:4,src:'/static/images/header/居家/灯具.jpg',name:"灯具"},
         {id:5,src:'/static/images/header/居家/家具.jpg',name:"家具"},
         {id:6,src:'/static/images/header/居家/花盆.jpg',name:"花盆"},
         {id:7,src:'/static/images/header/居家/家饰.jpg',name:"家饰"},
         {id:8,src:'/static/images/header/居家/布艺.jpg',name:"布艺"},

       ],
      costumes:[
          {id:1,src:'/static/images/header/服饰/服装.jpg',name:'服装'},
          {id:2,src:'/static/images/header/服饰/鞋袜.jpg',name:'鞋袜'},
          {id:3,src:'/static/images/header/服饰/眼镜.jpg',name:'眼镜'},
          {id:4,src:'/static/images/header/服饰/配饰.jpg',name:'配饰'},
          {id:5,src:'/static/images/header/服饰/内衣.jpg',name:'内衣'},
       ],
      kits:[
         {id:'1',src:'/static/images/header/餐厨/厨房电器.jpg',name:"厨房电器"},
         {id:'2',src:'/static/images/header/餐厨/杯壶.jpg',name:"杯壶"},
         {id:'3',src:'/static/images/header/餐厨/锅具.jpg',name:"锅具"},
         {id:'4',src:'/static/images/header/餐厨/餐具.jpg',name:"餐具"},
         {id:'5',src:'/static/images/header/餐厨/厨具.jpg',name:"功能厨具"},
         {id:'6',src:'/static/images/header/餐厨/刀剪.jpg',name:"刀剪砧板"},
         {id:'7',src:'/static/images/header/餐厨/保鲜.jpg',name:"保鲜收纳"},
       ],
      avs:[
         {id:'1',src:'/static/images/header/影音/tv.jpg',name:"电视"},
         {id:'2',src:'/static/images/header/影音/hz.jpg',name:"盒子"},
         {id:'3',src:'/static/images/header/影音/ty.jpg',name:"投影"},
         {id:'4',src:'/static/images/header/影音/yx.jpg',name:"音箱"},
       ],
      homeapp:[
         {id:'1',src:'/static/images/header/家电/air.jpg',name:"空气净化器"},
         {id:'2',src:'/static/images/header/家电/jsq.jpg',name:"净水器"},
         {id:'3',src:'/static/images/header/家电/xyj.jpg',name:"洗衣机"},
         {id:'4',src:'/static/images/header/家电/bx.jpg',name:"冰箱"},
         {id:'5',src:'/static/images/header/家电/sh.jpg',name:"生活电器"},
         {id:'6',src:'/static/images/header/家电/kt.jpg',name:"空调/风扇"},
         {id:'7',src:'/static/images/header/家电/cf.jpg',name:"厨房电器"},
       ],
      diets:[
         {id:'1',src:'/static/images/header/饮食/js.jpg',name:"酒水"},
         {id:'2',src:'/static/images/header/饮食/xc.jpg',name:"休闲小食"},
         {id:'3',src:'/static/images/header/饮食/tea.jpg',name:"冲饮/茗茶"},
         {id:'4',src:'/static/images/header/饮食/zl.jpg',name:"杂粮/食材"},
         {id:'5',src:'/static/images/header/饮食/sx.jpg',name:"生鲜"},
       ],
      health:[
         {id:'1',src:'/static/images/header/健康/jh.jpg',name:"康体监护"},
         {id:'2',src:'/static/images/header/健康/js.jpg',name:"运动健身"},
         {id:'3',src:'/static/images/header/健康/hl.jpg',name:"护理护具"},
         {id:'4',src:'/static/images/header/健康/bj.jpg',name:"保健器材"},
       ],
      toiletries:[
         {id:'1',src:'/static/images/header/洗护/kq.jpg',name:"口腔清洁"},
         {id:'2',src:'/static/images/header/洗护/face.jpg',name:"面部护理"},
         {id:'3',src:'/static/images/header/洗护/mj.jpg',name:"毛巾浴巾"},
         {id:'4',src:'/static/images/header/洗护/mf.jpg',name:"美发护发"},
         {id:'5',src:'/static/images/header/洗护/st.jpg',name:"身体呵护"},
         {id:'6',src:'/static/images/header/洗护/xd.jpg',name:"洗涤清洁"},
       ],
      za:[
         {id:'1',src:'/static/images/header/日杂/ry.jpg',name:"日用"},
         {id:'2',src:'/static/images/header/日杂/gj.jpg',name:"工具"},
         {id:'3',src:'/static/images/header/日杂/qj.jpg',name:"清洁"},
         {id:'4',src:'/static/images/header/日杂/wj.jpg',name:"文具"},
       ],
      noopsyche:[
         {id:'1',src:'/static/images/header/智能/pc.jpg',name:"电脑"},
         {id:'2',src:'/static/images/header/智能/af.jpg',name:"安防"},
         {id:'3',src:'/static/images/header/智能/wg.jpg',name:"网关/传感器"},
         {id:'4',src:'/static/images/header/智能/xj.jpg',name:"相机"},
         {id:'5',src:'/static/images/header/智能/ly.jpg',name:"路由器"},
         {id:'6',src:'/static/images/header/智能/cd.jpg',name:"穿戴"},
         {id:'7',src:'/static/images/header/智能/kg.jpg',name:"开关/插座"},
         {id:'8',src:'/static/images/header/智能/fj.jpg',name:"酷玩"},
         {id:'9',src:'/static/images/header/智能/jk.jpg',name:"健康"},
       ],
      bags:[
         {id:'1',src:'/static/images/header/箱包/bag.jpg',name:"背包"},
         {id:'2',src:'/static/images/header/箱包/lxx.jpg',name:"旅行箱"},
         {id:'3',src:'/static/images/header/箱包/qb.jpg',name:"钱包/卡包"},
         {id:'4',src:'/static/images/header/箱包/gnb.jpg',name:"功能箱包"},
        ],
      parts:[ 
         {id:'1',src:'/static/images/header/配件/ej.jpg',name:"耳机"},
         {id:'2',src:'/static/images/header/配件/dy.png',name:"电源/电池"},
         {id:'3',src:'/static/images/header/配件/zb.jpg',name:"手机周边"},
         {id:'4',src:'/static/images/header/配件/bg.jpg',name:"办公周边"},
         {id:'5',src:'/static/images/header/配件/cxb.png',name:"插线板"},
         {id:'6',src:'/static/images/header/配件/x.png',name:"适配器/线材"},
        ],
      babys:[
         {id:'1',src:'/static/images/header/婴童/cd.jpg',name:"穿戴"},
         {id:'2',src:'/static/images/header/婴童/wj.jpg',name:"文具"},
         {id:'3',src:'/static/images/header/婴童/xh.jpg',name:"洗护"},
         {id:'4',src:'/static/images/header/婴童/qj.jpg',name:"寝居"},
         {id:'5',src:'/static/images/header/婴童/fs.jpg',name:"服饰箱包"},
         {id:'6',src:'/static/images/header/婴童/cx.jpg',name:"出行"},
         ],
      trip:[
         {id:'1',src:'/static/images/header/出行/qx.jpg',name:"骑行"},
         {id:'2',src:'/static/images/header/出行/car.jpg',name:"汽车用品"},
         {id:'3',src:'/static/images/header/出行/out.jpg',name:"户外"},
         ],
      brands:[
         {id:'1',src:'/static/images/header/品牌/8h.jpg',name:"8H"},
         {id:'2',src:'/static/images/header/品牌/90.jpg',name:"90分"},
         {id:'3',src:'/static/images/header/品牌/yee.jpg',name:"Yeelight"},
         {id:'4',src:'/static/images/header/品牌/一悟.jpg',name:"一悟一什"},
         {id:'5',src:'/static/images/header/品牌/云米.jpg',name:"云米"},
         {id:'6',src:'/static/images/header/品牌/小吉.jpg',name:"小吉"},
         {id:'7',src:'/static/images/header/品牌/素士.jpg',name:"素士"},
         {id:'8',src:'/static/images/header/品牌/最生活.jpg',name:"最生活"},
         {id:'9',src:'/static/images/header/品牌/cot.jpg',name:"cottonsmith"},
         ]
      }
      
    };
  },
  created(){
      if(localStorage.getItem('tel')){
        this.abc=false
      }
  },
  methods: {
    over1() {
      $(".icon").css("background-position", "0 -1014px");
      $(".qrcode").slideDown(200);
    },
    out1() {
      $(".icon").css("background-position", "0 -946px");
      $(".qrcode").css("display", "none");
    },
    focus1() {
      $(".search-form").css("border-bottom", "1px solid #845f3f");
    },
    blur1() {
      $(".search-form").css("border-bottom", "1px solid #e7e7e7");
    },
    loginenter(){
      $('.logined-nav').slideDown(300)
    },
    loginleave(){
      $('.logined-nav').slideUp(50)
    },
    //使用for in获取属性名
    enter(i) {
      var arr=[];
      var goods=this.goods;
       for (const key in goods) {
        arr.push(key);
       }
     // console.log(arr[i])
       this.variate=arr[i]
      $(".nav-menu")
        .slideDown()
        .finish();
    },
    leave(i) {
      $(".nav-menu").slideUp(300);
    },
    enter1() {
      $(".nav-menu")
        .slideDown()
        .finish();
    },
    leave1() {
      $(".nav-menu").slideUp(300);
    }
  },

};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #845f3f;
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
.m-site-top {
  position: relative;
  color: #e7e7e7;
  height: 48px;
  background: #333;
  font-size: 14px;
}
.m-site-top .container {
  width: 1080px;
  margin: 0 auto;
}
.fr {
  float: right;
  line-height: 48px;
}
.fl {
  float: left;
}
.no-login,logined {
  display: inline-block;
}
.no-login a,.logined a {
  margin-right: 8px;
  color: #e7e7e7;
}
.logined a{
  display: block;
  width: 70px;
  padding-left: 30px;
  padding-right: 20px;
  overflow: hidden;
  position: relative;
  height: 48px;
  line-height: 48px;
}
.logined a .icon-user{
      top: 8px;
      left: 0;
      width: 30px;
      height: 30px;
      display: inline-block;
      border-radius: 50%;
      position: absolute;
      line-height: 48px;
      text-align: center;
      background-image: url('/static/images/user.jpg');
      background-size: 100% auto;
      background-position: center center;
      background-repeat: no-repeat;
}
.logined a .username{
      margin-left:15px;
}
.logined a .icon-down{
  top: 10px;
  right: 0;
  width: 30px;
  height: 30px;
  display: inline-block;
  position: absolute;
  background-image: url('../assets/images/icon.png');
  background-position: 0 -606px;
  background-repeat: no-repeat;
}
.logined-nav{
  width: 100px;
  display: none;
  position: absolute;
  box-shadow: 0 0 18px rgba(0, 0, 0,.1);
  top: 48px;
  height: 175px;
  z-index: 5;
  background: #fff;
  text-align: center;
}
.logined-nav .logined-ul{
  margin: 0;
  padding: 0;
  text-align: center;
  display: block;
  list-style: none;
  color: #333;
}
.logined-ul li{
  height: 35px;
  line-height: 35px;
  padding: 0;
  margin: 0;
}
.logined-ul li a{
  display: block;
   padding: 0 15px;
   margin:0;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
  color: #666;
  text-decoration: none;
}
.logined-ul li a:hover{
  color: #fff;
  background: #845f3f;
}

a {
  cursor: pointer;
}
.line {
  height: 16px;
  border-right: 1px solid #666;
  display: inline-block;
  vertical-align: middle;
  margin: 17px 3px 0 6px;
}

.right {
  position: relative;
  width: 80px;
  padding-left: 30px;
}
.right .h-icon {
  color: #e7e7e7;
}
.right .h-icon:hover {
  color: #fff;
}
.right .h-icon .icon {
  position: absolute;
  background-image: url("../assets/images/icon.png");
  background-position: 0 -946px;
  height: 30px;
  left: 0;
  width: 30px;
  top: 9px;
  display: inline-block;
 }
.action {
  position: absolute;
  background-image: url("../assets/images/icon.png");
  background-position: 0 -1016px;
  height: 30px;
  left: 0;
  width: 30px;
  top: 9px;
  display: inline-block;
 }
.right .qrcode {
  position: absolute;
  width: 120px;
  left: -30px;
  z-index: 99;
  display: none;
  padding-top: 10px;
  box-shadow: 0 3px 28px rgba(0, 0, 0, 0.1);
  background-color: #fff;
 }
.right .qrcode .qr {
  width: 100px;
  height: 100px;
  margin-left: 10px;
 }
.right .qrcode p {
  font-size: 12px;
  text-align: center;
  line-height: 16px;
  color: #666;
  padding: 0;
  margin-top: -15px;
 }
.m-header {
  position: relative;
  z-index: 3;
  padding-top: 20px;
  margin-bottom: 5px;
}
.m-header .container {
  width: 1080px;
  margin: 0 auto;
}
.m-header-top {
  position: relative;
  padding-right: 40px;
  z-index: 9;
}
.m-logo {
  float: left;
  width: 123px;
  height: 45px;
  background-image: url("../assets/images/logo.png");
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
}
.card-wrap {
  position: absolute;
  right: 6px;
  top: 18px;
}
.m-card {
  position: relative;
  width: 30px;
}
.m-icons {
  background-image: url("../assets/images/icon.png");
  background-position: 0 -878px;
  display: inline-block;
  width: 30px;
  height: 30px;
}
.m-icons:hover {
  background-position: 0 -1048px;
}
.m-search {
  float: right;
  width: 296px;
}
.search-form {
  position: relative;
  width: 246px;
  padding-left: 35px;
  padding-top: 18px;
  height: 32px;
  border-bottom: 1px solid #e7e7e7;
  transition: all 0.3s;
}

.search-icon {
  position: absolute;
  left: -4px;
  top: 19px;
  display: block;
  z-index: 2;
  text-align: center;
  font-size: 14px;
  background-image: url("../assets/images/icon.png");
  background-position: 0 -1388px;
  width: 30px;
  height: 30px;
}
.search-icon:hover {
  background-position: 0 -1354px;
}
.search-input {
  z-index: 1;
  width: 245px;
  height: 32px;
  line-height: 32px;
}
.search-input input {
  width: 100%;
  border: none;
  color: #333;
  font-size: 14px;
  transition: all 0.2s;
}
.m-nav {
  position: relative;
  margin: 30px 0 0;
  z-index: 8;
}
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-list li {
  width: 63px;
  float: left;
  height: 46px;
  text-align: center;
  margin: 0;
  padding: 0;
}
.nav-list li .item {
  display: inline-block;
  padding-bottom: 5px;
  color: #333;
  font-size: 14px;
}
.nav-list li .item:hover {
  color: #845f3f;
}
.nav-menu {
  position: absolute;
  top: 46px;
  height: 167px;
  width: 1080px;
  background-color: #fff;
  border: 1px solid #ececec;
  display: none;
 }
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 0;
  margin: 0;
}
.nav-menu ul {
  padding: 20px 0 40px;
}
.m-tag {
  float: left;
  width: 96px;
  margin-right: 13px;
  text-align: center;
  cursor: pointer;
}

.nav-menu li .img {
  width: 80px;
  margin: 0 auto;
  overflow: hidden;
}
.nav-menu li .img img {
  width: 80px;
  height: 80px;
  border: none;
  vertical-align: middle;
}
.nav-menu li p {
  font-size: 14px;
}

</style>
