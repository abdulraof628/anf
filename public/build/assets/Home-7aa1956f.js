import{_ as r}from"./Authenticated-8e3f4a60.js";import{o as e,c as t,b as d,u as c,w as _,F as l,H as p,d as s,h,t as n,k as i}from"./app-01945339.js";import"./XIcon-7fc73615.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-66fd05d7.js";import"./use-resolve-button-type-4f3f3872.js";import"./menu-5d6327aa.js";const m={class:"bg-white overflow-hidden shadow rounded-lg border"},g=s("div",{class:"px-6 md:px-6 py-5"},[s("span",{class:"text-lg leading-6 text-gray-900 font-semibold"}," Academy Information ")],-1),u=s("hr",null,null,-1),f={key:0,class:"border-t border-gray-200 px-6 py-4"},y=s("span",{class:"italic"},"No children have been added at the moment.",-1),b=[y],x={key:1,class:"flex flex-col px-4 md:px-6 py-4 md:py-6 rounded-lg space-y-4"},v={class:"relative flex py-4 px-6 rounded-t-inherit rounded-xl bg-white border-2 border-dashed border-indigo-400"},k={class:"flex flex-col space-y-2"},w={class:"mb-2 leading-normal font-bold font-sans underline"},$={class:"leading-tight text-sm font-sans"},N={class:"font-semibold text-slate-700 sm:ml-2"},H={class:"leading-tight text-sm font-sans"},B={class:"font-semibold text-slate-700 sm:ml-2"},C={class:"leading-tight text-sm font-sans"},V={class:"font-semibold text-slate-700 sm:ml-2"},F={key:1},L=s("span",{class:"italic"},"No programme or classes enrolled for this student.",-1),S=[L],T={key:2,class:"border-t border-gray-200 px-6 py-4"},A=s("span",{class:"italic"},"Please select a child to view their information.",-1),D=[A],E={key:3,class:"border-t border-gray-200 px-6 py-4"},I=s("span",{class:"italic"},"Sorry, this little cutie is not a student.",-1),P=[I],R={__name:"Home",setup(j){return(o,q)=>(e(),t(l,null,[d(c(p),{title:"Home"}),d(r,null,{default:_(()=>[s("div",m,[g,u,o.$page.props.user_has_children.length?o.$page.props.current_active_child.student_id?(e(),t("ul",x,[o.$page.props.academics.length?(e(!0),t(l,{key:0},h(o.$page.props.academics,a=>(e(),t("li",v,[s("div",k,[s("h6",w,n(a.programme_name),1),s("span",$,[i("Level: "),s("span",N,n(a.programme_level),1)]),s("span",H,[i("Centre: "),s("span",B,n(a.centre_name),1)]),s("span",C,[i("Class Type: "),s("span",V,n(a.class_type),1)])])]))),256)):(e(),t("div",F,S))])):o.$page.props.user_has_children.length&&!o.$page.props.current_active_child.child_id?(e(),t("div",T,D)):(e(),t("div",E,P)):(e(),t("div",f,b))])]),_:1})],64))}};export{R as default};
