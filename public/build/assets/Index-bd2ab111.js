import{B as x,r as g}from"./Authenticated-e085fb96.js";import{B as r}from"./Button-9c885bf2.js";import{r as y}from"./PencilIcon-fcfbf704.js";import{r as v}from"./SearchIcon-0a674774.js";import{r as w}from"./TrashIcon-ee92f72a.js";import{c as l,b as o,u as b,w as n,F as u,H as f,o as d,d as e,k as c,j as k,h as C,t as m,n as R}from"./app-698f1bce.js";import{C as _}from"./ConfirmationModal-f0b85eb3.js";import"./ApplicationLogo-1ffedc06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-718b998e.js";import"./default.css_vue_type_style_index_0_src_true_lang-57be4c75.js";import"./transition-b20a6372.js";const $={class:"py-4 px-4"},B={class:"overflow-x-auto"},D={class:"mx-auto"},A={class:"align-middle inline-block w-full lg:w-1/2 px-2"},T={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600"},N={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},I={class:"min-w-full divide-y divide-gray-200"},O=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Group"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),P={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},V={key:0},j=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),z=[j],E={class:"px-2 py-3"},F={class:"flex items-center"},M={class:"ml-4"},S={class:"text-sm font-medium text-gray-900"},H={class:"px-2 py-3"},L={class:"flex items-center"},G={class:"ml-4"},q={class:"text-sm font-medium text-gray-900"},J={class:"px-2 py-3 text-center"},K={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},Q={class:"flex justify-center space-x-2"},U={components:{SearchIcon:v,TrashIcon:w,PencilIcon:y,ChevronRightIcon:g,ConfirmationModal:_,Head:f},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:""}},methods:{addRole(){this.$inertia.get(route("roles.create"))},deleteRole(i){this.isOpen=!0,this.confirmationData=i},editRole(i){this.$inertia.get(route("roles.edit"),{role_id:i})},assignPermissions(i){this.$inertia.get(route("roles.assign_pemissions"),{role_id:i})}}},le=Object.assign(U,{__name:"Index",setup(i){return(t,a)=>(d(),l(u,null,[o(b(f),{title:"Roles"}),o(x,null,{header:n(()=>[]),default:n(()=>[e("div",$,[e("div",B,[e("div",D,[e("div",A,[e("div",T,[o(r,{onClick:a[0]||(a[0]=s=>t.addRole())},{default:n(()=>[c(" Add Role ")]),_:1})]),e("div",N,[e("table",I,[O,e("tbody",P,[t.$page.props.roles.length?k("",!0):(d(),l("tr",V,z)),(d(!0),l(u,null,C(t.$page.props.roles,(s,h)=>(d(),l("tr",{class:"hover:bg-gray-200",key:h},[e("td",E,[e("div",F,[e("div",M,[e("div",S,m(s.display_name),1)])])]),e("td",H,[e("div",L,[e("div",G,[e("div",q,m(s.role_group_name),1)])])]),e("td",J,[e("span",{class:R(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},m(s.status==1?"Active":"Not Active"),3)]),e("td",K,[e("div",Q,[o(r,{buttonType:"warning",onClick:p=>t.editRole(s.id),title:"Edit Role"},{default:n(()=>[c(" Edit ")]),_:2},1032,["onClick"]),o(r,{buttonType:"danger",onClick:p=>t.deleteRole(s.id),title:"Delete"},{default:n(()=>[c(" Delete ")]),_:2},1032,["onClick"]),o(r,{buttonType:"blue",title:"Assign Permissions",onClick:p=>t.assignPermissions(s.id)},{default:n(()=>[c(" Permissions ")]),_:2},1032,["onClick"])])])]))),128))])])])])])]),o(_,{show:t.isOpen,onClose:a[1]||(a[1]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Role",confirmationText:"Are you sure want to delete this role?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:"roles.destroy",confirmationData:t.confirmationData},null,8,["show","confirmationData"])])]),_:1})],64))}});export{le as default};
