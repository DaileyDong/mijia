
<template>
<div>
  <div class="banner">
 <!--轮播图-->
  <div class="bar">
        <el-carousel :interval="3000" arrow="always" height="500px">
      <el-carousel-item v-for="item in 5" :key="item.id">
     </el-carousel-item>
    </el-carousel>
  </div>
 <!--轮播图下-->
      <div class="p-hero-wrap">
        <ul class="p-hero-nav clearfix">
          <li class="m-tag-a" v-for="img in imgs" :key="img.id">
            <img alt="" v-lazy="img.src">
            </li>
        </ul>
      </div>

      <!--双11推荐-->
      <div class="h-goods-warp1">
        <div class="container clearfix">
             <div class="h-sec-top clearfix">
               <h2>双11推荐<span>有品为您甄选 悦心购买</span>
               <a class="h-more">更多></a></h2>
             </div>
             <div class="m-sec-main">
                   <div class="h-pro1">
                     <router-link to=""><img class="h-bg" src="../../assets/word/推荐/bg.jpg" alt=""></router-link>
                      <router-link to=""><img class="h-p1" src="../../assets/word/推荐/p1.png" alt=""></router-link>
                   </div>
                   <div class="h-pro2">
                     <router-link to=""><img src="../../assets/word/推荐/p2.jpg" alt=""></router-link>
                   </div>
                    <div class="h-pro3">
                      <router-link to=""><img src="../../assets/word/推荐/p3.jpg" alt=""></router-link>
                    </div>
                 </div>
     </div>
      </div>

      <!--小米众筹-->
        <div class="h-crowd">
          <div class="h-s-top">
            <h2>小米众筹<span>寻觅世间好物</span><a href="">更多></a></h2>
          </div>
          <div class="xiaomizc">
            <div class="main clearfix">
              <div class="li" v-for="z in zc" :key="z.id">
                <router-link to="">
                  <img v-lazy="z.src" class="zp" alt="z.title">
                  <h3>{{z.title}}<h4>￥{{z.price}}</h4></h3>
                  <img src="../../assets/images/line.jpg" class="zline" alt="">
                  <p class="person">{{z.person}}<i class="ip">人支持</i><span>{{z.num}}<i>%</i></span></p>
                  </router-link>
                  </div>
            </div>
          </div>
        </div>

        <!--新品-->
         <div class="h-section">
          <div class="container clearfix">
            <div class="h-x-top clearfix">
              <h2 class="h-subTit">新品<span>每一件产品 给您不一样的感动</span></h2>
              <a class="x-more">更多></a>
            </div>

           <div class="m-x-main">
                  <div class="x-item1">
                    <div class="x1">
                    <img class="x-pro" src="../../assets/word/新品/bg1.jpg" alt="" >
                    <img class="x-pro1" src="../../assets/word/新品/zy.png" alt="">
                    </div>
                      <div class="text">
                      <p class="pro-info">铜师傅黑胡桃原木小桌凳</p>
                      <p class="pro-desc">【限量预售】一套可以传世...</p>
                      <p class="pro-price">￥<span>139</span></p>
                      </div>
                  </div>
                  <div class="x-item2"> 
                    <div class="x2" style="background-color;rgb(243,240,233)"><img src="../../assets/word/新品/trq.jpg" alt=""></div>
                    <div class="text2">
                      <p class="pro-info">云米智能互联烟灶套装（天然气）</p>
                      <p class="pro-desc">【预售，11.23陆续发货】烟灶...</p>
                      <p class="pro-price">￥<span>2999</span></p>
                      </div>
                  </div>
                  <div class="x-item3"> 
                    <div class="x3" style="background-color: rgb(241, 238, 233);"><img src="../../assets/word/新品/sjt.png" alt=""></div>
                    <div class="text">
                      <p class="pro-info">每晚暖冬生态磨毛四件套</p>
                      <p class="pro-price">￥<span>299起</span></p>
                      </div>
                  </div>
                  <div class="x-item4">
                    <div class="x4" style="background-color: rgb(237, 243, 230);"><img src="../../assets/word/新品/yd.png" alt=""></div>
                    <div class="text">
                      <p class="pro-info">石墨烯发热腰带</p>
                      <p class="pro-price">￥<span>129起</span></p>
                    </div>
                  </div>
                  <div class="x-item5"> 
                   <div class="x5" style="background-color: rgb(237, 243, 230);"><img src="../../assets/word/新品/zt.png" alt=""></div>
                   <div class="text">
                      <p class="pro-info">每晚苦荞分区护颈枕</p>
                      <p class="pro-price">￥<span>79</span></p>
                   </div>
                  </div>
                  <div class="hot-more">
                      <span>更多新品 ></span>
                    </div>
          </div>
           </div>
         </div>
  </div>
    
    <!--热门-->
    <div class="hot-bg">
     <div class="container">
         <div class="hot-title">
           <h2>热门<span>大家都爱的贴心好物</span></h2>
           <a>更多></a>
         </div>
         <div class="hot-pp">
           <ul class="pp">
             <li v-for="p in pp" :key="p.id">
               <router-link to=""><img v-lazy="p.src" alt="">
             <h2>{{p.title}}<p>{{p.desc}}</p><p class="price">￥{{p.price}}</p></h2></router-link></li>
           </ul>
               <div class="left" @click="left()"></div>
              <div class="right" @click="right()"></div>
         </div>
     </div>
    </div>
     
     <!--品牌-->
     <div class="brand">
       <div class="content">
         <div class="brand-title">
           <h2>品牌<span>精心制作 价美质优</span></h2>
           <a href="">更多></a>
         </div>
         <div class="brand-pic">
           <ul class="brand-car">
             <li v-for="b in brands" :key="b.id"><router-link to=""><img v-lazy="b.src" alt=""></router-link></li>
           </ul>
           <div class="left1" @click="left1()"></div>
           <div class="right1" @click="right1()"></div>
         </div>
       </div>
     </div>
    
