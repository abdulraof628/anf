import{m as f,p,w as i,o as c,a as s,u as o,H as _,b as l,i as d,L as w,n as V,d as v}from"./app-ab7df90b.js";import{B as b}from"./Button-56617bbb.js";import{_ as g}from"./Guest-d314296f.js";import{_ as r,a as m}from"./Label-d51008cc.js";import{_ as y}from"./ValidationErrors-31055ebe.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-187e3638.js";const x=["onSubmit"],k={class:"mt-4"},B={class:"mt-4"},U={class:"mt-4"},q={class:"mt-4"},N={class:"flex items-center justify-end mt-4"},S={__name:"Register",setup($){const e=f({name:"",username:"",email:"",password:"",password_confirmation:"",terms:!1}),n=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(u,a)=>(c(),p(g,null,{default:i(()=>[s(o(_),{title:"Register"}),s(y,{class:"mb-4"}),l("form",{onSubmit:v(n,["prevent"])},[l("div",null,[s(r,{for:"name",value:"Name"}),s(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=t=>o(e).name=t),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),l("div",k,[s(r,{for:"username",value:"Username"}),s(m,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:o(e).username,"onUpdate:modelValue":a[1]||(a[1]=t=>o(e).username=t),required:"",autocomplete:"off"},null,8,["modelValue"])]),l("div",B,[s(r,{for:"email",value:"Email"}),s(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(e).email,"onUpdate:modelValue":a[2]||(a[2]=t=>o(e).email=t),required:"",autocomplete:"off"},null,8,["modelValue"])]),l("div",U,[s(r,{for:"password",value:"Password"}),s(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(e).password,"onUpdate:modelValue":a[3]||(a[3]=t=>o(e).password=t),required:"",autocomplete:"off"},null,8,["modelValue"])]),l("div",q,[s(r,{for:"password_confirmation",value:"Confirm Password"}),s(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(e).password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=t=>o(e).password_confirmation=t),required:"",autocomplete:"off"},null,8,["modelValue"])]),l("div",N,[s(o(w),{href:u.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[d(" Already registered? ")]),_:1},8,["href"]),s(b,{class:V(["ml-4",{"opacity-25":o(e).processing}]),disabled:o(e).processing},{default:i(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{S as default};
