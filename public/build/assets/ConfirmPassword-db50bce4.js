import{v as e,Q as m,t as l,x as t,u as s,z as i,W as n,q as d,G as f}from"./@vue-66b8c761.js";import{B as u}from"./Button-10d1f2e6.js";import{_ as c}from"./Guest-6e9aaca8.js";import{_,a as w,b}from"./ValidationErrors-e2af893f.js";import{u as x,H as v}from"./@inertiajs-4f2e6820.js";import"./app-073cd217.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./ApplicationLogo-f9b7ff8a.js";const B={class:"flex justify-end mt-4"},co={__name:"ConfirmPassword",setup(V){const o=x({password:""}),p=()=>{o.post(route("password.confirm"),{onFinish:()=>o.reset()})};return(y,r)=>(l(),e(c,null,{default:m(()=>[t(s(v),{title:"Confirm Password"}),r[2]||(r[2]=i("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),t(_,{class:"mb-4"}),i("form",{onSubmit:f(p,["prevent"])},[i("div",null,[t(w,{for:"password",value:"Password"}),t(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(o).password,"onUpdate:modelValue":r[0]||(r[0]=a=>s(o).password=a),required:"",autocomplete:"off",autofocus:""},null,8,["modelValue"])]),i("div",B,[t(u,{class:d(["ml-4",{"opacity-25":s(o).processing}]),disabled:s(o).processing},{default:m(()=>r[1]||(r[1]=[n(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{co as default};