</div>


    
</template>
<script>

export default {
data(){
  return{
    title:'有品',
    imgs:[
      {id:1,src:'/static/images/轮播图下/1.jpg'},
      {id:2,src:'/static/images/轮播图下/2.jpg'},
      {id:3,src:'/static/images/轮播图下/3.jpg'},
      {id:4,src:'/static/images/轮播图下/4.jpg'},
      {id:5,src:'/static/images/轮播图下/5.jpg'}
    ],

    zc:[
      {id:1,src:'/static/images/众筹/1.jpg',title:'aller等离子除菌收纳箱',price:439,person:1049,num:524},
      {id:2,src:'/static/images/众筹/2.jpg',title:'清蜓车载负离子空气净化器',price:449,person:1281,num:128},
      {id:3,src:'/static/images/众筹/3.jpg',title:'考拉妈妈智能温控冲奶机',price:1299,person:444,num:222},
      {id:4,src:'/static/images/众筹/4.jpg',title:'夏洛克智能贴锁M1',price:399,person:4499,num:449},
    ],
    pp:[
      {id:1,src:'/static/images/热门/1.jpg',title:'小米净水器(厨下式)',desc:'隐藏式安装，400加仑大流量',price:1999},
      {id:2,src:'/static/images/热门/2.jpg',title:'Woobi Play儿童清吸...',desc:'呼吸分离，专为儿童设计，便...',price:199},
      {id:3,src:'/static/images/热门/3.jpg',title:'云米智能互联烟灶套装（天然气）',desc:'【预售，11.23陆续发货】烟灶相...',price:2999},
      {id:4,src:'/static/images/热门/4.jpg',title:'小米笔记本Pro15.6',desc:'【i7 8G版7号直降200元】温馨提...',price:5599},
      {id:5,src:'/static/images/热门/5.jpg',title:'90分七道杠旅行箱',desc:'静音耐磨万向轮，纹理设计抗...',price:269},
    ],
    brands:[
      {id:1,src:'/static/images/品牌/8h.jpg'},
      {id:2,src:'/static/images/品牌/90fen.jpg'},
      {id:3,src:'/static/images/品牌/yee.jpg'},
      {id:4,src:'/static/images/品牌/一悟.jpg'},
      {id:5,src:'/static/images/品牌/云米.jpg'},
      {id:6,src:'/static/images/品牌/小吉.jpg'},
      {id:7,src:'/static/images/品牌/最生活.jpg'},
      {id:8,src:'/static/images/品牌/素士.jpg'},

    ]
  }
 },
methods:{
   left(){
    $('.pp').css('transform', 'translate3d(0px,0px,0px)')
   },
   right(){
      $('.pp').css('transform', 'translate3d(-266px,0px,0px)')
   },
   left1(){
    $('.brand-car').css('transform','translate3d(0,0,0)')
   },
   right1(){
   $('.brand-car').css('transform','translate3d(-1080px,0,0)')
   }
 },
 };

