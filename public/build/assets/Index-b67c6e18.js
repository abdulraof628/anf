import{B as m}from"./Authenticated-2b94df58.js";import{o,c as s,a as n,u as d,w as l,F as p,H as c,L as u,d as t,n as _,q as i,s as f}from"./app-2cb814f6.js";import b from"./Table-60324013.js";import{m as g,p as h,x as y,I as v,y as x}from"./tabs-bc49c6a4.js";import"./ApplicationLogo-4d8d9123.js";import"./Button-375c20b5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-d4937228.js";import"./vue3-perfect-scrollbar-26fe73dc.js";import"./TimeAgo-79159604.js";import"./moment-a9aaa855.js";import"./ConfirmationModal-4e30a24c.js";import"./transition-f7e95242.js";import"./keyboard-5b23c67a.js";import"./Pagination-3fb4ee20.js";import"./use-resolve-button-type-20003b5a.js";const k={class:"py-4 px-4"},T={class:"overflow-x-auto"},w={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},C={class:"flex justify-start space-x-1 text-white"},$={class:"mt-4"},L={key:0},I={components:{Head:c,Link:u,TabGroup:g,TabList:h,Tab:y,TabPanels:v,TabPanel:x},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{currentTab(a){this.$inertia.get(route(a))}}},K=Object.assign(I,{__name:"Index",setup(a){return(e,r)=>(o(),s(p,null,[n(d(c),{title:"General Setting"}),n(m,null,{header:l(()=>[]),default:l(()=>[t("div",k,[t("div",T,[t("div",w,[t("div",B,[t("ul",C,[t("li",null,[e.$page.props.can.view_students?(o(),s("button",{key:0,onClick:r[0]||(r[0]=N=>e.currentTab("settings.class_types")),class:_(["inline-block px-4 py-2",e.route().current("settings.class_types")?"bg-white text-indigo-800 border-indigo-500 border-b-2":"bg-indigo-500 text-white border-indigo-500 border-t-2 hover:bg-indigo-700 hover:border-indigo-700"])},"Class Types",2)):i("",!0)])]),t("div",$,[e.route().current("settings.class_types")?(o(),s("div",L,[e.$page.props.can.view_students?(o(),f(b,{key:0})):i("",!0)])):i("",!0)])])])])])]),_:1})],64))}});export{K as default};
