import{B as x}from"./Authenticated-9681e038.js";import{B as l}from"./Button-f72187c1.js";import{r as g}from"./PencilIcon-01100c1b.js";import{r as w}from"./SearchIcon-42d49860.js";import{r as y}from"./TrashIcon-1853562d.js";import{c as s,b as o,u as p,w as i,F as m,H as h,L as v,o as n,d as t,k as u,j as k,h as b,t as r}from"./app-8f0e3255.js";import{C as f}from"./ConfirmationModal-9cc5f88f.js";import{P as D}from"./Pagination-7649d7c1.js";import{h as B}from"./moment-fbc5633a.js";import"./ApplicationLogo-b621677c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-4e2af505.js";import"./TimeAgo-7bf59e41.js";import"./transition-dd54f341.js";const N={class:"py-4 px-4"},C={class:"overflow-x-auto"},T={class:"mx-auto"},$={class:"align-middle inline-block min-w-full"},F={class:"flex items-center space-x-2 justify-end pb-4 relative text-gray-400 focus-within:text-gray-600"},M={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},R={class:"min-w-full divide-y divide-gray-200"},A=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Title"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Folder Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date Upload"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),O={class:"bg-white divide-y divide-gray-200"},j={key:0},H=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),I=[H],L={class:"px-6 py-4 whitespace-nowrap"},V={class:"text-sm font-medium text-gray-700"},P={class:"px-6 py-4 whitespace-nowrap"},z={class:"text-sm font-medium text-gray-900"},S={class:"px-6 py-4 whitespace-nowrap"},E={class:"text-sm font-medium text-gray-900"},U={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm font-medium text-gray-900"},q={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},G={class:"flex justify-center space-x-2"},J={components:{SearchIcon:w,TrashIcon:y,PencilIcon:g,Head:h,Link:v,ConfirmationModal:f},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:""}}},watch:{},methods:{openNewTab(){window.open(route("math_manipulatives.play"),"_blank")},deleteFolder(d){this.confirmationRoute="math_manipulatives.configuration.delete",this.confirmationData=d,this.isOpen=!0}}},lt=Object.assign(J,{__name:"Index",setup(d){return(e,c)=>(n(),s(m,null,[o(p(h),{title:"Math Manipulatives"}),o(x,null,{header:i(()=>[]),default:i(()=>[t("div",N,[t("div",C,[t("div",T,[t("div",$,[t("div",F,[o(l,{route:e.route("math_manipulatives.configuration.create")},{default:i(()=>[u("New Math Manipulative")]),_:1},8,["route"])]),t("div",M,[t("table",R,[A,t("tbody",O,[e.$page.props.math_manipulatives.data.length?k("",!0):(n(),s("tr",j,I)),(n(!0),s(m,null,b(e.$page.props.math_manipulatives.data,(a,_)=>(n(),s("tr",{class:"hover:bg-gray-200",key:a.id},[t("td",L,[t("div",V,r(++_),1)]),t("td",P,[t("div",z,r(a.name),1)]),t("td",S,[t("div",E,r(a.folder_name),1)]),t("td",U,[t("div",Y,r(p(B)(a.created_at,"HH:mm:ss").format("d/m/Y")),1)]),t("td",q,[t("div",G,[o(l,{buttonType:"danger",onClick:K=>e.deleteFolder(a.id)},{default:i(()=>[u("Delete")]),_:2},1032,["onClick"])])])]))),128))])])]),o(D,{page_data:e.$page.props.math_manipulatives},null,8,["page_data"])])])]),o(f,{show:e.isOpen,onClose:c[0]||(c[0]=a=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{lt as default};