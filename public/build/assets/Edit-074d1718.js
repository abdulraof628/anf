import{o as d,c as n,a as u,u as v,w as m,F as h,H as D,L as O,d as e,l as U,h as l,v as c,e as g,t as i,q as f,g as p,m as C,n as k}from"./app-7998ab3f.js";import{B as I}from"./Authenticated-108ddfbc.js";import{B as b}from"./Button-9fc2dde7.js";import{h as x}from"./moment-a9aaa855.js";import{Z as P}from"./vue-datepicker-ebc53018.js";import{M as V}from"./Modal-9ae7015a.js";import"./ApplicationLogo-87bba962.js";import"./XIcon-6ae3497b.js";import"./vue3-perfect-scrollbar-1a319691.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-dbb2af03.js";import"./VueFinalModal.esm-1365d540.js";const L={class:"md:grid md:grid-cols-2"},A={class:"md:mt-0 md:col-span-2"},B={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},T={class:"grid grid-cols-1 gap-4"},Y={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"},j=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Invoice Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),N={class:"grid grid-cols-1"},E={class:"mb-4"},R=e("label",{for:"invoice_number",class:"block text-sm font-bold text-gray-700"}," Invoice Number ",-1),S={class:"mt-1 flex rounded-md shadow-sm"},z={class:"grid grid-cols-1"},H={class:"mb-4"},W=e("label",{for:"student_name",class:"block text-sm font-bold text-gray-700"}," Student Name ",-1),J={class:"mt-1 flex rounded-md shadow-sm"},Z={class:"grid grid-cols-2 gap-4"},q={class:"mb-4"},G=e("label",{for:"date_issued",class:"block text-sm font-bold text-gray-700"}," Date Issued ",-1),K={class:"mt-1 flex rounded-md shadow-sm"},Q={class:"mb-4"},X=e("label",{for:"due_date",class:"block text-sm font-bold text-gray-700"}," Due Date ",-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"grid grid-cols-1"},se={class:"mb-10"},oe={class:"w-full"},ae=e("thead",null,[e("tr",{class:"bg-gray-600"},[e("th",{class:"text-left text-white text-sm py-2 px-4 w-1/12"},"#"),e("th",{class:"text-left text-white text-sm py-2 px-4 w-7/12"},"Items"),e("th",{class:"text-center text-white text-sm py-2 px-4 w-2/12"},"Discount"),e("th",{class:"text-center text-white text-sm py-2 px-4 w-2/12"},"Amount")])],-1),re={class:"border text-sm text-center py-2 px-4"},de={class:"border text-sm py-2 px-4"},ne={class:"grid grid-rows-1 gap-2"},ie={class:"border border-dashed border-indigo-400 bg-indigo-200 rounded py-1 px-3"},le={class:"font-semibold"},me={class:"flex flex-col space-y-2 pl-5"},ce={class:"border border-dashed border-indigo-400 rounded py-1 px-3"},ue={key:0,class:"bg-indigo-100 py-1 px-3 rounded-sm"},pe=e("label",null," Registration Fee ",-1),fe=[pe],_e={key:1,class:"bg-indigo-100 py-1 px-3 rounded-sm"},he=e("label",null," Material Fee ",-1),be=[he],ge={class:"border border-dashed border-blue-400 bg-blue-100 rounded py-1 px-3 space-x-1"},ye=e("label",{class:"text-xs text-white px-1.5 py-0.5 bg-blue-500 rounded"},"Promo",-1),xe={class:"border text-sm py-2 px-4 align-bottom"},we={class:"flex flex-col space-y-1.5"},ve=["onUpdate:modelValue"],ke=["onUpdate:modelValue"],De=["onUpdate:modelValue"],Ve=["value"],Fe={class:"border text-sm py-2 px-4 align-bottom"},Me={class:"flex flex-col space-y-1.5"},$e=["onUpdate:modelValue"],Oe=["onUpdate:modelValue"],Ue=["onUpdate:modelValue"],Ce={class:"grid grid-cols-3"},Ie={class:"mb-4 text-left"},Pe=e("label",{for:"payment_status",class:"block text-sm font-bold text-gray-700"}," Payment Status ",-1),Le=["value"],Ae=e("div",{class:"mb-4"},null,-1),Be={class:"mb-4 text-right pr-5"},Te=e("label",{for:"amount",class:"block text-md font-bold text-gray-700"}," Total Amount",-1),Ye={class:"text-2xl font-bold text-indigo-500"},je={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"},Ne=e("div",{class:"mb-5"},[e("div",{class:"flex justify-between items-end mb-2"},[e("h1",{class:"font-bold text-indigo-800"},"Online Payment (Billplz)")]),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),Ee={class:"overflow-x-auto"},Re={class:"w-full"},Se=e("thead",null,[e("tr",{class:"bg-gray-600"},[e("th",{class:"text-left text-white text-sm py-2 px-4",width:"10%"},"Payment Date"),e("th",{class:"text-left text-white text-sm py-2 px-4",width:"15%"},"Email"),e("th",{class:"text-center text-white text-sm py-2 px-4",width:"20%"},"Receipt")])],-1),ze={key:0},He={class:"border text-sm py-2 px-4 whitespace-nowrap"},We={class:"border text-sm py-2 px-4 whitespace-nowrap"},Je={class:"border text-sm py-2 px-4 text-center"},Ze={key:1},qe=e("td",{class:"border text-sm text-center py-2 px-4 text-gray-600",colspan:"10"},"No Records",-1),Ge=[qe],Ke={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full"},Qe={class:"mb-5"},Xe={class:"flex justify-between items-end mb-2"},et=e("h1",{class:"font-bold text-indigo-800"},"Collect Payment",-1),tt=e("div",{class:"border-b border-dashed border-indigo-900 mt-1"},null,-1),st={class:"overflow-x-auto"},ot={class:"w-full"},at=e("thead",null,[e("tr",{class:"bg-gray-600"},[e("th",{class:"text-center text-white text-sm py-2 px-4",width:"1%"},"#"),e("th",{class:"text-left text-white text-sm py-2 px-4",width:"10%"},"Date"),e("th",{class:"text-left text-white text-sm py-2 px-4",width:"15%"},"Transaction ID"),e("th",{class:"text-left text-white text-sm py-2 px-4",width:"20%"},"File Name"),e("th",{class:"text-left text-white text-sm py-2 px-4",width:"25%"},"Remark"),e("th",{class:"text-center text-white text-sm py-2 px-4",width:"10%"},"Action")])],-1),rt={class:"border text-sm py-2 px-4 text-center"},dt={class:"border text-sm py-2 px-4 whitespace-nowrap"},nt={class:"border text-sm py-2 px-4 whitespace-nowrap"},it={class:"min-h-[18px] inline-flex justify-center items-center px-1 bg-gray-200 border border-transparent font-mono text-gray-800 rounded-md"},lt={class:"border text-sm py-2 px-4 whitespace-nowrap"},mt=["href"],ct={class:"border text-sm py-2 px-4 whitespace-nowrap"},ut={class:"border text-sm py-2 px-4 text-center"},pt={key:1},ft=e("td",{class:"border text-sm text-center py-2 px-4 text-gray-600",colspan:"10"},"No Records",-1),_t=[ft],ht={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 gap-4"},bt={class:"sm:row-span-3"},gt={class:"p-5 bg-white border border-gray-200 rounded-lg shadow-md"},yt={class:"flex items-center justify-end"},xt={class:"flex space-x-2"},wt={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},vt=e("h3",{class:"text-gray-900 font-semibold"}," Add Proof of Payment ",-1),kt=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Dt=[kt],Vt={class:"p-6 overflow-y-auto no-scrollbar"},Ft={class:"grid grid-rows-1"},Mt={class:"mb-4"},$t=e("label",{for:"date",class:"block text-sm font-bold text-gray-700"}," Date ",-1),Ot={class:"mt-1 flex rounded-md shadow-sm"},Ut={class:"mb-4"},Ct=e("label",{for:"transaction_id",class:"block text-sm font-bold text-gray-700"}," Transaction ID ",-1),It={class:"mt-1 flex rounded-md shadow-sm"},Pt={class:"mb-4"},Lt=e("label",{for:"student_name",class:"block text-sm font-bold text-gray-700"},[p(" Proof of Payment ( "),e("span",{class:"text-xs text-indigo-500"},"PDF, JPEG"),p(" )")],-1),At={class:"mt-1 items-center w-full"},Bt={class:""},Tt={class:"block focus:ring-0 focus:border-gray-300"},Yt=e("span",{class:"sr-only"},"Browse File",-1),jt={class:"mb-4"},Nt=e("label",{for:"remark",class:"block text-sm font-bold text-gray-700"}," Remark ",-1),Et={class:"mt-1 flex rounded-md shadow-sm"},Rt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},St={components:{Head:D,Link:O,Modal:V},data(){return{show_add_attachment:!1,date_issued:x(this.$page.props.invoice_data.date_issued).format("DD MMM Y"),due_date:x(this.$page.props.invoice_data.due_date).format("DD MMM Y"),form:{params:this.$page.props.params,invoice_id:this.$page.props.invoice_data.id,invoice_items:JSON.parse(this.$page.props.invoice_data.invoice_items),invoice_amount:this.$page.props.invoice_data.amount,payment:{status:this.$page.props.invoice_data.status,proofs:[],proofs_to_delete:[]}},attachment:{date:"",transaction_id:"",url:"",file:"",remark:""},errors:{date:!1,transaction_id:!1,proof_of_payment:!1}}},watch:{"form.invoice_items":{handler(r){r.forEach(t=>{t.programme_fee||(t.programme_fee=0),t.programme_fee_discount||(t.programme_fee_discount=0),t.registration_fee||(t.registration_fee=0),t.registration_fee_discount||(t.registration_fee_discount=0),t.material_fee||(t.material_fee=0),t.material_fee_discount||(t.material_fee_discount=0)})},deep:!0}},methods:{submit(){this.form.invoice_amount=this.totalFee(this.form.invoice_items),this.$inertia.post(route("fee.invoices.update"),this.form,{preserveState:!0})},numbersOnly(r){r=r||window.event;var t=r.which?r.which:r.keyCode;if(t>31&&(t<48||t>57)&&t!==46)r.preventDefault();else{let o=r.target.value.trim();return o===""?o="0":o!=="0"&&o.startsWith("0")&&(o=o.replace(/^0+/,"")),r.target.value=o!==""?o:"0",!0}},totalFee(r){let t=0;for(const s of r){const _=parseFloat(s.programme_fee),a=parseFloat(s.programme_fee_discount),y=parseFloat(s.registration_fee),F=parseFloat(s.registration_fee_discount),M=parseFloat(s.material_fee),$=parseFloat(s.material_fee_discount);t+=_-a,s.include_registration_fee&&(t+=y-F),s.include_material_fee&&(t+=M-$);var o=0;if(s.promos&&Array.isArray(s.promos)){for(const w of s.promos)w.type_id===1&&(o+=_*w.value/100),w.type_id===2&&(o+=w.value);t=t-o}}return t},clearErrors(){this.errors.date=!1,this.errors.transaction_id=!1,this.errors.proof_of_payment=!1},clearAttachmentFields(){this.attachment.date="",this.attachment.transaction_id="",this.attachment.url="",this.attachment.file="",this.attachment.remark=""},showModal(){this.clearErrors(),this.clearAttachmentFields(),this.show_add_attachment=!0},deleteProof(r,t){this.form.payment.proofs.splice(r,1),t&&this.form.payment.proofs_to_delete.push(t)},uploadFile(r){const t=r.target.files[0];t.type=="application/pdf"||t.name.toLowerCase().endsWith(".pdf")||t.type=="image/jpeg"||t.name.toLowerCase().endsWith(".png")?(this.attachment.url=URL.createObjectURL(t),this.attachment.file=t):(alert("Only Image / PDF File allowed!"),this.$refs.file_input.value="")},addAttachment(){if(!this.attachment.date||!this.attachment.transaction_id||!this.attachment.file){this.errors.date=!this.attachment.date,this.errors.transaction_id=!this.attachment.transaction_id,this.errors.proof_of_payment=!this.attachment.file;return}this.form.payment.proofs.push({date:x(this.attachment.date).format("DD-MM-YYYY"),transaction_id:this.attachment.transaction_id,url:this.attachment.url,file:this.attachment.file,remark:this.attachment.remark}),this.show_add_attachment=!1},openPaymentLink(){window.open(this.$page.props.bill_info.url,"_blank")}},mounted(){this.$page.props.invoice_attachments.forEach(r=>{this.form.payment.proofs.push({id:r.id,date:x(r.date).format("DD-MM-YYYY"),transaction_id:r.transaction_id,url:r.attachment,file:"",remark:r.remark})})}},ss=Object.assign(St,{__name:"Edit",setup(r){return(t,o)=>(d(),n(h,null,[u(v(D),{title:"Fee Invoices"}),u(I,null,{header:m(()=>[]),default:m(()=>[e("div",L,[e("div",A,[e("form",{onSubmit:o[14]||(o[14]=U((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",B,[e("div",T,[e("div",Y,[j,e("div",N,[e("div",E,[R,e("div",S,[l(e("input",{disabled:"",type:"text",name:"invoice_number",id:"invoice_number",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-100","onUpdate:modelValue":o[0]||(o[0]=s=>t.$page.props.invoice_data.invoice_number=s),autocomplete:"off"},null,512),[[c,t.$page.props.invoice_data.invoice_number]])])])]),e("div",z,[e("div",H,[W,e("div",J,[l(e("input",{disabled:"",type:"text",name:"student_name",id:"student_name",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-100","onUpdate:modelValue":o[1]||(o[1]=s=>t.$page.props.invoice_data.student_name=s),autocomplete:"off"},null,512),[[c,t.$page.props.invoice_data.student_name]])])])]),e("div",Z,[e("div",q,[G,e("div",K,[l(e("input",{disabled:"",type:"text",name:"date_issued",id:"date_issued",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-100","onUpdate:modelValue":o[2]||(o[2]=s=>t.date_issued=s),autocomplete:"off"},null,512),[[c,t.date_issued]])])]),e("div",Q,[X,e("div",ee,[l(e("input",{disabled:"",type:"text",name:"due_date",id:"due_date",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-100","onUpdate:modelValue":o[3]||(o[3]=s=>t.due_date=s),autocomplete:"off"},null,512),[[c,t.due_date]])])])]),e("div",te,[e("div",se,[e("table",oe,[ae,e("tbody",null,[(d(!0),n(h,null,g(t.form.invoice_items,(s,_)=>(d(),n("tr",null,[e("td",re,i(_+1),1),e("td",de,[e("div",ne,[e("div",ie,[e("label",le,i(s.programme_name)+" ( Level "+i(s.programme_level)+" )",1)]),e("div",me,[e("div",ce,[e("label",null,i(s.programme_type),1)]),s.include_registration_fee?(d(),n("div",ue,fe)):f("",!0),s.include_material_fee?(d(),n("div",_e,be)):f("",!0),s.promos?(d(!0),n(h,{key:2},g(s.promos,a=>(d(),n("div",ge,[ye,p(),e("label",null,i(a.promo_name),1)]))),256)):f("",!0)])])]),e("td",xe,[e("div",we,[l(e("input",{type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed","onUpdate:modelValue":a=>s.programme_fee_discount=a,autocomplete:"off",onInput:o[4]||(o[4]=(...a)=>t.numbersOnly&&t.numbersOnly(...a)),disabled:""},null,40,ve),[[c,s.programme_fee_discount]]),s.include_registration_fee?l((d(),n("input",{key:0,type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed","onUpdate:modelValue":a=>s.registration_fee_discount=a,autocomplete:"off",onInput:o[5]||(o[5]=(...a)=>t.numbersOnly&&t.numbersOnly(...a)),disabled:""},null,40,ke)),[[c,s.registration_fee_discount]]):f("",!0),s.include_material_fee?l((d(),n("input",{key:1,type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed","onUpdate:modelValue":a=>s.material_fee_discount=a,autocomplete:"off",onInput:o[6]||(o[6]=(...a)=>t.numbersOnly&&t.numbersOnly(...a)),disabled:""},null,40,De)),[[c,s.material_fee_discount]]):f("",!0),s.promos?(d(!0),n(h,{key:2},g(s.promos,a=>(d(),n("input",{type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed",value:a.type_id===1?s.programme_fee*a.value/100:a.value,autocomplete:"off",onInput:o[7]||(o[7]=(...y)=>t.numbersOnly&&t.numbersOnly(...y)),disabled:""},null,40,Ve))),256)):f("",!0)])]),e("td",Fe,[e("div",Me,[l(e("input",{type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed","onUpdate:modelValue":a=>s.programme_fee=a,autocomplete:"off",onInput:o[8]||(o[8]=(...a)=>t.numbersOnly&&t.numbersOnly(...a)),disabled:""},null,40,$e),[[c,s.programme_fee]]),s.include_registration_fee?l((d(),n("input",{key:0,type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed","onUpdate:modelValue":a=>s.registration_fee=a,autocomplete:"off",onInput:o[9]||(o[9]=(...a)=>t.numbersOnly&&t.numbersOnly(...a)),disabled:""},null,40,Oe)),[[c,s.registration_fee]]):f("",!0),s.include_material_fee?l((d(),n("input",{key:1,type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed","onUpdate:modelValue":a=>s.material_fee=a,autocomplete:"off",onInput:o[10]||(o[10]=(...a)=>t.numbersOnly&&t.numbersOnly(...a)),disabled:""},null,40,Ue)),[[c,s.material_fee]]):f("",!0),s.promos?(d(!0),n(h,{key:2},g(s.promos,a=>(d(),n("input",{type:"number",min:"0",name:"",id:"",class:"bg-gray-50 py-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 cursor-not-allowed",value:0,onInput:o[11]||(o[11]=(...y)=>t.numbersOnly&&t.numbersOnly(...y)),disabled:""},null,32))),256)):f("",!0)])])]))),256))])])])]),e("div",Ce,[e("div",Ie,[Pe,l(e("select",{name:"payment_status",id:"payment_status",class:"mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",autocomplete:"off","onUpdate:modelValue":o[12]||(o[12]=s=>t.form.payment.status=s)},[(d(!0),n(h,null,g(t.$page.props.invoice_status,s=>(d(),n("option",{value:s.id},i(s.name),9,Le))),256))],512),[[C,t.form.payment.status]])]),Ae,e("div",Be,[Te,e("span",Ye,i(t.$page.props.invoice_data.amount),1)])])]),e("div",je,[Ne,e("div",Ee,[e("table",Re,[Se,e("tbody",null,[t.$page.props.bill_info.paid?(d(),n("tr",ze,[e("td",He,i(v(x)(t.$page.props.bill_info.paid_at).format("DD/MM/Y")),1),e("td",We,i(t.$page.props.bill_info.email),1),e("td",Je,[u(b,{buttonType:"info",onClick:o[13]||(o[13]=s=>t.openPaymentLink())},{default:m(()=>[p("View")]),_:1})])])):(d(),n("tr",Ze,Ge))])])])]),e("div",Ke,[e("div",Qe,[e("div",Xe,[et,u(b,{onClick:t.showModal,class:"normal-case px-4 py-2"},{default:m(()=>[p("Add proof of payment")]),_:1},8,["onClick"])]),tt]),e("div",st,[e("table",ot,[at,e("tbody",null,[t.form.payment.proofs.length?(d(!0),n(h,{key:0},g(t.form.payment.proofs,(s,_)=>(d(),n("tr",null,[e("td",rt,i(_+1),1),e("td",dt,i(s.date),1),e("td",nt,[e("kbd",it,i(s.transaction_id),1)]),e("td",lt,[e("a",{href:s.file?s.url:"/storage/proof_of_payment/"+s.url,download:"",class:"min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-neutral-900"},i(s.file?s.file.name:s.url),9,mt)]),e("td",ct,i(s.remark),1),e("td",ut,[u(b,{buttonType:"danger",onClick:a=>t.deleteProof(_,s.id)},{default:m(()=>[p("Delete")]),_:2},1032,["onClick"])])]))),256)):(d(),n("tr",pt,_t))])])])])]),e("div",ht,[e("div",bt,[e("div",gt,[e("div",yt,[e("div",xt,[u(b,{buttonType:"gray",route:t.route("fee.invoices",t.$page.props.params)},{default:m(()=>[p("Cancel")]),_:1},8,["route"]),u(b,{type:"submit"},{default:m(()=>[p("Save")]),_:1})])])])])])])],32)])]),u(V,{showModal:t.show_add_attachment,modalType:"sm",onHideModal:o[21]||(o[21]=s=>t.show_add_attachment=!1)},{header:m(()=>[e("div",wt,[vt,e("button",{type:"button",onClick:o[15]||(o[15]=s=>t.show_add_attachment=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},Dt)])]),content:m(()=>[e("div",Vt,[e("div",Ft,[e("div",Mt,[$t,e("div",Ot,[u(v(P),{class:k("focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm"),"input-class-name":t.errors.date?"invoices-input-date-picker-error focus:ring-0":"invoices-input-date-picker focus:ring-0",modelValue:t.attachment.date,"onUpdate:modelValue":o[16]||(o[16]=s=>t.attachment.date=s),enableTimePicker:!1,"auto-apply":!0,format:"dd/MM/yyyy"},null,8,["input-class-name","modelValue"])])]),e("div",Ut,[Ct,e("div",It,[l(e("input",{type:"text",name:"transaction_id",id:"transaction_id",class:k(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.transaction_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[17]||(o[17]=s=>t.attachment.transaction_id=s),autocomplete:"off"},null,2),[[c,t.attachment.transaction_id]])])]),e("div",Pt,[Lt,e("div",At,[e("div",Bt,[e("label",Tt,[Yt,e("input",{type:"file",ref:"file_input",class:k(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",t.errors.proof_of_payment?"border-red-300":"border-gray-300"]),onChange:o[18]||(o[18]=(...s)=>t.uploadFile&&t.uploadFile(...s))},null,34)])])])]),e("div",jt,[Nt,e("div",Et,[l(e("textarea",{type:"text",name:"remark",id:"remark",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":o[19]||(o[19]=s=>t.attachment.remark=s),autocomplete:"off"},null,512),[[c,t.attachment.remark]])])])])])]),footer:m(()=>[e("div",Rt,[u(b,{buttonType:"gray",onClick:o[20]||(o[20]=s=>t.show_add_attachment=!1)},{default:m(()=>[p("Cancel")]),_:1}),u(b,{onClick:t.addAttachment},{default:m(()=>[p("Add")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])]),_:1})],64))}});export{ss as default};
