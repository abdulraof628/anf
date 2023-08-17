<<<<<<< HEAD:public/build/assets/ForgotPassword-bef25d96.js
import{m as f,p as _,w as a,o as n,b as t,u as s,H as p,c as w,t as h,j as x,d as e,k as m,n as g,L as d,e as b}from"./app-05a13f32.js";import{B as k}from"./Button-18ee2f20.js";import{_ as y}from"./Guest-b1019436.js";import{_ as v,a as B}from"./Label-e0dc1bbe.js";import{_ as V}from"./ValidationErrors-d843ddb0.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-c397ffdd.js";const S=e("div",{class:"mb-4 text-sm text-gray-600"}," Please enter your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),C={key:0,class:"mb-4 font-medium text-sm text-green-600"},L=["onSubmit"],j={class:"mb-3"},z={class:"flex mb-3 text-right justify-between items-center"},M=e("div",{class:"border-b-2 my-4"},null,-1),N={class:"flex justify-center"},P=e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-indigo-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"})]),e("span",{class:"text-xs"},"Contact Support")],-1),U={__name:"ForgotPassword",props:{status:String},setup(r){const o=f({user_email:""}),c=()=>{o.post(route("password.email"))};return(i,l)=>(n(),_(y,null,{default:a(()=>[t(s(p),{title:"Forgot Password"}),S,r.status?(n(),w("div",C,h(r.status),1)):x("",!0),t(V,{class:"mb-4"}),e("form",{onSubmit:b(c,["prevent"])},[e("div",j,[t(v,{for:"email",value:"Email"}),t(B,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(o).user_email,"onUpdate:modelValue":l[0]||(l[0]=u=>s(o).user_email=u),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),e("div",z,[t(k,{type:"submit",class:g({"opacity-25":s(o).processing}),disabled:s(o).processing},{default:a(()=>[m(" Send Password Reset Link ")]),_:1},8,["class","disabled"]),t(s(d),{href:i.route("login"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:a(()=>[m(" Back to Login ")]),_:1},8,["href"])]),M,e("div",N,[t(s(d),{href:i.route("contact.support")},{default:a(()=>[P]),_:1},8,["href"])])],40,L)]),_:1}))}};export{U as default};
=======
import{m as f,p as _,w as a,o as n,b as t,u as s,H as p,c as w,t as h,j as x,d as e,k as m,n as g,L as d,e as b}from"./app-5b70941e.js";import{B as k}from"./Button-7003fb3f.js";import{_ as y}from"./Guest-0727a11a.js";import{_ as v,a as B}from"./Label-f8966dd9.js";import{_ as V}from"./ValidationErrors-63b04435.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-9bc665dc.js";const S=e("div",{class:"mb-4 text-sm text-gray-600"}," Please enter your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),C={key:0,class:"mb-4 font-medium text-sm text-green-600"},L=["onSubmit"],j={class:"mb-3"},z={class:"flex mb-3 text-right justify-between items-center"},M=e("div",{class:"border-b-2 my-4"},null,-1),N={class:"flex justify-center"},P=e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-indigo-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"})]),e("span",{class:"text-xs"},"Contact Support")],-1),U={__name:"ForgotPassword",props:{status:String},setup(r){const o=f({user_email:""}),c=()=>{o.post(route("password.email"))};return(i,l)=>(n(),_(y,null,{default:a(()=>[t(s(p),{title:"Forgot Password"}),S,r.status?(n(),w("div",C,h(r.status),1)):x("",!0),t(V,{class:"mb-4"}),e("form",{onSubmit:b(c,["prevent"])},[e("div",j,[t(v,{for:"email",value:"Email"}),t(B,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(o).user_email,"onUpdate:modelValue":l[0]||(l[0]=u=>s(o).user_email=u),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),e("div",z,[t(k,{type:"submit",class:g({"opacity-25":s(o).processing}),disabled:s(o).processing},{default:a(()=>[m(" Send Password Reset Link ")]),_:1},8,["class","disabled"]),t(s(d),{href:i.route("login"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:a(()=>[m(" Back to Login ")]),_:1},8,["href"])]),M,e("div",N,[t(s(d),{href:i.route("contact.support")},{default:a(()=>[P]),_:1},8,["href"])])],40,L)]),_:1}))}};export{U as default};
>>>>>>> c2a0a3e40d6ac2430ee69da9f02369948867e972:public/build/assets/ForgotPassword-9fdae956.js
