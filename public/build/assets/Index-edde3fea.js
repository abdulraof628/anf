import{B as d}from"./Authenticated-9681e038.js";import{c as s,b as r,u as m,w as l,F as p,H as c,L as u,o,d as t,n as _,j as i,m as b}from"./app-8f0e3255.js";import f from"./Table-da218ead.js";import{x as g,I as h,y,S as v,g as x}from"./tabs-aed0afe8.js";import"./ApplicationLogo-b621677c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-f72187c1.js";import"./XIcon-4e2af505.js";import"./TimeAgo-7bf59e41.js";import"./moment-fbc5633a.js";import"./ConfirmationModal-9cc5f88f.js";import"./transition-dd54f341.js";import"./Pagination-7649d7c1.js";import"./use-resolve-button-type-1be37fb3.js";const k={class:"py-4 px-4"},T={class:"overflow-x-auto"},w={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},C={class:"flex justify-start space-x-1 text-white"},$={class:"mt-4"},L={key:0},j={components:{Head:c,Link:u,TabGroup:g,TabList:h,Tab:y,TabPanels:v,TabPanel:x},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{currentTab(a){this.$inertia.get(route(a))}}},q=Object.assign(j,{__name:"Index",setup(a){return(e,n)=>(o(),s(p,null,[r(m(c),{title:"General Setting"}),r(d,null,{header:l(()=>[]),default:l(()=>[t("div",k,[t("div",T,[t("div",w,[t("div",B,[t("ul",C,[t("li",null,[e.$page.props.can.view_students?(o(),s("button",{key:0,onClick:n[0]||(n[0]=I=>e.currentTab("settings.class_types")),class:_(["inline-block px-4 py-2",e.route().current("settings.class_types")?"bg-white text-indigo-800 border-indigo-500 border-b-2":"bg-indigo-500 text-white border-indigo-500 border-t-2 hover:bg-indigo-700 hover:border-indigo-700"])},"Class Types",2)):i("",!0)])]),t("div",$,[e.route().current("settings.class_types")?(o(),s("div",L,[e.$page.props.can.view_students?(o(),b(f,{key:0})):i("",!0)])):i("",!0)])])])])])]),_:1})],64))}});export{q as default};