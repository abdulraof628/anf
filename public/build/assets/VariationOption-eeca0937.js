<<<<<<< HEAD:public/build/assets/VariationOption-eeca0937.js
import{A as x,o as i,c as r,d as e,a as c,w as u,k as _,F as y,e as b,g as d,h,v as k}from"./app-cc118ad9.js";import{B as m}from"./Button-a2f8a38c.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={class:"flex items-center justify-between py-2"},w=e("label",{class:"block text-sm text-gray-700 font-bold"},[d(" Options "),e("span",{class:"text-red-500"},"*")],-1),B=["onInput","name","id","onUpdate:modelValue"],O={__name:"VariationOption",props:{options:{type:Array},variationIndex:{type:Number}},emits:["add:option","remove:option","update:variation"],setup(o,{emit:v}){const f=o,l=x(()=>[...f.options]),a=v;return(V,p)=>(i(),r("div",null,[e("div",g,[w,c(m,{onClick:p[0]||(p[0]=_(n=>a("add:option",o.variationIndex),["stop"])),buttonType:"success",class:"text-sm py-1 px-2"},{default:u(()=>[d("Add option")]),_:1})]),(i(!0),r(y,null,b(l.value,(n,t)=>(i(),r("div",{key:t,class:"mt-1 flex rounded-md shadow-sm"},[h(e("input",{onInput:s=>a("update:variation",{variationOptions:l.value,index:t}),type:"text",placeholder:"option",name:"variation_option_"+t,id:"variation_option_"+t,class:"focus:ring-0 focus:border-indigo-300 flex-1 block rounded-tl-md rounded-bl-md sm:text-sm","onUpdate:modelValue":s=>n.name=s,autocomplete:"off"},null,40,B),[[k,n.name]]),c(m,{onClick:s=>a("remove:option",o.variationIndex,t),buttonType:"danger",class:"h-full px-4 rounded-none"},{default:u(()=>[d("X")]),_:2},1032,["onClick"])]))),128))]))}};export{O as default};
=======
import{A as x,o as i,c as r,d as e,a as c,w as u,k as _,F as y,e as b,g as d,h,v as k}from"./app-52b365f0.js";import{B as m}from"./Button-17ab5227.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={class:"flex items-center justify-between py-2"},w=e("label",{class:"block text-sm text-gray-700 font-bold"},[d(" Options "),e("span",{class:"text-red-500"},"*")],-1),B=["onInput","name","id","onUpdate:modelValue"],O={__name:"VariationOption",props:{options:{type:Array},variationIndex:{type:Number}},emits:["add:option","remove:option","update:variation"],setup(o,{emit:v}){const f=o,l=x(()=>[...f.options]),a=v;return(V,p)=>(i(),r("div",null,[e("div",g,[w,c(m,{onClick:p[0]||(p[0]=_(n=>a("add:option",o.variationIndex),["stop"])),buttonType:"success",class:"text-sm py-1 px-2"},{default:u(()=>[d("Add option")]),_:1})]),(i(!0),r(y,null,b(l.value,(n,t)=>(i(),r("div",{key:t,class:"mt-1 flex rounded-md shadow-sm"},[h(e("input",{onInput:s=>a("update:variation",{variationOptions:l.value,index:t}),type:"text",placeholder:"option",name:"variation_option_"+t,id:"variation_option_"+t,class:"focus:ring-0 focus:border-indigo-300 flex-1 block rounded-tl-md rounded-bl-md sm:text-sm","onUpdate:modelValue":s=>n.name=s,autocomplete:"off"},null,40,B),[[k,n.name]]),c(m,{onClick:s=>a("remove:option",o.variationIndex,t),buttonType:"danger",class:"h-full px-4 rounded-none"},{default:u(()=>[d("X")]),_:2},1032,["onClick"])]))),128))]))}};export{O as default};
>>>>>>> e402caeffa6bac873880cfb5d969663444372e1a:public/build/assets/VariationOption-3e57dedb.js
