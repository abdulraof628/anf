import{j as g,k as y,v as k,b as s,o as d,h as b,l as w,u as x,c as m,w as u,a as r,H as v,t as V,i as c,d as o,L as B,e as p,n as C,f as $}from"./app-825cb09d.js";import{B as S}from"./Button-5cb0f01e.js";import{_ as U}from"./Guest-aa8ad474.js";import{_ as L,a as f,b as _}from"./ValidationErrors-7bb6041b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-47fe7a8e.js";const N=["value"],R={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=g({get(){return i.checked},set(t){e("update:checked",t)}});return(t,a)=>y((d(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":a[0]||(a[0]=h=>w(n)?n.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,N)),[[k,s(n)]])}},j={key:0,class:"mb-4 font-medium text-sm text-green-600"},q=["onSubmit"],F={class:"mt-4"},P={class:"mt-4 flex justify-between place-items-end"},z={class:""},D=o("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),E=o("div",{class:"border-b-2 mt-4"},null,-1),H={class:"mt-4"},M={class:"flex justify-end"},O={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=x({username:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),m(U,null,{default:u(()=>[r(s(v),{title:"Log in"}),r(L,{class:"mb-4"}),l.status?(d(),b("div",j,V(l.status),1)):c("",!0),o("form",{onSubmit:$(i,["prevent"])},[o("div",null,[r(f,{for:"username",value:"Username or Email"}),r(_,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:s(e).username,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).username=a),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),o("div",F,[r(f,{for:"password",value:"Password"}),r(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).password=a),required:"",autocomplete:"off"},null,8,["modelValue"])]),o("div",P,[o("label",z,[r(R,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=a=>s(e).remember=a)},null,8,["checked"]),D]),l.canResetPassword?(d(),m(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:u(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):c("",!0)]),E,o("div",H,[o("div",M,[r(S,{type:"submit",buttonType:"info",class:C({"opacity-25 px-4 py-2":s(e).processing}),disabled:s(e).processing},{default:u(()=>[p(" Sign in ")]),_:1},8,["class","disabled"])])])],40,q)]),_:1}))}};export{O as default};
