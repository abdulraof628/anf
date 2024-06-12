import{o as n,c as _,d as t,a,w as m,u as s,L as w,y as h,x,s as i,H as g,t as y,q as u,g as c,n as v,l as k}from"./app-7998ab3f.js";import{B as V}from"./Button-9fc2dde7.js";import{_ as $}from"./Checkbox-90e5c1ab.js";import{_ as B}from"./ApplicationLogo-87bba962.js";import{_ as S,a as f,b as p}from"./ValidationErrors-ddbcbf09.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-indigo-200"},L={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},N={__name:"Guest",setup(l){return(e,d)=>(n(),_("div",q,[t("div",null,[a(s(w),{href:"/"},{default:m(()=>[a(B,{class:"w-32 fill-current text-gray-500"})]),_:1})]),t("div",L,[h(e.$slots,"default")])]))}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},j={class:"mt-4"},C={class:"mt-4 flex justify-between place-items-end"},F={class:""},P=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),R=t("div",{class:"border-b-2 mt-4"},null,-1),z={class:"mt-4"},E={class:"flex justify-end"},I={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=x({username:"",password:"",remember:!1}),d=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(b,o)=>(n(),i(N,null,{default:m(()=>[a(s(g),{title:"Log in"}),a(S,{class:"mb-4"}),l.status?(n(),_("div",U,y(l.status),1)):u("",!0),t("form",{onSubmit:k(d,["prevent"])},[t("div",null,[a(f,{for:"username",value:"Username or Email"}),a(p,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:s(e).username,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).username=r),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",j,[a(f,{for:"password",value:"Password"}),a(p,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"off"},null,8,["modelValue"])]),t("div",C,[t("label",F,[a($,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),P]),l.canResetPassword?(n(),i(s(w),{key:0,href:b.route("password.request"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:m(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):u("",!0)]),R,t("div",z,[t("div",E,[a(V,{type:"submit",buttonType:"info",class:v({"px-4 py-2":s(e).processing}),disabled:s(e).processing},{default:m(()=>[c(" Sign in ")]),_:1},8,["class","disabled"])])])],32)]),_:1}))}};export{I as default};
