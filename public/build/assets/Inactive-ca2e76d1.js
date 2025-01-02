import{B}from"./Authenticated-98036166.js";import{H as h,L as A}from"./@inertiajs-7f289881.js";import k from"./Tabs-db9e1667.js";import{_ as N}from"./Card-a7869428.js";import{_ as S,a as V,b as c,c as m,d as I,e as n}from"./TableRow-75c58101.js";import{P as w}from"./Pagination-4d474b9e.js";import{a as L}from"./@radix-icons-4975f794.js";import{C as P}from"./lucide-vue-next-53796c49.js";import{y as $,x as t,u as s,Q as e,F as v,be as b,bf as z,t as l,z as p,A as D,v as u,C as _,W as i,J as F,K as f,q as j}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ece3933f.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-c5f0f1fd.js";import"./DialogDescription-a3c26cdc.js";import"./TabsList-346d073e.js";const E={class:"flex items-center justify-between"},H={class:"flex space-x-2"},T={class:"relative"},q={components:{Head:h,Link:A,Pagination:w,Tabs:k},data(){return{params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:""}}},methods:{newAdmission(d){this.$inertia.get(this.route("students.create"),{centre_id:d})},editStudent(d){this.$inertia.get(this.route("students.edit"),{student_id:d})},search(){this.$inertia.get(this.route("students.inactive"),this.params,{replace:!0,preserveState:!0})}}},Tt=Object.assign(q,{__name:"Inactive",setup(d){return(a,r)=>{const C=b("Input"),g=b("Button"),x=z("debounce");return l(),$(v,null,[t(s(h),{title:"Students"}),t(B,null,{header:e(()=>r[1]||(r[1]=[])),default:e(()=>[t(k,{centre_id:a.params.centre_id},null,8,["centre_id"]),p("div",E,[p("div",H,[p("div",T,[t(s(L),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),D(t(C,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:a.params.search,"onUpdate:modelValue":r[0]||(r[0]=o=>a.params.search=o)},null,8,["modelValue"]),[[x,a.search,"800ms"]])])]),a.$page.props.can.create_students?(l(),u(g,{key:0,onClick:a.newAdmission},{default:e(()=>[t(s(P),{class:"h-4 w-4"}),r[2]||(r[2]=p("span",{class:"ml-1 hidden sm:block"},"New Admission",-1))]),_:1},8,["onClick"])):_("",!0)]),t(N,null,{content:e(()=>[t(s(S),null,{default:e(()=>[t(s(V),{class:"bg-gray-100"},{default:e(()=>[t(s(c),null,{default:e(()=>[t(s(m),null,{default:e(()=>r[3]||(r[3]=[i("#")])),_:1}),t(s(m),null,{default:e(()=>r[4]||(r[4]=[i("Name")])),_:1}),t(s(m),null,{default:e(()=>r[5]||(r[5]=[i("Parent")])),_:1}),t(s(m),{class:"text-center"},{default:e(()=>r[6]||(r[6]=[i("Status")])),_:1}),t(s(m),{class:"text-center"},{default:e(()=>r[7]||(r[7]=[i("Action")])),_:1})]),_:1})]),_:1}),t(s(I),null,{default:e(()=>[a.$page.props.students.data.length?_("",!0):(l(),u(s(c),{key:0},{default:e(()=>[t(s(n),{class:"text-center",colspan:"10"},{default:e(()=>r[8]||(r[8]=[p("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(l(!0),$(v,null,F(a.$page.props.students.data,(o,y)=>(l(),u(s(c),null,{default:e(()=>[t(s(n),null,{default:e(()=>[i(f(a.$page.props.students.from+y),1)]),_:2},1024),t(s(n),null,{default:e(()=>[i(f(o.name),1)]),_:2},1024),t(s(n),null,{default:e(()=>[i(f(o.parent_name),1)]),_:2},1024),t(s(n),{class:"text-center"},{default:e(()=>[p("span",{class:j(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==!0?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},f(o.status==!0?"Active":"Inactive"),3)]),_:2},1024),t(s(n),{class:"text-center"},{default:e(()=>[a.$page.props.can.edit_students?(l(),u(g,{key:0,variant:"outline",onClick:J=>a.editStudent(o.id)},{default:e(()=>r[9]||(r[9]=[i("Edit")])),_:2},1032,["onClick"])):_("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(w,{page_data:a.$page.props.students,params:a.params},null,8,["page_data","params"])]),_:1})],64)}}});export{Tt as default};
