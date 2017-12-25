import http from './public.js'
//登录
export const userLogin=(params)=>{
    return http.fetchPost('/user/login',params)
}
//注册
export const register=(params)=>{
    return http.fetchPost('/user/register',params)
}