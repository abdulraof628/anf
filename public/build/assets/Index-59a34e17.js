import{B as V}from"./Authenticated-e544629c.js";import{H as b,L as w}from"./@inertiajs-dde9cc4c.js";import{P as h}from"./Pagination-209dd8c6.js";import{_ as N}from"./Card-9d1429a6.js";import{_ as L,a as x,b as l,c as m,d as A,e as i}from"./TableRow-27ad490d.js";import{a as D}from"./@radix-icons-4975f794.js";import{y as _,x as e,u as r,Q as t,F as g,be as c,bf as E,t as n,z as $,A as F,W as s,v as u,C as v,J as I,K as d}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-dc86d4f5.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-dbd48133.js";import"./vue3-markdown-13648449.js";import"./groq-sdk-5d132fed.js";import"./lucide-vue-next-81b3e39b.js";const S={class:"relative"},U={components:{Head:b,Link:w,Pagination:h},props:{filter:Object},data(){return{params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:""}}},methods:{manageUser(f){this.$inertia.get(this.route("centre_manager.manage"),{user_id:f})},search(){this.$inertia.get(this.route("centre_manager"),this.params,{replace:!0,preserveState:!0})}}},Fe=Object.assign(U,{__name:"Index",setup(f){return(o,a)=>{const k=c("Input"),B=c("Button"),y=E("debounce");return n(),_(g,null,[e(r(b),{title:"Centre Manager"}),e(V,null,{header:t(()=>a[1]||(a[1]=[])),default:t(()=>[$("div",S,[e(r(D),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),F(e(k,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:o.params.search,"onUpdate:modelValue":a[0]||(a[0]=p=>o.params.search=p)},null,8,["modelValue"]),[[y,o.search,"800ms"]])]),e(N,null,{content:t(()=>[e(r(L),null,{default:t(()=>[e(r(x),{class:"bg-gray-100"},{default:t(()=>[e(r(l),null,{default:t(()=>[e(r(m),null,{default:t(()=>a[2]||(a[2]=[s("#")])),_:1}),e(r(m),null,{default:t(()=>a[3]||(a[3]=[s("Name")])),_:1}),e(r(m),null,{default:t(()=>a[4]||(a[4]=[s("Email")])),_:1}),e(r(m),{class:"text-center"},{default:t(()=>a[5]||(a[5]=[s("Action")])),_:1})]),_:1})]),_:1}),e(r(A),null,{default:t(()=>[o.$page.props.centre_managers.data.length?v("",!0):(n(),u(r(l),{key:0},{default:t(()=>[e(r(i),{class:"text-center",colspan:"10"},{default:t(()=>a[6]||(a[6]=[$("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(n(!0),_(g,null,I(o.$page.props.centre_managers.data,(p,C)=>(n(),u(r(l),null,{default:t(()=>[e(r(i),null,{default:t(()=>[s(d(o.$page.props.centre_managers.from+C),1)]),_:2},1024),e(r(i),null,{default:t(()=>[s(d(p.name),1)]),_:2},1024),e(r(i),null,{default:t(()=>[s(d(p.email),1)]),_:2},1024),e(r(i),{class:"text-center"},{default:t(()=>[o.$page.props.can.manage_centre_manager?(n(),u(B,{key:0,variant:"outline",onClick:j=>o.manageUser(p.id)},{default:t(()=>a[7]||(a[7]=[s("Edit")])),_:2},1032,["onClick"])):v("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),e(h,{page_data:o.$page.props.centre_managers,params:o.params},null,8,["page_data","params"])]),_:1})],64)}}});export{Fe as default};
