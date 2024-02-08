import{r as C,o as p,c,a as n,u,w as a,F as x,H as y,L as S,d as e,h as g,v as h,p as T,e as D,t as s,n as L,g as l,B}from"./app-d3bda284.js";import{B as O}from"./Authenticated-9404ed17.js";import{B as d}from"./Button-b22af484.js";import{r as $}from"./PencilIcon-1a9d86e1.js";import{r as M}from"./SearchIcon-952b3083.js";import{r as P}from"./TrashIcon-52693f13.js";import{C as w}from"./ConfirmationModal-6662a148.js";import{P as v}from"./Pagination-2209c617.js";import{h as V}from"./moment-fbc5633a.js";import{s as m}from"./multiselect-64eab06d.js";import{M as _}from"./Modal-6ed17ca6.js";import"./ApplicationLogo-a38f91bc.js";import"./XIcon-653b4913.js";import"./toggle-5c84b98e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-59178efa.js";import"./use-outside-click-50f012b5.js";import"./VueFinalModal.esm-6f3747fa.js";const j={class:"py-4 px-4"},N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},z={class:"relative w-full"},A=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),I={class:"relative w-full"},R={class:"overflow-x-auto"},H={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},U={class:"min-w-full divide-y divide-gray-200"},F=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Email"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Contact Number"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Centre"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Admitted"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Notes"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},Y={key:0},Z=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),q=[Z],G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-700"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"flex flex-col text-sm font-medium text-gray-900"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm font-medium text-gray-900"},ee={class:"px-6 py-4 whitespace-nowrap"},te={class:"text-sm font-medium text-gray-900"},oe={class:"px-6 py-4 whitespace-nowrap"},re={class:"text-sm font-medium text-gray-900"},ne={class:"px-6 py-4 whitespace-nowrap"},ae={class:"px-6 py-4 whitespace-nowrap"},se={class:"text-sm font-medium text-gray-900"},ie={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},le={class:"flex justify-center space-x-2"},de={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},pe=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Latest Status ",-1),ce=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ue=[ce],fe={class:"p-4 space-y-4"},ge={class:"rounded bg-indigo-100 hover:bg-indigo-200 drop-shadow-sm hover:drop-shadow-md p-2 w-full inline-block text-gray-800 select-none"},me={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},be={components:{SearchIcon:M,TrashIcon:P,PencilIcon:$,ConfirmationModal:w,Head:y,Link:S,Multiselect:m,Modal:_,Pagination:v},props:{filter:Object},data(){return{isOpen:!1,open_modal:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""},form:{result_id:"",admitted:!1,centre_id:!1,notes:""}}},methods:{viewDetails(i){this.$inertia.get(this.route("diagnostic_test.saved_result.details"),{result_id:i})},updateStatus(i,t,r,f){this.form.result_id=i,this.form.admitted=t==1,this.form.centre_id=r||"",this.form.notes=f,this.open_modal=!0},deleteStatus(i){this.confirmationTitle="Delete Diagnostic Test Result",this.confirmationText="Are you sure want to delete this result?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="diagnostic_test.delete_result",this.confirmationData=i,this.isOpen=!0},saveStatus(){this.$inertia.post(this.route("diagnostic_test.saved_result.save_status"),this.form,{onSuccess:i=>{this.open_modal=!1}})},search(){this.$inertia.get(this.route("diagnostic_test.saved_result"),this.params,{replace:!0,preserveState:!0})}}},je=Object.assign(be,{__name:"Index",setup(i){return(t,r)=>{const f=C("debounce");return p(),c(x,null,[n(u(y),{title:"Diagnostic Test"}),n(O,null,{header:a(()=>[]),default:a(()=>[e("div",j,[e("div",N,[e("div",z,[A,g(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":r[0]||(r[0]=o=>t.params.search=o)},null,512),[[f,t.search,"800ms"],[h,t.params.search]])]),e("div",I,[n(u(m),{onSelect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"label",label:"label",placeholder:"All Centres",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","modelValue","options"])])]),e("div",R,[e("div",H,[e("table",U,[F,e("tbody",E,[t.$page.props.saved_results.data.length?T("",!0):(p(),c("tr",Y,q)),(p(!0),c(x,null,D(t.$page.props.saved_results.data,(o,k)=>(p(),c("tr",{class:"hover:bg-gray-200",key:o.id},[e("td",G,[e("div",J,s(++k),1)]),e("td",K,[e("div",Q,[e("span",null,s(o.child_id?o.student_name:o.child_name)+" - Age ("+s(o.child_id?u(V)().diff(o.student_dob,"years"):o.child_age)+")",1)])]),e("td",W,[e("div",X,s(o.parent_email),1)]),e("td",ee,[e("div",te,s(o.parent_contact),1)]),e("td",oe,[e("div",re,s(o.centre_name),1)]),e("td",ne,[e("span",{class:L(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.admitted==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},s(o.admitted==1?"Yes":"No"),3)]),e("td",ae,[e("div",se,s(o.notes),1)]),e("td",ie,[e("div",le,[n(d,{buttonType:"info",class:"py-1 px-2",onClick:b=>t.updateStatus(o.id,o.admitted,o.centre_id,o.notes)},{default:a(()=>[l("Status")]),_:2},1032,["onClick"]),n(d,{buttonType:"blue",onClick:b=>t.viewDetails(o.id)},{default:a(()=>[l("View Details")]),_:2},1032,["onClick"]),n(d,{buttonType:"danger",class:"py-1 px-2",onClick:b=>t.deleteStatus(o.id)},{default:a(()=>[l("Delete")]),_:2},1032,["onClick"])])])]))),128))])]),n(v,{page_data:t.$page.props.saved_results,params:t.params},null,8,["page_data","params"]),n(_,{showModal:t.open_modal,modalType:"sm",onHideModal:r[7]||(r[7]=o=>t.open_modal=!1)},{header:a(()=>[e("div",de,[pe,e("button",{type:"button",onClick:r[2]||(r[2]=o=>t.open_modal=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},ue)])]),content:a(()=>[e("div",fe,[e("div",null,[e("label",ge,[g(e("input",{class:"form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white hover:bg-white focus:ring-transparent text-indigo-500 transition duration-200 mt-0.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox","onUpdate:modelValue":r[3]||(r[3]=o=>t.form.admitted=o)},null,512),[[B,t.form.admitted]]),l(" Admitted")])]),n(u(m),{modelValue:t.form.centre_id,"onUpdate:modelValue":r[4]||(r[4]=o=>t.form.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:t.$page.props.errors.centre_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"h-9 w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"]),g(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"3",placeholder:"Notes...","onUpdate:modelValue":r[5]||(r[5]=o=>t.form.notes=o)},null,512),[[h,t.form.notes]])])]),footer:a(()=>[e("div",me,[n(d,{buttonType:"info",onClick:t.saveStatus},{default:a(()=>[l("Save")]),_:1},8,["onClick"]),n(d,{buttonType:"gray",onClick:r[6]||(r[6]=o=>t.open_modal=!1)},{default:a(()=>[l("Cancel")]),_:1})])]),_:1},8,["showModal"])])])]),n(w,{show:t.isOpen,onClose:r[8]||(r[8]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:t.confirmationTitle,confirmationText:t.confirmationText,confirmationButton:t.confirmationButton,confirmationMethod:t.confirmationMethod,confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationTitle","confirmationText","confirmationButton","confirmationMethod","confirmationRoute","confirmationData"])]),_:1})],64)}}});export{je as default};