</script>

<style scoped>

.banner {
  width: 1080px;
  margin: 0 auto;
 }
.el-carousel__item:nth-child(2n) {
    background-image: url('/static/images/轮播/5.jpg');
    background-size:100% 100%;
  }
.el-carousel__item:nth-child(2n+1) {
    background-image: url('/static/images/轮播/3.jpg');
    background-size:100% 100%;
  }
.el-carousel__item:nth-child(3) {
  background-image: url('/static/images/轮播/1.jpg');
  background-size:100% 100%;
  }
.el-carousel__item:nth-child(4) {
    background-image: url('/static/images/轮播/2.jpg');
    background-size:100% 100%;
  }
.el-carousel__item:nth-child(5) {
    background-image: url('/static/images/轮播/4.jpg');
    background-size:100% 100%;
  }

.p-hero-wrap{
    width: 1080px;
    margin: 0 auto;
    margin-top: 30px;
    height: 100%;
 }
ul{
  list-style: none;
  padding: 0;
  margin: 0;
 }
.p-hero-nav{
  height: 144px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 10px;
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
.m-tag-a{
 float: left;
 margin-right:107px;
 width: 130px;
 padding: 0;
 }
.p-hero-nav li:last-child{
  margin-right: 0;
 }
.m-tag-a img{ 
 width: 130px;
 height: 144px;
 vertical-align: middle;
 }
.h-goods-warp1{
  position: relative;
  margin-top: 90px;
 }
.h-goods-warp1 .container{
  width: 1080px;
  margin: 0 auto;
 }
 .h-sec-top{
   height: 74px;
   line-height: 32px;
 }
 .h-sec-top h2{
   font-weight: normal;
   font-size: 24px;
 }
  .h-sec-top h2 span{
    font-size: 14px;
    margin-left: 10px;
    color: #999;
  }
  .h-more{
    position: absolute;
    right: 0;
    font-size: 14px;
    color: #666;
   cursor: pointer;
  }
  .m-sec-main{
    position: relative;
  }
.h-pro1 .h-bg{
  width: 538px;
  height: 200px;
 }
.h-pro1 .h-p1{
  margin-left: 15px;
  height:270px;
  position: absolute;
  left: 10px;
  top:-70px;
 }
.h-pro2 img{
  position: absolute;
  left: 550px;
  top: 0px;
  width: 255px;
  height: 200px;
 }
.h-pro3 img{
  position:absolute;
  right: 10px;
  top: 0px;
  width: 255px;
  height: 200px;
  
 }
.h-crowd{
  position: relative;
  margin-top: 90px;
 }
.h-s-top{
  height: 74px;
  line-height: 32px;
 }
.h-s-top h2{ 
  font-size: 24px;
  font-weight: normal;
 } 
.h-s-top h2 span{
  font-size: 14px;
  color: #999;
  margin-left: 10px;
 }
a:hover{
  color: #845f3f;
 }
.h-s-top h2 a{
  font-size: 14px;
  color: #666;
  position: absolute;
  right: 0;
  text-decoration: none;
 }
.h-s-top h2 a:hover{
  color: #845f3f;
 }
li{
  list-style: none;
  padding: 0;
  margin: 0;
 }
.main .li{
  float: left;
  height: 200px;
  width: 263px;
 }
.main .li a{
  text-decoration: none;

 }
.main .li a h3{
  position: absolute;
  top: 80px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: normal;
  color: #000;
 }
.main .li a h3 h4{
  font-size: 14px;
  font-weight: normal;
  color:#c00000;
  margin:5px 0;

 }
.main .li a .zp{
 width: 100%;
 height: 100%;
 }
.main .li{
  margin-right:8px;
 }
.main .li:last-child{ 
  margin-right:0px;
 }
.main .li a .zline{
  position: absolute;
  width: 263px;
  height:3px;
  top: 275px;
 }
.main .li a .person{
  position: relative;
  margin:5px 0 0;
 font-size: 16px;
 color: #c00000;
 }
.main .li a .person span{
  position: absolute;
  right: 0;
 }
i{
  font-size: 14px;
  font-style: normal;
 }
.ip{
  color: #999;
 }
.h-section{
  margin-top: 90px;
 }
.container{
  width: 1080px;
  margin: 0 auto;
 }
.h-x-top{
  position: relative;
  z-index: 99;
  margin-bottom: 20px;
  border: 1px solid transparent;
 }
.x-more{ 
  position: absolute;
  right: 0;
  top: 30px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
 }

.h-subTit{
   color: #333;
   font-size: 24px;
   font-weight: 400;
 }
.h-subTit span{
  margin-left: 10px;
  font-size: 14px;
  color: #999;
 }

.m-x-main{
  position: relative;
  height: 418px;
  margin-top: 30px;

 }

.x-item1{
 position: absolute;
 height: 206px;
 margin: 0;
 right: 0;
 cursor: pointer;
 }
.x1{
  width: 538px;
  height: 206px;
  cursor: pointer;
 }
.x1 .x-pro{
  width: 538px;
  height: 206px;
 }
.x1 .x-pro1{
  position: absolute;
   width: 538px;
   left:0;
   bottom: 0;
   height: auto;
 }
.text{
  position: relative;
  z-index: 6;
  top: -206px;
  padding: 10px;
 }
.pro-info{
  height: 26px;
  line-height: 26px;
  margin:5px 0 0 0;
  padding: 0;
  color: #333;
  font-size: 16px;
    overflow: hidden;
  white-space: nowrap;
 }
.pro-desc{
  height: 24px;
  margin: 0;
  padding: 0;
  line-height:24px;
  font-size: 14px;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
 }
.pro-price{
  height: 26px;
  color: #c00000;
  overflow: hidden;
  line-height: 26px;
  padding: 0;
  margin: 0;
 }
.x-item2{
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
 }
.x2{
  position: relative;
  cursor: pointer;
 }
.x2 img{
  height: 418px;
  width: 250px;
 }
.text2{
  position: relative;
  z-index: 6;
  top:-418px;
  padding: 10px;
 }
.x-item3{
  position: absolute;
  width:270px;
  height: 206px;
  margin: 0;
  left: 260px;
  top: 0;
  cursor: pointer;
 }
 .x3{
   position: relative;
   width: 270px;
   height: 100%;
   margin: 0;
   padding: 0;
   cursor: pointer;
  }
.x3 img{
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 z-index:4;
 }
.x-item4{
  position: absolute;
  left: 260px;
  bottom: 0;
  width: 270px;
  height: 206px;
  margin: 0;
  cursor: pointer;
 }
.x4{
 height: 100%;
 position: relative;
 width: 270px;
 margin: 0;
 padding: 0;
 cursor: pointer;
 }
.x4 img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
 }
