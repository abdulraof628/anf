import{B as d}from"./Authenticated-68dd97b6.js";import{o,c as s,a as n,u as m,w as l,F as p,H as c,L as u,d as t,n as _,p as i,q as f}from"./app-914dd42f.js";import b from"./Table-6413c02c.js";import{p as g,m as h,x as y,I as v,y as x}from"./tabs-df547178.js";import"./ApplicationLogo-b70ef581.js";import"./Button-277f1239.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-338a11fd.js";import"./toggle-0e2190a3.js";import"./moment-a9aaa855.js";import"./ConfirmationModal-f97429a2.js";import"./transition-3e38001d.js";import"./keyboard-687cbe35.js";import"./Pagination-e5e3b335.js";import"./use-resolve-button-type-0668e34d.js";const k={class:"py-4 px-4"},T={class:"overflow-x-auto"},w={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},C={class:"flex justify-start space-x-1 text-white"},$={class:"mt-4"},L={key:0},I={components:{Head:c,Link:u,TabGroup:g,TabList:h,Tab:y,TabPanels:v,TabPanel:x},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{currentTab(a){this.$inertia.get(route(a))}}},J=Object.assign(I,{__name:"Index",setup(a){return(e,r)=>(o(),s(p,null,[n(m(c),{title:"General Setting"}),n(d,null,{header:l(()=>[]),default:l(()=>[t("div",k,[t("div",T,[t("div",w,[t("div",B,[t("ul",C,[t("li",null,[e.$page.props.can.view_students?(o(),s("button",{key:0,onClick:r[0]||(r[0]=N=>e.currentTab("settings.class_types")),class:_(["inline-block px-4 py-2",e.route().current("settings.class_types")?"bg-white text-indigo-800 border-indigo-500 border-b-2":"bg-indigo-500 text-white border-indigo-500 border-t-2 hover:bg-indigo-700 hover:border-indigo-700"])},"Class Types",2)):i("",!0)])]),t("div",$,[e.route().current("settings.class_types")?(o(),s("div",L,[e.$page.props.can.view_students?(o(),f(b,{key:0})):i("",!0)])):i("",!0)])])])])])]),_:1})],64))}});export{J as default};