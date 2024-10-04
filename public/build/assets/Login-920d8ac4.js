import{c as w,z as v,bt as y,q as m,x as u,y as s,v as o,O as n,u as t,A as k,t as c,J as V,B as f,U as _,m as B,E as $}from"./@vue-39dc9ff3.js";import{B as C}from"./Button-dbb43583.js";import{_ as U}from"./ApplicationLogo-5cf6e77e.js";import{L as g,u as S,H as q}from"./@inertiajs-2b766590.js";import{_ as L,a as h,b}from"./ValidationErrors-95a254ce.js";import"./app-ef5f5861.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";const N=["value"],j={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(i,{emit:e}){const l=e,d=i,r=w({get(){return d.checked},set(a){l("update:checked",a)}});return(a,p)=>v((m(),u("input",{type:"checkbox",value:i.value,"onUpdate:modelValue":p[0]||(p[0]=x=>r.value=x),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,N)),[[y,r.value]])}},z={class:"min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-indigo-200"},E={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},F={__name:"Guest",setup(i){return(e,l)=>(m(),u("div",z,[s("div",null,[o(t(g),{href:"/"},{default:n(()=>[o(U,{class:"w-32 fill-current text-gray-500"})]),_:1})]),s("div",E,[k(e.$slots,"default")])]))}},P={key:0,class:"mb-4 font-medium text-sm text-green-600"},R={class:"mt-4"},A={class:"mt-4 flex justify-between place-items-end"},D={class:""},H=s("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),M=s("div",{class:"border-b-2 mt-4"},null,-1),T={class:"mt-4"},G={class:"flex justify-end"},ze={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const e=S({username:"",password:"",remember:!1}),l=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(d,r)=>(m(),c(F,null,{default:n(()=>[o(t(q),{title:"Log in"}),o(L,{class:"mb-4"}),i.status?(m(),u("div",P,V(i.status),1)):f("",!0),s("form",{onSubmit:$(l,["prevent"])},[s("div",null,[o(h,{for:"username",value:"Username or Email"}),o(b,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:t(e).username,"onUpdate:modelValue":r[0]||(r[0]=a=>t(e).username=a),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),s("div",R,[o(h,{for:"password",value:"Password"}),o(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(e).password,"onUpdate:modelValue":r[1]||(r[1]=a=>t(e).password=a),required:"",autocomplete:"off"},null,8,["modelValue"])]),s("div",A,[s("label",D,[o(j,{name:"remember",checked:t(e).remember,"onUpdate:checked":r[2]||(r[2]=a=>t(e).remember=a)},null,8,["checked"]),H]),i.canResetPassword?(m(),c(t(g),{key:0,href:d.route("password.request"),class:"underline text-sm text-gray-500 hover:text-gray-700"},{default:n(()=>[_(" Forgot your password? ")]),_:1},8,["href"])):f("",!0)]),M,s("div",T,[s("div",G,[o(C,{type:"submit",buttonType:"info",class:B({"px-4 py-2":t(e).processing}),disabled:t(e).processing},{default:n(()=>[_(" Sign in ")]),_:1},8,["class","disabled"])])])],32)]),_:1}))}};export{ze as default};