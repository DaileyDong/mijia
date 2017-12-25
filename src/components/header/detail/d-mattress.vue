<template>
  <div class="detail">
     <div class="container">
          <!--商品简介-->
          <div class="header clearfix">
            <div class="left">
              <div class="main">
                <img :src="pic" alt="">
              </div>
              <div class="thumb" @mouseover="over()" @mouseout="out()">
                <ul >
                  <li v-for="(t,i) in tips" :key="t.id"><img v-lazy="t.src" @click="secletClick(i)" :class="'p'+i" alt=""></li>
                </ul>
                <div class="thumb-up"  @click="clickup()"></div>
                <div class="thumb-down"  @click="clickdown()"></div>
              </div>
            </div>
            <div class="right">
                 <h3>{{name}} {{ratio}}</h3>
                 <h5>{{desc}}</h5>
                 <!--卡片-->
                 <div class="card">
                   <div class="price"><p>售价</p><span><i>￥</i>{{price|currencyFormat}}</span><s>{{oldPrice|currencyFormat}}</s></div>
                   <div class="server"><p>服务</p>
                   <div class="desc">
                     <span><i></i> 有品甄选精品</span>
                     <span><i></i> 限时免邮（活动期间）</span>
                     <p><i></i> {{sale}}</p>
                     </div></div>
                      <!--尺寸选择-->
                     <div class="size clearfix" >
                       <h5>尺寸选择</h5>
                       <div class="tag" v-for="(s,i) in size" :key="i" @click="clickon(i)">{{s}}</div>
                     </div>
                       <!--数量-->
                       <div class="count">
                          <h5>数量</h5>
                          <div class="input">
                            <div class="minus" @click="minus(value)"></div>
                            <input type="text" v-model="value"> 
                            <div class="add" @click="add(value)"></div>
                          </div>
                       </div>
                       <!--购物车-->
                       <div class="car ">
                          <div class="buy" @mouseover="buy()" @mouseout="buy1()"><router-link to="">立即购买</router-link> </div>
                          <div class="shopCar" ><router-link to="">加入购物车</router-link> </div>
                          <div class="good" @mouseover="good()" @mouseout="good1()"><router-link to=""><i></i><p>收藏</p></router-link></div>
                       </div>
                 </div>
            </div>
          </div>
          <!--内容介绍-->
          <div class="detailcontent">
            <div class="info">
              <!--标头-->
              <div class="nav-title">
                <ul class="info-nav clearfix">
                  <li v-for="(t,i) in title" :key="i" @click="clickContent(i)">{{t}}</li>
                </ul>
                <div class="nav-arr"></div>
              </div>

              <div class="main-body">
             <!--内容-->
                <div class="datail-img" v-for="(c,i) in contents" :key="i">
                  <img v-lazy="c.src" alt="">
                </div>
              <!--评论-->
                <div class="comment">
                  <div class="review">
                    <div class="no"></div>
                    <p>无相应数据</p>
                  </div>
                </div>
             <!--FAQ-->
                <div class="faq">
                     <div class="faq-img" v-for="(f,i) in faq" :key="i">
                       <img v-lazy="f.src" alt="">
                     </div>
                </div>
              </div>
            </div>
            <!--品牌-->
          <div class="best">
              <img src="../../../assets/images/8h.jpg" alt="">
               <div class="title-container">
                 <h6>{{companyName}}</h6>
                 <p>{{idea}}</p>
               </div>
               <div class="enter">
                 <router-link to="">进入</router-link>
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
      name:'8H乳胶弹簧床垫M3',
      desc:'20厘米厚度，独立袋装弹簧支撑，全面透气',
      pic: "/static/images/详情/top1.jpg",
      companyName:'成都趣睡科技有限公司',
      idea:'美好的一天从夜晚开始',
      sale:'成都趣睡科技有限公司发货并提供售后',
      value:1,
      tips: [
        { id: 1, src: "/static/images/详情/top1.jpg" },
        { id: 2, src: "/static/images/详情/top2.jpg" },
        { id: 3, src: "/static/images/详情/top3.jpg" },
        { id: 4, src: "/static/images/详情/top4.jpg" }
      ],
      size:[
        '1.2mx2m',
        '1.5mx2m', 
        '1.8mx2m'
      ],
      ratio:'',
      price:'1419.00',
      oldPrice:'',
      prices:[
        {new:1419.00,old:1599.00},
        {new:1619.00,old:1799.00},
        {new:1719.00,old:1899.00},
      ],
      title:['产品介绍','评论','FAQ'],
      contents:[
        {src:'/static/images/详情/js1.jpg'},
        {src:'/static/images/详情/js2.jpg'},
        {src:'/static/images/详情/js3.jpg'},
        {src:'/static/images/详情/js4.jpg'},
        {src:'/static/images/详情/js5.jpg'},
        {src:'/static/images/详情/js6.jpg'},
        {src:'/static/images/详情/js7.jpg'},
        {src:'/static/images/详情/js8.jpg'},
        {src:'/static/images/详情/js9.jpg'},
        {src:'/static/images/详情/js10.jpg'},
        {src:'/static/images/详情/js11.jpg'},
        {src:'/static/images/详情/js12.jpg'},
        {src:'/static/images/详情/js13.jpg'},
        {src:'/static/images/详情/js14.jpg'},
        {src:'/static/images/详情/js15.jpg'},
        {src:'/static/images/详情/js16.jpg'},
        {src:'/static/images/详情/js17.jpg'}
      ],
      faq:[
        {src:'/static/images/详情/faq1.jpg'},
        {src:'/static/images/详情/faq2.jpg'},
        {src:'/static/images/详情/faq3.jpg'},
        {src:'/static/images/详情/faq4.jpg'},
        {src:'/static/images/详情/faq5.jpg'},
        {src:'/static/images/详情/faq6.jpg'},
        {src:'/static/images/详情/faq7.jpg'},
        {src:'/static/images/详情/faq8.jpg'}
      ]
    };
  },
  methods: {
    over() {
      $(".thumb-up").css("display", "block");
      $(".thumb-down").css("display", "block");
    },
    out() {
      $(".thumb-up").css("display", "none");
      $(".thumb-down").css("display", "none");
    },
    clickup() {},
    clickdown() {},
    secletClick(i) {
      this.pic = this.tips[i].src;
      $("ul li img").css("border", "none");
      if (i == 0) {
        $(".p0").css("border", "1px solid #845f3f");
      } else if (i != 0) {
        $(`.p${i}`).css("border", "1px solid #845f3f");
      }
    },
    buy(){
      $('.buy').css('backgroundColor','#845f3f');
      $('.buy a').css('color','#fff');
    },
    buy1(){
      $('.buy').css('backgroundColor','#fff');
      $('.buy a').css('color','#845f3f');
    },
    good(){
      $('.good').css('backgroundColor','#845f3f')
      $('.good a i').css('backgroundPosition','0 -1184px');
      $('.good a p').css('color','#fff')
    },
    good1(){
      $('.good').css('backgroundColor','#fff')
      $('.good a i').css('backgroundPosition','0 -674px');
       $('.good a p').css('color','#999')
    },
    clickon(i){
     this.ratio=this.size[i];
     $('.tag').css('color','#333').css('border','1px solid #d6d6d6')
     var num=i+1
     $('.tag:nth-of-type('+num+')').css('color','#845f3f').css('border','1px solid #845f3f');
     this.price=this.prices[i]['new'];
     this.oldPrice='￥'+this.prices[i]['old'];
     $('.add').css('backgroundPosition','0 -980px')
    },
    clickContent(i){
        $('.datail-img').css('display','none');
        $('.comment').css('display','none');
        $('.faq').css('display','none');
      if(i==0){
       $('.nav-arr').css('transform','translate(0,0)');
      $('.datail-img').css('display','block')
      }else if(i==1){
       $('.nav-arr').css('transform','translate(128px,0)');
      $('.comment').css('display','block')
      }else if(i=2){
       $('.nav-arr').css('transform','translate(256px,0)');
      $('.faq').css('display','block')
      }
    },
    minus(value){
     value-=1
     $('.add').css('backgroundPosition','0 -980px')
     if(value<=1){
      this.value=1;
      $('.minus').css('backgroundPosition','0 -1320px')
    }else{
      this.value=value;
      $('.minus').css('backgroundPosition','0 -1286px')
    }
    },
    add(value){
     value+=1;
      $('.minus').css('backgroundPosition','0 -1286px')
     if(value>=5){
     this.value=5;
      $('.add').css('backgroundPosition','0 -708px');

     }else{
       this.value=value;
     }
    }
  },
  mounted(){
     //?判断是否选择尺寸
   
     
    
   
   
     //获取浮动
      $(window).scroll(function(){
        var winPos = $(window).scrollTop();
           if(winPos>=766){
             $('.nav-title').addClass('fixed');
         
           }else if(winPos<766){
             $('.nav-title').removeClass('fixed');
           }
    });
    
  }
  // mounted(){
  //   $('.datail-img:nth-child('+6+') img').click(function(){
  //     var audio=document.createElement('audio');
  //     var source=document.createElement('source');
  //     var img=$('.datail-img:nth-child('+6+') img');
  //     console.log(img)
  //     audio.appendChild(source)
  //     img.appendChild(audio)
  //     $('source').attr('src','https://cdn.cnbj0.fds.api.mi-img.com/miio.files/static/video/shop_762dd391337c84e59edec006b17161ca.mp4')
  //   })
  // }
};
 