.x-item5{
  left: 540px;
  bottom: 0;
  position: absolute;
  width: 270px;
  height: 206px;
  margin: 0;
  cursor: pointer;
 }
 .x5{
   height: 100%;
   position: relative;
   width: 266px;
   margin: 0;
   padding: 0;
   cursor: pointer;
  }
.x5 img{
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 z-index: 4;
 }
.hot-more{
   position: absolute;
   right: 0;
   bottom: 0;
   width: 260px;
   height: 205px;
   line-height: 205px;
   font-size: 17px;
   color: #845f3f;
   background: #f7f5eb;
   text-align: center;
 }
.hot-bg{
 margin-top: 90px;
 height: 463px;
 background-color:#f5f5f5;
 }
.hot-bg .container{
   position: relative;
   margin:0 auto;
   width: 1080px;
  }
 .hot-title{
   position: relative;
   margin-top: 35px;
   height: 70px;
  }
 .hot-title h2{
   position: absolute;
   margin:20px 0;
   padding: 0;
   font-size: 24px;
   color: #333;
   font-weight: normal;
  }
 .hot-title h2 span{
   font-size: 14px;
   color: #999;
   margin-left: 5px;
  }
 .hot-title a{
   right: 0;
   top: 30px;
   color: #666;
   font-size: 14px;
   position: absolute;
   cursor: pointer;
  }
 .hot-title a:hover{
   color: #845f3f;
  }
 .hot-pp{
   position: relative;
   width: 1080px;
   height: 343px;
   padding-top: 5px;
   overflow: hidden;
  }
 .hot-pp .left,.hot-pp .right{
   position: absolute;
   background-image: url('/static/images/icon.png');
   height: 38px;
   width: 38px;
   top:120px;
   cursor: pointer;
  }
