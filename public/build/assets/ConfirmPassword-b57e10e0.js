import{u as m,c as d,w as r,o as l,a as o,b as a,H as c,d as e,e as f,n as u,f as p}from"./app-825cb09d.js";import{B as _}from"./Button-5cb0f01e.js";import{_ as w}from"./Guest-aa8ad474.js";import{_ as b,a as h,b as x}from"./ValidationErrors-7bb6041b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-47fe7a8e.js";const B=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},F={__name:"ConfirmPassword",setup(y){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,t)=>(l(),d(w,null,{default:r(()=>[o(a(c),{title:"Confirm Password"}),B,o(b,{class:"mb-4"}),e("form",{onSubmit:p(i,["prevent"])},[e("div",null,[o(h,{for:"password",value:"Password"}),o(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":t[0]||(t[0]=n=>a(s).password=n),required:"",autocomplete:"off",autofocus:""},null,8,["modelValue"])]),e("div",v,[o(_,{class:u(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[f(" Confirm ")]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{F as default};
