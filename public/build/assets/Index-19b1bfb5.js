import{B as d}from"./Authenticated-e085fb96.js";import{c as o,b as r,u as p,w as c,F as m,H as l,L as u,o as s,d as e,n as _,j as i,p as g}from"./app-698f1bce.js";import b from"./Table-a13ec0e2.js";import{x as f,I as h,y,S as v,g as x}from"./tabs-29880bb2.js";import"./ApplicationLogo-1ffedc06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-9c885bf2.js";import"./XIcon-718b998e.js";import"./default.css_vue_type_style_index_0_src_true_lang-57be4c75.js";import"./ConfirmationModal-f0b85eb3.js";import"./transition-b20a6372.js";import"./Pagination-4aa7cb27.js";import"./use-resolve-button-type-ab90d813.js";const k={class:"py-4 px-4"},T={class:"overflow-x-auto"},w={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},C={class:"flex justify-start space-x-1 text-white"},$={class:"mt-4"},L={key:0},j={components:{Head:l,Link:u,TabGroup:f,TabList:h,Tab:y,TabPanels:v,TabPanel:x},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:""}},methods:{currentTab(a){this.$inertia.get(route(a))}}},R=Object.assign(j,{__name:"Index",setup(a){return(t,n)=>(s(),o(m,null,[r(p(l),{title:"General Setting"}),r(d,null,{header:c(()=>[]),default:c(()=>[e("div",k,[e("div",T,[e("div",w,[e("div",B,[e("ul",C,[e("li",null,[t.$page.props.can.setting_class_type_view_access?(s(),o("button",{key:0,onClick:n[0]||(n[0]=I=>t.currentTab("settings.class_types")),class:_(["inline-block px-4 py-2",t.route().current("settings.class_types")?"bg-white text-indigo-800 border-indigo-500 border-b-2":"bg-indigo-500 text-white border-indigo-500 border-t-2 hover:bg-indigo-700 hover:border-indigo-700"])},"Class Types",2)):i("",!0)])]),e("div",$,[t.route().current("settings.class_types")?(s(),o("div",L,[t.$page.props.can.setting_class_type_view_access?(s(),g(b,{key:0})):i("",!0)])):i("",!0)])])])])])]),_:1})],64))}});export{R as default};