</script>
<style scoped>
.detail {
  margin-top: 10px;
  padding-top: 60px;
  border-top: 1px solid #e7e7e7;
}
.container {
  position: relative;
  margin: 0 auto;
  width: 1080px;
  overflow: hidden;
}
.header {
  position: relative;
  margin-bottom: 67px;
}
.header .left {
  float: left;
  margin-right: 46px;
  width: 465px;
  height: 433px;
}
.header .left .main {
  position: relative;
  width: 366px;
  height: 431px;
  margin-right: 10px;
  border: 1px solid #ececec;
}
.header .left .thumb {
  position: relative;
  top:-433px;
  left: 380px;
  width: 85px;
  height: 431px;
}
.thumb ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.thumb .thumb-up {
  position: absolute;
  top: 1px;
  left: 2px;
  height: 12px;
  width: 83px;
  display: none;
  background-image: url("../../../assets/images/icon.png");
  background-position: 0 -157px;
  cursor: pointer;
}
.thumb .thumb-down {
  position: absolute;
  bottom: -2px;
  left: 2px;
  height: 12px;
  width: 83px;
  display: none;
  background-image: url("../../../assets/images/icon.png");
  background-position: 0 -217px;
  cursor: pointer;
}
.thumb ul li {
  margin: 0;
  padding: 0;
  width: 83px;
  height: 98px;
  margin-bottom: 11px;
  border: 1px solid #ececec;
  cursor: pointer;
}
.thumb ul li img {
  height: 100%;
  width: 100%;
}
.thumb ul li:first-child img {
  border: 1px solid #845f3f;
}

