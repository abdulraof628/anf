import{a as C,o as p,c,b as s,u as d,w as n,F as x,H as w,L as M,d as e,f as L,l as P,n as y,D as V,k as g,j as f,h as O,t as i,m as I}from"./app-f7caadcf.js";import{B as z}from"./Authenticated-4335ecb5.js";import{B as u}from"./Button-eacc4013.js";import{r as T}from"./PencilIcon-293d3582.js";import{r as B}from"./SearchIcon-a2208322.js";import{r as j}from"./TrashIcon-c1661703.js";import{C as v}from"./ConfirmationModal-a854134c.js";import{P as F}from"./Pagination-adbb5ac0.js";import{h as _}from"./moment-fbc5633a.js";import{s as h}from"./multiselect-3a2315ef.js";import{Z as k}from"./vue-datepicker-90d3a616.js";import{M as $}from"./Modal-ed289a56.js";import D from"./MonthlyFee-2da54b85.js";import"./ApplicationLogo-97d28824.js";import"./XIcon-ce263839.js";import"./toggle-625695c6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-8130c278.js";import"./VueFinalModal.esm-03090a86.js";/* empty css                                                              */const N={class:"py-4 px-4"},H={class:"overflow-x-auto"},A={class:"mx-auto"},R={class:"align-middle inline-block min-w-full"},U={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},E={class:"flex space-x-2"},J={class:"relative"},Y=e("span",{class:"absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-10 w-4 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),Z={class:"flex"},K={class:"flex"},q={class:"flex"},G={key:0,class:"flex"},Q={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},W={class:"min-w-full divide-y divide-gray-200"},X=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Name / invoice "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date Issued"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Due Date"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Amount"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),ee={class:"bg-white divide-y divide-gray-200"},te={key:0},oe=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),ae=[oe],re={class:"px-6 py-4 whitespace-nowrap"},se={class:"text-sm font-medium text-gray-700"},ne={class:"px-6 py-4 whitespace-nowrap"},ie={class:"flex items-center justify-between"},le={class:"text-sm font-medium text-gray-900 truncate"},pe={class:"mt-2 sm:flex sm:justify-between"},de={class:"flex items-center space-x-2"},ce={class:"flex items-center text-sm text-gray-500"},ue={class:"text-sm font-medium text-gray-900"},me={class:"px-6 py-4 whitespace-nowrap"},ge={class:"text-sm font-medium text-gray-900"},fe={class:"px-6 py-4 whitespace-nowrap"},he={class:"text-sm font-medium text-gray-900"},be={class:"px-6 py-4 whitespace-nowrap"},xe={class:"text-sm font-medium text-gray-900"},ye={class:"px-6 py-4 whitespace-nowrap"},_e={class:"ml-2 flex-shrink-0 flex"},we={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ve=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Invoice ",-1),ke={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},$e=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),De=e("span",null,"Print",-1),Se={name:"_blank",specs:[],styles:["http://127.0.0.1:8000/css/app.css"],timeout:1e3,autoClose:!0,windowTitle:window.document.title},Ce={components:{SearchIcon:B,TrashIcon:j,PencilIcon:T,Head:w,Link:M,ConfirmationModal:v,Multiselect:h,Datepicker:k,Modal:$,MonthlyFee:D},data(){return{printing:!1,loading_resource:!1,show_resource:!1,isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:this.$page.props.filter?this.$page.props.filter.search:"",centre_id:this.$page.props.filter?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter?this.$page.props.filter.programme_id:"",date:this.$page.props.filter?this.$page.props.filter.date:""},invoice_data:{parent_name:"",parent_address:"No 27, Jalan Kap Empat, 17/17D, Seksyen 17, Shah Alam",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""}}},watch:{"params.date":{handler(){this.$inertia.get(route("fee.invoices"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{viewInvoice(r){this.invoice_data.student_name=this.$page.props.invoices.data[r].student_name,this.invoice_data.parent_name=this.$page.props.invoices.data[r].parent_full_name,this.invoice_data.parent_address=this.$page.props.invoices.data[r].parent_address,this.invoice_data.invoice_number=this.$page.props.invoices.data[r].invoice_number,this.invoice_data.invoice_items=JSON.parse(this.$page.props.invoices.data[r].invoice_items),this.invoice_data.date_issued=this.$page.props.invoices.data[r].date_issued,this.invoice_data.due_date=this.$page.props.invoices.data[r].due_date,this.invoice_data.total_amount=this.totalFee(this.$page.props.invoices.data[r].invoice_items),this.open_modal=!0},editInvoice(r){this.$inertia.get(route("fee.invoices.edit"),{invoice_id:r},{preserveState:!1})},totalFee(r){let t=0;const a=JSON.parse(r);for(const l of a){const o=parseFloat(l.programme_fee),m=parseFloat(l.programme_fee_discount),b=parseFloat(l.material_fee),S=parseFloat(l.material_fee_discount);t+=o-m,l.include_material_fee&&(t+=b-S)}return t},print(){this.printing=!0,this.$htmlToPaper("invoice",Se,()=>{this.printing=!1})},search(){this.$inertia.get(route("fee.invoices"),this.params,{replace:!0,preserveState:!0})}}},Ke=Object.assign(Ce,{__name:"Index",setup(r){return(t,a)=>{const l=C("debounce");return p(),c(x,null,[s(d(w),{title:"Fee Invoices"}),s(z,null,{header:n(()=>[]),default:n(()=>[e("div",N,[e("div",H,[e("div",A,[e("div",R,[e("div",U,[e("div",E,[e("div",J,[Y,L(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md",placeholder:"Search","onUpdate:modelValue":a[0]||(a[0]=o=>t.params.search=o)},null,512),[[l,t.search,"800ms"],[P,t.params.search]])]),e("div",Z,[s(d(h),{onSelect:t.search,onDeselect:t.search,onClear:t.search,modelValue:t.params.programme_id,"onUpdate:modelValue":a[1]||(a[1]=o=>t.params.programme_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.programmes,clearOnSelect:!1,canClear:!0,canDeselect:!0,trackBy:"name",label:"name",placeholder:"Programme",classes:{container:"relative w-full md:w-64 lg:w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","onDeselect","onClear","modelValue","options"])]),e("div",K,[s(d(h),{onSelect:t.search,onDeselect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":a[2]||(a[2]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative w-full md:w-64 lg:w-64 flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","onDeselect","modelValue","options"])]),e("div",q,[s(d(k),{class:y("w-full md:w-64 lg:w-64 rounded-lg shadow-sm"),style:V(t.$page.props.errors.end_time?"--dp-border-color: #fa9e9e":""),"input-class-name":"invoices-date-picker focus:ring-0",modelValue:t.params.date,"onUpdate:modelValue":a[3]||(a[3]=o=>t.params.date=o),"month-picker":!0,"auto-apply":!0,placeholder:"Month / Year"},null,8,["style","modelValue"])])]),t.$page.props.can.create_fee_invoices?(p(),c("div",G,[s(u,{route:t.route("fee.invoices.create")},{default:n(()=>[g("New invoice")]),_:1},8,["route"])])):f("",!0)])]),e("div",Q,[e("table",W,[X,e("tbody",ee,[t.$page.props.invoices.data.length?f("",!0):(p(),c("tr",te,ae)),(p(!0),c(x,null,O(t.$page.props.invoices.data,(o,m)=>(p(),c("tr",{class:"",key:o.id},[e("td",re,[e("div",se,i(m+1),1)]),e("td",ne,[e("div",ie,[e("p",le,i(o.student_name),1)]),e("div",pe,[e("div",de,[e("p",ce," #"+i(o.invoice_number),1)])]),e("div",ue,i(o.title),1)]),e("td",me,[e("div",ge,i(d(_)(o.date_issued).format("DD MMM Y")),1)]),e("td",fe,[e("div",he,i(d(_)(o.due_date).format("DD MMM Y")),1)]),e("td",be,[e("div",xe,i(o.amount),1)]),e("td",ye,[e("div",_e,[e("p",{class:y(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",[o.status_bg_color,o.status_text_color]])},i(o.status),3)])]),e("td",we,[t.$page.props.can.edit_fee_invoices?(p(),I(u,{key:0,buttonType:"warning",onClick:b=>t.editInvoice(o.id)},{default:n(()=>[g("Edit / Collect Payment")]),_:2},1032,["onClick"])):f("",!0)])]))),128))])]),s(F,{page_data:t.$page.props.invoices,params:t.params},null,8,["page_data","params"])])])])]),s(v,{show:t.isOpen,onClose:a[4]||(a[4]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Resource",confirmationText:"Are you sure want to delete this resource?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),s($,{showModal:t.open_modal,modalType:"md",onHideModal:a[6]||(a[6]=o=>t.open_modal=!1)},{header:n(()=>[ve]),content:n(()=>[s(D,{invoice_data:t.invoice_data},null,8,["invoice_data"])]),footer:n(()=>[e("div",ke,[s(u,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:n(()=>[$e,De]),_:1},8,["onClick"]),s(u,{buttonType:"gray",onClick:a[5]||(a[5]=o=>t.open_modal=!1)},{default:n(()=>[g("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64)}}});export{Ke as default};
