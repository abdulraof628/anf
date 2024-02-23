import{r as w,o,c as r,a as i,u as m,w as n,F as h,H as _,L as b,d as e,g as p,p as a,h as k,v as D,e as $,t as l,q as f}from"./app-832976dc.js";import{B as C}from"./Authenticated-6a4c8e09.js";import{B as u}from"./Button-625852c6.js";import{r as B}from"./PencilIcon-5b44b515.js";import{r as M}from"./SearchIcon-83fd6c82.js";import{r as T}from"./TrashIcon-414f9a5e.js";import{C as g}from"./ConfirmationModal-3cc54a8a.js";import{P as y}from"./Pagination-fc700407.js";import{h as U}from"./moment-fbc5633a.js";import"./ApplicationLogo-61560844.js";import"./XIcon-fabadbaa.js";import"./toggle-bf70d7bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-d3ec02a4.js";import"./use-outside-click-0c5eddc6.js";const I={class:"py-4 px-4"},A={key:0,class:"flex justify-end mb-3"},N=e("hr",{class:"my-3 border border-dashed border-gray-400"},null,-1),R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},O={class:"relative w-full"},j=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),L={class:"overflow-x-auto"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},Y={class:"bg-gray-300"},F=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name",-1),P=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Date Joined",-1),z=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status",-1),H={key:0,scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},q={class:"bg-white divide-y divide-gray-200"},E={key:0},J=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),Z=[J],G={class:"px-6 py-4 whitespace-nowrap"},K={class:"flex items-center"},Q={class:"flex-shrink-0 h-10 w-10"},W=["src"],X={class:"ml-4"},ee={class:"text-sm font-medium text-gray-900"},te={class:"text-sm text-gray-500"},se={class:"px-6 py-4 whitespace-nowrap"},oe={class:"text-sm text-gray-500"},re={class:"px-6 py-4 whitespace-nowrap"},ae={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},ie={key:0,class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ne={class:"flex justify-center space-x-2"},de={components:{SearchIcon:M,TrashIcon:T,PencilIcon:B,ConfirmationModal:g,Head:_,Link:b,Pagination:y},props:{filter:Object},data(){return{isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},methods:{manageUser(d){this.$inertia.get(this.route("users.edit"),{user_id:d})},deleteUser(d){this.confirmationRoute="users.destroy",this.confirmationData=d,this.isOpen=!0},search(){this.$inertia.get(this.route("users"),this.params,{replace:!0,preserveState:!0})}}},De=Object.assign(de,{__name:"Index",setup(d){return(t,c)=>{const x=w("debounce");return o(),r(h,null,[i(m(_),{title:"Users"}),i(C,null,{header:n(()=>[]),default:n(()=>[e("div",I,[t.$page.props.can.create_users?(o(),r("div",A,[i(u,{route:t.route("users.create")},{default:n(()=>[p("User Registration")]),_:1},8,["route"])])):a("",!0),N,e("div",R,[e("div",O,[j,k(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":c[0]||(c[0]=s=>t.params.search=s)},null,512),[[x,t.search,"800ms"],[D,t.params.search]])])]),e("div",L,[e("div",V,[e("table",S,[e("thead",Y,[e("tr",null,[F,P,z,t.$page.props.can.edit_users||t.$page.props.can.delete_users?(o(),r("th",H,"Action")):a("",!0)])]),e("tbody",q,[t.$page.props.user_list.data.length?a("",!0):(o(),r("tr",E,Z)),(o(!0),r(h,null,$(t.$page.props.user_list.data,s=>(o(),r("tr",{class:"hover:bg-gray-200",key:s.ID},[e("td",G,[e("div",K,[e("div",Q,[e("img",{class:"h-10 w-10 rounded-full",src:s.avatar,alt:""},null,8,W)]),e("div",X,[e("div",ee,l(s.display_name),1),e("div",te,l(s.email),1)])])]),e("td",se,[e("div",oe,l(m(U)(s.user_registered).format("DD/MM/YYYY")),1)]),e("td",re,[e("span",ae,l(s.user_status==0?"Active":"Not Active"),1)]),t.$page.props.can.edit_users||t.$page.props.can.delete_users?(o(),r("td",ie,[e("div",ne,[t.$page.props.can.edit_users?(o(),f(u,{key:0,buttonType:"blue",onClick:v=>t.manageUser(s.ID)},{default:n(()=>[p("Manage User")]),_:2},1032,["onClick"])):a("",!0),t.$page.props.can.delete_users?(o(),f(u,{key:1,buttonType:"danger",onClick:v=>t.deleteUser(s.ID)},{default:n(()=>[p("Delete")]),_:2},1032,["onClick"])):a("",!0)])])):a("",!0)]))),128))])]),i(y,{page_data:t.$page.props.user_list,params:t.params},null,8,["page_data","params"])])]),i(g,{show:t.isOpen,onClose:c[1]||(c[1]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete User",confirmationText:"Are you sure want to delete this user?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64)}}});export{De as default};
