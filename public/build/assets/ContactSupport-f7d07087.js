import{y as c,z as p,o as f,c as _,s as g,q as V,w as d,a as s,u as a,H as b,d as l,g as v,n as w,k as x}from"./app-71252861.js";import{B as y}from"./Button-5b3f2f5d.js";import{_ as k}from"./Guest-db2169d8.js";import{_ as B,a as r,b as u}from"./ValidationErrors-b5433ae4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-15de067f.js";const $=["value"],q={__name:"Textarea",props:["modelValue"],emits:["update:modelValue"],setup(n){const e=c(null);return p(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(i,m)=>(f(),_("textarea",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:n.modelValue,onInput:m[0]||(m[0]=t=>i.$emit("update:modelValue",t.target.value)),ref_key:"input",ref:e},`\r
    `,40,$))}},N={class:"flex justify-between mb-3","data-intro":"Hello World!"},h={class:"mt-4 pr-2"},C={class:"mt-4"},S={class:"mt-4"},U={class:"flex items-center justify-end mt-4"},L={__name:"ContactSupport",setup(n){const e=g({first_name:"",last_name:"",email:"",message:""}),i=()=>{e.post(route("password.update"),{onFinish:()=>e.reset("password","password_confirmation")})};return(m,t)=>(f(),V(k,null,{default:d(()=>[s(a(b),{title:"Contact Support"}),s(B,{class:"mb-4"}),l("form",{onSubmit:x(i,["prevent"])},[l("div",N,[l("div",h,[s(r,{for:"first_name",value:"First Name"}),s(u,{id:"first_name",type:"text",class:"mt-1 block w-full",modelValue:a(e).first_name,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).first_name=o),required:""},null,8,["modelValue"])]),l("div",C,[s(r,{for:"last_name",value:"Last Name"}),s(u,{id:"last_name",type:"text",class:"mt-1 block w-full",modelValue:a(e).last_name,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).last_name=o),required:""},null,8,["modelValue"])])]),l("div",null,[s(r,{for:"email",value:"Email"}),s(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":t[2]||(t[2]=o=>a(e).email=o),required:"",autofocus:""},null,8,["modelValue"])]),l("div",S,[s(r,{for:"message",value:"Leave Your Message"}),s(q,{rows:"5",id:"message",type:"text",class:"mt-1 block w-full",modelValue:a(e).message,"onUpdate:modelValue":t[3]||(t[3]=o=>a(e).message=o),required:""},null,8,["modelValue"])]),l("div",U,[s(y,{class:w(["bg-indigo-600 hover:bg-indigo-800",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:d(()=>[v(" Submit ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{L as default};
