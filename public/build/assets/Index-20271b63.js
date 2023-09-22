import{c as p,b as s,u as l,w as n,F as x,H as _,L as M,o as d,d as e,f as P,l as C,n as b,D as L,k as m,j as V,h as O,t as i}from"./app-c0ce435d.js";import{B as I}from"./Authenticated-395bc6e6.js";import{B as c}from"./Button-465ea343.js";import{r as z}from"./PencilIcon-48bc8cbe.js";import{r as y}from"./SearchIcon-6c88c541.js";import{r as T}from"./TrashIcon-5256deda.js";import{C as w}from"./ConfirmationModal-2f5a33ed.js";import{P as j}from"./Pagination-e1010d1b.js";import{h}from"./moment-fbc5633a.js";import{s as f}from"./multiselect-7eca4643.js";import{Z as v}from"./main-62678cea.js";import{M as k}from"./Modal-9e4d9504.js";import $ from"./MonthlyFee-87318d72.js";import"./ApplicationLogo-39485cc1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-084af2a1.js";import"./default.css_vue_type_style_index_0_src_true_lang-a2b621a6.js";import"./transition-9a7b3bdd.js";import"./VueFinalModal.esm-e981467f.js";/* empty css                                                              */const F={class:"py-4 px-4"},B={class:"mx-auto"},N={class:"align-middle min-w-full px-2"},H={class:"flex justify-between gap-4 flex-col md:flex-row mb-4"},A={class:"flex flex-wrap gap-4 flex-col md:flex-row"},R={class:"flex"},U={class:"flex w-full relative text-gray-400"},E={class:"flex"},J={class:"flex"},Y={class:"flex"},Z={class:"flex"},K={class:"overflow-x-auto"},q={class:"table-auto min-w-full divide-y divide-gray-200"},G=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Name / invoice "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date Issued"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Due Date"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Amount"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),Q={class:"bg-white divide-y divide-gray-200"},W={key:0},X=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),ee=[X],te={class:"px-6 py-4 whitespace-nowrap"},oe={class:"text-sm font-medium text-gray-700"},ae={class:"px-6 py-4 whitespace-nowrap"},se={class:"flex items-center justify-between"},re={class:"text-sm font-medium text-gray-900 truncate"},ne={class:"mt-2 sm:flex sm:justify-between"},ie={class:"flex items-center space-x-2"},le={class:"flex items-center text-sm text-gray-500"},pe={class:"text-sm font-medium text-gray-900"},de={class:"px-6 py-4 whitespace-nowrap"},ce={class:"text-sm font-medium text-gray-900"},ue={class:"px-6 py-4 whitespace-nowrap"},me={class:"text-sm font-medium text-gray-900"},fe={class:"px-6 py-4 whitespace-nowrap"},ge={class:"text-sm font-medium text-gray-900"},xe={class:"px-6 py-4 whitespace-nowrap"},be={class:"ml-2 flex-shrink-0 flex"},he={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},_e={class:"flex justify-center space-x-2"},ye=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Invoice ",-1),we={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},ve=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),ke=e("span",null,"Print",-1),$e={name:"_blank",specs:[],styles:["http://127.0.0.1:8000/css/app.css"],timeout:1e3,autoClose:!0,windowTitle:window.document.title},De={components:{SearchIcon:y,TrashIcon:T,PencilIcon:z,Head:_,Link:M,ConfirmationModal:w,Multiselect:f,Datepicker:v,Modal:k,MonthlyFee:$},data(){return{printing:!1,loading_resource:!1,show_resource:!1,isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:this.$page.props.filter?this.$page.props.filter.search:"",centre_id:this.$page.props.filter?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter?this.$page.props.filter.programme_id:"",date:this.$page.props.filter?this.$page.props.filter.date:""},invoice_data:{parent_name:"",parent_address:"No 27, Jalan Kap Empat, 17/17D, Seksyen 17, Shah Alam",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""}}},watch:{params:{handler(){this.$inertia.get(route("fee.invoices"),this.params)},deep:!0}},methods:{viewInvoice(r){this.invoice_data.student_name=this.$page.props.invoices.data[r].student_name,this.invoice_data.parent_name=this.$page.props.invoices.data[r].parent_full_name,this.invoice_data.parent_address=this.$page.props.invoices.data[r].parent_address,this.invoice_data.invoice_number=this.$page.props.invoices.data[r].invoice_number,this.invoice_data.invoice_items=JSON.parse(this.$page.props.invoices.data[r].invoice_items),this.invoice_data.date_issued=this.$page.props.invoices.data[r].date_issued,this.invoice_data.due_date=this.$page.props.invoices.data[r].due_date,this.invoice_data.total_amount=this.totalFee(this.$page.props.invoices.data[r].invoice_items),this.open_modal=!0},editInvoice(r){this.$inertia.get(route("fee.invoices.edit"),{invoice_id:r},{preserveState:!1})},totalFee(r){let t=0;const a=JSON.parse(r);for(const o of a){const u=parseFloat(o.programme_fee),g=parseFloat(o.programme_fee_discount),D=parseFloat(o.material_fee),S=parseFloat(o.material_fee_discount);t+=u-g,o.include_material_fee&&(t+=D-S)}return t},print(){this.printing=!0,this.$htmlToPaper("invoice",$e,()=>{this.printing=!1})}}},Ye=Object.assign(De,{__name:"Index",setup(r){return(t,a)=>(d(),p(x,null,[s(l(_),{title:"Fee Invoices"}),s(I,null,{header:n(()=>[]),default:n(()=>[e("div",F,[e("div",B,[e("div",N,[e("div",H,[e("div",A,[e("div",R,[e("div",U,[s(l(y),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),P(e("input",{class:"w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 text-base focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>t.params.search=o),placeholder:"Search"},null,512),[[C,t.params.search]])])]),e("div",E,[s(l(f),{modelValue:t.params.programme_id,"onUpdate:modelValue":a[1]||(a[1]=o=>t.params.programme_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.programmes,clearOnSelect:!1,canClear:!0,canDeselect:!0,trackBy:"name",label:"name",placeholder:"Programme",classes:{container:"relative w-full md:w-64 lg:w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["modelValue","options"])]),e("div",J,[s(l(f),{modelValue:t.params.centre_id,"onUpdate:modelValue":a[2]||(a[2]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative w-full md:w-64 lg:w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-lg bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["modelValue","options"])]),e("div",Y,[s(l(v),{class:b("w-full md:w-64 lg:w-64 rounded-lg shadow-sm"),style:L(t.$page.props.errors.end_time?"--dp-border-color: #fa9e9e":""),"input-class-name":"date-picker",modelValue:t.params.date,"onUpdate:modelValue":a[3]||(a[3]=o=>t.params.date=o),"month-picker":!0,"auto-apply":!0,placeholder:"Month / Year"},null,8,["style","modelValue"])])]),e("div",Z,[s(c,{route:t.route("fee.invoices.create")},{default:n(()=>[m("New invoice")]),_:1},8,["route"])])]),e("div",K,[e("table",q,[G,e("tbody",Q,[t.$page.props.invoices.data.length?V("",!0):(d(),p("tr",W,ee)),(d(!0),p(x,null,O(t.$page.props.invoices.data,(o,u)=>(d(),p("tr",{class:"",key:o.id},[e("td",te,[e("div",oe,i(u+1),1)]),e("td",ae,[e("div",se,[e("p",re,i(o.student_name),1)]),e("div",ne,[e("div",ie,[e("p",le," #"+i(o.invoice_number),1)])]),e("div",pe,i(o.title),1)]),e("td",de,[e("div",ce,i(l(h)(o.date_issued).format("DD MMM Y")),1)]),e("td",ue,[e("div",me,i(l(h)(o.due_date).format("DD MMM Y")),1)]),e("td",fe,[e("div",ge,i(o.amount),1)]),e("td",xe,[e("div",be,[e("p",{class:b(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",[o.status_bg_color,o.status_text_color]])},i(o.status),3)])]),e("td",he,[e("div",_e,[s(c,{buttonType:"warning",onClick:g=>t.editInvoice(o.id)},{default:n(()=>[m("Edit / Collect Payment")]),_:2},1032,["onClick"])])])]))),128))])]),s(j,{page_data:t.$page.props.invoices},null,8,["page_data"])])])])]),s(w,{show:t.isOpen,onClose:a[4]||(a[4]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Resource",confirmationText:"Are you sure want to delete this resource?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),s(k,{showModal:t.open_modal,modalType:"md",onHideModal:a[6]||(a[6]=o=>t.open_modal=!1)},{header:n(()=>[ye]),content:n(()=>[s($,{invoice_data:t.invoice_data},null,8,["invoice_data"])]),footer:n(()=>[e("div",we,[s(c,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:n(()=>[ve,ke]),_:1},8,["onClick"]),s(c,{buttonType:"gray",onClick:a[5]||(a[5]=o=>t.open_modal=!1)},{default:n(()=>[m("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64))}});export{Ye as default};
