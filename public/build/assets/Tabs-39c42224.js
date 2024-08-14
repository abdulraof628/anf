import"./Authenticated-83e8e551.js";import"./@inertiajs-41d03628.js";import{x as _,af as y,B as b,ag as q,ah as k}from"./radix-vue-efedc4b4.js";import{q as l,t as d,P as r,D as c,Q as $,R as h,u as t,c as f,A as g,x as w,v as n,z as B,a5 as C,V as u}from"./@vue-64c42e7d.js";import{c as v}from"./app-a861bda2.js";import"./ApplicationLogo-64527dd0.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-03b844c4.js";import"./lucide-vue-next-dd1f77f0.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./@floating-ui-7a9770d8.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./moment-timezone-65f24d9a.js";import"./moment-3968d9f3.js";const P={__name:"Tabs",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1},dir:{type:String,required:!1},activationMode:{type:String,required:!1},modelValue:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const a=_(o,e);return(p,A)=>(l(),d(t(y),$(h(t(a))),{default:r(()=>[c(p.$slots,"default")]),_:3},16))}},m={__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(o){const e=o,s=f(()=>{const{class:a,...p}=e;return p}),i=b(s);return(a,p)=>(l(),d(t(q),g(t(i),{class:t(v)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",e.class)}),{default:r(()=>[c(a.$slots,"default")]),_:3},16,["class"]))}},V={__name:"TabsList",props:{loop:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(o){const e=o,s=f(()=>{const{class:i,...a}=e;return a});return(i,a)=>(l(),d(t(k),g(s.value,{class:t(v)("inline-flex h-9 items-center justify-center rounded-lg bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",e.class)}),{default:r(()=>[c(i.$slots,"default")]),_:3},16,["class"]))}},x={class:"flex justify-between"},T={methods:{newAdmission(){this.$inertia.get(this.route("students.create"),{centre_id:this.$page.props.centre_id})}}},we=Object.assign(T,{__name:"Tabs",setup(o){return(e,s)=>{const i=C("Button");return l(),w("div",x,[n(t(P),{"default-value":e.route().current("students")?"active":e.route().current("students.inactive")?"inactive":"unassigned"},{default:r(()=>[n(t(V),null,{default:r(()=>[n(t(m),{onClick:s[0]||(s[0]=a=>e.$inertia.get(e.route("students"))),value:"active"},{default:r(()=>[u(" Active ")]),_:1}),n(t(m),{onClick:s[1]||(s[1]=a=>e.$inertia.get(e.route("students.inactive"))),value:"inactive"},{default:r(()=>[u(" Inactive ")]),_:1}),n(t(m),{onClick:s[2]||(s[2]=a=>e.$inertia.get(e.route("students.unassigned"))),value:"unassigned"},{default:r(()=>[u(" Unassigned ")]),_:1})]),_:1})]),_:1},8,["default-value"]),e.$page.props.can.create_students?(l(),d(i,{key:0,onClick:e.newAdmission},{default:r(()=>[u("New Admission")]),_:1},8,["onClick"])):B("",!0)])}}});export{we as default};
