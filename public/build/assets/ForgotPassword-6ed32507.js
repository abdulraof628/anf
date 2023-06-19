import{m as f,p as _,w as a,o as n,a as s,u as t,H as p,c as h,t as w,h as x,b as e,i as m,n as b,L as d,d as g}from"./app-e501deca.js";import{B as y}from"./Button-c51487b6.js";import{_ as k}from"./Guest-035b6f3e.js";import{_ as v,a as B,b as V}from"./ValidationErrors-1aca10b1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-c140f20f.js";const S=e("div",{class:"mb-4 text-sm text-gray-600"}," Please enter your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),C={key:0,class:"mb-4 font-medium text-sm text-green-600"},L=["onSubmit"],z={class:"mb-3"},M={class:"flex mb-3 text-right justify-between items-center"},N=e("div",{class:"border-b-2 my-4"},null,-1),P={class:"flex justify-center"},$=e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-indigo-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"})]),e("span",{class:"text-xs"},"Contact Support")],-1),R={__name:"ForgotPassword",props:{status:String},setup(r){const o=f({user_email:""}),c=()=>{o.post(route("password.email"))};return(i,l)=>(n(),_(k,null,{default:a(()=>[s(t(p),{title:"Forgot Password"}),S,r.status?(n(),h("div",C,w(r.status),1)):x("",!0),s(v,{class:"mb-4"}),e("form",{onSubmit:g(c,["prevent"])},[e("div",z,[s(B,{for:"email",value:"Email"}),s(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(o).user_email,"onUpdate:modelValue":l[0]||(l[0]=u=>t(o).user_email=u),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),e("div",M,[s(y,{type:"submit",class:b({"opacity-25":t(o).processing}),disabled:t(o).processing},{default:a(()=>[m(" Send Password Reset Link ")]),_:1},8,["class","disabled"]),s(t(d),{href:i.route("login"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:a(()=>[m(" Back to Login ")]),_:1},8,["href"])]),N,e("div",P,[s(t(d),{href:i.route("contact.support")},{default:a(()=>[$]),_:1},8,["href"])])],40,L)]),_:1}))}};export{R as default};
