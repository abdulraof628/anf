import{B as D}from"./Authenticated-bbe12484.js";import{H as v,L as S}from"./@inertiajs-7f289881.js";import{P as y}from"./Pagination-1244741a.js";import{_ as k,d as w,e as i,c as p,a as N,b as c}from"./TableRow-0b515674.js";import{_ as H}from"./TableCaption-7c420fef.js";import{_ as L}from"./Card-20f395ce.js";import{_ as B}from"./DeleteConfirmation-fed87211.js";import{a as j}from"./@radix-icons-4975f794.js";import{C as z}from"./lucide-vue-next-53796c49.js";import{y as $,x as r,u as o,Q as t,F as C,be as b,bf as F,t as l,z as m,A as I,v as d,C as _,W as s,J as P,K as u,q as E}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";const R={class:"flex items-center justify-between space-x-1"},h={class:"relative"},q={class:"flex items center justify-center space-x-2"},J={components:{Pagination:y,DeleteConfirmation:B,Head:v,Link:S,Table:k,TableBody:w,TableCaption:H,TableCell:i,TableHead:p,TableHeader:N,TableRow:c},data(){return{confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.$page.props.filter.search?this.$page.props.filter.search:""}}},methods:{deleteCentre(f){this.confirmation.route_name="centres.destroy",this.confirmation.id=f,this.confirmation.is_open=!0},editCentre(f){this.$inertia.get(route("centres.edit"),{centre_id:f},{preserveState:!0})},search(){this.$inertia.get(this.route("centres"),this.params,{replace:!0,preserveState:!0})}}},he=Object.assign(J,{__name:"Index",setup(f){return(a,e)=>{const A=b("Input"),g=b("Button"),T=F("debounce");return l(),$(C,null,[r(o(v),{title:"Centres"}),r(D,null,{header:t(()=>e[3]||(e[3]=[])),default:t(()=>[m("div",R,[m("div",h,[r(o(j),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),I(r(A,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:a.params.search,"onUpdate:modelValue":e[0]||(e[0]=n=>a.params.search=n)},null,8,["modelValue"]),[[T,a.search,"800ms"]])]),a.$page.props.can.create_centres?(l(),d(g,{key:0,onClick:e[1]||(e[1]=n=>a.$inertia.get(a.route("centres.create")))},{default:t(()=>[r(o(z),{class:"h-4 w-4"}),e[4]||(e[4]=m("span",{class:"ml-1 hidden sm:block"},"New Centre",-1))]),_:1})):_("",!0)]),r(L,null,{content:t(()=>[r(o(k),null,{default:t(()=>[r(o(N),{class:"bg-gray-100"},{default:t(()=>[r(o(c),null,{default:t(()=>[r(o(p),null,{default:t(()=>e[5]||(e[5]=[s("#")])),_:1}),r(o(p),null,{default:t(()=>e[6]||(e[6]=[s("Name")])),_:1}),r(o(p),null,{default:t(()=>e[7]||(e[7]=[s("Address")])),_:1}),r(o(p),null,{default:t(()=>e[8]||(e[8]=[s("Country")])),_:1}),r(o(p),{class:"text-center"},{default:t(()=>e[9]||(e[9]=[s("Status")])),_:1}),r(o(p),{class:"text-center"},{default:t(()=>e[10]||(e[10]=[s("Action")])),_:1})]),_:1})]),_:1}),r(o(w),null,{default:t(()=>[a.$page.props.centres.data.length?_("",!0):(l(),d(o(c),{key:0},{default:t(()=>[r(o(i),{class:"text-center",colspan:"10"},{default:t(()=>e[11]||(e[11]=[m("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(l(!0),$(C,null,P(a.$page.props.centres.data,(n,V)=>(l(),d(o(c),null,{default:t(()=>[r(o(i),null,{default:t(()=>[s(u(a.$page.props.centres.from+V),1)]),_:2},1024),r(o(i),null,{default:t(()=>[s(u(n.centre_name),1)]),_:2},1024),r(o(i),null,{default:t(()=>[s(u(n.centre_address?n.centre_address:"Not Available"),1)]),_:2},1024),r(o(i),null,{default:t(()=>[s(u(n.country_name?n.country_name:"Not Set"),1)]),_:2},1024),r(o(i),{class:"text-center"},{default:t(()=>[m("span",{class:E(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap",n.centre_status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},u(n.centre_status==1?"Active":"Not Active"),3)]),_:2},1024),r(o(i),{class:"text-center"},{default:t(()=>[m("div",q,[a.$page.props.can.edit_centres?(l(),d(g,{key:0,variant:"outline",onClick:x=>a.editCentre(n.centre_id)},{default:t(()=>e[12]||(e[12]=[s("Edit")])),_:2},1032,["onClick"])):_("",!0),a.$page.props.can.delete_centres?(l(),d(g,{key:1,variant:"destructive",onClick:x=>a.deleteCentre(n.centre_id)},{default:t(()=>e[13]||(e[13]=[s("Delete")])),_:2},1032,["onClick"])):_("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r(y,{page_data:a.$page.props.centres,params:a.params},null,8,["page_data","params"]),r(B,{open:a.confirmation.is_open,onClose:e[2]||(e[2]=n=>a.confirmation.is_open=!1),routeName:a.confirmation.route_name,id:a.confirmation.id},{title:t(()=>e[14]||(e[14]=[s("Delete Centre")])),description:t(()=>e[15]||(e[15]=[s("Are you sure want to delete this centre?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{he as default};
