import{ah as n,o as m,s as d,w as t,a as o,u as a,H as c,d as e,g as f,n as p,l as u}from"./app-4d4cbe7d.js";import{B as _}from"./Button-7893ea7c.js";import{_ as w}from"./Guest-efbec85b.js";import{_ as b,a as h,b as x}from"./Label-ce134625.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-7e99a00b.js";const B=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(g){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(m(),d(w,null,{default:t(()=>[o(a(c),{title:"Confirm Password"}),B,o(b,{class:"mb-4"}),e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[o(h,{for:"password",value:"Password"}),o(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=l=>a(s).password=l),required:"",autocomplete:"off",autofocus:""},null,8,["modelValue"])]),e("div",V,[o(_,{class:p(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[f(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{z as default};
