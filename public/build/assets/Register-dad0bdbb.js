import{v as u,Q as l,t as f,x as t,u as r,z as m,W as p,q as c,G as w}from"./@vue-d42dd214.js";import{B as _}from"./Button-2c9531b4.js";import{_ as V}from"./Guest-feb4a96c.js";import{_ as v,a,b as i}from"./ValidationErrors-490200ea.js";import{d as b,H as g,L as x}from"./@inertiajs-7f289881.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./ApplicationLogo-abeca850.js";const y={class:"mt-4"},k={class:"mt-4"},q={class:"mt-4"},B={class:"mt-4"},U={class:"flex items-center justify-end mt-4"},go={__name:"Register",setup(N){const o=b({name:"",username:"",email:"",password:"",password_confirmation:"",terms:!1}),d=()=>{o.post(route("register"),{onFinish:()=>o.reset("password","password_confirmation")})};return(n,e)=>(f(),u(V,null,{default:l(()=>[t(r(g),{title:"Register"}),t(v,{class:"mb-4"}),m("form",{onSubmit:w(d,["prevent"])},[m("div",null,[t(a,{for:"name",value:"Name"}),t(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:r(o).name,"onUpdate:modelValue":e[0]||(e[0]=s=>r(o).name=s),required:"",autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),m("div",y,[t(a,{for:"username",value:"Username"}),t(i,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:r(o).username,"onUpdate:modelValue":e[1]||(e[1]=s=>r(o).username=s),required:"",autocomplete:"off"},null,8,["modelValue"])]),m("div",k,[t(a,{for:"email",value:"Email"}),t(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:r(o).email,"onUpdate:modelValue":e[2]||(e[2]=s=>r(o).email=s),required:"",autocomplete:"off"},null,8,["modelValue"])]),m("div",q,[t(a,{for:"password",value:"Password"}),t(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:r(o).password,"onUpdate:modelValue":e[3]||(e[3]=s=>r(o).password=s),required:"",autocomplete:"off"},null,8,["modelValue"])]),m("div",B,[t(a,{for:"password_confirmation",value:"Confirm Password"}),t(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:r(o).password_confirmation,"onUpdate:modelValue":e[4]||(e[4]=s=>r(o).password_confirmation=s),required:"",autocomplete:"off"},null,8,["modelValue"])]),m("div",U,[t(r(x),{href:n.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>e[5]||(e[5]=[p(" Already registered? ")])),_:1},8,["href"]),t(_,{class:c(["ml-4",{"opacity-25":r(o).processing}]),disabled:r(o).processing},{default:l(()=>e[6]||(e[6]=[p(" Register ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{go as default};
