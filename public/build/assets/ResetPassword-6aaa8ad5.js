import{m as u,p as f,w as d,o as c,b as o,u as e,H as _,d as r,k as w,n as V,e as b}from"./app-875b5ae4.js";import{B as k}from"./Button-dc28f95e.js";import{_ as v}from"./Guest-f97b6c95.js";import{_ as l,a as i}from"./Label-6b22e7d0.js";import{_ as B}from"./ValidationErrors-3c8c815a.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-c9ef20ed.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},g={class:"flex items-center justify-end mt-4"},F={__name:"ResetPassword",props:{email:String,token:String},setup(n){const m=n,s=u({token:m.token,email:m.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(c(),f(v,null,{default:d(()=>[o(e(_),{title:"Reset Password"}),o(B,{class:"mb-4"}),r("form",{onSubmit:b(p,["prevent"])},[r("div",null,[o(l,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),r("div",y,[o(l,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),required:"",autocomplete:"off"},null,8,["modelValue"])]),r("div",P,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),required:"",autocomplete:"off"},null,8,["modelValue"])]),r("div",g,[o(k,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:d(()=>[w(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{F as default};