.header .right {
  position: relative;
  float: left;
  width: 561px;
  height: 400px;
}
h3,
h5 {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
.right h3 {
  color: #333;
}
.right h5 {
  margin-top: 5px;
  color: #999;
}
.card {
  position: absolute;
  margin-top: 16px;
  height: 141px;
  width: 561px;
  background-color: #f9f9f9;
}
.card .price {
  margin-top: 12px;
  margin-bottom: 12px;
  height: 36px;
  line-height: 36px;
  width: 561px;
}
.card .price p,
.server p {
  font-size: 12px;
  color: #333;
  margin: 0;
  padding: 0;
  margin-left: 5px;
  display: inline-block;
}
.card .price span {
  margin-left: 20px;
  font-weight: normal;
  font-size: 30px;
  color: #c00000;
}
.card .price span i {
  font-style: normal;
  font-size: 14px;
}
.card .price s {
  font-size: 12px;
  margin-left: 14px;
  color: #ccc;
}

.card .server {
  position: relative;
  height: 48px;
  width: 561px;
}
.server p {
  margin-top: 15px;
}
.server .desc {
  position: absolute;
  top: 10px;
  margin-left: 30px;
  display: inline-block;
}
.server .desc span {
  margin-right: 5px;
  font-size: 16px;
  color: #333;
}
.server .desc span i {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url("../../../assets/images/icon.png");
  background-position: 0 -195px;
  cursor: pointer;
}

.server .desc p {
  display: block;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #333;
}
.server .desc p i {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url("../../../assets/images/icon.png");
  background-position: 0 -195px;
  cursor: pointer;
}

.size{
  position: relative;
  top: 50px;
  margin-right:10px;
}
.size h5{
 color: #333;
  float: left;
  line-height: 30px;
  margin-right:14px;
 font-size: 12px;
}
.size .tag{
  float: left;
  font-size: 14px;
  color: #333;
  line-height:28px;
  margin-right: 10px;
  padding:4px 20px;
  cursor: pointer;
  border: 1px solid #d6d6d6;
}
.tags{
  color: #845f3f;
  border: 1px solid #845f3f;
}
.count{
  position: absolute;
  top:210px;
  left: 0;
}
.count h5{
  color: #333;
  font-size: 14px;
  line-height: 30px;
  display: inline-block;
}
.count .input{
   position: absolute;
   left: 62px;
   top: 0;
   box-sizing: border-box;
}
.input input{
  position: absolute;
  left: 32.8px;
  width: 60px;
  height: 30px;
  border: 1px solid #d6d6d6;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  padding: 0;
  text-align: center;
}
 .input .minus{
   position: absolute;
   display: inline-block;
   width: 30px;
   height: 30px;
   left: 1px;
   border: 1px solid #d6d6d6;
   background-image: url('../../../assets/images/icon.png');
   background-position: 0 -1320px;
   cursor: pointer;
 }
.input .add{
  position: absolute;
  left:93px;
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #d6d6d6;
  background-image: url('../../../assets/images/icon.png');
  background-position: 0 -708px;
  cursor: pointer;
}
a{
  text-decoration: none;
}

.car{
  position: relative;
  top: 150px;
}
.car .buy{
  position: absolute;
  height: 52px;
  width: 167px;
  left: 0;
  top: 30px;
  text-align: center;
  line-height: 52px;
  border: 1px solid #845f3f;
  border-radius: 3px;
  cursor: pointer;
}
.car .buy a{
  text-decoration: none;
  font-size: 20px;
  color: #845f3f;
}

.car .shopCar{
position: absolute;
  height: 52px;
   top: 30px;
  width: 167px;
  text-align: center;
  line-height: 52px;
  left:200px;
  border: 1px solid #845f3f;
  background-color: #845f3f;
  border-radius: 3px;
  cursor: pointer;
}
.car .shopCar:hover{
  opacity: 0.7;
}
.car .shopCar a{
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}
.car .good{
 position: absolute;
 left: 400px;
 height: 52px;
 top: 30px;
 width: 52px;
 text-align: center;
 border: 1px solid #ccc;
 border-radius: 3px;
}
.good a i{
  display: inline-block;
 width: 30px;
 height: 30px;
  background-image: url('../../../assets/images/icon.png');
  background-position: 0 -674px;
}
.good a p{
  margin: 0;
  padding: 0;
  margin-top: -5px;
  font-size: 12px;
  color: #999;
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

.detailcontent {
  position: relative;
  margin-bottom: 50px;
}
.detailcontent .info{
  width: 774px;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
li{
  padding: 0;
  margin: 0;
}
.nav-title{
  background-color: #e7e7e7;
  height: 44px;
  width: 774px;
}
.info-nav{
  height: 13px;
  line-height: 13px;
 padding: 16px 0 13px;
}
.info-nav li{
  float: left;
  width: 128px;
  height: 13px;
  color: #333;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid rgb(204, 204, 204);
}
.info-nav li:hover{
  color: #845f3f;

}
.info-nav li:last-child{
  border-right: none;
}
.nav-arr{
  position: relative;
  height: 2px;
  width: 128px;
  border-top: 2px solid #845f3f;
  transition:all 0.2s ease;
  transform: translate(0,0)
}
.main-body{
  height: 100%;
}

.datail-img img{
  height: 100%;
  width: 774px;
  display: block;
}
.comment{
  position: relative;
  margin-top: 20px;
  height:600px;
  display: none;
}
.review{
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -120px -76.5px;
   width: 153px;
   height: 175px;
   text-align: center;
}
.review .no{
  width: 153px;
  height: 132px;
  background-size: 100%;
  background-image: url('/static/images/详情/no.png');
}
.faq{
  display: none;
  width: 774px;
  height: 100%;
}
.faq-img img{
  width: 100%;
  height: auto;
  display: block;
}
.best{
  position: absolute;
  right: 0;
  top: 0;
  width: 262px;
  height: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e7e7e7;
}
.best img{
  width: 30px;
  height: 30px;
}
.best .title-container{
  position: absolute;
  height: 32px;
  padding: 0;
  margin-left: 10px;
  line-height: 15px;
  display: inline-block;
}
.best .title-container h6{
   margin:0;
  padding: 0;
  display: inline-block;
  color: #333;
 font-size: 14px;
 font-weight: normal;
}
.best .title-container p{
  margin:0;
  padding: 0;
  color: #333;
font-size: 12px;
}
.best .enter{
  position: absolute;
  right: 0;
  display: inline-block;
  width: 48px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #845f3f;
  border-radius: 3px;
}
.best .enter a{
  color: #fff;
}
.best .enter:hover{
  opacity: 0.7;
}
.fixed{
  position:fixed;
  left:50%;
  margin-left:-540px; 
   top:0
}
</style>
