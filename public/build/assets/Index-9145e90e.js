import{B as d}from"./Authenticated-c17aebb3.js";import{o,c as s,a as n,u as m,w as l,F as p,H as c,L as u,d as t,n as _,q as i,s as f}from"./app-40e8d16e.js";import b from"./Table-34e58821.js";import{p as g,m as h,x as y,I as v,y as x}from"./tabs-84f0effc.js";import"./ApplicationLogo-3e82566c.js";import"./Button-85bd72ec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-2cec79ac.js";import"./vue3-perfect-scrollbar-74aa5949.js";import"./moment-a9aaa855.js";import"./ConfirmationModal-6035ad0f.js";import"./transition-538f2f6c.js";import"./keyboard-8d65d48a.js";import"./Pagination-2a77f357.js";import"./use-resolve-button-type-f53627b0.js";const k={class:"py-4 px-4"},T={class:"overflow-x-auto"},w={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},C={class:"flex justify-start space-x-1 text-white"},$={class:"mt-4"},L={key:0},I={components:{Head:c,Link:u,TabGroup:g,TabList:h,Tab:y,TabPanels:v,TabPanel:x},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{currentTab(a){this.$inertia.get(route(a))}}},J=Object.assign(I,{__name:"Index",setup(a){return(e,r)=>(o(),s(p,null,[n(m(c),{title:"General Setting"}),n(d,null,{header:l(()=>[]),default:l(()=>[t("div",k,[t("div",T,[t("div",w,[t("div",B,[t("ul",C,[t("li",null,[e.$page.props.can.view_students?(o(),s("button",{key:0,onClick:r[0]||(r[0]=N=>e.currentTab("settings.class_types")),class:_(["inline-block px-4 py-2",e.route().current("settings.class_types")?"bg-white text-indigo-800 border-indigo-500 border-b-2":"bg-indigo-500 text-white border-indigo-500 border-t-2 hover:bg-indigo-700 hover:border-indigo-700"])},"Class Types",2)):i("",!0)])]),t("div",$,[e.route().current("settings.class_types")?(o(),s("div",L,[e.$page.props.can.view_students?(o(),f(b,{key:0})):i("",!0)])):i("",!0)])])])])])]),_:1})],64))}});export{J as default};