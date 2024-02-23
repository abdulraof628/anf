import{r as b,o as i,c as d,a as r,u as c,w as n,F as p,H as f,L as C,d as e,h as k,v as M,p as u,e as B,t as l,n as $,q as D,g as m}from"./app-832976dc.js";import{B as S}from"./Authenticated-6a4c8e09.js";import{B as h}from"./Button-625852c6.js";import{r as L}from"./PencilIcon-5b44b515.js";import{r as T}from"./SearchIcon-83fd6c82.js";import{r as V}from"./TrashIcon-414f9a5e.js";import{C as g}from"./ConfirmationModal-3cc54a8a.js";import{P as w}from"./Pagination-fc700407.js";import"./moment-fbc5633a.js";import{s as A}from"./multiselect-66708962.js";import{V as y,M as N}from"./VueFinalModal.esm-af3d3428.js";import _ from"./Tabs-61047e9d.js";import"./ApplicationLogo-61560844.js";import"./XIcon-fabadbaa.js";import"./toggle-bf70d7bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-d3ec02a4.js";import"./use-outside-click-0c5eddc6.js";const I={class:"py-4 px-4 space-y-2"},O={class:"bg-white rounded p-4 border border-gray-400"},R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},j={class:"relative w-full"},z=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),F={class:"overflow-x-auto"},P={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},E={class:"min-w-full divide-y divide-gray-200"},U=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Parent"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),H={class:"bg-white divide-y divide-gray-200"},q={key:0},Z=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),G=[Z],J={class:"hover:bg-gray-200"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm text-gray-700"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm font-medium text-gray-900"},Y={class:"px-6 py-4 whitespace-nowrap"},ee={class:"text-sm font-medium text-gray-900"},te={class:"px-6 py-4 whitespace-nowrap"},se={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},oe={id:"default-modal","data-modal-show":"true","aria-hidden":"true",class:"overflow-x-hidden overflow-y-auto h-modal md:h-full md:inset-0 z-50 justify-center items-center"},ae={class:"absolute top-1/4 left-1/4 w-2/3"},re={class:"bg-white rounded-lg shadow relative"},ie=e("div",{class:"flex items-start justify-between p-5 border-b rounded-t"},[e("h3",{class:"text-gray-900 text-xl lg:text-2xl font-semibold"}," Student List "),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},[e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),ne=e("div",{class:"p-6 space-y-6"},[e("div",{class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},[e("table",{class:"min-w-full divide-y divide-gray-200"},[e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",null,"#"),e("th",null,"Name")])]),e("tbody",{class:"bg-white divide-y divide-gray-200"},[e("tr",null,[e("td",{class:"px-6 py-4 whitespace-nowrap"},"1"),e("td",{class:"px-6 py-4 whitespace-nowrap"},"Muhammad Charlie")])])])])],-1),de={class:"flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b"},le={components:{SearchIcon:T,TrashIcon:V,PencilIcon:L,ConfirmationModal:g,Head:f,Link:C,Multiselect:A,VueFinalModal:y,ModalsContainer:N,Pagination:w,Tabs:_},props:{filter:Object},data(){return{showModal:!1,isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""}}},methods:{newAdmission(a){this.$inertia.get(this.route("students.create"),{centre_id:a})},editStudent(a){this.$inertia.get(this.route("students.edit"),{student_id:a})},deleteStudent(a){this.confirmationRoute="students.destroy",this.confirmationData=a,this.isOpen=!0},viewStudents(a){this.showModal=!0},search(){this.$inertia.get(this.route("students.unassigned"),this.params,{replace:!0,preserveState:!0})}}},Se=Object.assign(le,{__name:"Unassigned",setup(a){return(t,o)=>{const x=b("debounce");return i(),d(p,null,[r(c(f),{title:"Students"}),r(S,null,{header:n(()=>[]),default:n(()=>[e("div",I,[r(_,{centre_id:t.params.centre_id},null,8,["centre_id"]),e("div",O,[e("div",R,[e("div",j,[z,k(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":o[0]||(o[0]=s=>t.params.search=s)},null,512),[[x,t.search,"800ms"],[M,t.params.search]])])]),e("div",F,[e("div",P,[e("table",E,[U,e("tbody",H,[t.$page.props.students.data.length?u("",!0):(i(),d("tr",q,G)),(i(!0),d(p,null,B(t.$page.props.students.data,(s,v)=>(i(),d("tr",J,[e("td",K,[e("div",Q,l(++v),1)]),e("td",W,[e("div",X,l(s.name),1)]),e("td",Y,[e("div",ee,l(s.parent_name),1)]),e("td",te,[e("span",{class:$(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.status==!0?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},l(s.status==!0?"Active":"Inactive"),3)]),e("td",se,[t.$page.props.can.edit_students?(i(),D(h,{key:0,buttonType:"info",class:"py-1 px-4",title:"Edit Class",onClick:ce=>t.editStudent(s.id)},{default:n(()=>[m(" Edit Student ")]),_:2},1032,["onClick"])):u("",!0)])]))),256))])]),r(w,{page_data:t.$page.props.students,params:t.params},null,8,["page_data","params"])])])]),r(g,{show:t.isOpen,onClose:o[1]||(o[1]=s=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Class",confirmationText:"Are you sure want to delete this class?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),r(c(y),{modelValue:t.showModal,"onUpdate:modelValue":o[3]||(o[3]=s=>t.showModal=s)},{default:n(()=>[e("div",oe,[e("div",ae,[e("div",re,[ie,ne,e("div",de,[r(h,{buttonType:"gray",onClick:o[2]||(o[2]=s=>t.showModal=!1)},{default:n(()=>[m("Close")]),_:1})])])])])]),_:1},8,["modelValue"])])]),_:1})],64)}}});export{Se as default};
