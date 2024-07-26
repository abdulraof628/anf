import{b6 as b,q as o,x as r,v as a,u,P as n,F as h,y as e,V as c,z as i,K as w,bv as k,C as D,G as l,t as f}from"./@vue-b5d553e1.js";import{B as $}from"./Authenticated-f12ae66a.js";import{B as m}from"./Button-a75e4165.js";import{r as C,a as B,b as M}from"./@heroicons-6bb93f0b.js";import{H as _,L as T}from"./@inertiajs-df65e401.js";import{C as g}from"./ConfirmationModal-d78f2deb.js";import{P as y}from"./Pagination-ab3fb2bd.js";import{h as U}from"./moment-a9aaa855.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";import"./@headlessui-1eabfa74.js";const I={class:"py-4 px-4"},A={key:0,class:"flex justify-end mb-3"},N=e("hr",{class:"my-3 border border-dashed border-gray-400"},null,-1),R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},O={class:"relative w-full"},V=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),j={class:"overflow-x-auto"},L={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},P={class:"min-w-full divide-y divide-gray-200"},S={class:"bg-gray-300"},Y=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name",-1),z=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Date Joined",-1),F=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status",-1),H={key:0,scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},q={class:"bg-white divide-y divide-gray-200"},E={key:0},G=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),J=[G],K={class:"px-6 py-4 whitespace-nowrap"},Z={class:"flex items-center"},Q={class:"flex-shrink-0 h-10 w-10"},W=["src"],X={class:"ml-4"},ee={class:"text-sm font-medium text-gray-900"},te={class:"text-sm text-gray-500"},se={class:"px-6 py-4 whitespace-nowrap"},oe={class:"text-sm text-gray-500"},re={class:"px-6 py-4 whitespace-nowrap"},ie={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},ae={key:0,class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ne={class:"flex justify-center space-x-2"},pe={components:{SearchIcon:C,TrashIcon:B,PencilIcon:M,ConfirmationModal:g,Head:_,Link:T,Pagination:y},props:{filter:Object},data(){return{isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},methods:{manageUser(p){this.$inertia.get(this.route("users.edit"),{user_id:p})},deleteUser(p){this.confirmationRoute="users.destroy",this.confirmationData=p,this.isOpen=!0},search(){this.$inertia.get(this.route("users"),this.params,{replace:!0,preserveState:!0})}}},ot=Object.assign(pe,{__name:"Index",setup(p){return(t,d)=>{const x=b("debounce");return o(),r(h,null,[a(u(_),{title:"Users"}),a($,null,{header:n(()=>[]),default:n(()=>[e("div",I,[t.$page.props.can.create_users?(o(),r("div",A,[a(m,{url:t.route("users.create")},{default:n(()=>[c("User Registration")]),_:1},8,["url"])])):i("",!0),N,e("div",R,[e("div",O,[V,w(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":d[0]||(d[0]=s=>t.params.search=s)},null,512),[[x,t.search,"800ms"],[k,t.params.search]])])]),e("div",j,[e("div",L,[e("table",P,[e("thead",S,[e("tr",null,[Y,z,F,t.$page.props.can.edit_users||t.$page.props.can.delete_users?(o(),r("th",H,"Action")):i("",!0)])]),e("tbody",q,[t.$page.props.user_list.data.length?i("",!0):(o(),r("tr",E,J)),(o(!0),r(h,null,D(t.$page.props.user_list.data,s=>(o(),r("tr",{class:"hover:bg-gray-200",key:s.ID},[e("td",K,[e("div",Z,[e("div",Q,[e("img",{class:"h-10 w-10 rounded-full",src:s.avatar,alt:""},null,8,W)]),e("div",X,[e("div",ee,l(s.display_name),1),e("div",te,l(s.email),1)])])]),e("td",se,[e("div",oe,l(u(U)(s.user_registered).format("DD/MM/YYYY")),1)]),e("td",re,[e("span",ie,l(s.user_status==0?"Active":"Not Active"),1)]),t.$page.props.can.edit_users||t.$page.props.can.delete_users?(o(),r("td",ae,[e("div",ne,[t.$page.props.can.edit_users?(o(),f(m,{key:0,buttonType:"blue",onClick:v=>t.manageUser(s.ID)},{default:n(()=>[c("Manage User")]),_:2},1032,["onClick"])):i("",!0),t.$page.props.can.delete_users?(o(),f(m,{key:1,buttonType:"danger",onClick:v=>t.deleteUser(s.ID)},{default:n(()=>[c("Delete")]),_:2},1032,["onClick"])):i("",!0)])])):i("",!0)]))),128))])]),a(y,{page_data:t.$page.props.user_list,params:t.params},null,8,["page_data","params"])])]),a(g,{show:t.isOpen,onClose:d[1]||(d[1]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete User",confirmationText:"Are you sure want to delete this user?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64)}}});export{ot as default};
