import{B as w}from"./Authenticated-e544629c.js";import{H as h,L as C}from"./@inertiajs-dde9cc4c.js";import{P as b}from"./Pagination-209dd8c6.js";import{_ as N}from"./Card-9d1429a6.js";import{_ as D,a as L,b as l,c as m,d as x,e as n}from"./TableRow-27ad490d.js";import{a as A}from"./@radix-icons-4975f794.js";import{y as _,x as t,u as a,Q as e,F as g,be as c,bf as E,t as p,z as v,A as F,W as o,v as d,C as $,J as I,K as u}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-dc86d4f5.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-dbd48133.js";import"./vue3-markdown-13648449.js";import"./groq-sdk-5d132fed.js";import"./lucide-vue-next-81b3e39b.js";const S={class:"relative"},U={components:{Head:h,Link:C,Pagination:b},data(){return{params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:""}}},methods:{manageUser(f){this.$inertia.get(this.route("division_manager.manage"),{user_id:f})},search(){this.$inertia.get(this.route("division_manager"),this.params,{replace:!0,preserveState:!0})}}},Ft=Object.assign(U,{__name:"Index",setup(f){return(i,r)=>{const k=c("Input"),B=c("Button"),y=E("debounce");return p(),_(g,null,[t(a(h),{title:"Division Manager"}),t(w,null,{header:e(()=>r[1]||(r[1]=[])),default:e(()=>[v("div",S,[t(a(A),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),F(t(k,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:i.params.search,"onUpdate:modelValue":r[0]||(r[0]=s=>i.params.search=s)},null,8,["modelValue"]),[[y,i.search,"800ms"]])]),t(N,null,{content:e(()=>[t(a(D),null,{default:e(()=>[t(a(L),{class:"bg-gray-100"},{default:e(()=>[t(a(l),null,{default:e(()=>[t(a(m),null,{default:e(()=>r[2]||(r[2]=[o("#")])),_:1}),t(a(m),null,{default:e(()=>r[3]||(r[3]=[o("Name")])),_:1}),t(a(m),null,{default:e(()=>r[4]||(r[4]=[o("Email")])),_:1}),t(a(m),{class:"text-center"},{default:e(()=>r[5]||(r[5]=[o("Action")])),_:1})]),_:1})]),_:1}),t(a(x),null,{default:e(()=>[i.$page.props.division_managers.data.length?$("",!0):(p(),d(a(l),{key:0},{default:e(()=>[t(a(n),{class:"text-center",colspan:"10"},{default:e(()=>r[6]||(r[6]=[v("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(p(!0),_(g,null,I(i.$page.props.division_managers.data,(s,V)=>(p(),d(a(l),null,{default:e(()=>[t(a(n),null,{default:e(()=>[o(u(i.$page.props.division_managers.from+V),1)]),_:2},1024),t(a(n),null,{default:e(()=>[o(u(s.name),1)]),_:2},1024),t(a(n),null,{default:e(()=>[o(u(s.email),1)]),_:2},1024),t(a(n),{class:"text-center"},{default:e(()=>[i.$page.props.can.manage_division_manager?(p(),d(B,{key:0,variant:"outline",onClick:z=>i.manageUser(s.id)},{default:e(()=>r[7]||(r[7]=[o("Edit")])),_:2},1032,["onClick"])):$("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(b,{page_data:i.$page.props.division_managers,params:i.params},null,8,["page_data","params"])]),_:1})],64)}}});export{Ft as default};
