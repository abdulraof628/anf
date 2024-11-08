import{B as I}from"./Authenticated-8568d8e0.js";import{H as L,L as U}from"./@inertiajs-dde9cc4c.js";import{h as C}from"./moment-a9aaa855.js";import{_ as V}from"./Card-6da73bae.js";import{_ as T}from"./DialogModal-06cc0d6d.js";import{_ as Y}from"./Collapsible-1a15da1f.js";import{_ as w,d as F,e as i,c as p,a as h,b as _}from"./TableRow-c597a3f8.js";import{_ as N}from"./TableCaption-1b52d953.js";import{_ as R}from"./index-69942a51.js";import{C as S}from"./lucide-vue-next-81b3e39b.js";import{y as D,x as a,u as l,Q as t,F as c,be as $,t as f,W as r,z as n,J as A,v as b,K as u,C as B,q as j}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f7a369e6.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-f2587495.js";import"./groq-sdk-5d132fed.js";const E={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4"},O={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},z={class:"w-full"},H={class:"flex flex-col justify-end items-end"},J={class:"grid grid-cols-1 xl:grid-cols-2 gap-2"},W={class:"flex justify-between items-center"},q={class:"min-h-[18px] inline-flex justify-center items-center px-1 bg-gray-200 border border-transparent font-mono text-gray-800 rounded-md"},G=["href"],K={class:"flex items-center justify-end"},Q={class:"flex space-x-2"},X={class:"p-1 grid grid-cols-1 gap-4"},Z={class:"relative"},ee={class:"mt-1 items-center w-full"},te={class:""},ae={class:"block focus:ring-0 focus:border-gray-300"},oe={components:{Head:L,Link:U,Card:V,Dialog:T,Table:w,TableBody:F,TableCaption:N,TableCell:i,TableHead:p,TableHeader:h,TableRow:_},data(){return{collapsible_is_open:!0,date_issued:C(this.$page.props.invoice_data.date_issued).format("DD MMM Y"),due_date:C(this.$page.props.invoice_data.due_date).format("DD MMM Y"),show:{add_attachment:!1},form:{params:this.$page.props.params,invoice_id:this.$page.props.invoice_data.id,invoice_items:JSON.parse(this.$page.props.invoice_data.invoice_items),invoice_amount:this.$page.props.invoice_data.amount,payment:{status:this.$page.props.invoice_data.status,proofs:[],proofs_to_delete:[]}},attachment:{date:"",transaction_id:"",url:"",file:"",remark:""},errors:{date:!1,transaction_id:!1,proof_of_payment:!1}}},watch:{"form.invoice_items":{handler(m){m.forEach(o=>{o.programme_fee||(o.programme_fee=0),o.programme_fee_discount||(o.programme_fee_discount=0),o.registration_fee||(o.registration_fee=0),o.registration_fee_discount||(o.registration_fee_discount=0),o.material_fee||(o.material_fee=0),o.material_fee_discount||(o.material_fee_discount=0)})},deep:!0}},methods:{submit(){this.form.invoice_amount=this.totalFee(this.form.invoice_items),this.$inertia.post(route("fee.invoices.update"),this.form,{preserveState:!0})},totalFee(m){let o=0;for(const d of m){const v=parseFloat(d.programme_fee),P=parseFloat(d.programme_fee_discount),g=parseFloat(d.registration_fee),x=parseFloat(d.registration_fee_discount),M=parseFloat(d.material_fee),s=parseFloat(d.material_fee_discount);o+=v-P,d.include_registration_fee&&(o+=g-x),d.include_material_fee&&(o+=M-s);var e=0;if(d.promos&&Array.isArray(d.promos)){for(const y of d.promos)y.type_id===1&&(e+=v*y.value/100),y.type_id===2&&(e+=y.value);o=o-e}}return o},clearErrors(){this.errors.date=!1,this.errors.transaction_id=!1,this.errors.proof_of_payment=!1},clearAttachmentFields(){this.attachment.date="",this.attachment.transaction_id="",this.attachment.url="",this.attachment.file="",this.attachment.remark=""},showModal(){this.clearErrors(),this.clearAttachmentFields(),this.show.add_attachment=!0},deleteProof(m,o){this.form.payment.proofs.splice(m,1),o&&this.form.payment.proofs_to_delete.push(o)},uploadFile(m){const o=m.target.files[0];o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")||o.type=="image/jpeg"||o.name.toLowerCase().endsWith(".png")?(this.attachment.url=URL.createObjectURL(o),this.attachment.file=o):(alert("Only Image / PDF File allowed!"),this.$refs.file_input.value="")},addAttachment(){if(!this.attachment.date||!this.attachment.transaction_id||!this.attachment.file){this.errors.date=!this.attachment.date,this.errors.transaction_id=!this.attachment.transaction_id,this.errors.proof_of_payment=!this.attachment.file;return}this.form.payment.proofs.push({date:C(this.attachment.date).format("DD-MM-YYYY"),transaction_id:this.attachment.transaction_id,url:this.attachment.url,file:this.attachment.file,remark:this.attachment.remark}),this.show_add_attachment=!1},openPaymentLink(){window.open(this.$page.props.bill_info.url,"_blank")}},mounted(){this.$page.props.invoice_attachments.forEach(m=>{this.form.payment.proofs.push({id:m.id,date:C(m.date).format("DD-MM-YYYY"),transaction_id:m.transaction_id,url:m.attachment,file:"",remark:m.remark})})}},at=Object.assign(oe,{__name:"Edit",setup(m){return(o,e)=>{const d=$("Label"),v=$("Input"),P=$("ComboBox"),g=$("Button"),x=$("Datepicker"),M=$("Textarea");return f(),D(c,null,[a(l(L),{title:"Fee Invoices"}),a(I,null,{header:t(()=>e[14]||(e[14]=[])),default:t(()=>[a(V,null,{title:t(()=>e[15]||(e[15]=[r("Invoice Information")])),content:t(()=>[n("div",E,[n("div",null,[a(d,null,{default:t(()=>e[16]||(e[16]=[r("Invoice Number"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),a(v,{type:"text",error:!!o.$page.props.errors.invoice_number,modelValue:o.$page.props.invoice_data.invoice_number,"onUpdate:modelValue":e[0]||(e[0]=s=>o.$page.props.invoice_data.invoice_number=s),disabled:""},null,8,["error","modelValue"])]),n("div",null,[a(d,null,{default:t(()=>e[17]||(e[17]=[r("Student Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),a(v,{type:"text",error:!!o.$page.props.errors.student_name,modelValue:o.$page.props.invoice_data.student_name,"onUpdate:modelValue":e[1]||(e[1]=s=>o.$page.props.invoice_data.student_name=s),disabled:""},null,8,["error","modelValue"])]),n("div",null,[a(d,null,{default:t(()=>e[18]||(e[18]=[r("Date Issued"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),a(v,{type:"text",error:!!o.$page.props.errors.date_issued,modelValue:o.$page.props.invoice_data.date_issued,"onUpdate:modelValue":e[2]||(e[2]=s=>o.$page.props.invoice_data.date_issued=s),disabled:""},null,8,["error","modelValue"])]),n("div",null,[a(d,null,{default:t(()=>e[19]||(e[19]=[r("Due Date"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),a(v,{type:"text",error:!!o.$page.props.errors.due_date,modelValue:o.$page.props.invoice_data.due_date,"onUpdate:modelValue":e[3]||(e[3]=s=>o.$page.props.invoice_data.due_date=s),disabled:""},null,8,["error","modelValue"])])])]),_:1}),a(V,null,{title:t(()=>e[20]||(e[20]=[r("Programme Information")])),content:t(()=>[(f(!0),D(c,null,A(o.form.invoice_items,(s,y)=>(f(),b(Y,{modelValue:o.collapsible_is_open,"onUpdate:modelValue":e[4]||(e[4]=k=>o.collapsible_is_open=k)},{trigger:t(()=>[r(u(s.programme_name)+" ( Level "+u(s.programme_level)+" )",1)]),content:t(()=>[a(l(w),{class:"px-4"},{default:t(()=>[a(l(h),{class:"bg-gray-100"},{default:t(()=>[a(l(_),null,{default:t(()=>[a(l(p),null,{default:t(()=>e[21]||(e[21]=[r("Items")])),_:1}),a(l(p),null,{default:t(()=>e[22]||(e[22]=[r("Discount")])),_:1}),a(l(p),null,{default:t(()=>e[23]||(e[23]=[r("Amount")])),_:1})]),_:1})]),_:1}),a(l(F),null,{default:t(()=>[a(l(_),null,{default:t(()=>[a(l(i),null,{default:t(()=>[r(u(s.programme_type),1)]),_:2},1024),a(l(i),null,{default:t(()=>[r(u(s.programme_fee_discount),1)]),_:2},1024),a(l(i),null,{default:t(()=>[r(u(s.use_old_fee&&s.old_programme_fee?s.old_programme_fee:s.programme_fee),1)]),_:2},1024)]),_:2},1024),s.include_registration_fee&&s.registration_fee!=0?(f(),b(l(_),{key:0},{default:t(()=>[a(l(i),null,{default:t(()=>e[24]||(e[24]=[r("Registration Fee")])),_:1}),a(l(i),null,{default:t(()=>[r(u(s.registration_fee_discount),1)]),_:2},1024),a(l(i),null,{default:t(()=>[r(u(s.registration_fee),1)]),_:2},1024)]),_:2},1024)):B("",!0),s.include_material_fee?(f(),b(l(_),{key:1},{default:t(()=>[a(l(i),null,{default:t(()=>e[25]||(e[25]=[r("Material Fee")])),_:1}),a(l(i),null,{default:t(()=>[r(u(s.material_fee_discount),1)]),_:2},1024),a(l(i),null,{default:t(()=>[r(u(s.material_fee),1)]),_:2},1024)]),_:2},1024)):B("",!0),s.promos?(f(!0),D(c,{key:2},A(s.promos,k=>(f(),b(l(_),null,{default:t(()=>[a(l(i),{class:"space-x-2"},{default:t(()=>[n("span",null,u(k.promo_name),1),a(l(R),{variant:""},{default:t(()=>e[26]||(e[26]=[r("Promo")])),_:1})]),_:2},1024),a(l(i),null,{default:t(()=>[r(u(k.type_id===1?s.programme_fee*k.value/100:k.value),1)]),_:2},1024),a(l(i),null,{default:t(()=>e[27]||(e[27]=[r("0")])),_:1})]),_:2},1024))),256)):B("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"]))),256)),n("div",O,[n("div",z,[a(d,{for:"payment_status"},{default:t(()=>e[28]||(e[28]=[r(" Payment Status ")])),_:1}),a(P,{id:"payment_status",items:o.$page.props.invoice_status,"label-property":"name","value-property":"id",error:o.$page.props.errors.status,modelValue:o.form.payment.status,"onUpdate:modelValue":e[5]||(e[5]=s=>o.form.payment.status=s),"select-placeholder":"Select Status","search-placeholder":"Search status..."},null,8,["items","error","modelValue"])]),n("div",H,[a(d,{class:"text-md font-medium"},{default:t(()=>e[29]||(e[29]=[r(" Total Amount")])),_:1}),a(d,{class:"text-xl font-bold"},{default:t(()=>[r(u(o.$page.props.invoice_data.amount),1)]),_:1})])])]),_:1}),n("div",J,[a(V,null,{title:t(()=>e[30]||(e[30]=[r("Online Payment (Billplz)")])),content:t(()=>[a(l(w),{class:"px-4"},{default:t(()=>[a(l(h),{class:"bg-gray-100"},{default:t(()=>[a(l(_),null,{default:t(()=>[a(l(p),{class:"px-4"},{default:t(()=>e[31]||(e[31]=[r("Payment Date")])),_:1}),a(l(p),null,{default:t(()=>e[32]||(e[32]=[r("Email")])),_:1}),a(l(p),null,{default:t(()=>e[33]||(e[33]=[r("Receipt")])),_:1})]),_:1})]),_:1}),a(l(F),null,{default:t(()=>[o.$page.props.bill_info.paid?(f(),b(l(_),{key:0},{default:t(()=>[a(l(i),{class:"px-4"},{default:t(()=>[r(u(l(C)(o.$page.props.bill_info.paid_at).format("DD/MM/Y")),1)]),_:1}),a(l(i),null,{default:t(()=>[r(u(o.$page.props.bill_info.email),1)]),_:1}),a(l(i),null,{default:t(()=>[a(g,{onClick:e[6]||(e[6]=s=>o.openPaymentLink())},{default:t(()=>e[34]||(e[34]=[r("View")])),_:1})]),_:1})]),_:1})):(f(),b(l(_),{key:1},{default:t(()=>[a(l(i),{class:"text-center",colspan:"3"},{default:t(()=>e[35]||(e[35]=[r("No Records")])),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}),a(V,null,{title:t(()=>[n("div",W,[e[37]||(e[37]=r(" Proof of Payment ")),a(g,{onClick:o.showModal},{default:t(()=>[a(l(S),{class:"h-4 w-4"}),e[36]||(e[36]=n("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1},8,["onClick"])])]),content:t(()=>[a(l(w),{class:"px-4"},{default:t(()=>[a(l(h),{class:"bg-gray-100"},{default:t(()=>[a(l(_),null,{default:t(()=>[a(l(p),null,{default:t(()=>e[38]||(e[38]=[r("#")])),_:1}),a(l(p),null,{default:t(()=>e[39]||(e[39]=[r("Date")])),_:1}),a(l(p),null,{default:t(()=>e[40]||(e[40]=[r("Transaction ID")])),_:1}),a(l(p),null,{default:t(()=>e[41]||(e[41]=[r("File Name")])),_:1}),a(l(p),null,{default:t(()=>e[42]||(e[42]=[r("Remark")])),_:1}),a(l(p),{class:"text-center"},{default:t(()=>e[43]||(e[43]=[r("Action")])),_:1})]),_:1})]),_:1}),a(l(F),null,{default:t(()=>[o.form.payment.proofs.length?(f(!0),D(c,{key:0},A(o.form.payment.proofs,(s,y)=>(f(),b(l(_),null,{default:t(()=>[a(l(i),null,{default:t(()=>[r(u(y+1),1)]),_:2},1024),a(l(i),null,{default:t(()=>[r(u(s.date),1)]),_:2},1024),a(l(i),null,{default:t(()=>[n("kbd",q,u(s.transaction_id),1)]),_:2},1024),a(l(i),null,{default:t(()=>[n("a",{href:s.file?s.url:"/storage/proof_of_payment/"+s.url,download:"",class:"min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-neutral-900"},u(s.file?s.file.name:s.url),9,G)]),_:2},1024),a(l(i),null,{default:t(()=>[r(u(s.remark),1)]),_:2},1024),a(l(i),{class:"text-center"},{default:t(()=>[a(g,{variant:"destructive",onClick:k=>o.deleteProof(y,s.id)},{default:t(()=>e[44]||(e[44]=[r("Delete")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256)):(f(),b(l(_),{key:1},{default:t(()=>[a(l(i),{class:"text-center",colspan:"10"},{default:t(()=>e[45]||(e[45]=[r("No Records")])),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),a(V,null,{content:t(()=>[n("div",K,[n("div",Q,[a(g,{variant:"outline",onClick:e[7]||(e[7]=s=>o.$inertia.get(o.route("fee.invoices",o.$page.props.params)))},{default:t(()=>e[46]||(e[46]=[r("Cancel")])),_:1}),a(g,{onClick:o.submit},{default:t(()=>e[47]||(e[47]=[r("Save")])),_:1},8,["onClick"])])])]),_:1}),a(T,{open:o.show.add_attachment,"onUpdate:open":e[13]||(e[13]=s=>o.show.add_attachment=s)},{title:t(()=>e[48]||(e[48]=[r("Add Proof of Payment")])),content:t(()=>[n("div",X,[n("div",Z,[a(d,{id:"date"},{default:t(()=>e[49]||(e[49]=[r("Date")])),_:1}),a(x,{mode:"date",modelValue:o.attachment.date,"onUpdate:modelValue":e[8]||(e[8]=s=>o.attachment.date=s),format:"dd/MM/Y",teleport:"#date",teleportCenter:!0},null,8,["modelValue"])]),n("div",null,[a(d,{for:"transaction_id"},{default:t(()=>e[50]||(e[50]=[r("Transaction ID")])),_:1}),a(v,{type:"text",name:"transaction_id",id:"transaction_id",modelValue:o.attachment.transaction_id,"onUpdate:modelValue":e[9]||(e[9]=s=>o.attachment.transaction_id=s),autocomplete:"off"},null,8,["modelValue"])]),n("div",null,[a(d,null,{default:t(()=>e[51]||(e[51]=[r("Proof of Payment ( "),n("span",{class:"text-xs text-indigo-500"},"PDF, JPEG",-1),r(" )")])),_:1}),n("div",ee,[n("div",te,[n("label",ae,[e[52]||(e[52]=n("span",{class:"sr-only"},"Browse File",-1)),n("input",{type:"file",ref:"file_input",class:j(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.errors.proof_of_payment?"border-red-300":"border-gray-300"]),onChange:e[10]||(e[10]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,34)])])])]),n("div",null,[a(d,{for:"remark"},{default:t(()=>e[53]||(e[53]=[r("Remark")])),_:1}),a(M,{type:"text",name:"remark",id:"remark",modelValue:o.attachment.remark,"onUpdate:modelValue":e[11]||(e[11]=s=>o.attachment.remark=s),autocomplete:"off"},null,8,["modelValue"])])])]),footer:t(()=>[a(g,{variant:"outline",onClick:e[12]||(e[12]=s=>o.show.add_attachment=!1)},{default:t(()=>e[54]||(e[54]=[r("Cancel")])),_:1}),a(g,{onClick:o.addAttachment},{default:t(()=>e[55]||(e[55]=[r("Add")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{at as default};
