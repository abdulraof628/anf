import{r as C,o as d,c as i,a as n,u as f,w as _,F as w,H as V,L as E,j as D,d as e,k as F,h as u,n as p,G as y,g as x,p as g,e as k,t as c,v as b,l as T}from"./app-e0a6cb0b.js";import{B as U}from"./Authenticated-8db20f22.js";import{B as v}from"./Button-7a662e9d.js";import"./moment-fbc5633a.js";import{Z as h}from"./vue-datepicker-2e6905fd.js";import{s as P}from"./multiselect-2fa3b714.js";import{b as L}from"./toggle-9d696e24.js";import"./ApplicationLogo-62fe82f6.js";import"./XIcon-b8444cee.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={class:"md:grid md:grid-cols-2"},M={class:"md:mt-0 md:col-span-2"},O={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},S={class:"grid grid-rows-1 grid-cols-2 sm:grid-cols-2 gap-4"},j={class:"sm:row-span-3"},$={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"},B=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Invoice Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"grid grid-cols-1 gap-4"},N={class:"mb-4"},A=e("label",{for:"student_id",class:"block text-sm font-bold text-gray-700"}," Student Name ",-1),H={class:"mt-1 flex rounded-md shadow-sm"},R={class:"grid grid-cols-1 gap-4"},W={class:"mb-4"},Z=e("label",{for:"student_id",class:"block text-sm font-bold text-gray-700"}," Create Bulk (Multiple Invoices) ",-1),G={key:0,class:"grid grid-cols-2 gap-4"},J={class:"mb-4"},K=e("label",{for:"date_issued",class:"block text-sm font-bold text-gray-700"}," Date Issued ",-1),Q={class:"mt-1 flex rounded-md shadow-sm"},X={class:"mb-4"},Y=e("label",{for:"due_date",class:"block text-sm font-bold text-gray-700"}," Due Date ",-1),q={class:"mt-1 flex rounded-md shadow-sm"},ee={key:1,class:"grid grid-cols-2 gap-4"},oe={class:"mb-4"},te=e("label",{for:"from_date",class:"block text-sm font-bold text-gray-700"}," From ",-1),re={class:"mt-1 flex rounded-md shadow-sm"},se={class:"mb-4"},ae=e("label",{for:"to_date",class:"block text-sm font-bold text-gray-700"}," To ",-1),le={class:"mt-1 flex rounded-md shadow-sm"},de=e("div",{class:"mb-5 mt-5"},[e("div",{class:"flex justify-between items-center"},[e("h1",{class:"font-bold text-indigo-800"}," Programmes ")]),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),ie={class:"grid grid-cols-1"},ne={class:"mb-10"},me={class:"flex justify-end mb-3"},fe={class:"w-full"},ue=e("thead",null,[e("tr",{class:"bg-gray-600"},[e("th",{class:"text-left text-white text-sm py-2 px-4 w-1/12"},"#"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-7/12"},"Programme"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-2/12"},"Discount"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-2/12"},"Amount"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-2/12"},"Action")])],-1),pe={key:0},ce=e("td",{colspan:"10",class:"py-4 text-center"},"No programme added",-1),_e=[ce],ge={class:"border text-sm align-top py-2 px-4"},be={class:"border text-sm py-2 px-4"},he={class:"flex flex-col space-y-4"},ye={class:"bg-indigo-300 py-2 px-3 rounded-t-md"},xe={class:"font-semibold"},ve={class:"flex flex-col space-y-2 pl-5"},we={class:"bg-indigo-100 py-1 px-3 rounded-sm"},ke={key:0,class:"bg-indigo-100 py-1 px-3 rounded-sm"},Ve=e("label",null," Material Fee ",-1),Pe=[Ve],Le={class:"border text-sm py-2 px-4 align-bottom"},Ce={class:"flex flex-col space-y-1.5"},Ee=["onUpdate:modelValue","onInput"],De=["onUpdate:modelValue","onInput"],Fe={class:"border text-sm py-2 px-4 align-bottom"},Te={class:"flex flex-col space-y-1.5"},Ue=["onUpdate:modelValue","onInput"],Ie=["onUpdate:modelValue","onInput"],Me={class:"border text-sm py-2 px-4 self-center"},Oe=e("div",{class:"border-b border-dashed border-indigo-900 mb-5"},null,-1),Se={class:"grid grid-cols-3"},je={class:"mb-4 text-left"},$e=e("label",{for:"payment_status",class:"block text-sm font-bold text-gray-700"}," Payment Status ",-1),Be=["value"],ze=e("div",{class:"mb-4"},null,-1),Ne={class:"mb-4 text-right pr-5"},Ae=e("label",{for:"amount",class:"block text-md font-bold text-gray-700"}," Total Amount ",-1),He={class:"text-2xl font-bold text-indigo-500"},Re={key:0,class:"sm:row-span-3"},We={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"},Ze=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Collect Payment"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),Ge={class:"grid grid-cols-1"},Je={class:"mb-4"},Ke=e("label",{for:"date",class:"block text-sm font-bold text-gray-700"}," Date ",-1),Qe={class:"mt-1 flex rounded-md shadow-sm"},Xe={class:"mb-4"},Ye=e("label",{for:"transaction_id",class:"block text-sm font-bold text-gray-700"}," Transaction ID ",-1),qe={class:"mt-1 flex rounded-md shadow-sm"},eo={class:"grid grid-cols-1"},oo={class:"mb-4"},to=e("label",{for:"student_name",class:"block text-sm font-bold text-gray-700"}," Proof of Payment ",-1),ro={class:"mt-1 items-center space-x-2 w-full"},so={key:0,class:"mb-4"},ao={class:"block focus:ring-0 focus:border-gray-300"},lo=e("span",{class:"sr-only"},"Browse File",-1),io={key:1,class:"flex justify-between py-2 border bg-gray-50 shadow-md p-4 rounded-md"},no=["href"],mo=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 448 512"},[e("path",{d:"M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"})],-1),fo={class:"flex"},uo=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",fill:"currentColor",class:"text-white h-3 w-3"},[e("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})],-1),po=[uo],co={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 gap-4"},_o={class:"sm:row-span-3"},go={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},bo={class:"flex items-center justify-end"},ho={class:"flex space-x-2"},yo={components:{Head:V,Link:E,Multiselect:P,Toggle:L},data(){return{open_modal:!1,form:{params:this.$page.props.params,create_bulk:!1,from_date:"",to_date:"",formatted_to_date:"",student_id:"",invoice_items:[],date_issued:"",due_date:"",invoice_amount:"",status:1,payment:{date:"",transaction_id:"",proof:{url:"",file:""}}},list:{isLoading:!1,students:[]},programme_form:{centre_id:"",centre_name:"",programme_id:"",programme_name:"",programme_level:"",programme_type:"",programme_fee:"",programme_fee_discount:"",include_material_fee:!1,material_fee:"",material_fee_discount:""},error:{centre_id:!1,programme_id:!1,programme_level:!1,programme_type:!1},formError:{student_id:!1,date_issued:!1,due_date:!1,from_date:!1,to_date:!1}}},watch:{"form.invoice_items":{handler(s){s.forEach(o=>{o.programme_fee||(o.programme_fee=0),o.programme_fee_discount||(o.programme_fee_discount=0),o.material_fee||(o.material_fee=0),o.material_fee_discount||(o.material_fee_discount=0)})},deep:!0},"form.create_bulk":{handler(){this.formError.date_issued=!1,this.formError.due_date=!1,this.formError.from_date=!1,this.formError.to_date=!1,this.form.from_date="",this.form.to_date="",this.form.date_issued="",this.form.due_date=""},deep:!0},"form.from_date":{handler(){this.form.to_date=""},deep:!0}},methods:{submit(){if(this.formError.student_id=!this.form.student_id,this.formError.date_issued=!this.form.create_bulk&&!this.form.date_issued,this.formError.due_date=!this.form.create_bulk&&!this.form.due_date,this.formError.from_date=!!(this.form.create_bulk&&!this.form.from_date),this.formError.to_date=!!(this.form.create_bulk&&!this.form.to_date),!Object.values(this.formError).some(o=>o===!0)){if(this.form.invoice_items.length<1){alert("Please add at least 1 programme.");return}this.form.invoice_amount=this.totalFee(this.form.invoice_items),this.$inertia.post(route("fee.invoices.store"),this.form,{preserveState:!0})}},numbersOnly(s,o){s=s||window.event;var r=s.which?s.which:s.keyCode;if(r>31&&(r<48||r>57)&&r!==46)s.preventDefault();else{let l=s.target.value.trim();return l===""?l="0":l!=="0"&&l.startsWith("0")&&(l=l.replace(/^0+/,"")),s.target.value=l!==""?l:"0",!0}},totalFee(s){let o=0;for(const r of s){const l=parseFloat(r.programme_fee),t=parseFloat(r.programme_fee_discount),m=parseFloat(r.material_fee),a=parseFloat(r.material_fee_discount);o+=l-t,r.include_material_fee&&(o+=m-a)}return o},deleteProof(){this.form.payment.proof.url=[],this.form.payment.proof.file="",this.form.payment.proof.delete_previous=!0},uploadFile(s){const o=s.target.files[0];o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")||o.type=="image/jpeg"||o.name.toLowerCase().endsWith(".png")?(this.form.payment.proof.url=[URL.createObjectURL(o)],this.form.payment.proof.file=o):(alert("Only Image / PDF File allowed!"),this.$refs.file_input.value="",this.form.payment.proof.url="",this.form.payment.proof.file="")},findStudents(s){D.debounce(o=>"400ms")(10),s&&(this.list.isLoading=!0,axios.get(route("students.find"),{params:{keyword:s}}).then(o=>{this.list.students=o.data,this.list.isLoading=!1}))},addProgramme(){this.programme_form.centre_id="",this.programme_form.centre_name="",this.programme_form.programme_id="",this.programme_form.programme_name="",this.programme_form.programme_level="",this.programme_form.programme_type="",this.programme_form.include_material_fee=!1,this.open_modal=!0},saveProgramme(){var o,r,l;this.error.centre_id=!this.programme_form.centre_id,this.error.programme_id=!this.programme_form.programme_id,this.error.programme_level=!this.programme_form.programme_level,this.error.programme_type=!this.programme_form.programme_type,Object.values(this.error).some(t=>t===!0)||(this.form.invoice_items.push({centre_id:this.programme_form.centre_id,centre_name:(o=this.$page.props.allowed_centres.find(t=>t.ID===this.programme_form.centre_id))==null?void 0:o.label,programme_id:this.programme_form.programme_id,programme_name:(r=this.$page.props.programmes.find(t=>t.id===this.programme_form.programme_id))==null?void 0:r.name,programme_level:this.programme_form.programme_level,programme_type:(l=this.$page.props.fee_types.find(t=>t.id===this.programme_form.programme_type))==null?void 0:l.label,programme_fee:0,programme_fee_discount:0,include_material_fee:this.programme_form.include_material_fee,material_fee:0,material_fee_discount:0}),this.open_modal=!1)},cancelProgramme(){this.error.centre_id=!1,this.error.programme_id=!1,this.error.programme_level=!1,this.error.programme_type=!1,this.open_modal=!1},deleteProgramme(s){this.form.invoice_items.splice(s,1)}}},Fo=Object.assign(yo,{__name:"Create",setup(s){return(o,r)=>{const l=C("debounce");return d(),i(w,null,[n(f(V),{title:"Fee Invoices"}),n(U,null,{header:_(()=>[]),default:_(()=>[e("div",I,[e("div",M,[e("form",{onSubmit:r[11]||(r[11]=F((...t)=>o.submit&&o.submit(...t),["prevent"]))},[e("div",O,[e("div",S,[e("div",j,[e("div",$,[B,e("div",z,[e("div",N,[A,e("div",H,[u(n(f(P),{modelValue:o.form.student_id,"onUpdate:modelValue":r[0]||(r[0]=t=>o.form.student_id=t),onClose:o.clearStudents,valueProp:"id",loading:o.list.isLoading,placeholder:"Please enter some characters",options:o.list.students,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:o.formError.student_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onClose","loading","options","classes"]),[[l,o.findStudents]])])])]),e("div",R,[e("div",W,[Z,n(f(L),{modelValue:o.form.create_bulk,"onUpdate:modelValue":r[1]||(r[1]=t=>o.form.create_bulk=t),classes:{container:"mt-1 inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-indigo-500 border-indigo-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])])]),o.form.create_bulk?(d(),i("div",ee,[e("div",oe,[te,e("div",re,[n(f(h),{class:p("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:y(o.formError.from_date?"--dp-border-color: #fa9e9e":""),"input-class-name":"invoices-input-date-picker focus:ring-0",modelValue:o.form.from_date,"onUpdate:modelValue":r[4]||(r[4]=t=>o.form.from_date=t),enableTimePicker:!1,"month-picker":!0,format:"dd/MM/yyyy","auto-apply":!0},null,8,["style","modelValue"])])]),e("div",se,[ae,e("div",le,[n(f(h),{"no-today":"",class:p("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:y(o.formError.to_date?"--dp-border-color: #fa9e9e":""),"input-class-name":"invoices-input-date-picker focus:ring-0",modelValue:o.form.to_date,"onUpdate:modelValue":r[5]||(r[5]=t=>o.form.to_date=t),enableTimePicker:!1,format:"dd/MM/yyyy","auto-apply":!0,"month-picker":!0,"min-date":`${o.form.from_date.year}-${o.form.from_date.month+1}`},null,8,["style","modelValue","min-date"])])])])):(d(),i("div",G,[e("div",J,[K,e("div",Q,[n(f(h),{class:p("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:y(o.formError.date_issued?"--dp-border-color: #fa9e9e":""),"input-class-name":"invoices-input-date-picker focus:ring-0",modelValue:o.form.date_issued,"onUpdate:modelValue":r[2]||(r[2]=t=>o.form.date_issued=t),enableTimePicker:!1,format:"dd/MM/yyyy","auto-apply":!0},null,8,["style","modelValue"])])]),e("div",X,[Y,e("div",q,[n(f(h),{class:p("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),style:y(o.formError.due_date?"--dp-border-color: #fa9e9e":""),"input-class-name":"invoices-input-date-picker focus:ring-0",modelValue:o.form.due_date,"onUpdate:modelValue":r[3]||(r[3]=t=>o.form.due_date=t),enableTimePicker:!1,format:"dd/MM/yyyy","auto-apply":!0},null,8,["style","modelValue"])])])])),de,e("div",ie,[e("div",ne,[e("div",me,[n(v,{buttonType:"info",onClick:o.addProgramme},{default:_(()=>[x("Add Programme")]),_:1},8,["onClick"])]),e("table",fe,[ue,e("tbody",null,[o.form.invoice_items.length?g("",!0):(d(),i("tr",pe,_e)),(d(!0),i(w,null,k(o.form.invoice_items,(t,m)=>(d(),i("tr",null,[e("td",ge,c(m+1),1),e("td",be,[e("div",he,[e("div",ye,[e("label",xe,c(t.programme_name)+" ( Level "+c(t.programme_level)+" )",1)]),e("div",ve,[e("div",we,[e("label",null,c(t.programme_type),1)]),t.include_material_fee?(d(),i("div",ke,Pe)):g("",!0)])])]),e("td",Le,[e("div",Ce,[u(e("input",{type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":a=>t.programme_fee_discount=a,autocomplete:"off",onInput:a=>o.numbersOnly(a,m)},null,40,Ee),[[b,t.programme_fee_discount]]),t.include_material_fee?u((d(),i("input",{key:0,type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":a=>t.material_fee_discount=a,autocomplete:"off",onInput:a=>o.numbersOnly(a,m)},null,40,De)),[[b,t.material_fee_discount]]):g("",!0)])]),e("td",Fe,[e("div",Te,[u(e("input",{type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":a=>t.programme_fee=a,autocomplete:"off",onInput:a=>o.numbersOnly(a,m)},null,40,Ue),[[b,t.programme_fee]]),t.include_material_fee?u((d(),i("input",{key:0,type:"number",min:"0",name:"",id:"",class:"py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":a=>t.material_fee=a,autocomplete:"off",onInput:a=>o.numbersOnly(a,m)},null,40,Ie)),[[b,t.material_fee]]):g("",!0)])]),e("td",Me,[n(v,{buttonType:"danger",onClick:a=>o.deleteProgramme(m)},{default:_(()=>[x("Delete")]),_:2},1032,["onClick"])])]))),256))])])])]),Oe,e("div",Se,[e("div",je,[$e,u(e("select",{name:"payment_status",id:"payment_status",class:"mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",autocomplete:"off","onUpdate:modelValue":r[6]||(r[6]=t=>o.form.status=t)},[(d(!0),i(w,null,k(o.$page.props.payment_status,t=>(d(),i("option",{value:t.id},c(t.name),9,Be))),256))],512),[[T,o.form.status]])]),ze,e("div",Ne,[Ae,e("span",He,c(o.totalFee(o.form.invoice_items)),1)])])])]),o.form.create_bulk?g("",!0):(d(),i("div",Re,[e("div",We,[Ze,e("div",Ge,[e("div",Je,[Ke,e("div",Qe,[n(f(h),{class:p("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),"input-class-name":"invoices-input-date-picker focus:ring-0",modelValue:o.form.payment.date,"onUpdate:modelValue":r[7]||(r[7]=t=>o.form.payment.date=t),enableTimePicker:!1,format:"dd/MM/yyyy","auto-apply":!0},null,8,["modelValue"])])]),e("div",Xe,[Ye,e("div",qe,[u(e("input",{type:"text",name:"transaction_id",id:"transaction_id",class:p(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.transaction_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[8]||(r[8]=t=>o.form.payment.transaction_id=t),autocomplete:"off"},null,2),[[b,o.form.payment.transaction_id]])])])]),e("div",eo,[e("div",oo,[to,e("div",ro,[o.form.payment.proof.url.length?(d(),i("div",io,[e("a",{href:o.form.payment.proof.file?o.form.payment.proof.url:"/storage/proof_of_payment/"+o.form.payment.proof.url,download:"",class:"flex items-center space-x-2 text-indigo-500 hover:text-indigo-600"},[mo,e("span",null,c(o.form.payment.proof.file?o.form.payment.proof.file.name:o.form.payment.proof.url),1)],8,no),e("div",fo,[e("button",{type:"button",class:"rounded-md p-2 bg-red-500 text-white",onClick:r[10]||(r[10]=t=>o.deleteProof())},po)])])):(d(),i("div",so,[e("label",ao,[lo,e("input",{type:"file",ref:"file_input",class:p(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.$page.props.errors.proof?"border-red-300":"border-gray-300"]),onChange:r[9]||(r[9]=(...t)=>o.uploadFile&&o.uploadFile(...t))},null,34)])]))])])])])]))]),e("div",co,[e("div",_o,[e("div",go,[e("div",bo,[e("div",ho,[n(v,{buttonType:"gray",route:o.route("fee.invoices",o.$page.props.params)},{default:_(()=>[x("Cancel")]),_:1},8,["route"]),n(v,{type:"submit"},{default:_(()=>[x("Save")]),_:1})])])])])])])],32)])])]),_:1})],64)}}});export{Fo as default};
