<template>
  <div class="discounts">
    <div class="container">

      <div class="nav">
       <span><router-link to="/">首页 ></router-link></span><i> {{this.$route.query.title}}</i>
      </div>

      <!--特惠-->
      <div class="dis">
        <div class="title">特惠</div>
        <div class="pic clearfix"> 
          <ul class="pp">
            <li v-for="d in disGoods" :key="d.id"><router-link :to="d.url"><img v-lazy="d.src" alt="">
           <section class="name"><strong>{{d.title}}</strong><p>{{d.desc}}</p><i>￥{{d.price}}起</i></section></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
      disGoods:[
        {id:1,url:'mattressDetail',src:'/static/images/特惠/cd.jpg',title:'8H乳胶弹簧静音床垫M3',desc:'20厘米厚度，独立袋装弹簧支撑...',price:1419},
        {id:2,url:'shirtDetail',src:'/static/images/特惠/tship.jpg',title:'90分抗菌短袖T恤 (2件装)',desc:'长效抗菌，透湿易干，柔滑舒适',price:59},
        {id:3,url:'wineDetail',src:'/static/images/特惠/hj.jpg',title:'One Wine 婉爱美乐干红葡萄酒 ...',desc:'【预售 11月7日开始发货】千次...',price:129},
        {id:4,url:'tv4Detail',src:'/static/images/特惠/tv4.jpg',title:'小米电视4 55英寸',desc:'【赠青米智能插座,电视与赠品分...',price:3499},
        {id:5,url:'tv4a-55Detail',src:'/static/images/特惠/tv4a.png',title:'小米电视4A 55英寸',desc:'【赠青米智能插座,电视与赠品分...',price:2349},
        {id:6,url:'tv4a-32Detail',src:'/static/images/特惠/32.jpg',title:'小米电视4A 32英寸',desc:'【赠青米智能插座,电视与赠品分...',price:849},
        {id:7,url:'pcDetail',src:'/static/images/特惠/pc.jpg',title:'小米笔记本Pro15.6',desc:'【8G 256G版本1号0点准时开抢！...',price:5599},
        {id:8,url:'h1Detail',src:'/static/images/特惠/jm.jpg',title:'极米H1家用智能投影',desc:'1080P高清投影，直投6米不失真',price:3699},
        {id:9,url:'z4Detail',src:'/static/images/特惠/z4.jpg',title:'极米Z4X家用智能投影',desc:'6米宽巨屏，3D手势操作',price:2299},
        {id:10,url:'1moreDetail',src:'/static/images/特惠/1more.jpg',title:'1MORE运动蓝牙耳机',desc:'聆听自由，随型跃动，享受CD级...',price:299},
        {id:11,url:'wokDetail',src:'/static/images/特惠/guo.jpg',title:'无涂层健康不锈钢炒锅',desc:'三层复合锅体，物理不粘',price:279},
        {id:12,url:'coffeemakerDetail',src:'/static/images/特惠/kfj.jpg',title:'心想胶囊咖啡机',desc:'简单易用，快速萃取，9档浓度预...',price:469},
        {id:13,url:'toothbrushDetail',src:'/static/images/特惠/ys.jpg',title:'素士声波电动牙刷 白金版',desc:'声波级洁齿，全新升级动力更强...',price:259},
        {id:14,url:'lampDetail',src:'/static/images/特惠/d.jpg',title:'Yeelight皎月LED智能吸顶灯',desc:'大尺寸发光面，1600万色氛围光...',price:449},
      ],
    }
  },
  mounted(){
    
    $('.a0 a').css('color','#845f3f');
    $('.a0').css('border-bottom','2px solid #845f3f')
  }
}
</script>
<style scoped>
.discounts{
  position: relative;
  margin-top: 5px;
  background-color: #f2f2f2;
}
.discounts .container{
  margin:0px auto;
  width: 1080px;
}
.nav{
  position: relative;
  padding-top: 20px;
}
.nav i{
  color: #999;
  font-size: 13px;
  font-style: normal;
}
.nav i:hover{
  color:#845f3f;
  cursor:default;
}
.nav span a{
  text-decoration: none;
  color: #000;
  font-size: 13px;
}
.nav span a:hover{
  color: #845f3f;
}
.dis{
  position: relative;
  margin-top: 50px;
  bottom: 30px;
}
li{
  padding: 0;
  margin: 0;
  list-style: none;
}
.dis .title{
  font-size: 24px;
  color: #333;
}
.dis .pic{
  position: relative;
  margin-top: 10px;
}
.dis .pic .pp{
  margin: 0;
  padding: 0;
  margin-right: 5px;
}
 .pp li{
  position: relative;
  float: left;
  margin: 0;
  padding: 0;
  width: 263px;
  height: 291px;
  margin-top: 5px;
  margin-right: 5px;
  text-align: center;
  background-color: #fff;
 }

 .pp li:hover{
   transform: translate(0,-5px);
   box-shadow: 0 0 5px 3px #ccc;
   transition: all ease 0.3s;
 }
 a{
   text-decoration: none;
   color: #000;
   margin: 0;
   padding: 0;
 }
 .pp li a{
  height: 291px;
  width: 266px;
 }
 .pp li a .name strong{
   font-weight: normal;
   margin: 0;
   color: #333;
   font-size: 16px;
   margin-top: 15px;
   display: inline-block;
   padding: 0;
 }
 .pp li a .name p{
   margin: 0;
   margin-top: 5px;
   padding: 0;
   font-size: 14px;
   color: #999;
 }
 .pp li a .name i{
   font-style: normal;
   display: inline-block;
   margin: 0;
   padding: 0;
   margin-top:5px;
   font-size: 14px;
   color: #c00000;
 }
 .pp li a img{
  display: block;
  margin-left: 35px;
 height: 195px;
 width: 195px;
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
</style>

