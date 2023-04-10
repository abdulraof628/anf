import{h as p,a as n,b as i,w as a,F as f,H as m,L as k,o as c,d as e,k as g,x,i as S,q as L,t as s,n as C,e as d,v as T}from"./app-825cb09d.js";import{B as D}from"./Authenticated-36680990.js";import{B as u}from"./Button-5cb0f01e.js";import{C as O}from"./ConfirmationModal-6c5a7432.js";import{P as h}from"./Pagination-069292a2.js";import{h as P}from"./default.css_vue_type_style_index_0_src_true_lang-ba7b10a7.js";import{s as b}from"./multiselect-2ed4d71d.js";import{M as y}from"./Modal-dbc7d6af.js";import{r as w}from"./SearchIcon-59b03115.js";import{r as $}from"./TrashIcon-51718509.js";import{r as V}from"./PencilIcon-76447f7f.js";import"./ApplicationLogo-47fe7a8e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-198f9b98.js";import"./VueFinalModal.esm-9c5f184d.js";const j={class:"py-4 px-4"},z={class:"mx-auto"},N={class:"align-middle inline-block min-w-full px-2"},B={class:"flex justify-between mb-4"},I={class:"flex space-x-2"},M={class:"flex relative text-gray-400 focus-within:text-gray-600"},A={class:"flex"},H={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},U={class:"min-w-full divide-y divide-gray-200"},F=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Age"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Centre"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Admitted"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Notes"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),R={class:"bg-white divide-y divide-gray-200"},q={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),Y=[E],G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-700"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"text-sm font-medium text-gray-900"},Z={class:"px-6 py-4 whitespace-nowrap"},ee={class:"text-sm font-medium text-gray-900"},te={class:"px-6 py-4 whitespace-nowrap"},oe={class:"px-6 py-4 whitespace-nowrap"},re={class:"text-sm font-medium text-gray-900"},ne={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ae={class:"flex justify-center space-x-2"},se=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Latest Status ",-1),le={class:"p-4 space-y-4"},ie={class:"rounded bg-indigo-100 hover:bg-indigo-200 drop-shadow-sm hover:drop-shadow-md p-2 w-full inline-block text-gray-800 select-none"},de={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},pe={components:{SearchIcon:w,TrashIcon:$,PencilIcon:V,ConfirmationModal:O,Head:m,Link:k,Multiselect:b,Modal:y,Pagination:h},props:{filter:Object},data(){return{open_modal:!1,params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""},form:{result_id:"",admitted:!1,centre_id:!1,notes:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("diagnostic_test.saved_result"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{viewDetails(l){this.$inertia.get(this.route("diagnostic_test.saved_result.details"),{result_id:l})},updateStatus(l,o,r,t){this.form.result_id=l,this.form.admitted=o==!0,this.form.centre_id=r||"",this.form.notes=t,this.open_modal=!0},saveStatus(){this.$inertia.post(this.route("diagnostic_test.saved_result.save_status"),this.form,{onSuccess:l=>{this.open_modal=!1}})}}},Ce=Object.assign(pe,{__name:"Index",setup(l){return(o,r)=>(c(),p(f,null,[n(i(m),{title:"Diagnostic Test"}),n(D,null,{header:a(()=>[]),default:a(()=>[e("div",j,[e("div",z,[e("div",N,[e("div",B,[e("div",I,[e("div",M,[n(i(w),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),g(e("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":r[0]||(r[0]=t=>o.params.search=t),placeholder:"Search"},null,512),[[x,o.params.search]])]),e("div",A,[n(i(b),{modelValue:o.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=t=>o.params.centre_id=t),valueProp:"ID",appendNewOption:!1,searchable:!0,options:o.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10 px-40 pr-16 ",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none border-2 border-gray-300 focus:border-white text-base font-sans bg-white rounded-lg pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])]),e("div",H,[e("table",U,[F,e("tbody",R,[o.$page.props.saved_results.data.length?S("",!0):(c(),p("tr",q,Y)),(c(!0),p(f,null,L(o.$page.props.saved_results.data,(t,v)=>(c(),p("tr",{class:"hover:bg-gray-200",key:t.id},[e("td",G,[e("div",J,s(++v),1)]),e("td",K,[e("div",Q,s(t.child_id?t.student_name:t.child_name),1)]),e("td",W,[e("div",X,s(t.child_id?i(P)().diff(t.student_dob,"years"):t.child_age),1)]),e("td",Z,[e("div",ee,s(t.centre_name),1)]),e("td",te,[e("span",{class:C(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.admitted?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},s(t.admitted?"Yes":"No"),3)]),e("td",oe,[e("div",re,s(t.notes),1)]),e("td",ne,[e("div",ae,[n(u,{buttonType:"info",class:"py-1 px-2",onClick:_=>o.updateStatus(t.id,t.admitted,t.centre_id,t.notes)},{default:a(()=>[d("Status")]),_:2},1032,["onClick"]),n(u,{buttonType:"blue",onClick:_=>o.viewDetails(t.id)},{default:a(()=>[d("View Details")]),_:2},1032,["onClick"])])])]))),128))])]),n(h,{page_data:o.$page.props.saved_results},null,8,["page_data"]),n(y,{showModal:o.open_modal,modalType:"sm",onHideModal:r[6]||(r[6]=t=>o.open_modal=!1)},{header:a(()=>[se]),content:a(()=>[e("div",le,[e("div",null,[e("label",ie,[g(e("input",{class:"form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white hover:bg-white focus:ring-transparent text-indigo-500 transition duration-200 mt-0.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox","onUpdate:modelValue":r[2]||(r[2]=t=>o.form.admitted=t)},null,512),[[T,o.form.admitted]]),d(" Admitted")])]),n(i(b),{modelValue:o.form.centre_id,"onUpdate:modelValue":r[3]||(r[3]=t=>o.form.centre_id=t),valueProp:"ID",appendNewOption:!1,searchable:!0,options:o.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:o.$page.props.errors.centre_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none h-10 px-40 pr-16 ":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10 px-40 pr-16 ",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"]),g(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"3",placeholder:"Notes...","onUpdate:modelValue":r[4]||(r[4]=t=>o.form.notes=t)},null,512),[[x,o.form.notes]])])]),footer:a(()=>[e("div",de,[n(u,{buttonType:"info",onClick:o.saveStatus},{default:a(()=>[d("Save")]),_:1},8,["onClick"]),n(u,{buttonType:"gray",onClick:r[5]||(r[5]=t=>o.open_modal=!1)},{default:a(()=>[d("Cancel")]),_:1})])]),_:1},8,["showModal"])])])])])]),_:1})],64))}});export{Ce as default};
