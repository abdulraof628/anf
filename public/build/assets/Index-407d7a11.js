import{B as d}from"./Authenticated-f745d60b.js";import{o,c as s,a as r,u as m,w as l,F as p,H as c,L as u,d as t,n as _,p as i,q as f}from"./app-c421d3e7.js";import b from"./Table-9f490ac0.js";import{x as g,I as h,y,S as v,g as x}from"./tabs-f9daa042.js";import"./ApplicationLogo-1f330f34.js";import"./Button-07ccc6ef.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-b4518c92.js";import"./toggle-96d0cfb9.js";import"./moment-fbc5633a.js";import"./ConfirmationModal-17e3c849.js";import"./transition-b2ac3fd4.js";import"./Pagination-e9e95aae.js";import"./use-resolve-button-type-59579a81.js";const k={class:"py-4 px-4"},T={class:"overflow-x-auto"},w={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},C={class:"flex justify-start space-x-1 text-white"},$={class:"mt-4"},L={key:0},I={components:{Head:c,Link:u,TabGroup:g,TabList:h,Tab:y,TabPanels:v,TabPanel:x},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{currentTab(a){this.$inertia.get(route(a))}}},R=Object.assign(I,{__name:"Index",setup(a){return(e,n)=>(o(),s(p,null,[r(m(c),{title:"General Setting"}),r(d,null,{header:l(()=>[]),default:l(()=>[t("div",k,[t("div",T,[t("div",w,[t("div",B,[t("ul",C,[t("li",null,[e.$page.props.can.view_students?(o(),s("button",{key:0,onClick:n[0]||(n[0]=N=>e.currentTab("settings.class_types")),class:_(["inline-block px-4 py-2",e.route().current("settings.class_types")?"bg-white text-indigo-800 border-indigo-500 border-b-2":"bg-indigo-500 text-white border-indigo-500 border-t-2 hover:bg-indigo-700 hover:border-indigo-700"])},"Class Types",2)):i("",!0)])]),t("div",$,[e.route().current("settings.class_types")?(o(),s("div",L,[e.$page.props.can.view_students?(o(),f(b,{key:0})):i("",!0)])):i("",!0)])])])])])]),_:1})],64))}});export{R as default};