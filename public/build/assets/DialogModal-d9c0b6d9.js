import{x as y,Y as w,I as B,w as C,C as b,r as k,u as v,v as O}from"./radix-vue-a603168c.js";import{q as r,t as d,O as o,A as l,P,Q as D,u as e,x as h,m as _,c as x,C as $,v as c,B as m,y as q}from"./@vue-39dc9ff3.js";import{c as p}from"./app-31ea0dbe.js";import{_ as z}from"./Authenticated-862af612.js";import{f as V}from"./@radix-icons-9ff33614.js";const F={__name:"Dialog",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(s,{emit:a}){const i=y(s,a);return(u,f)=>(r(),d(e(w),P(D(e(i))),{default:o(()=>[l(u.$slots,"default")]),_:3},16))}},I={__name:"DialogHeader",props:{class:{type:null,required:!1}},setup(s){const a=s;return(t,n)=>(r(),h("div",{class:_(e(p)("flex flex-col gap-y-1.5 text-center sm:text-left",a.class))},[l(t.$slots,"default")],2))}},A={__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(s){const a=s,t=x(()=>{const{class:i,...u}=a;return u}),n=B(t);return(i,u)=>(r(),d(e(C),$(e(n),{class:e(p)("text-lg font-semibold leading-none tracking-tight",a.class)}),{default:o(()=>[l(i.$slots,"default")]),_:3},16,["class"]))}},N=q("span",{class:"sr-only"},"Close",-1),S={__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1},hideClose:{type:Boolean,required:!1,default:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:a}){const t=s,n=a,i=x(()=>{const{class:f,...g}=t;return g}),u=y(i,n);return(f,g)=>(r(),d(e(O),null,{default:o(()=>[c(e(b),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),c(e(k),$(e(u),{class:e(p)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",t.class)}),{default:o(()=>[l(f.$slots,"default"),t.hideClose?m("",!0):(r(),d(e(v),{key:0,class:"absolute right-6 top-6 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"},{default:o(()=>[c(e(V),{class:"w-5 h-5"}),N]),_:1}))]),_:3},16,["class"])]),_:3}))}},j={__name:"DialogFooter",props:{class:{type:null,required:!1}},setup(s){const a=s;return(t,n)=>(r(),h("div",{class:_(e(p)("flex flex-col-reverse sm:flex-row sm:justify-end gap-2",a.class))},[l(t.$slots,"default")],2))}},E={class:"flex-1 overflow-y-auto px-6"},R={__name:"DialogModal",props:{modelValue:{type:Boolean,default:!1},classProp:{type:String,default:""},size:{type:String,default:"sm"},interactOutside:{type:Function,required:!1,default:()=>{}},hideClose:{type:Boolean,default:!1}},emits:["update:modelValue","close"],setup(s,{emit:a}){return(t,n)=>(r(),d(e(F),{open:s.modelValue},{default:o(()=>[c(e(S),{class:_(["max-h-[90dvh] p-0 flex flex-col",s.classProp]),onInteractOutside:s.interactOutside,hideClose:s.hideClose},{default:o(()=>[c(e(I),{class:"p-6 pb-0"},{default:o(()=>[t.$slots.title?(r(),d(e(A),{key:0,class:"text-lg font-semibold"},{default:o(()=>[l(t.$slots,"title")]),_:3})):m("",!0),c(e(z),null,{default:o(()=>[l(t.$slots,"description")]),_:3})]),_:3}),q("div",E,[l(t.$slots,"content")]),t.$slots.footer?(r(),d(e(j),{key:0,class:"p-6 pt-0"},{default:o(()=>[l(t.$slots,"footer")]),_:3})):m("",!0)]),_:3},8,["class","onInteractOutside","hideClose"])]),_:3},8,["open"]))}};export{R as _};
