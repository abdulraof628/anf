import{c as x,x as m,y as o,v as l,P as c,B as y,F as _,C as b,V as a,q as n,K as h,bv as k}from"./@vue-64c42e7d.js";import{B as u}from"./Button-764ae71a.js";import"./@inertiajs-41d03628.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./app-a861bda2.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./radix-vue-efedc4b4.js";import"./@floating-ui-7a9770d8.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";const B={class:"flex items-center justify-between py-2"},V=o("label",{class:"block text-sm text-gray-700 font-bold"},[a(" Options "),o("span",{class:"text-red-500"},"*")],-1),g=["onInput","name","id","onUpdate:modelValue"],xt={__name:"VariationOption",props:{options:{type:Array},variationIndex:{type:Number}},emits:["add:option","remove:option","update:variation"],setup(e,{emit:v}){const f=e,s=x(()=>[...f.options]),i=v;return(w,d)=>(n(),m("div",null,[o("div",B,[V,l(u,{onClick:d[0]||(d[0]=y(r=>i("add:option",e.variationIndex),["stop"])),buttonType:"success",class:"text-sm py-1 px-2"},{default:c(()=>[a("Add option")]),_:1})]),(n(!0),m(_,null,b(s.value,(r,t)=>(n(),m("div",{key:t,class:"mt-1 flex rounded-md shadow-sm"},[h(o("input",{onInput:p=>i("update:variation",{variationOptions:s.value,index:t}),type:"text",placeholder:"option",name:"variation_option_"+t,id:"variation_option_"+t,class:"focus:ring-0 focus:border-indigo-300 flex-1 block rounded-tl-md rounded-bl-md sm:text-sm","onUpdate:modelValue":p=>r.name=p,autocomplete:"off"},null,40,g),[[k,r.name]]),l(u,{onClick:p=>i("remove:option",e.variationIndex,t),buttonType:"danger",class:"h-full px-4 rounded-none"},{default:c(()=>[a("X")]),_:2},1032,["onClick"])]))),128))]))}};export{xt as default};
