import{x as f,o as p,s as c,w as i,a as s,u as o,H as _,d as t,g as d,L as w,n as V,l as v}from"./app-738f226e.js";import{B as b}from"./Button-dbbe15cb.js";import{_ as g}from"./Guest-df940cff.js";import{_ as x,a as r,b as m}from"./ValidationErrors-94084368.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-d52f56f9.js";const y={class:"mt-4"},k={class:"mt-4"},B={class:"mt-4"},U={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},H={__name:"Register",setup(N){const e=f({name:"",username:"",email:"",password:"",password_confirmation:"",terms:!1}),n=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(u,a)=>(p(),c(g,null,{default:i(()=>[s(o(_),{title:"Register"}),s(x,{class:"mb-4"}),t("form",{onSubmit:v(n,["prevent"])},[t("div",null,[s(r,{for:"name",value:"Name"}),s(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>o(e).name=l),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",y,[s(r,{for:"username",value:"Username"}),s(m,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:o(e).username,"onUpdate:modelValue":a[1]||(a[1]=l=>o(e).username=l),required:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",k,[s(r,{for:"email",value:"Email"}),s(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(e).email,"onUpdate:modelValue":a[2]||(a[2]=l=>o(e).email=l),required:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",B,[s(r,{for:"password",value:"Password"}),s(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(e).password,"onUpdate:modelValue":a[3]||(a[3]=l=>o(e).password=l),required:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",U,[s(r,{for:"password_confirmation",value:"Confirm Password"}),s(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(e).password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=l=>o(e).password_confirmation=l),required:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",q,[s(o(w),{href:u.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[d(" Already registered? ")]),_:1},8,["href"]),s(b,{class:V(["ml-4",{"opacity-25":o(e).processing}]),disabled:o(e).processing},{default:i(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{H as default};