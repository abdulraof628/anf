import{r as k,o as n,c as l,a,u as p,w as i,F as c,H as f,L as C,d as e,h as S,v as D,p as u,e as L,t as d,n as M,q as B,g}from"./app-832976dc.js";import{B as $}from"./Authenticated-6a4c8e09.js";import{B as m}from"./Button-625852c6.js";import{r as V}from"./PencilIcon-5b44b515.js";import{r as O}from"./SearchIcon-83fd6c82.js";import{r as T}from"./TrashIcon-414f9a5e.js";import{C as h}from"./ConfirmationModal-3cc54a8a.js";import{P as b}from"./Pagination-fc700407.js";import"./moment-fbc5633a.js";import{s as x}from"./multiselect-66708962.js";import{V as w,M as P}from"./VueFinalModal.esm-af3d3428.js";import y from"./Tabs-61047e9d.js";import"./ApplicationLogo-61560844.js";import"./XIcon-fabadbaa.js";import"./toggle-bf70d7bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-d3ec02a4.js";import"./use-outside-click-0c5eddc6.js";const I={class:"py-4 px-4 space-y-2"},j={class:"bg-white rounded p-4 border border-gray-400"},z={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},A={class:"relative w-full"},N=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),R={class:"relative w-full"},F={class:"overflow-x-auto"},E={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},H={class:"min-w-full divide-y divide-gray-200"},U=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Parent"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),q={class:"bg-white divide-y divide-gray-200"},Z={key:0},G=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),J=[G],K={class:"hover:bg-gray-200"},Q={class:"px-6 py-4 whitespace-nowrap"},W={class:"text-sm text-gray-700"},X={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm font-medium text-gray-900"},ee={class:"px-6 py-4 whitespace-nowrap"},te={class:"text-sm font-medium text-gray-900"},oe={class:"px-6 py-4 whitespace-nowrap"},re={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ae={id:"default-modal","data-modal-show":"true","aria-hidden":"true",class:"overflow-x-hidden overflow-y-auto h-modal md:h-full md:inset-0 z-50 justify-center items-center"},se={class:"absolute top-1/4 left-1/4 w-2/3"},ne={class:"bg-white rounded-lg shadow relative"},ie=e("div",{class:"flex items-start justify-between p-5 border-b rounded-t"},[e("h3",{class:"text-gray-900 text-xl lg:text-2xl font-semibold"}," Student List "),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},[e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),le=e("div",{class:"p-6 space-y-6"},[e("div",{class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},[e("table",{class:"min-w-full divide-y divide-gray-200"},[e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",null,"#"),e("th",null,"Name")])]),e("tbody",{class:"bg-white divide-y divide-gray-200"},[e("tr",null,[e("td",{class:"px-6 py-4 whitespace-nowrap"},"1"),e("td",{class:"px-6 py-4 whitespace-nowrap"},"Muhammad Charlie")])])])])],-1),de={class:"flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b"},pe={components:{SearchIcon:O,TrashIcon:T,PencilIcon:V,ConfirmationModal:h,Head:f,Link:C,Multiselect:x,VueFinalModal:w,ModalsContainer:P,Pagination:b,Tabs:y},props:{filter:Object},data(){return{showModal:!1,isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""}}},methods:{newAdmission(s){this.$inertia.get(this.route("students.create"),{centre_id:s})},editStudent(s){this.$inertia.get(this.route("students.edit"),{student_id:s})},deleteStudent(s){this.confirmationRoute="students.destroy",this.confirmationData=s,this.isOpen=!0},viewStudents(s){this.showModal=!0},search(){this.$inertia.get(this.route("students.on_break"),this.params,{replace:!0,preserveState:!0})}}},$e=Object.assign(pe,{__name:"OnBreak",setup(s){return(t,r)=>{const v=k("debounce");return n(),l(c,null,[a(p(f),{title:"Students"}),a($,null,{header:i(()=>[]),default:i(()=>[e("div",I,[a(y),e("div",j,[e("div",z,[e("div",A,[N,S(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":r[0]||(r[0]=o=>t.params.search=o)},null,512),[[v,t.search,"800ms"],[D,t.params.search]])]),e("div",R,[a(p(x),{onSelect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","modelValue","options"])])]),e("div",F,[e("div",E,[e("table",H,[U,e("tbody",q,[t.$page.props.students.data.length?u("",!0):(n(),l("tr",Z,J)),(n(!0),l(c,null,L(t.$page.props.students.data,(o,_)=>(n(),l("tr",K,[e("td",Q,[e("div",W,d(++_),1)]),e("td",X,[e("div",Y,d(o.name),1)]),e("td",ee,[e("div",te,d(o.parent_name),1)]),e("td",oe,[e("span",{class:M(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==!0?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},d(o.status==!0?"Active":"Inactive"),3)]),e("td",re,[t.$page.props.can.edit_students?(n(),B(m,{key:0,buttonType:"warning",title:"Edit Class",onClick:ce=>t.editStudent(o.id)},{default:i(()=>[g(" Edit Student ")]),_:2},1032,["onClick"])):u("",!0)])]))),256))])]),a(b,{page_data:t.$page.props.students,params:t.params},null,8,["page_data","params"])])])]),a(h,{show:t.isOpen,onClose:r[2]||(r[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Class",confirmationText:"Are you sure want to delete this class?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),a(p(w),{modelValue:t.showModal,"onUpdate:modelValue":r[4]||(r[4]=o=>t.showModal=o)},{default:i(()=>[e("div",ae,[e("div",se,[e("div",ne,[ie,le,e("div",de,[a(m,{buttonType:"gray",onClick:r[3]||(r[3]=o=>t.showModal=!1)},{default:i(()=>[g("Close")]),_:1})])])])])]),_:1},8,["modelValue"])])]),_:1})],64)}}});export{$e as default};
