import{B as x}from"./Authenticated-00519a95.js";import{B as p}from"./Button-7e5ebb17.js";import{r as g}from"./PencilIcon-ece1a67b.js";import{r as y}from"./SearchIcon-bfeb6aa6.js";import{r as w}from"./TrashIcon-a14bc0af.js";import{o as s,c as i,a as o,u as l,w as n,F as m,H as h,L as v,d as t,g as u,q as k,e as b,t as r}from"./app-b0ada57f.js";import{C as f}from"./ConfirmationModal-2329c22a.js";import{P as D}from"./Pagination-ac17b560.js";import{h as M}from"./moment-a9aaa855.js";import"./ApplicationLogo-5609d7e8.js";import"./XIcon-72ef4a27.js";import"./vue3-perfect-scrollbar-f1bcd31f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-fd223f9f.js";import"./transition-180dc3ab.js";import"./keyboard-462b33c7.js";const B={class:"py-4 px-4"},N={class:"overflow-x-auto"},C={class:"m-3"},T={class:"align-middle inline-block min-w-full"},$={class:"flex items-center space-x-2 justify-end pb-4 relative text-gray-400 focus-within:text-gray-600"},F={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},R={class:"min-w-full divide-y divide-gray-200"},O=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Title"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Folder Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date Upload"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},H={key:0},I=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),L=[I],V={class:"px-6 py-4 whitespace-nowrap"},j={class:"text-sm font-medium text-gray-700"},P={class:"px-6 py-4 whitespace-nowrap"},z={class:"text-sm font-medium text-gray-900"},S={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},E={class:"px-6 py-4 whitespace-nowrap"},U={class:"text-sm font-medium text-gray-900"},Y={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},G={class:"flex justify-center space-x-2"},J={components:{SearchIcon:y,TrashIcon:w,PencilIcon:g,Head:h,Link:v,ConfirmationModal:f},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:""}}},watch:{},methods:{openNewTab(){window.open(route("math_manipulatives.play"),"_blank")},deleteFolder(d){this.confirmationRoute="math_manipulatives.configuration.delete",this.confirmationData=d,this.isOpen=!0}}},mt=Object.assign(J,{__name:"Index",setup(d){return(e,c)=>(s(),i(m,null,[o(l(h),{title:"Math Manipulatives"}),o(x,null,{header:n(()=>[]),default:n(()=>[t("div",B,[t("div",N,[t("div",C,[t("div",T,[t("div",$,[o(p,{route:e.route("math_manipulatives.configuration.create")},{default:n(()=>[u("New Math Manipulative")]),_:1},8,["route"])]),t("div",F,[t("table",R,[O,t("tbody",A,[e.$page.props.math_manipulatives.data.length?k("",!0):(s(),i("tr",H,L)),(s(!0),i(m,null,b(e.$page.props.math_manipulatives.data,(a,_)=>(s(),i("tr",{class:"hover:bg-gray-200",key:a.id},[t("td",V,[t("div",j,r(++_),1)]),t("td",P,[t("div",z,r(a.name),1)]),t("td",S,[t("div",q,r(a.folder_name),1)]),t("td",E,[t("div",U,r(l(M)(a.created_at,"HH:mm:ss").format("DD/MM/Y")),1)]),t("td",Y,[t("div",G,[o(p,{buttonType:"danger",onClick:K=>e.deleteFolder(a.id)},{default:n(()=>[u("Delete")]),_:2},1032,["onClick"])])])]))),128))])])]),o(D,{page_data:e.$page.props.math_manipulatives,params:e.params},null,8,["page_data","params"])])])]),o(f,{show:e.isOpen,onClose:c[0]||(c[0]=a=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Math Manipulative",confirmationText:"Are you sure want to delete this Math Manipulative?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{mt as default};
