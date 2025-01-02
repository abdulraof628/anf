import{B as D}from"./Authenticated-98036166.js";import{H as C,L as x}from"./@inertiajs-7f289881.js";import{P as y}from"./Pagination-4d474b9e.js";import{_ as k,d as w,e as n,c as p,a as N,b as _}from"./TableRow-75c58101.js";import{_ as H}from"./TableCaption-b69ad6e6.js";import{_ as L}from"./Card-a7869428.js";import{_ as P}from"./DeleteConfirmation-dd64c485.js";import{a as S}from"./@radix-icons-4975f794.js";import{C as h}from"./lucide-vue-next-53796c49.js";import{y as $,x as r,u as o,Q as t,F as b,be as v,bf as j,t as m,z as l,A as z,v as d,C as f,W as s,J as F,K as g,q as I}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ece3933f.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-c5f0f1fd.js";import"./DialogDescription-a3c26cdc.js";const E={class:"flex items-center justify-between"},R={class:"relative"},q={class:"flex items center justify-center space-x-2"},J={components:{Pagination:y,DeleteConfirmation:P,Head:C,Link:x,Table:k,TableBody:w,TableCaption:H,TableCell:n,TableHead:p,TableHeader:N,TableRow:_},data(){return{confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.$page.props.filter.search?this.$page.props.filter.search:""}}},methods:{editProgramme(u){this.$inertia.get(this.route("programmes.edit"),{programme_id:u})},deleteProgramme(u){this.confirmation.route_name="programmes.destroy",this.confirmation.id=u,this.confirmation.is_open=!0},search(){this.$inertia.get(this.route("programmes"),this.params,{replace:!0,preserveState:!0})}}},Re=Object.assign(J,{__name:"Index",setup(u){return(a,e)=>{const B=v("Input"),c=v("Button"),T=j("debounce");return m(),$(b,null,[r(o(C),{title:"Programmes"}),r(D,null,{header:t(()=>e[3]||(e[3]=[])),default:t(()=>[l("div",E,[l("div",R,[r(o(S),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),z(r(B,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:a.params.search,"onUpdate:modelValue":e[0]||(e[0]=i=>a.params.search=i)},null,8,["modelValue"]),[[T,a.search,"800ms"]])]),a.$page.props.can.create_programmes?(m(),d(c,{key:0,onClick:e[1]||(e[1]=i=>a.$inertia.get(a.route("programmes.create")))},{default:t(()=>[r(o(h),{class:"h-4 w-4"}),e[4]||(e[4]=l("span",{class:"ml-1 hidden sm:block"},"New Programme",-1))]),_:1})):f("",!0)]),r(L,null,{content:t(()=>[r(o(k),null,{default:t(()=>[r(o(N),{class:"bg-gray-100"},{default:t(()=>[r(o(_),null,{default:t(()=>[r(o(p),null,{default:t(()=>e[5]||(e[5]=[s("#")])),_:1}),r(o(p),null,{default:t(()=>e[6]||(e[6]=[s("Name")])),_:1}),r(o(p),null,{default:t(()=>e[7]||(e[7]=[s("Country")])),_:1}),r(o(p),{class:"text-center"},{default:t(()=>e[8]||(e[8]=[s("Status")])),_:1}),r(o(p),{class:"text-center"},{default:t(()=>e[9]||(e[9]=[s("Action")])),_:1})]),_:1})]),_:1}),r(o(w),null,{default:t(()=>[a.$page.props.programme_list.data.length?f("",!0):(m(),d(o(_),{key:0},{default:t(()=>[r(o(n),{class:"text-center",colspan:"10"},{default:t(()=>e[10]||(e[10]=[l("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(m(!0),$(b,null,F(a.$page.props.programme_list.data,(i,V)=>(m(),d(o(_),null,{default:t(()=>[r(o(n),null,{default:t(()=>[s(g(a.$page.props.programme_list.from+V),1)]),_:2},1024),r(o(n),null,{default:t(()=>[s(g(i.programme_name),1)]),_:2},1024),r(o(n),null,{default:t(()=>[s(g(i.country),1)]),_:2},1024),r(o(n),{class:"text-center"},{default:t(()=>[l("span",{class:I(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",i.status==1?" bg-green-100 text-green-800":" bg-red-100 text-red-800"])},g(i.status==1?"Active":"Not Active"),3)]),_:2},1024),r(o(n),{class:"text-center"},{default:t(()=>[l("div",q,[a.$page.props.can.edit_programmes?(m(),d(c,{key:0,variant:"outline",onClick:A=>a.editProgramme(i.id)},{default:t(()=>e[11]||(e[11]=[s("Edit")])),_:2},1032,["onClick"])):f("",!0),a.$page.props.can.delete_programmes?(m(),d(c,{key:1,variant:"destructive",onClick:A=>a.deleteProgramme(i.id)},{default:t(()=>e[12]||(e[12]=[s("Delete")])),_:2},1032,["onClick"])):f("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r(y,{page_data:a.$page.props.programme_list,params:a.params},null,8,["page_data","params"]),r(P,{open:a.confirmation.is_open,onClose:e[2]||(e[2]=i=>a.confirmation.is_open=!1),routeName:a.confirmation.route_name,id:a.confirmation.id},{title:t(()=>e[13]||(e[13]=[s("Delete Programme")])),description:t(()=>e[14]||(e[14]=[s("Are you sure want to delete this programme?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Re as default};