.hot-pp .left{
   background-position: 0 -1616px;
   left: 10px;
  }
.hot-pp .right{
    background-position: 0 -1532px;
    right: 10px;
 } 
.hot-pp .left:hover{
    background-position:0 -1574px;
  }
.hot-pp .right:hover{
  background-position:0 -1490px;
    }
.hot-pp .pp{
  width: 3000px;
  list-style: none;
  padding: 0;
  margin: 0;
  transform: translate3d(0px, 0px, 0px);
  transition: all ease 0.3s;
 }
.hot-pp .pp li{
  margin: 0;
  padding: 0;
  float: left;
  text-align: center;
  height: 291px;
  width: 266px;
  margin-right: 5px;
  background-color: #fff;
 }
.hot-pp .pp li:hover {
  transform: translate(0, -5px);
  transition: ease all .3s;
  box-shadow: 0 0 5px 3px #ccc;
 }
.hot-pp .pp li img{
 height: 195px;
 width: 195px;
 }
.hot-pp .pp li h2{
  font-size: 16px;
  color: #333;
  font-weight: normal;
  margin: 0;
  padding: 0;
 }
.hot-pp .pp li h2 p{
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: #999;
 }
.hot-pp .pp li h2 .price{
  color: #c00000;
  margin-top: 3px;
 }
a{
  text-decoration: none;
 }

.brand{
  margin-top: 90px;
 }
.brand .content{
  position: relative;
  margin: 0 auto;
  width: 1080px;
 }
 .content .brand-title{
   height: 70px;
 }
.brand-title h2{
  font-size: 24px;
  color: #333;
  font-weight: normal;
 }
.brand-title h2 span{
  font-size: 14px;
  color: #999;
  margin-left: 10px;
 }
.brand-title a{
  position: absolute;
  right: 0;
  top: 30px;
  color: #666;
  font-size: 14px;
 }
.brand-title a:hover{
  color: #845f3f;
 }
.brand-pic{
  position: relative;
  margin-top: -5px;
  height: 252px;
  overflow: hidden;
}
.brand-pic .brand-car{
  padding: 0;
  margin: 0;
  width: 2500px;
  list-style: none;
  transform:translate3d(0,0,0);
  transition: all ease 0.3s;
 
}
.brand-car li{
  padding: 0;
  margin: 0;
  margin-right: 5px;
  float: left;
  height: 252px;
  width:266px;
}
.brand-car li img{
  height: 100%;
  width: 100%;
}
.left1,.right1{
   position: absolute;
   background-image: url('/static/images/icon.png');
   height: 38px;
   width: 38px;
   top:110px;
   cursor: pointer;
 }
.left1{
   background-position: 0 -1616px;
   left: 10px;
  }
.right1{
   background-position: 0 -1532px;
    right: 10px;
 }
.left1:hover{
   background-position:0 -1574px;
 }
.right1:hover{
   background-position:0 -1490px;
 }
</style>

