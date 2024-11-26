import{B as F}from"./Authenticated-e54ea1c2.js";import v from"./Tabs-57c6925b.js";import{_ as D}from"./Card-1dc3a135.js";import{_ as A,a as N,b as h,c as d,d as x,e as p}from"./TableRow-c704adf7.js";import{P as w}from"./Pagination-aa38846a.js";import{H as k,L as I}from"./@inertiajs-dde9cc4c.js";import{a as L}from"./@radix-icons-4975f794.js";import{F as M,C as P}from"./lucide-vue-next-f56ff345.js";import{y as $,x as t,u as a,Q as r,F as b,be as f,bf as j,t as n,z as i,A as z,v as g,C as c,W as l,J as U,K as _,q as E}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./TabsList-fb6788b6.js";const H={class:"flex items-center justify-between"},T={class:"flex justify-between space-x-2"},Y={class:"relative"},q={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},J={class:""},K={components:{Head:k,Link:I,Pagination:w,Tabs:v},data(){return{show_filters:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",date:this.$page.props.filter.date?this.$page.props.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()}}}},methods:{newAdmission(m){this.$inertia.get(this.route("students.create"),{centre_id:m})},editStudent(m){this.$inertia.get(this.route("students.edit"),{student_id:m})},search(){this.$inertia.get(this.route("students"),this.params,{replace:!0,preserveState:!0})},showFilters(){this.show_filters=!this.show_filters}}},qe=Object.assign(K,{__name:"Index",setup(m){return(s,e)=>{const C=f("Input"),u=f("Button"),y=f("ComboBox"),S=f("Datepicker"),V=j("debounce");return n(),$(b,null,[t(a(k),{title:"Students"}),t(F,null,{header:r(()=>e[5]||(e[5]=[])),default:r(()=>[t(v,{centre_id:s.params.centre_id},null,8,["centre_id"]),i("div",H,[i("div",T,[i("div",Y,[t(a(L),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),z(t(C,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:s.params.search,"onUpdate:modelValue":e[0]||(e[0]=o=>s.params.search=o)},null,8,["modelValue"]),[[V,s.search,"800ms"]])]),t(u,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:e[1]||(e[1]=o=>s.showFilters())},{default:r(()=>[t(a(M),{class:"h-4 w-4"}),e[6]||(e[6]=i("span",{class:"ml-1 hidden sm:block"},"Filters",-1))]),_:1})]),s.$page.props.can.create_students?(n(),g(u,{key:0,onClick:s.newAdmission},{default:r(()=>[t(a(P),{class:"h-4 w-4"}),e[7]||(e[7]=i("span",{class:"ml-1 hidden sm:block"},"New Admission",-1))]),_:1},8,["onClick"])):c("",!0)]),s.show_filters?(n(),$("div",q,[t(y,{items:s.$page.props.allowed_centres,"label-property":"label","value-property":"ID",onSelect:s.search,modelValue:s.params.centre_id,"onUpdate:modelValue":e[2]||(e[2]=o=>s.params.centre_id=o),"select-placeholder":"Centres","search-placeholder":"Search centre..."},null,8,["items","onSelect","modelValue"]),i("div",null,[t(S,{modelValue:s.params.date,"onUpdate:modelValue":e[3]||(e[3]=o=>s.params.date=o),mode:"month",format:"MMM Y",onSelect:s.search},null,8,["modelValue","onSelect"])]),i("div",J,[t(u,{onClick:e[4]||(e[4]=o=>s.$inertia.get(s.route("students")))},{default:r(()=>e[8]||(e[8]=[l("Clear Search")])),_:1})])])):c("",!0),t(D,null,{content:r(()=>[t(a(A),null,{default:r(()=>[t(a(N),{class:"bg-gray-100"},{default:r(()=>[t(a(h),null,{default:r(()=>[t(a(d),null,{default:r(()=>e[9]||(e[9]=[l("#")])),_:1}),t(a(d),null,{default:r(()=>e[10]||(e[10]=[l("Name")])),_:1}),t(a(d),null,{default:r(()=>e[11]||(e[11]=[l("Parent")])),_:1}),t(a(d),{class:"text-center"},{default:r(()=>e[12]||(e[12]=[l("Status")])),_:1}),t(a(d),{class:"text-center"},{default:r(()=>e[13]||(e[13]=[l("Action")])),_:1})]),_:1})]),_:1}),t(a(x),null,{default:r(()=>[s.$page.props.students.data.length?c("",!0):(n(),g(a(h),{key:0},{default:r(()=>[t(a(p),{class:"text-center",colspan:"10"},{default:r(()=>e[14]||(e[14]=[i("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(n(!0),$(b,null,U(s.$page.props.students.data,(o,B)=>(n(),g(a(h),null,{default:r(()=>[t(a(p),null,{default:r(()=>[l(_(s.$page.props.students.from+B),1)]),_:2},1024),t(a(p),null,{default:r(()=>[l(_(o.name),1)]),_:2},1024),t(a(p),null,{default:r(()=>[l(_(o.parent_name),1)]),_:2},1024),t(a(p),{class:"text-center"},{default:r(()=>[i("span",{class:E(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==!0?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},_(o.status==!0?"Active":"Inactive"),3)]),_:2},1024),t(a(p),{class:"text-center"},{default:r(()=>[s.$page.props.can.edit_students?(n(),g(u,{key:0,variant:"outline",onClick:O=>s.editStudent(o.id)},{default:r(()=>e[15]||(e[15]=[l("Edit")])),_:2},1032,["onClick"])):c("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(w,{page_data:s.$page.props.students,params:s.params},null,8,["page_data","params"])]),_:1})],64)}}});export{qe as default};
