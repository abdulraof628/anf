import{s as l,o as m,q as d,w as t,a as o,u as a,H as c,d as e,g as f,n as p,k as u}from"./app-71252861.js";import{B as _}from"./Button-5b3f2f5d.js";import{_ as w}from"./Guest-db2169d8.js";import{_ as b,a as x,b as h}from"./ValidationErrors-b5433ae4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-15de067f.js";const B=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(g){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(m(),d(w,null,{default:t(()=>[o(a(c),{title:"Confirm Password"}),B,o(b,{class:"mb-4"}),e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[o(x,{for:"password",value:"Password"}),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>a(s).password=n),required:"",autocomplete:"off",autofocus:""},null,8,["modelValue"])]),e("div",V,[o(_,{class:p(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[f(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{q as default};
