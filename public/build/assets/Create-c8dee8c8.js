import{a as S,o as l,c as a,b as n,u as g,w as f,F as _,H as L,L as D,v as U,d as e,e as E,f as p,n as u,D as w,k as b,j as k,h as y,t as c,l as x,g as P,y as I}from"./app-2f936872.js";import{B as M}from"./Authenticated-f97fe581.js";import{B as h}from"./Button-53997e2b.js";import"./moment-fbc5633a.js";import{Z as v}from"./vue-datepicker-86a09c9b.js";import{s as V}from"./multiselect-81ed26b7.js";import{M as C}from"./Modal-37a64eb5.js";import{b as T}from"./toggle-a00285f5.js";import"./ApplicationLogo-21eacac9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-5ee02b7c.js";import"./TimeAgo-4ff9a849.js";import"./VueFinalModal.esm-8081aa86.js";/* empty css                                                              */const F={class:"md:grid md:grid-cols-2"},O={class:"md:mt-0 md:col-span-2"},j={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},$={class:"grid grid-rows-1 grid-cols-2 sm:grid-cols-2 gap-4"},B={class:"sm:row-span-3"},z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"},N=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Invoice Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),A={class:"grid grid-cols-1 gap-4"},H={class:"mb-4"},R=e("label",{for:"student_id",class:"block text-sm font-bold text-gray-700"}," Student Name ",-1),W={class:"mt-1 flex rounded-md shadow-sm"},Z={class:"grid grid-cols-1 gap-4"},G={class:"mb-4"},J=e("label",{for:"student_id",class:"block text-sm font-bold text-gray-700"}," Create Bulk (Multiple Invoices) ",-1),K={key:0,class:"grid grid-cols-2 gap-4"},Q={class:"mb-4"},X=e("label",{for:"date_issued",class:"block text-sm font-bold text-gray-700"}," Date Issued ",-1),Y={class:"mt-1 flex rounded-md shadow-sm"},q={class:"mb-4"},ee=e("label",{for:"due_date",class:"block text-sm font-bold text-gray-700"}," Due Date ",-1),oe={class:"mt-1 flex rounded-md shadow-sm"},te={key:1,class:"grid grid-cols-2 gap-4"},re={class:"mb-4"},se=e("label",{for:"from_date",class:"block text-sm font-bold text-gray-700"}," From ",-1),le={class:"mt-1 flex rounded-md shadow-sm"},ae={class:"mb-4"},de=e("label",{for:"to_date",class:"block text-sm font-bold text-gray-700"}," To ",-1),ne={class:"mt-1 flex rounded-md shadow-sm"},ie=e("div",{class:"mb-5 mt-5"},[e("div",{class:"flex justify-between items-center"},[e("h1",{class:"font-bold text-indigo-800"}," Programmes ")]),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),me={class:"grid grid-cols-1"},fe={class:"mb-10"},pe={class:"flex justify-end mb-3"},ue={class:"w-full"},ce=e("thead",null,[e("tr",{class:"bg-gray-600"},[e("th",{class:"text-left text-white text-sm py-2 px-4 w-1/12"},"#"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-7/12"},"Programme"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-2/12"},"Discount"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-2/12"},"Amount"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-2/12"},"Action")])],-1),ge={key:0},be=e("td",{colspan:"10",class:"py-4 text-center"},"No programme added",-1),_e=[be],he={class:"border text-sm align-top py-2 px-4"},ye={class:"border text-sm py-2 px-4"},xe={class:"flex flex-col space-y-4"},ve={class:"bg-indigo-300 py-2 px-3 rounded-t-md"},we={class:"font-semibold"},ke={class:"flex flex-col space-y-2 pl-5"},Pe={class:"bg-indigo-100 py-1 px-3 rounded-sm"},Ve={key:0,class:"bg-indigo-100 py-1 px-3 rounded-sm"},Le=e("label",null," Material Fee ",-1),Ce=[Le],Te={class:"border text-sm py-2 px-4 align-bottom"},Se={class:"flex flex-col space-y-1.5"},De=["onUpdate:modelValue","onInput"],Ue=["onUpdate:modelValue","onInput"],Ee={class:"border text-sm py-2 px-4 align-bottom"},Ie={class:"flex flex-col space-y-1.5"},Me=["onUpdate:modelValue","onInput"],Fe=["onUpdate:modelValue","onInput"],Oe={class:"border text-sm py-2 px-4 self-center"},je=e("div",{class:"border-b border-dashed border-indigo-900 mb-5"},null,-1),$e={class:"grid grid-cols-3"},Be={class:"mb-4 text-left"},ze=e("label",{for:"payment_status",class:"block text-sm font-bold text-gray-700"}," Payment Status ",-1),Ne=["value"],Ae=e("div",{class:"mb-4"},null,-1),He={class:"mb-4 text-right pr-5"},Re=e("label",{for:"amount",class:"block text-md font-bold text-gray-700"}," Total Amount ",-1),We={class:"text-2xl font-bold text-indigo-500"},Ze={class:"sm:row-span-3"},Ge={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"},Je=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Collect Payment"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),Ke={class:"grid grid-cols-1"},Qe={class:"mb-4"},Xe=e("label",{for:"date",class:"block text-sm font-bold text-gray-700"}," Date ",-1),Ye={class:"mt-1 flex rounded-md shadow-sm"},qe={class:"mb-4"},eo=e("label",{for:"transaction_id",class:"block text-sm font-bold text-gray-700"}," Transaction ID ",-1),oo={class:"mt-1 flex rounded-md shadow-sm"},to={class:"grid grid-cols-1"},ro={class:"mb-4"},so=e("label",{for:"student_name",class:"block text-sm font-bold text-gray-700"}," Proof of Payment ",-1),lo={class:"mt-1 items-center space-x-2 w-full"},ao={key:0,class:"mb-4"},no={class:"block focus:ring-0 focus:border-gray-300"},io=e("span",{class:"sr-only"},"Browse File",-1),mo={key:1,class:"flex justify-between py-2 border bg-gray-50 shadow-md p-4 rounded-md"},fo=["href"],po=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"})],-1),uo={class:"flex"},co=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",fill:"currentColor",class:"text-white h-3 w-3"},[e("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})],-1),go=[co],bo={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 gap-4"},_o={class:"sm:row-span-3"},ho={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},yo={class:"flex items-center justify-end"},xo={class:"flex space-x-2"},vo=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Invoice ",-1),wo={class:"p-5"},ko={class:"grid grid-cols-1"},Po={class:"mb-4"},Vo=e("label",{for:"student_id",class:"block text-sm font-bold text-gray-700"}," Centre ",-1),Lo={class:"mt-1 flex rounded-md shadow-sm"},Co={class:"mb-4"},To=e("label",{for:"student_id",class:"block text-sm font-bold text-gray-700"}," Programme ",-1),So={class:"mt-1 flex rounded-md shadow-sm"},Do=e("option",{value:""},"Please Select",-1),Uo=["value"],Eo={class:"mb-4"},Io=e("label",{for:"programme_level",class:"block text-sm font-bold text-gray-700"}," Programme Level",-1),Mo={class:"mt-1 flex rounded-md shadow-sm"},Fo=e("option",{value:""},"Please Select",-1),Oo=["value"],jo={class:"mb-4"},$o=e("label",{for:"fee_type_id",class:"block text-sm font-bold text-gray-700"}," Fee Type",-1),Bo={class:"mt-1 flex rounded-md shadow-sm"},zo=e("option",{value:""},"Please Select",-1),No=["value"],Ao={class:"mb-4"},Ho={for:"include_material_fee",class:"cursor-pointer"},Ro=["value"],Wo={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Zo={components:{Head:L,Link:D,Multiselect:V,Modal:C,Toggle:T},data(){return{open_modal:!1,form:{create_bulk:!1,from_date:"",to_date:"",formatted_to_date:"",student_id:"",invoice_items:[],date_issued:"",due_date:"",invoice_amount:"",status:1,payment:{date:"",transaction_id:"",proof:{url:"",file:""}}},list:{isLoading:!1,students:[]},programme_form:{centre_id:"",centre_name:"",programme_id:"",programme_name:"",programme_level:"",programme_type:"",programme_fee:"",programme_fee_discount:"",include_material_fee:!1,material_fee:"",material_fee_discount:""},error:{centre_id:!1,programme_id:!1,programme_level:!1,programme_type:!1},formError:{student_id:!1,date_issued:!1,due_date:!1,from_date:!1,to_date:!1}}},watch:{"form.invoice_items":{handler(s){s.forEach(o=>{o.programme_fee||(o.programme_fee=0),o.programme_fee_discount||(o.programme_fee_discount=0),o.material_fee||(o.material_fee=0),o.material_fee_discount||(o.material_fee_discount=0)})},deep:!0},"form.create_bulk":{handler(){this.formError.date_issued=!1,this.formError.due_date=!1,this.formError.from_date=!1,this.formError.to_date=!1,this.form.from_date="",this.form.to_date="",this.form.date_issued="",this.form.due_date=""},deep:!0},"form.from_date":{handler(){this.form.to_date=""},deep:!0}},methods:{submit(){if(this.formError.student_id=!this.form.student_id,this.formError.date_issued=!this.form.create_bulk&&!this.form.date_issued,this.formError.due_date=!this.form.create_bulk&&!this.form.due_date,this.formError.from_date=!!(this.form.create_bulk&&!this.form.from_date),this.formError.to_date=!!(this.form.create_bulk&&!this.form.to_date),!Object.values(this.formError).some(o=>o===!0)){if(this.form.invoice_items.length<1){alert("Please add at least 1 programme.");return}this.form.invoice_amount=this.totalFee(this.form.invoice_items),this.$inertia.post(route("fee.invoices.store"),this.form,{preserveState:!0})}},numbersOnly(s,o){s=s||window.event;var r=s.which?s.which:s.keyCode;if(r>31&&(r<48||r>57)&&r!==46)s.preventDefault();else{let i=s.target.value.trim();return i===""?i="0":i!=="0"&&i.startsWith("0")&&(i=i.replace(/^0+/,"")),s.target.value=i!==""?i:"0",!0}},totalFee(s){let o=0;for(const r of s){const i=parseFloat(r.programme_fee),t=parseFloat(r.programme_fee_discount),m=parseFloat(r.material_fee),d=parseFloat(r.material_fee_discount);o+=i-t,r.include_material_fee&&(o+=m-d)}return o},deleteProof(){this.form.payment.proof.url=[],this.form.payment.proof.file="",this.form.payment.proof.delete_previous=!0},uploadFile(s){const o=s.target.files[0];o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")||o.type=="image/jpeg"||o.name.toLowerCase().endsWith(".png")?(this.form.payment.proof.url=[URL.createObjectURL(o)],this.form.payment.proof.file=o):(alert("Only Image / PDF File allowed!"),this.$refs.file_input.value="",this.form.payment.proof.url="",this.form.payment.proof.file="")},findStudents(s){U.debounce(o=>"400ms")(10),s&&(this.list.isLoading=!0,axios.get(route("students.find"),{params:{keyword:s}}).then(o=>{this.list.students=o.data,this.list.isLoading=!1}))},addProgramme(){this.programme_form.centre_id="",this.programme_form.centre_name="",this.programme_form.programme_id="",this.programme_form.programme_name="",this.programme_form.programme_level="",this.programme_form.programme_type="",this.programme_form.include_material_fee=!1,this.open_modal=!0},saveProgramme(){var o,r,i;this.error.centre_id=!this.programme_form.centre_id,this.error.programme_id=!this.programme_form.programme_id,this.error.programme_level=!this.programme_form.programme_level,this.error.programme_type=!this.programme_form.programme_type,Object.values(this.error).some(t=>t===!0)||(this.form.invoice_items.push({centre_id:this.programme_form.centre_id,centre_name:(o=this.$page.props.allowed_centres.find(t=>t.ID===this.programme_form.centre_id))==null?void 0:o.label,programme_id:this.programme_form.programme_id,programme_name:(r=this.$page.props.programmes.find(t=>t.id===this.programme_form.programme_id))==null?void 0:r.name,programme_level:this.programme_form.programme_level,programme_type:(i=this.$page.props.fee_types.find(t=>t.id===this.programme_form.programme_type))==null?void 0:i.label,programme_fee:0,programme_fee_discount:0,include_material_fee:this.programme_form.include_material_fee,material_fee:0,material_fee_discount:0}),this.open_modal=!1)},cancelProgramme(){this.error.centre_id=!1,this.error.programme_id=!1,this.error.programme_level=!1,this.error.programme_type=!1,this.open_modal=!1},deleteProgramme(s){this.form.invoice_items.splice(s,1)}}},dt=Object.assign(Zo,{__name:"Create",setup(s){return(o,r)=>{const i=S("debounce");return l(),a(_,null,[n(g(L),{title:"Fee Invoices"}),n(M,null,{header:f(()=>[]),default:f(()=>[e("div",F,[e("div",O,[e("form",{onSubmit:r[11]||(r[11]=E((...t)=>o.submit&&o.submit(...t),["prevent"]))},[e("div",j,[e("div",$,[e("div",B,[e("div",z,[N,e("div",A,[e("div",H,[R,e("div",W,[p(n(g(V),{modelValue:o.form.student_id,"onUpdate:modelValue":r[0]||(r[0]=t=>o.form.student_id=t),onClose:o.clearStudents,valueProp:"id",loading:o.list.isLoading,placeholder:"Please enter some characters",options:o.list.students,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:o.formError.student_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onClose","loading","options","classes"]),[[i,o.findStudents]])])])]),e("div",Z,[e("div",G,[J,n(g(T),{modelValue:o.form.create_bulk,"onUpdate:modelValue":r[1]||(r[1]=t=>o.form.create_bulk=t),classes:{container:"mt-1 inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-indigo-500 border-indigo-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])])]),o.form.create_bulk?(l(),a("div",te,[e("div",re,[se,e("div",le,[n(g(v),{class:u("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:w(o.formError.from_date?"--dp-border-color: #fa9e9e":""),modelValue:o.form.from_date,"onUpdate:modelValue":r[4]||(r[4]=t=>o.form.from_date=t),enableTimePicker:!1,"month-picker":!0,format:"dd/MM/yyyy","auto-apply":!0},null,8,["style","modelValue"])])]),e("div",ae,[de,e("div",ne,[n(g(v),{"no-today":"",class:u("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:w(o.formError.to_date?"--dp-border-color: #fa9e9e":""),modelValue:o.form.to_date,"onUpdate:modelValue":r[5]||(r[5]=t=>o.form.to_date=t),enableTimePicker:!1,format:"dd/MM/yyyy","auto-apply":!0,"month-picker":!0,"min-date":`${o.form.from_date.year}-${o.form.from_date.month+1}`},null,8,["style","modelValue","min-date"])])])])):(l(),a("div",K,[e("div",Q,[X,e("div",Y,[n(g(v),{class:u("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:w(o.formError.date_issued?"--dp-border-color: #fa9e9e":""),modelValue:o.form.date_issued,"onUpdate:modelValue":r[2]||(r[2]=t=>o.form.date_issued=t),enableTimePicker:!1,format:"dd/MM/yyyy","auto-apply":!0},null,8,["style","modelValue"])])]),e("div",q,[ee,e("div",oe,[n(g(v),{class:u("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:w(o.formError.due_date?"--dp-border-color: #fa9e9e":""),modelValue:o.form.due_date,"onUpdate:modelValue":r[3]||(r[3]=t=>o.form.due_date=t),enableTimePicker:!1,format:"dd/MM/yyyy","auto-apply":!0},null,8,["style","modelValue"])])])])),ie,e("div",me,[e("div",fe,[e("div",pe,[n(h,{buttonType:"info",onClick:o.addProgramme},{default:f(()=>[b("Add Programme")]),_:1},8,["onClick"])]),e("table",ue,[ce,e("tbody",null,[o.form.invoice_items.length?k("",!0):(l(),a("tr",ge,_e)),(l(!0),a(_,null,y(o.form.invoice_items,(t,m)=>(l(),a("tr",null,[e("td",he,c(m+1),1),e("td",ye,[e("div",xe,[e("div",ve,[e("label",we,c(t.programme_name)+" ( Level "+c(t.programme_level)+" )",1)]),e("div",ke,[e("div",Pe,[e("label",null,c(t.programme_type),1)]),t.include_material_fee?(l(),a("div",Ve,Ce)):k("",!0)])])]),e("td",Te,[e("div",Se,[p(e("input",{type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":d=>t.programme_fee_discount=d,autocomplete:"off",onInput:d=>o.numbersOnly(d,m)},null,40,De),[[x,t.programme_fee_discount]]),t.include_material_fee?p((l(),a("input",{key:0,type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":d=>t.material_fee_discount=d,autocomplete:"off",onInput:d=>o.numbersOnly(d,m)},null,40,Ue)),[[x,t.material_fee_discount]]):k("",!0)])]),e("td",Ee,[e("div",Ie,[p(e("input",{type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":d=>t.programme_fee=d,autocomplete:"off",onInput:d=>o.numbersOnly(d,m)},null,40,Me),[[x,t.programme_fee]]),t.include_material_fee?p((l(),a("input",{key:0,type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":d=>t.material_fee=d,autocomplete:"off",onInput:d=>o.numbersOnly(d,m)},null,40,Fe)),[[x,t.material_fee]]):k("",!0)])]),e("td",Oe,[n(h,{buttonType:"danger",onClick:d=>o.deleteProgramme(m)},{default:f(()=>[b("Delete")]),_:2},1032,["onClick"])])]))),256))])])])]),je,e("div",$e,[e("div",Be,[ze,p(e("select",{name:"payment_status",id:"payment_status",class:"mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",autocomplete:"off","onUpdate:modelValue":r[6]||(r[6]=t=>o.form.status=t)},[(l(!0),a(_,null,y(o.$page.props.payment_status,t=>(l(),a("option",{value:t.id},c(t.name),9,Ne))),256))],512),[[P,o.form.status]])]),Ae,e("div",He,[Re,e("span",We,c(o.totalFee(o.form.invoice_items)),1)])])])]),e("div",Ze,[e("div",Ge,[Je,e("div",Ke,[e("div",Qe,[Xe,e("div",Ye,[n(g(v),{class:u("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),modelValue:o.form.payment.date,"onUpdate:modelValue":r[7]||(r[7]=t=>o.form.payment.date=t),enableTimePicker:!1,"auto-apply":!0},null,8,["modelValue"])])]),e("div",qe,[eo,e("div",oo,[p(e("input",{type:"text",name:"transaction_id",id:"transaction_id",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.transaction_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[8]||(r[8]=t=>o.form.payment.transaction_id=t),autocomplete:"off"},null,2),[[x,o.form.payment.transaction_id]])])])]),e("div",to,[e("div",ro,[so,e("div",lo,[o.form.payment.proof.url.length?(l(),a("div",mo,[e("a",{href:o.form.payment.proof.file?o.form.payment.proof.url:"/storage/proof_of_payment/"+o.form.payment.proof.url,download:"",class:"flex items-center space-x-2 text-indigo-500 hover:text-indigo-600"},[po,e("span",null,c(o.form.payment.proof.file?o.form.payment.proof.file.name:o.form.payment.proof.url),1)],8,fo),e("div",uo,[e("button",{type:"button",class:"rounded-md p-2 bg-red-500 text-white",onClick:r[10]||(r[10]=t=>o.deleteProof())},go)])])):(l(),a("div",ao,[e("label",no,[io,e("input",{type:"file",ref:"file_input",class:u(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.$page.props.errors.proof?"border-red-300":"border-gray-300"]),onChange:r[9]||(r[9]=(...t)=>o.uploadFile&&o.uploadFile(...t))},null,34)])]))])])])])])]),e("div",bo,[e("div",_o,[e("div",ho,[e("div",yo,[e("div",xo,[n(h,{buttonType:"gray",route:o.route("fee.invoices")},{default:f(()=>[b("Cancel")]),_:1},8,["route"]),n(h,{type:"submit"},{default:f(()=>[b("Save")]),_:1})])])])])])])],32)])]),n(C,{showModal:o.open_modal,modalType:"md",onHideModal:r[17]||(r[17]=t=>o.open_modal=!1)},{header:f(()=>[vo]),content:f(()=>[e("div",wo,[e("div",ko,[e("div",Po,[Vo,e("div",Lo,[n(g(V),{modelValue:o.programme_form.centre_id,"onUpdate:modelValue":r[12]||(r[12]=t=>o.programme_form.centre_id=t),valueProp:"ID",placeholder:"Please enter some keywords",options:o.$page.props.allowed_centres,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"label",label:"label",classes:{container:o.error.centre_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),e("div",Co,[To,e("div",So,[p(e("select",{name:"programme_id",id:"programme_id",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.error.programme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[13]||(r[13]=t=>o.programme_form.programme_id=t),autocomplete:"off"},[Do,(l(!0),a(_,null,y(o.$page.props.programmes,(t,m)=>(l(),a("option",{value:t.id,key:m},c(t.name),9,Uo))),128))],2),[[P,o.programme_form.programme_id]])])]),e("div",Eo,[Io,e("div",Mo,[p(e("select",{name:"programme_level",id:"programme_level",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.error.programme_level?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[14]||(r[14]=t=>o.programme_form.programme_level=t),autocomplete:"off"},[Fo,(l(!0),a(_,null,y(o.$page.props.levels,(t,m)=>(l(),a("option",{value:t.level,key:m},c(t.level),9,Oo))),128))],2),[[P,o.programme_form.programme_level]])])]),e("div",jo,[$o,e("div",Bo,[p(e("select",{name:"fee_type_id",id:"fee_type_id",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.error.programme_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[15]||(r[15]=t=>o.programme_form.programme_type=t),autocomplete:"off"},[zo,(l(!0),a(_,null,y(o.$page.props.fee_types,(t,m)=>(l(),a("option",{value:t.id,key:m},c(t.label),9,No))),128))],2),[[P,o.programme_form.programme_type]])])]),e("div",Ao,[e("label",Ho,[p(e("input",{id:"include_material_fee",class:"form-check-input h-5 w-5 mt-0.5 border border-gray-300 rounded-sm bg-white hover:bg-white focus:ring-transparent text-indigo-500 transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox","onUpdate:modelValue":r[16]||(r[16]=t=>o.programme_form.include_material_fee=t),value:o.programme_form.include_material_fee},null,8,Ro),[[I,o.programme_form.include_material_fee]]),b(" Include Material Fee ")])])])])]),footer:f(()=>[e("div",Wo,[n(h,{buttonType:"gray",onClick:o.cancelProgramme},{default:f(()=>[b("Cancel")]),_:1},8,["onClick"]),n(h,{buttonType:"info",onClick:o.saveProgramme},{default:f(()=>[b("Save")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])]),_:1})],64)}}});export{dt as default};
