import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Home from '../pages/home/Home'
import Discounts from '../pages/header/Discounts'
import Phone from '../pages/header/Phone'
import Living from '../pages/header/Living'
import Costumes from '../pages/header/Costumes'
import Kits from '../pages/header/Kits'
import Avs from '../pages/header/Avs'
import Homeapp from '../pages/header/Homeapp'
import Diets from '../pages/header/Diets'
import Health from '../pages/header/Health'
import Toiletries from '../pages/header/Toiletries'
import Za from '../pages/header/Za'
import Noopsyche from '../pages/header/Noopsyche'
import Bags from '../pages/header/Bags'
import Parts from '../pages/header/Parts'
import Babys from '../pages/header/Babys'
import Trip from '../pages/header/Trip'
import Brands from '../pages/header/Brands'

import MattressDetail from '../pages/header/detail/mattressDetail'
import Login from '../pages/login-register/login'
import Loginout from '../pages/login-register/login'
import QrcodeLogin from '../pages/login-register/qrcodeLogin'
import Register from '../pages/login-register/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/home',
      children:[
        {path:'home',
        component:Home}
      ]
    },
    {
      path:'/discounts',
      name:'Discounts',
      component: Discounts,
      children:[
      ]
    },
    {
      path:'/mattressDetail',
      name:'MattressDetail',
      component:MattressDetail
    },
    {
      path:'/phone',
      name:'Phone',
      component:Phone
    },
    {
      path:'/living',
      name:'Living',
      component:Living
    },
    {
      path:'/costumes',
      name:'Costumes',
      component:Costumes
    },
    {
      path:'/kits',
      name:'Kits',
      component:Kits
    },
    {
      path:'/avs',
      name:'Avs',
      component:Avs
    },
    {
      path:'/homeapp',
      name:'Homeapp',
      component:Homeapp
    },
    {
      path:'/diets',
      name:'Diets',
      component:Diets
    },
    {
      path:'/health',
      name:'Health',
      component:Health
    },
    {
      path:'/toiletries',
      name:'Toiletries',
      component:Toiletries
    },
    {
      path:'/za',
      name:'Za',
      component:Za
    },
    {
      path:'/noopsyche',
      name:'Noopsyche',
      component:Noopsyche
    },
    {
      path:'/bags',
      name:'Bags',
      component:Bags
    },
    {
      path:'/parts',
      name:'Parts',
      component:Parts
    },
    {
      path:'/babys',
      name:'Babys',
      component:Babys
    },
    {
      path:'/trip',
      name:'Trip',
      component:Trip
    },
    {
      path:'/brands',
      name:'Brands',
      component:Brands
    },
  {
    path:"/login",
    name:"Login",
    component:Login
  },
  {
    path:"/qrcodeLogin",
    name:"QrcodeLogin",
    component:QrcodeLogin
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path:'/loginout',
    name:'Loginout',
    component:Loginout
  }
  ]
})
