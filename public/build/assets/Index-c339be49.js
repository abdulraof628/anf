import{r as M,o as l,c as i,a,u as d,w as n,F as m,H as h,L as D,d as e,h as S,v as L,n as g,g as c,q as f,e as V,t as p,s as B}from"./app-864f64ce.js";import{B as $}from"./Authenticated-07a50692.js";import{B as u}from"./Button-fad36d71.js";import{r as T}from"./PencilIcon-66d10d2f.js";import{r as I}from"./SearchIcon-b2d3d931.js";import{r as O}from"./TrashIcon-db37863f.js";import{C as b}from"./ConfirmationModal-3db05bba.js";import{P as x}from"./Pagination-09b403ea.js";import y from"./Tabs-fd1ce4fa.js";import"./moment-a9aaa855.js";import{s as w}from"./multiselect-e1fa0468.js";import{V as v,M as P}from"./VueFinalModal.esm-8670c0aa.js";import{Z as _}from"./vue-datepicker-1a56d7b8.js";import"./ApplicationLogo-853d0e02.js";import"./XIcon-d99c81f1.js";import"./vue3-perfect-scrollbar-98fb03a2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-43efdf94.js";import"./transition-1512b636.js";import"./keyboard-39c9e581.js";const j={class:"py-4 px-4 space-y-2"},z={class:"bg-white rounded p-4 border border-gray-400"},A={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},N={class:"relative w-full"},R=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),F={class:"relative w-full"},U={class:"relative w-full"},E={class:"w-full"},H={class:"overflow-x-auto"},Z={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},Y={class:"min-w-full divide-y divide-gray-200"},q=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Parent"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),G={class:"bg-white divide-y divide-gray-200"},J={key:0},K=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),Q=[K],W={class:"hover:bg-gray-200"},X={class:"px-6 py-4 whitespace-nowrap"},ee={class:"text-sm text-gray-700"},te={class:"px-6 py-4 whitespace-nowrap"},oe={class:"text-sm font-medium text-gray-900"},re={class:"px-6 py-4 whitespace-nowrap"},ae={class:"text-sm font-medium text-gray-900"},se={class:"px-6 py-4 whitespace-nowrap"},ne={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},le={id:"default-modal","data-modal-show":"true","aria-hidden":"true",class:"overflow-x-hidden overflow-y-auto h-modal md:h-full md:inset-0 z-50 justify-center items-center"},ie={class:"absolute top-1/4 left-1/4 w-2/3"},de={class:"bg-white rounded-lg shadow relative"},pe=e("div",{class:"flex items-start justify-between p-5 border-b rounded-t"},[e("h3",{class:"text-gray-900 text-xl lg:text-2xl font-semibold"}," Student List "),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},[e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),ce=e("div",{class:"p-6 space-y-6"},[e("div",{class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},[e("table",{class:"min-w-full divide-y divide-gray-200"},[e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",null,"#"),e("th",null,"Name")])]),e("tbody",{class:"bg-white divide-y divide-gray-200"},[e("tr",null,[e("td",{class:"px-6 py-4 whitespace-nowrap"},"1"),e("td",{class:"px-6 py-4 whitespace-nowrap"},"Muhammad Charlie")])])])])],-1),ue={class:"flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b"},me={components:{SearchIcon:I,TrashIcon:O,PencilIcon:T,ConfirmationModal:b,Head:h,Link:D,Multiselect:w,VueFinalModal:v,ModalsContainer:P,Pagination:x,Tabs:y,Datepicker:_},props:{filter:Object},data(){return{showModal:!1,isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:"",date:this.filter.date?this.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()}}}},methods:{newAdmission(s){this.$inertia.get(this.route("students.create"),{centre_id:s})},editStudent(s){this.$inertia.get(this.route("students.edit"),{student_id:s})},deleteStudent(s){this.confirmationRoute="students.destroy",this.confirmationData=s,this.isOpen=!0},viewStudents(s){this.showModal=!0},search(){this.$inertia.get(this.route("students"),this.params,{replace:!0,preserveState:!0})}}},Pe=Object.assign(me,{__name:"Index",setup(s){return(t,r)=>{const k=M("debounce");return l(),i(m,null,[a(d(h),{title:"Students"}),a($,null,{header:n(()=>[]),default:n(()=>[e("div",j,[a(y,{centre_id:t.params.centre_id},null,8,["centre_id"]),e("div",z,[e("div",A,[e("div",N,[R,S(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":r[0]||(r[0]=o=>t.params.search=o)},null,512),[[k,t.search,"800ms"],[L,t.params.search]])]),e("div",F,[a(d(w),{onSelect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","modelValue","options"])]),e("div",U,[a(d(_),{class:g("w-full rounded-lg shadow-sm"),"input-class-name":"progress-report-date-picker focus:ring-0",modelValue:t.params.date,"onUpdate:modelValue":[r[2]||(r[2]=o=>t.params.date=o),t.search],format:"MMMM yyyy","month-picker":!0,"auto-apply":!0,placeholder:"Month / Year",clearable:!1},null,8,["modelValue","onUpdate:modelValue"])]),e("div",E,[a(u,{buttonType:"gray",class:"py-2 px-3",route:t.route("students")},{default:n(()=>[c("Clear Search")]),_:1},8,["route"])])]),e("div",H,[e("div",Z,[e("table",Y,[q,e("tbody",G,[t.$page.props.students.data.length?f("",!0):(l(),i("tr",J,Q)),(l(!0),i(m,null,V(t.$page.props.students.data,(o,C)=>(l(),i("tr",W,[e("td",X,[e("div",ee,p(++C),1)]),e("td",te,[e("div",oe,p(o.name),1)]),e("td",re,[e("div",ae,p(o.parent_name),1)]),e("td",se,[e("span",{class:g(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==!0?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},p(o.status==!0?"Active":"Inactive"),3)]),e("td",ne,[t.$page.props.can.edit_students?(l(),B(u,{key:0,buttonType:"info",class:"py-1 px-4",title:"Edit Class",onClick:ge=>t.editStudent(o.id)},{default:n(()=>[c(" Edit Student ")]),_:2},1032,["onClick"])):f("",!0)])]))),256))])]),a(x,{page_data:t.$page.props.students,params:t.params},null,8,["page_data","params"])])])]),a(b,{show:t.isOpen,onClose:r[3]||(r[3]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Class",confirmationText:"Are you sure want to delete this class?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),a(d(v),{modelValue:t.showModal,"onUpdate:modelValue":r[5]||(r[5]=o=>t.showModal=o)},{default:n(()=>[e("div",le,[e("div",ie,[e("div",de,[pe,ce,e("div",ue,[a(u,{buttonType:"gray",onClick:r[4]||(r[4]=o=>t.showModal=!1)},{default:n(()=>[c("Close")]),_:1})])])])])]),_:1},8,["modelValue"])])]),_:1})],64)}}});export{Pe as default};