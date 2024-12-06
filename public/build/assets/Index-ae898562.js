import{B as V}from"./Authenticated-69dc7077.js";import{h as I}from"./moment-a9aaa855.js";import{H as k,L as A}from"./@inertiajs-7f289881.js";import{P as y}from"./Pagination-1883d9b0.js";import{_ as C,d as D,e as m,c as u,a as w,b as c}from"./TableRow-db7e0a98.js";import{_ as j}from"./TableCaption-811b2367.js";import{_ as H}from"./Card-c810b5f4.js";import{_ as B}from"./DeleteConfirmation-28cda781.js";import{a as L}from"./@radix-icons-4975f794.js";import{C as Y}from"./lucide-vue-next-53796c49.js";import{y as $,x as r,u as s,Q as t,F as v,be as b,bf as F,t as n,z as l,A as M,v as p,C as d,W as a,J as O,K as f}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-85118abc.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-b6fa7a4c.js";import"./DialogDescription-d422265e.js";const P={class:"flex items-center justify-between"},R={class:"relative"},S={class:"flex flex-col"},z={class:"flex items center justify-center space-x-2"},E={components:{Pagination:y,DeleteConfirmation:B,Head:k,Link:A,Table:C,TableBody:D,TableCaption:j,TableCell:m,TableHead:u,TableHeader:w,TableRow:c},props:{filter:Object},data(){return{confirmation:{is_open:!1,route_name:"",id:""},isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},methods:{manageUser(_){this.$inertia.get(this.route("users.edit"),{user_id:_})},deleteUser(_){this.confirmation.route_name="users.destroy",this.confirmation.id=_,this.confirmation.is_open=!0},search(){this.$inertia.get(this.route("users"),this.params,{replace:!0,preserveState:!0})}}},Se=Object.assign(E,{__name:"Index",setup(_){return(o,e)=>{const T=b("Input"),g=b("Button"),N=F("debounce");return n(),$(v,null,[r(s(k),{title:"Users"}),r(V,null,{default:t(()=>[l("div",P,[l("div",R,[r(s(L),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),M(r(T,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:o.params.search,"onUpdate:modelValue":e[0]||(e[0]=i=>o.params.search=i)},null,8,["modelValue"]),[[N,o.search,"800ms"]])]),o.$page.props.can.create_users?(n(),p(g,{key:0,onClick:e[1]||(e[1]=i=>o.$inertia.get(o.route("users.create")))},{default:t(()=>[r(s(Y),{class:"h-4 w-4"}),e[3]||(e[3]=l("span",{class:"ml-1 hidden sm:block"},"New User",-1))]),_:1})):d("",!0)]),r(H,null,{content:t(()=>[r(s(C),null,{default:t(()=>[r(s(w),{class:"bg-gray-100"},{default:t(()=>[r(s(c),null,{default:t(()=>[r(s(u),null,{default:t(()=>e[4]||(e[4]=[a("#")])),_:1}),r(s(u),null,{default:t(()=>e[5]||(e[5]=[a("Name")])),_:1}),r(s(u),null,{default:t(()=>e[6]||(e[6]=[a("Username")])),_:1}),r(s(u),null,{default:t(()=>e[7]||(e[7]=[a("Date Joined")])),_:1}),o.$page.props.can.edit_users||o.$page.props.can.delete_users?(n(),p(s(u),{key:0,class:"text-center"},{default:t(()=>e[8]||(e[8]=[a("Action")])),_:1})):d("",!0)]),_:1})]),_:1}),r(s(D),null,{default:t(()=>[o.$page.props.user_list.data.length?d("",!0):(n(),p(s(c),{key:0},{default:t(()=>[r(s(m),{class:"text-center",colspan:"10"},{default:t(()=>e[9]||(e[9]=[l("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(n(!0),$(v,null,O(o.$page.props.user_list.data,(i,U)=>(n(),p(s(c),null,{default:t(()=>[r(s(m),null,{default:t(()=>[a(f(o.$page.props.user_list.from+U),1)]),_:2},1024),r(s(m),null,{default:t(()=>[l("div",S,[l("div",null,f(i.display_name),1),l("small",null,f(i.user_email),1)])]),_:2},1024),r(s(m),null,{default:t(()=>[a(f(i.user_login),1)]),_:2},1024),r(s(m),null,{default:t(()=>[a(f(s(I)(i.user_registered).format("DD/MM/YYYY")),1)]),_:2},1024),r(s(m),{class:"text-center"},{default:t(()=>[l("div",z,[o.$page.props.can.edit_users?(n(),p(g,{key:0,variant:"outline",onClick:h=>o.manageUser(i.ID)},{default:t(()=>e[10]||(e[10]=[a("Edit")])),_:2},1032,["onClick"])):d("",!0),o.$page.props.can.delete_users?(n(),p(g,{key:1,variant:"destructive",onClick:h=>o.deleteUser(i.ID)},{default:t(()=>e[11]||(e[11]=[a("Delete")])),_:2},1032,["onClick"])):d("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r(y,{page_data:o.$page.props.user_list,params:o.params},null,8,["page_data","params"]),r(B,{open:o.confirmation.is_open,onClose:e[2]||(e[2]=i=>o.confirmation.is_open=!1),routeName:o.confirmation.route_name,id:o.confirmation.id},{title:t(()=>e[12]||(e[12]=[a("Delete User")])),description:t(()=>e[13]||(e[13]=[a("Are you sure want to delete this user?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Se as default};
