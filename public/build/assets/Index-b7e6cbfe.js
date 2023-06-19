import{c,a as r,u as d,w as i,F as h,H as _,L as g,v as k,o,b as e,e as D,l as $,p,i as u,h as l,r as B,t as m,k as C}from"./app-e501deca.js";import{B as T}from"./Authenticated-e419867d.js";import{B as f}from"./Button-c51487b6.js";import{r as U}from"./PencilIcon-590e89ad.js";import{r as y}from"./SearchIcon-0cd5810b.js";import{r as I}from"./TrashIcon-d2223331.js";import{C as x}from"./ConfirmationModal-77b49e5a.js";import{P as v}from"./Pagination-53775274.js";import"./ApplicationLogo-c140f20f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-1fd6dac0.js";import"./transition-23404d95.js";const A={class:"py-4 px-4"},N={class:"overflow-x-auto"},R={class:"mx-auto"},O={class:"align-middle inline-block min-w-full px-2"},M={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600 justify-between"},S={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},V={class:"min-w-full divide-y divide-gray-200"},j=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),L={class:"bg-white divide-y divide-gray-200"},F={key:0},P=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),z=[P],E={class:"px-6 py-4 whitespace-nowrap"},H={class:"flex items-center"},q={class:"flex-shrink-0 h-10 w-10"},G=["src"],J={class:"ml-4"},K={class:"text-sm font-medium text-gray-900"},Q={class:"text-sm text-gray-500"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},Y={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},Z={class:"flex justify-center space-x-2"},ee={components:{SearchIcon:y,TrashIcon:I,PencilIcon:U,ConfirmationModal:x,Head:_,Link:g,Pagination:v},props:{filter:Object},data(){return{isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},methods:{manageUser(a){this.$inertia.get(this.route("users.edit"),{user_id:a})},deleteUser(a){this.confirmationRoute="users.destroy",this.confirmationData=a,this.isOpen=!0},search(a){k.debounce(t=>"400ms")(10),this.$inertia.get(this.route("users"),this.params,{replace:!0,preserveState:!0})}}},me=Object.assign(ee,{__name:"Index",setup(a){return(t,n)=>{const b=C("debounce");return o(),c(h,null,[r(d(_),{title:"Users"}),r(T,null,{header:i(()=>[]),default:i(()=>[e("div",A,[e("div",N,[e("div",R,[e("div",O,[e("div",M,[r(d(y),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:21%"}),D(e("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":n[0]||(n[0]=s=>t.params.search=s),placeholder:"Search"},null,512),[[$,t.params.search],[b,t.search]]),t.$page.props.can.cp_users_create_access?(o(),p(d(g),{key:0,href:t.route("users.create"),class:"py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold"},{default:i(()=>[u("User Registration")]),_:1},8,["href"])):l("",!0)]),e("div",S,[e("table",V,[j,e("tbody",L,[t.$page.props.user_list.data.length?l("",!0):(o(),c("tr",F,z)),(o(!0),c(h,null,B(t.$page.props.user_list.data,s=>(o(),c("tr",{class:"hover:bg-gray-200",key:s.ID},[e("td",E,[e("div",H,[e("div",q,[e("img",{class:"h-10 w-10 rounded-full",src:s.avatar,alt:""},null,8,G)]),e("div",J,[e("div",K,m(s.display_name),1),e("div",Q,m(s.email),1)])])]),e("td",W,[e("span",X,m(s.user_status==0?"Active":"Not Active"),1)]),e("td",Y,[e("div",Z,[t.$page.props.can.cp_users_edit_access?(o(),p(f,{key:0,buttonType:"blue",onClick:w=>t.manageUser(s.ID)},{default:i(()=>[u("Manage User")]),_:2},1032,["onClick"])):l("",!0),t.$page.props.can.cp_users_delete_access?(o(),p(f,{key:1,buttonType:"danger",onClick:w=>t.deleteUser(s.ID)},{default:i(()=>[u("Delete")]),_:2},1032,["onClick"])):l("",!0)])])]))),128))])]),r(v,{page_data:t.$page.props.user_list},null,8,["page_data"])])])])]),r(x,{show:t.isOpen,onClose:n[1]||(n[1]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete User",confirmationText:"Are you sure want to delete this user?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64)}}});export{me as default};
