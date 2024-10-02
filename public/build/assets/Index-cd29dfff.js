import{B as E}from"./Authenticated-63a330e4.js";import{H as w,L as N}from"./@inertiajs-4f2e6820.js";import{_ as F}from"./Card-6bd18383.js";import{_ as I,a as B,b as y,c as v,d as P,e as p}from"./TableRow-19fee62a.js";import{P as U}from"./Pagination-75df8083.js";import{a as x}from"./axios-1779699b.js";import{_ as S}from"./DeleteConfirmation-dd5220d3.js";import{_ as T}from"./DialogModal-9102a744.js";import{C as c,c as A}from"./lucide-vue-next-bc441494.js";import{y as f,x as t,u as l,Q as s,F as b,be as g,t as m,z as o,W as n,v as k,C as D,J as L,K as V}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-073cd217.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";const j={class:"flex items-center justify-end"},R={class:"grid grid-cols-1 gap-4 py-4"},z={class:""},G={class:""},H={class:""},M={class:""},O={class:"space-y-2"},J={class:"grid grid-cols-12 gap-2"},K={class:"col-span-10"},Q={class:"col-span-2"},W={class:""},q={class:"w-full text-sm font-medium divide-dashed divide-y text-gray-900 bg-white border border-gray-200 rounded-lg"},X={class:"flex text-xs sm:text-sm w-full px-4 py-2 space-x-1 items-center"},Y=["onClick"],Z={key:1,class:"w-full px-4 py-2 space-x-4 bg-gray-100"},ee={components:{Head:w,Link:N},data(){return{confirmation:{is_open:!1,route_name:"",id:""},form_modal:!1,open_delete_modal:!1,confirmation_data:"",confirmation_route:"",processing:!1,errors:{name:!1,guideline_header:!1,guideline_body:!1,final_message:!1,email_input:!1},form:{id:"",name:"",guideline_header:"",guideline_body:"",final_message:"",email_input:"",pic_emails:[]}}},methods:{navigate(a){this.$inertia.visit(a)},addLanguage(){this.clearForm(),this.form_modal=!0},editLanguage(a){this.processing||(this.processing=!0,this.clearForm(),x.get(route("dt.settings.languages.edit"),{params:{language_id:a}}).then(i=>{this.form.id=i.data.language_info.id,this.form.name=i.data.language_info.name,this.form.guideline_header=i.data.language_info.guideline_header,this.form.guideline_body=i.data.language_info.guideline_body,this.form.final_message=i.data.language_info.final_message,this.form.pic_emails=i.data.pic_emails,this.form_modal=!0,this.processing=!1}).catch(i=>{this.processing=!1}))},deleteLanguage(a){this.confirmation.route_name="dt.settings.languages.destroy",this.confirmation.id=a,this.confirmation.is_open=!0},store(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.store"),this.form,{onSuccess:i=>{this.form_modal=!1,this.processing=!1}}))},update(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.update"),this.form,{onSuccess:i=>{this.form_modal=!1,this.processing=!1}}))},addEmail(){this.validateEmailInput()&&(this.form.pic_emails.push({email:this.form.email_input}),this.form.email_input="")},deleteEmail(a){this.form.pic_emails.splice(a,1)},clearForm(){this.form.id="",this.form.name="",this.form.guideline_header="",this.form.guideline_body="",this.form.final_message="",this.form.email_input="",this.form.pic_emails=[];for(let a in this.errors)this.errors[a]=!1},validateForm(){for(let a in this.errors)this.errors[a]=!1;for(let a in this.form)a==="id"||a==="email_input"||a==="pic_emails"||this.form[a].trim()===""&&(this.errors[a]=!0);return Object.values(this.errors).every(a=>!a)},validateEmailInput(){const i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email_input);return this.errors.email_input=!i,i}}},We=Object.assign(ee,{__name:"Index",setup(a){return(i,e)=>{const d=g("Button"),u=g("Label"),_=g("Input"),$=g("Textarea");return m(),f(b,null,[t(l(w),{title:"Diagnostic Test"}),t(E,null,{header:s(()=>e[10]||(e[10]=[])),default:s(()=>[o("div",j,[t(d,{onClick:i.addLanguage},{default:s(()=>[t(l(c),{class:"h-4 w-4"}),e[11]||(e[11]=o("span",{class:"ml-1 hidden sm:block"},"New Language",-1))]),_:1},8,["onClick"])]),t(F,null,{content:s(()=>[t(l(I),null,{default:s(()=>[t(l(B),{class:"bg-gray-100"},{default:s(()=>[t(l(y),null,{default:s(()=>[t(l(v),null,{default:s(()=>e[12]||(e[12]=[n("#")])),_:1}),t(l(v),null,{default:s(()=>e[13]||(e[13]=[n("Name")])),_:1}),t(l(v),{class:"text-center"},{default:s(()=>e[14]||(e[14]=[n("Action")])),_:1})]),_:1})]),_:1}),t(l(P),null,{default:s(()=>[i.$page.props.languages.data.length?D("",!0):(m(),k(l(y),{key:0},{default:s(()=>[t(l(p),{class:"text-center",colspan:"10"},{default:s(()=>e[15]||(e[15]=[o("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(m(!0),f(b,null,L(i.$page.props.languages.data,(r,h)=>(m(),k(l(y),null,{default:s(()=>[t(l(p),null,{default:s(()=>[n(V(i.$page.props.languages.from+h),1)]),_:2},1024),t(l(p),null,{default:s(()=>[n(V(r.name),1)]),_:2},1024),t(l(p),{class:"text-center space-x-2"},{default:s(()=>[t(d,{onClick:C=>i.editLanguage(r.id)},{default:s(()=>e[16]||(e[16]=[n("Edit")])),_:2},1032,["onClick"]),t(d,{variant:"destructive",onClick:C=>i.deleteLanguage(r.id)},{default:s(()=>e[17]||(e[17]=[n("Delete")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(U,{page_data:i.$page.props.languages},null,8,["page_data"]),t(S,{open:i.confirmation.is_open,onClose:e[0]||(e[0]=r=>i.confirmation.is_open=!1),routeName:i.confirmation.route_name,id:i.confirmation.id},{title:s(()=>e[18]||(e[18]=[n("Delete Language")])),description:s(()=>e[19]||(e[19]=[n("Are you sure want to delete this language?")])),_:1},8,["open","routeName","id"]),(m(),k(T,{open:i.form_modal,"onUpdate:open":e[9]||(e[9]=r=>i.form_modal=r),key:i.form.id},{title:s(()=>e[20]||(e[20]=[n("Language Setting")])),content:s(()=>[o("div",R,[o("div",z,[t(u,{for:"language_name"},{default:s(()=>e[21]||(e[21]=[n("Name"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),t(_,{id:"language_name",type:"text",error:i.errors.name,modelValue:i.form.name,"onUpdate:modelValue":e[1]||(e[1]=r=>i.form.name=r)},null,8,["error","modelValue"])]),o("div",G,[t(u,{for:"guideline_header"},{default:s(()=>e[22]||(e[22]=[n("Guideline Title"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),t(_,{id:"guideline_header",type:"text",error:i.errors.guideline_header,modelValue:i.form.guideline_header,"onUpdate:modelValue":e[2]||(e[2]=r=>i.form.guideline_header=r)},null,8,["error","modelValue"])]),o("div",H,[t(u,{for:"guideline_body"},{default:s(()=>e[23]||(e[23]=[n("Guideline Body"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),t($,{rows:6,id:"guideline_body",type:"text",error:i.errors.guideline_body,modelValue:i.form.guideline_body,"onUpdate:modelValue":e[3]||(e[3]=r=>i.form.guideline_body=r),placeholder:"Press enter to break a new line"},null,8,["error","modelValue"])]),o("div",M,[t(u,{for:"final_message"},{default:s(()=>e[24]||(e[24]=[n("Final Message"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),t($,{rows:3,id:"final_message",type:"text",error:i.errors.final_message,modelValue:i.form.final_message,"onUpdate:modelValue":e[4]||(e[4]=r=>i.form.final_message=r)},null,8,["error","modelValue"])]),o("div",O,[t(u,{for:"email_input"},{default:s(()=>e[25]||(e[25]=[n("PIC Emails")])),_:1}),o("div",J,[o("div",K,[t(_,{id:"email_input",type:"text",modelValue:i.form.email_input,"onUpdate:modelValue":e[5]||(e[5]=r=>i.form.email_input=r),placeholder:"Enter PIC Email"},null,8,["modelValue"])]),o("div",Q,[t(d,{class:"py-2.5 px-4",onClick:e[6]||(e[6]=r=>i.addEmail())},{default:s(()=>[t(l(c),{class:"h-4 w-4"}),e[26]||(e[26]=o("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1})])]),o("div",W,[o("ul",q,[i.form.pic_emails.length?(m(!0),f(b,{key:0},L(i.form.pic_emails,(r,h)=>(m(),f("li",X,[o("span",null,V(r.email),1),o("span",{class:"text-xs cursor-pointer uppercase text-red-500 hover:underline",onClick:C=>i.deleteEmail(h)},[t(l(A),{class:"w-4 h-4"})],8,Y)]))),256)):(m(),f("li",Z,e[27]||(e[27]=[o("span",{class:"font-semibold text-gray-600 italic text-sm"},"No email has been added.",-1)])))])])])])]),footer:s(()=>[t(d,{variant:"outline",onClick:e[7]||(e[7]=r=>i.form_modal=!1)},{default:s(()=>e[28]||(e[28]=[n("Cancel")])),_:1}),t(d,{onClick:e[8]||(e[8]=r=>i.form.id!=""?i.update():i.store())},{default:s(()=>e[29]||(e[29]=[n("Save")])),_:1})]),_:1},8,["open"]))]),_:1})],64)}}});export{We as default};
