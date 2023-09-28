import{B as x}from"./Authenticated-cf6f3e2c.js";import{B as n}from"./Button-8060ba77.js";import{c as r,b as s,u as y,w as a,F as f,H as u,L as w,o as d,d as t,k as c,j as v,h as T,t as l}from"./app-abb14225.js";import{r as b}from"./TrashIcon-72817535.js";import{C as h}from"./ConfirmationModal-1504c52c.js";import{P as g}from"./Pagination-072387dc.js";import{x as k,I as D,y as B,S as C,g as $}from"./tabs-373db790.js";import"./ApplicationLogo-86d866bd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-9a0666f4.js";import"./TimeAgo-fee1d65d.js";import"./moment-fbc5633a.js";import"./transition-a8c9d21d.js";import"./use-resolve-button-type-a86385f3.js";const A={class:"py-4 px-4"},N={class:"overflow-x-auto"},L={class:"mx-auto"},M={class:"align-middle inline-block min-w-full"},O={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg px-1"},R={class:"flex py-2 justify-end"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},I={class:"min-w-full divide-y divide-gray-200"},V=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"3"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Age"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Language"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",width:"5"},"Action")])],-1),P={class:"bg-white divide-y divide-gray-200"},F={key:0},S=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),z=[S],E={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},J={class:"px-6 py-4 whitespace-nowrap"},K={class:"text-sm font-medium text-gray-900"},Q={class:"px-6 py-4 whitespace-nowrap"},U={class:"text-sm font-medium text-gray-900"},W={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},X={class:"flex justify-center"},Y={class:"flex pr-1"},Z={class:"flex pr-1"},tt={class:"flex"},et={components:{Head:u,ConfirmationModal:h,TrashIcon:b,Link:w,TabGroup:k,TabList:D,Tab:B,TabPanels:C,TabPanel:$,Pagination:g},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},props:{diagnostic_test_list:Object},methods:{handleClick(o){o.preventDefault()},viewDiagnosticTest(o){this.$inertia.get(route("dt.settings.details"),{dt_id:o})},editDiagnosticTest(o){this.$inertia.get(route("dt.settings.edit"),{dt_id:o})},deleteDiagnosticTest(o){this.confirmationTitle="Are you sure want to delete this diagnostic test?",this.confirmationText="All data for this diagnostic test will be erased permanently.",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="dt.settings.destroy",this.confirmationData=o,this.isOpen=!0}}},gt=Object.assign(et,{__name:"Index",setup(o){return(e,m)=>(d(),r(f,null,[s(y(u),{title:"Diagnostic Test"}),s(x,null,{header:a(()=>[]),default:a(()=>[t("div",A,[t("div",N,[t("div",L,[t("div",M,[t("div",O,[t("div",R,[s(n,{route:e.route("dt.settings.create")},{default:a(()=>[c("New Diagnostic Test")]),_:1},8,["route"])]),t("div",j,[t("table",I,[V,t("tbody",P,[e.$page.props.diagnostic_test_list.data.length?v("",!0):(d(),r("tr",F,z)),(d(!0),r(f,null,T(e.$page.props.diagnostic_test_list.data,(i,_)=>(d(),r("tr",{class:"hover:bg-gray-200",key:i.ID},[t("td",E,[t("div",H,l(++_),1)]),t("td",G,[t("div",q,l(i.name),1)]),t("td",J,[t("div",K,l(i.age),1)]),t("td",Q,[t("div",U,l(i.language),1)]),t("td",W,[t("div",X,[t("div",Y,[s(n,{buttonType:"blue",onClick:p=>e.viewDiagnosticTest(i.id)},{default:a(()=>[c(" View Details ")]),_:2},1032,["onClick"])]),t("div",Z,[s(n,{buttonType:"warning",onClick:p=>e.editDiagnosticTest(i.id)},{default:a(()=>[c(" Edit ")]),_:2},1032,["onClick"])]),t("div",tt,[s(n,{buttonType:"danger",onClick:p=>e.deleteDiagnosticTest(i.id)},{default:a(()=>[c(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])])]),s(g,{page_data:o.diagnostic_test_list},null,8,["page_data"]),s(h,{show:e.isOpen,onClose:m[0]||(m[0]=i=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:e.confirmationTitle,confirmationText:e.confirmationText,confirmationButton:e.confirmationButton,confirmationMethod:e.confirmationMethod,confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationTitle","confirmationText","confirmationButton","confirmationMethod","confirmationRoute","confirmationData"])])])])])])]),_:1})],64))}});export{gt as default};
