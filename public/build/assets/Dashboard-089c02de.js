import{o as e,c as o,a as i,u as p,w as r,F as u,H as m,ab as _,d as s,T as f,n as c,t as a,p as l}from"./app-832976dc.js";import{B as g}from"./Authenticated-6a4c8e09.js";import{s as x}from"./multiselect-66708962.js";import{M as y,R as v,h as b}from"./menu-c6748288.js";import"./ApplicationLogo-61560844.js";import"./Button-625852c6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-fabadbaa.js";import"./toggle-bf70d7bf.js";import"./moment-fbc5633a.js";import"./use-outside-click-0c5eddc6.js";import"./use-resolve-button-type-dcf78473.js";const w={class:"py-4 px-4"},k={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"},$={class:"rounded-lg border border-gray-300 bg-white p-6 shadow"},C={class:"flex justify-between items-center"},S=s("div",{class:"flex items-center space-x-2"},[s("p",{class:"font-semibold text-sm text-gray-500"},"Total Centres")],-1),j=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 448 512"},[s("path",{d:"M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"})],-1),B={class:"py-1"},z=s("hr",{class:"border border-dashed border-blue-300 my-2"},null,-1),D={class:"text-2xl font-bold text-gray-700"},M={class:"rounded-lg border border-gray-300 bg-white p-6 z-0 shadow"},T=s("div",{class:"flex justify-between items-center"},[s("div",{class:"flex items-center space-x-2"},[s("p",{class:"font-semibold text-sm text-gray-500"},"Total Students")])],-1),V=s("hr",{class:"border border-dashed border-blue-300 my-2"},null,-1),A=s("div",{class:"flex self-center rounded bg-indigo-100 p-1 text-indigo-600"},[s("span",{class:"text-xs font-medium"}," Online ")],-1),R={class:"flex items-center space-x-2"},I={class:"flex self-center text-2xl font-semibold text-gray-900"},N={key:0,class:"mt-1 flex gap-1 text-green-600"},O=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})],-1),F={class:"flex gap-2 text-xs"},H={class:"font-medium"},E=s("span",{class:"text-gray-500"}," Since last month ",-1),L={key:1,class:"mt-1 flex gap-1 text-red-600"},P=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"})],-1),q={class:"flex gap-2 text-xs"},G={class:"font-medium"},J=s("span",{class:"text-gray-500"}," Since last month ",-1),K={key:2,class:"mt-1 flex gap-1 text-indigo-600"},Q=s("p",{class:"flex gap-2 text-xs"},[s("span",{class:"font-medium"}," Students Remain "),s("span",{class:"text-gray-500"}," Since last month ")],-1),U=[Q],W={class:"rounded-lg border border-gray-300 bg-white p-6 z-0 shadow"},X=s("div",{class:"flex justify-between items-center"},[s("div",{class:"flex items-center space-x-2"},[s("p",{class:"font-semibold text-sm text-gray-500"},"Total Students")])],-1),Y=s("hr",{class:"border border-dashed border-blue-300 my-2"},null,-1),Z=s("div",{class:"flex self-center rounded bg-indigo-100 p-1 text-indigo-600"},[s("span",{class:"text-xs font-medium"}," Physical ")],-1),ss={class:"flex items-center space-x-2"},ts={class:"flex self-center text-2xl font-semibold text-gray-900"},es={key:0,class:"mt-1 flex gap-1 text-green-600"},os=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})],-1),as={class:"flex gap-2 text-xs"},ns={class:"font-medium"},is=s("span",{class:"text-gray-500"}," Since last month ",-1),rs={key:1,class:"mt-1 flex gap-1 text-red-600"},ls=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"})],-1),ds={class:"flex gap-2 text-xs"},ps={class:"font-medium"},cs=s("span",{class:"text-gray-500"}," Since last month ",-1),hs={key:2,class:"mt-1 flex gap-1 text-indigo-600"},_s=s("p",{class:"flex gap-2 text-xs"},[s("span",{class:"font-medium"}," Students Remain "),s("span",{class:"text-gray-500"}," Since last month ")],-1),ms=[_s],gs={components:{BreezeAuthenticatedLayout:g,Multiselect:x,Head:m},props:{filters:Object},data(){return{params:{centre_status:this.$page.props.filters?this.$page.props.filters.centre_status:"",student_status:this.$page.props.filters?this.$page.props.filters.student_status:""}}},methods:{updateDataCentres(d){this.params.centre_status=d,_.Inertia.visit(route("dashboard",this.params))},updateDataStudents(d){this.params.student_status=d,_.Inertia.visit(route("dashboard",this.params))}}},Bs=Object.assign(gs,{__name:"Dashboard",setup(d){return(t,n)=>(e(),o(u,null,[i(p(m),{title:"Dashboard"}),i(g,null,{header:r(()=>[]),default:r(()=>[s("div",w,[s("div",k,[s("article",$,[s("div",C,[S,i(p(y),{as:"div",class:"relative inline-block text-left"},{default:r(()=>[i(p(v),{class:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50"},{default:r(()=>[j]),_:1}),i(f,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[i(p(b),{class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:r(()=>[s("div",B,[s("a",{onClick:n[0]||(n[0]=h=>t.updateDataCentres("")),class:c(["cursor-pointer block px-4 py-2 text-sm hover:bg-indigo-100 text-gray-900",t.params.centre_status==null?"bg-indigo-100":""])},"All",2),s("a",{onClick:n[1]||(n[1]=h=>t.updateDataCentres(1)),class:c(["cursor-pointer block px-4 py-2 text-sm hover:bg-indigo-100 text-gray-900",t.params.centre_status==1?"bg-indigo-100":""])},"Active",2),s("a",{onClick:n[2]||(n[2]=h=>t.updateDataCentres(0)),class:c(["cursor-pointer block px-4 py-2 text-sm hover:bg-indigo-100 text-gray-900",t.params.centre_status==0?"bg-indigo-100":""])},"Inactive",2)])]),_:1})]),_:1})]),_:1})]),z,s("p",D,a(t.$page.props.total_centres),1)]),s("article",M,[T,V,A,s("div",R,[s("div",I,a(t.$page.props.online_students_this_month),1),t.$page.props.online_students_this_month>t.$page.props.online_students_last_month?(e(),o("div",N,[O,s("p",F,[s("span",H,a(t.$page.props.online_students_this_month-t.$page.props.online_students_last_month),1),E])])):l("",!0),t.$page.props.online_students_this_month<t.$page.props.online_students_last_month?(e(),o("div",L,[P,s("p",q,[s("span",G,a(t.$page.props.online_students_last_month-t.$page.props.online_students_this_month)+" Students",1),J])])):l("",!0),t.$page.props.online_students_this_month==t.$page.props.online_students_last_month?(e(),o("div",K,U)):l("",!0)])]),s("article",W,[X,Y,Z,s("div",ss,[s("div",ts,a(t.$page.props.physical_students_this_month),1),t.$page.props.physical_students_this_month>t.$page.props.physical_students_last_month?(e(),o("div",es,[os,s("p",as,[s("span",ns,a(t.$page.props.physical_students_this_month-t.$page.props.physical_students_last_month),1),is])])):l("",!0),t.$page.props.physical_students_this_month<t.$page.props.physical_students_last_month?(e(),o("div",rs,[ls,s("p",ds,[s("span",ps,a(t.$page.props.physical_students_last_month-t.$page.props.physical_students_this_month)+" Students",1),cs])])):l("",!0),t.$page.props.physical_students_this_month==t.$page.props.physical_students_last_month?(e(),o("div",hs,ms)):l("",!0)])])])])]),_:1})],64))}});export{Bs as default};
