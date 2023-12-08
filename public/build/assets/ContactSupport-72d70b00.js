import{q as c,s as p,o as f,c as _,p as b,m as g,w as d,b as s,u as a,H as V,d as l,k as v,n as w,e as x}from"./app-b4630a76.js";import{B as y}from"./Button-ecc2bb75.js";import{_ as k}from"./Guest-aadf287a.js";import{_ as B,a as i,b as n}from"./ValidationErrors-3ed80ebc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-8e3b2741.js";const $=["value"],h={__name:"Textarea",props:["modelValue"],emits:["update:modelValue"],setup(u){const e=c(null);return p(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(r,m)=>(f(),_("textarea",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:u.modelValue,onInput:m[0]||(m[0]=t=>r.$emit("update:modelValue",t.target.value)),ref_key:"input",ref:e},`\r
    `,40,$))}},q=["onSubmit"],N={class:"flex justify-between mb-3","data-intro":"Hello World!"},S={class:"mt-4 pr-2"},C={class:"mt-4"},U={class:"mt-4"},F={class:"flex items-center justify-end mt-4"},T={__name:"ContactSupport",setup(u){const e=b({first_name:"",last_name:"",email:"",message:""}),r=()=>{e.post(route("password.update"),{onFinish:()=>e.reset("password","password_confirmation")})};return(m,t)=>(f(),g(k,null,{default:d(()=>[s(a(V),{title:"Contact Support"}),s(B,{class:"mb-4"}),l("form",{onSubmit:x(r,["prevent"])},[l("div",N,[l("div",S,[s(i,{for:"first_name",value:"First Name"}),s(n,{id:"first_name",type:"text",class:"mt-1 block w-full",modelValue:a(e).first_name,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).first_name=o),required:""},null,8,["modelValue"])]),l("div",C,[s(i,{for:"last_name",value:"Last Name"}),s(n,{id:"last_name",type:"text",class:"mt-1 block w-full",modelValue:a(e).last_name,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).last_name=o),required:""},null,8,["modelValue"])])]),l("div",null,[s(i,{for:"email",value:"Email"}),s(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":t[2]||(t[2]=o=>a(e).email=o),required:"",autofocus:""},null,8,["modelValue"])]),l("div",U,[s(i,{for:"message",value:"Leave Your Message"}),s(h,{rows:"5",id:"message",type:"text",class:"mt-1 block w-full",modelValue:a(e).message,"onUpdate:modelValue":t[3]||(t[3]=o=>a(e).message=o),required:""},null,8,["modelValue"])]),l("div",F,[s(y,{class:w(["bg-indigo-600 hover:bg-indigo-800",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:d(()=>[v(" Submit ")]),_:1},8,["class","disabled"])])],40,q)]),_:1}))}};export{T as default};
