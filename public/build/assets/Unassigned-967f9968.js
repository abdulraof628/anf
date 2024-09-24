import{B}from"./Authenticated-2464c72b.js";import{H as h,L as A}from"./@inertiajs-c7856c69.js";import k from"./Tabs-32fe3ffb.js";import{_ as N}from"./Card-603ca702.js";import{_ as S,a as V,b as c,c as m,d as L,e as n}from"./TableRow-457357e9.js";import{P as w}from"./Pagination-83a017ca.js";import{a as D}from"./@radix-icons-a5b56816.js";import{C as P}from"./lucide-vue-next-f94b1320.js";import{y as $,x as t,u as r,Q as e,F as b,be as v,bf as z,t as l,z as p,L as F,v as u,A as _,W as i,D as H,H as f,q as I}from"./@vue-fa39c8c3.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./TabsList-1b3330a1.js";const j={class:"flex items-center justify-between"},E={class:"flex space-x-2"},T={class:"relative"},U={components:{Head:h,Link:A,Pagination:w,Tabs:k},data(){return{params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:""}}},methods:{newAdmission(d){this.$inertia.get(this.route("students.create"),{centre_id:d})},editStudent(d){this.$inertia.get(this.route("students.edit"),{student_id:d})},search(){this.$inertia.get(this.route("students.unassigned"),this.params,{replace:!0,preserveState:!0})}}},It=Object.assign(U,{__name:"Unassigned",setup(d){return(a,s)=>{const x=v("Input"),g=v("Button"),C=z("debounce");return l(),$(b,null,[t(r(h),{title:"Students"}),t(B,null,{header:e(()=>s[1]||(s[1]=[])),default:e(()=>[t(k,{centre_id:a.params.centre_id},null,8,["centre_id"]),p("div",j,[p("div",E,[p("div",T,[t(r(D),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),F(t(x,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:a.params.search,"onUpdate:modelValue":s[0]||(s[0]=o=>a.params.search=o)},null,8,["modelValue"]),[[C,a.search,"800ms"]])])]),a.$page.props.can.create_students?(l(),u(g,{key:0,onClick:a.newAdmission},{default:e(()=>[t(r(P),{class:"h-4 w-4"}),s[2]||(s[2]=p("span",{class:"ml-1 hidden sm:block"},"New Admission",-1))]),_:1},8,["onClick"])):_("",!0)]),t(N,null,{content:e(()=>[t(r(S),null,{default:e(()=>[t(r(V),{class:"bg-gray-100"},{default:e(()=>[t(r(c),null,{default:e(()=>[t(r(m),null,{default:e(()=>s[3]||(s[3]=[i("#")])),_:1}),t(r(m),null,{default:e(()=>s[4]||(s[4]=[i("Name")])),_:1}),t(r(m),null,{default:e(()=>s[5]||(s[5]=[i("Parent")])),_:1}),t(r(m),{class:"text-center"},{default:e(()=>s[6]||(s[6]=[i("Status")])),_:1}),t(r(m),{class:"text-center"},{default:e(()=>s[7]||(s[7]=[i("Action")])),_:1})]),_:1})]),_:1}),t(r(L),null,{default:e(()=>[a.$page.props.students.data.length?_("",!0):(l(),u(r(c),{key:0},{default:e(()=>[t(r(n),{class:"text-center",colspan:"10"},{default:e(()=>s[8]||(s[8]=[p("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(l(!0),$(b,null,H(a.$page.props.students.data,(o,y)=>(l(),u(r(c),null,{default:e(()=>[t(r(n),null,{default:e(()=>[i(f(a.$page.props.students.from+y),1)]),_:2},1024),t(r(n),null,{default:e(()=>[i(f(o.name),1)]),_:2},1024),t(r(n),null,{default:e(()=>[i(f(o.parent_name),1)]),_:2},1024),t(r(n),{class:"text-center"},{default:e(()=>[p("span",{class:I(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==!0?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},f(o.status==!0?"Active":"Inactive"),3)]),_:2},1024),t(r(n),{class:"text-center"},{default:e(()=>[a.$page.props.can.edit_students?(l(),u(g,{key:0,variant:"outline",onClick:q=>a.editStudent(o.id)},{default:e(()=>s[9]||(s[9]=[i("Edit")])),_:2},1032,["onClick"])):_("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(w,{page_data:a.$page.props.students,params:a.params},null,8,["page_data","params"])]),_:1})],64)}}});export{It as default};
