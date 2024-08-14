import{B as L,_ as P,a as z,b as E,c as k}from"./Authenticated-6651b23d.js";import{h as v}from"./moment-3968d9f3.js";import{H as w,L as H}from"./@inertiajs-41d03628.js";import{P as V}from"./Pagination-9bf8dba3.js";import{_ as B,a as N,b as i,c as n,d as S,e as h}from"./TableRow-140abd1a.js";import{_ as I}from"./TableCaption-cfd562e7.js";import{_ as j}from"./Card-dc9fb2d2.js";import{_ as T}from"./DeleteConfirmation-b95e609b.js";import{a as U}from"./@radix-icons-03b844c4.js";import{F as O,C as R,E as q}from"./lucide-vue-next-48142e2c.js";import{x as g,v as e,u as s,P as a,F as y,a5 as $,a6 as G,q as d,y as u,K,t as f,z as _,V as r,C as M,G as m,m as W}from"./@vue-64c42e7d.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./moment-timezone-65f24d9a.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";const J={class:"flex items-center justify-between"},Q={class:"flex space-x-2"},X={class:"relative"},Y=u("span",{class:"ml-1 hidden sm:block"},"Filters",-1),Z=u("span",{class:"ml-1 hidden sm:block"},"New Class",-1),x={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},ee=u("div",{class:"p-3"}," No Record Found ",-1),te=u("span",{class:"sr-only"},"More",-1),ae={components:{Pagination:V,DeleteConfirmation:T,Head:w,Link:H,Table:B,TableBody:N,TableCaption:I,TableCell:i,TableHead:n,TableHeader:S,TableRow:h},props:{filter:Object},data(){return{show_filters:!1,confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?Number(this.$page.props.filter.centre_id):"",day:this.$page.props.filter.day?Number(this.$page.props.filter.day):""}}},methods:{addClass(c){this.$inertia.get(this.route("classes.create"),{centre_id:c})},editClass(c){this.$inertia.get(this.route("classes.edit"),{class_id:c})},deleteClass(c){this.confirmation.route_name="classes.destroy",this.confirmation.id=c,this.confirmation.is_open=!0},showFilters(){this.show_filters=!this.show_filters},search(){this.$inertia.get(this.route("classes"),this.params,{replace:!0,preserveState:!0})}}},tt=Object.assign(ae,{__name:"Index",setup(c){return(t,l)=>{const D=$("Input"),C=$("Button"),b=$("ComboBox"),F=G("debounce");return d(),g(y,null,[e(s(w),{title:"Classes"}),e(L,null,{header:a(()=>[]),default:a(()=>[u("div",J,[u("div",Q,[u("div",X,[e(s(U),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),K(e(D,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:t.params.search,"onUpdate:modelValue":l[0]||(l[0]=o=>t.params.search=o)},null,8,["modelValue"]),[[F,t.search,"800ms"]])]),e(C,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:l[1]||(l[1]=o=>t.showFilters())},{default:a(()=>[e(s(O),{class:"h-4 w-4"}),Y]),_:1})]),t.$page.props.can.create_classes?(d(),f(C,{key:0,onClick:l[2]||(l[2]=o=>t.addClass(t.params.centre_id))},{default:a(()=>[e(s(R),{class:"h-4 w-4"}),Z]),_:1})):_("",!0)]),t.show_filters?(d(),g("div",x,[e(b,{items:t.$page.props.allowed_centres,"label-property":"label","value-property":"ID",onSelect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":l[3]||(l[3]=o=>t.params.centre_id=o),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","onSelect","modelValue"]),e(b,{items:t.$page.props.days_of_the_week,"label-property":"name","value-property":"id",onSelect:t.search,modelValue:t.params.day,"onUpdate:modelValue":l[4]||(l[4]=o=>t.params.day=o),"select-placeholder":"Day of the Week","search-placeholder":"Search day..."},null,8,["items","onSelect","modelValue"])])):_("",!0),e(j,null,{content:a(()=>[e(s(B),null,{default:a(()=>[e(s(S),{class:"bg-gray-100"},{default:a(()=>[e(s(h),null,{default:a(()=>[e(s(n),null,{default:a(()=>[r("#")]),_:1}),e(s(n),null,{default:a(()=>[r("Programme")]),_:1}),e(s(n),null,{default:a(()=>[r("Level")]),_:1}),e(s(n),null,{default:a(()=>[r("Day")]),_:1}),e(s(n),null,{default:a(()=>[r("Time")]),_:1}),e(s(n),null,{default:a(()=>[r("Type")]),_:1}),e(s(n),{class:"text-center"},{default:a(()=>[r("Status")]),_:1}),e(s(n),{class:"text-center"},{default:a(()=>[r("Action")]),_:1})]),_:1})]),_:1}),e(s(N),null,{default:a(()=>[t.$page.props.classes.data.length?_("",!0):(d(),f(s(h),{key:0},{default:a(()=>[e(s(i),{class:"text-center",colspan:"10"},{default:a(()=>[ee]),_:1})]),_:1})),(d(!0),g(y,null,M(t.$page.props.classes.data,(o,A)=>(d(),f(s(h),null,{default:a(()=>[e(s(i),{class:"cursor-pointer",onClick:p=>t.editClass(o.id)},{default:a(()=>[r(m(t.$page.props.classes.from+A),1)]),_:2},1032,["onClick"]),e(s(i),{class:"cursor-pointer",onClick:p=>t.editClass(o.id)},{default:a(()=>[r(m(o.programme_name),1)]),_:2},1032,["onClick"]),e(s(i),{class:"cursor-pointer",onClick:p=>t.editClass(o.id)},{default:a(()=>[r(m(o.level),1)]),_:2},1032,["onClick"]),e(s(i),{class:"cursor-pointer",onClick:p=>t.editClass(o.id)},{default:a(()=>[r(m(o.class_day),1)]),_:2},1032,["onClick"]),e(s(i),{class:"cursor-pointer",onClick:p=>t.editClass(o.id)},{default:a(()=>[r(m(s(v)(o.start_time).format("h:mm A"))+" - "+m(s(v)(o.end_time).format("h:mm A")),1)]),_:2},1032,["onClick"]),e(s(i),{class:"cursor-pointer",onClick:p=>t.editClass(o.id)},{default:a(()=>[r(m(o.type),1)]),_:2},1032,["onClick"]),e(s(i),{class:"text-center cursor-pointer",onClick:p=>t.editClass(o.id)},{default:a(()=>[u("span",{class:W(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==1?" bg-green-100 text-green-800":" bg-red-100 text-red-800"])},m(o.status==1?"Active":"Not Active"),3)]),_:2},1032,["onClick"]),e(s(i),{class:"text-center"},{default:a(()=>[e(P,null,{default:a(()=>[e(z,{"as-child":""},{default:a(()=>[e(C,{size:"icon",variant:"outline",class:"h-8 w-8"},{default:a(()=>[e(s(q),{class:"h-3.5 w-3.5"}),te]),_:1})]),_:1}),e(E,{align:"end"},{default:a(()=>[t.$page.props.can.edit_classes?(d(),f(k,{key:0,onClick:p=>t.editClass(o.id)},{default:a(()=>[r("Edit")]),_:2},1032,["onClick"])):_("",!0),t.$page.props.can.delete_classes?(d(),f(k,{key:1,onClick:p=>t.deleteClass(o.id)},{default:a(()=>[r("Delete")]),_:2},1032,["onClick"])):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),e(V,{page_data:t.$page.props.classes,params:t.params},null,8,["page_data","params"]),e(T,{open:t.confirmation.is_open,onClose:l[5]||(l[5]=o=>t.confirmation.is_open=!1),routeName:t.confirmation.route_name,id:t.confirmation.id},{title:a(()=>[r("Delete Class")]),description:a(()=>[r("Are you sure want to delete this class?")]),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{tt as default};