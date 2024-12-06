import{v as l,Q as o,be as d,t as i,x as r,u as e,W as s,y as c,J as b,K as g,F as B,C as w,z as m,G as V}from"./@vue-d42dd214.js";import{_ as F}from"./Guest-5a0a32cf.js";import{d as $,H as x}from"./@inertiajs-7f289881.js";import{_ as C}from"./Card-c810b5f4.js";import{_ as L,a as P}from"./index-7843d531.js";import"./ApplicationLogo-abeca850.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./app-85118abc.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";const N={class:"grid gap-4"},S={key:0,class:"mb-2 font-medium text-sm text-green-600"},j={class:"grid gap-2"},E={class:"flex justify-center"},H=["href"],$t={__name:"ForgotPassword",props:{status:String},setup(u){const a=$({user_email:""}),f=()=>{a.post(route("password.email"))};return(p,t)=>{const _=d("Label"),y=d("Input"),k=d("Button");return i(),l(F,null,{default:o(()=>[r(e(x),{title:"Forgot Password"}),r(C,null,{title:o(()=>t[1]||(t[1]=[s("Forgot Password")])),description:o(()=>t[2]||(t[2]=[s(" Please enter your email address, and we will send you a password reset link that will allow you to reset your password. ")])),content:o(()=>[Object.keys(p.$page.props.errors).length>0?(i(),l(e(L),{key:0,variant:"destructive"},{default:o(()=>[(i(!0),c(B,null,b(p.$page.props.errors,(n,v)=>(i(),l(e(P),{key:v},{default:o(()=>[s(g(n),1)]),_:2},1024))),128))]),_:1})):w("",!0),m("form",{onSubmit:V(f,["prevent"])},[m("div",N,[u.status?(i(),c("div",S,g(u.status),1)):w("",!0),m("div",j,[r(_,{for:"email"},{default:o(()=>t[3]||(t[3]=[s("Email Address")])),_:1}),r(y,{id:"email",type:"email",modelValue:e(a).user_email,"onUpdate:modelValue":t[0]||(t[0]=n=>e(a).user_email=n),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),r(k,{class:"w-full",onClick:f,disabled:e(a).processing},{default:o(()=>t[4]||(t[4]=[s("Send Password Reset Link")])),_:1},8,["disabled"]),m("div",E,[m("a",{href:p.route("login")},[r(_,{class:"hover:underline cursor-pointer"},{default:o(()=>t[5]||(t[5]=[s("Back to Login")])),_:1})],8,H)])])],32)]),_:1})]),_:1})}}};export{$t as default};
