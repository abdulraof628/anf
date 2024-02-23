import{B as y,r as v}from"./Authenticated-6a4c8e09.js";import{B as l}from"./Button-625852c6.js";import{r as k}from"./PencilIcon-5b44b515.js";import{r as w}from"./SearchIcon-83fd6c82.js";import{r as b}from"./TrashIcon-414f9a5e.js";import{o,c as d,a as m,u as $,w as n,F as _,H as g,d as e,q as c,g as p,p as r,e as C,t as u,n as R}from"./app-832976dc.js";import{C as h}from"./ConfirmationModal-3cc54a8a.js";import"./ApplicationLogo-61560844.js";import"./XIcon-fabadbaa.js";import"./toggle-bf70d7bf.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-d3ec02a4.js";import"./use-outside-click-0c5eddc6.js";const B={class:"py-4 px-4"},D={class:"overflow-x-auto"},A={class:"m-3"},T={class:"align-middle inline-block w-full lg:w-1/2 px-2"},N={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600"},I={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},O={class:"min-w-full divide-y divide-gray-200"},P=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Group"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),V={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},z={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),F=[E],M={class:"px-2 py-3"},S={class:"flex items-center"},j={class:"ml-4"},H={class:"text-sm font-medium text-gray-900"},L={class:"px-2 py-3"},q={class:"flex items-center"},G={class:"ml-4"},J={class:"text-sm font-medium text-gray-900"},K={class:"px-2 py-3 text-center"},Q={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},U={class:"flex justify-center space-x-2"},W={components:{SearchIcon:w,TrashIcon:b,PencilIcon:k,ChevronRightIcon:v,ConfirmationModal:h,Head:g},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:""}},methods:{addRole(){this.$inertia.get(route("roles.create"))},deleteRole(i){this.isOpen=!0,this.confirmationData=i},editRole(i){this.$inertia.get(route("roles.edit"),{role_id:i})},assignPermissions(i){this.$inertia.get(route("roles.assign_pemissions"),{role_id:i})}}},pe=Object.assign(W,{__name:"Index",setup(i){return(t,a)=>(o(),d(_,null,[m($(g),{title:"Roles"}),m(y,null,{header:n(()=>[]),default:n(()=>[e("div",B,[e("div",D,[e("div",A,[e("div",T,[e("div",N,[t.$page.props.can.create_roles?(o(),c(l,{key:0,onClick:a[0]||(a[0]=s=>t.addRole())},{default:n(()=>[p(" Add Role ")]),_:1})):r("",!0)]),e("div",I,[e("table",O,[P,e("tbody",V,[t.$page.props.roles.length?r("",!0):(o(),d("tr",z,F)),(o(!0),d(_,null,C(t.$page.props.roles,(s,x)=>(o(),d("tr",{class:"hover:bg-gray-200",key:x},[e("td",M,[e("div",S,[e("div",j,[e("div",H,u(s.display_name),1)])])]),e("td",L,[e("div",q,[e("div",G,[e("div",J,u(s.role_group_name),1)])])]),e("td",K,[e("span",{class:R(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},u(s.status==1?"Active":"Not Active"),3)]),e("td",Q,[e("div",U,[t.$page.props.can.edit_roles?(o(),c(l,{key:0,buttonType:"warning",onClick:f=>t.editRole(s.id),title:"Edit Role"},{default:n(()=>[p(" Edit ")]),_:2},1032,["onClick"])):r("",!0),t.$page.props.can.delete_roles?(o(),c(l,{key:1,buttonType:"danger",onClick:f=>t.deleteRole(s.id),title:"Delete"},{default:n(()=>[p(" Delete ")]),_:2},1032,["onClick"])):r("",!0),t.$page.props.can.manage_roles?(o(),c(l,{key:2,buttonType:"blue",title:"Assign Permissions",onClick:f=>t.assignPermissions(s.id)},{default:n(()=>[p(" Permissions ")]),_:2},1032,["onClick"])):r("",!0)])])]))),128))])])])])])]),m(h,{show:t.isOpen,onClose:a[1]||(a[1]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Role",confirmationText:"Are you sure want to delete this role?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:"roles.destroy",confirmationData:t.confirmationData},null,8,["show","confirmationData"])])]),_:1})],64))}});export{pe as default};
