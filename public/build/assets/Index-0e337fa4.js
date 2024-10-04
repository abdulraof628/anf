import{B as E}from"./Authenticated-214cc5de.js";import{H as w,L as I}from"./@inertiajs-2b766590.js";import{_ as N}from"./Card-e481dfab.js";import{_ as B,a as F,b as h,c as y,d as U,e as p}from"./TableRow-7ae90bc5.js";import{P}from"./Pagination-4f35e34d.js";import{a as x}from"./axios-1779699b.js";import{_ as S}from"./DeleteConfirmation-49a1d6a2.js";import{_ as T}from"./DialogModal-5bb61319.js";import{C,c as A}from"./lucide-vue-next-7b48dc26.js";import{x as f,v as i,u as l,O as t,F as v,b7 as _,q as d,y as s,U as n,t as b,B as D,I as L,J as k}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";const j={class:"flex items-center justify-end"},O=s("span",{class:"ml-1 hidden sm:block"},"New Language",-1),R=s("div",{class:"p-3"}," No Record Found ",-1),G={class:"grid grid-cols-1 gap-4 py-4"},H={class:""},M=s("span",{class:"text-red-500"},"*",-1),q={class:""},z=s("span",{class:"text-red-500"},"*",-1),J={class:""},K=s("span",{class:"text-red-500"},"*",-1),Q={class:""},W=s("span",{class:"text-red-500"},"*",-1),X={class:"space-y-2"},Y={class:"grid grid-cols-12 gap-2"},Z={class:"col-span-10"},ee={class:"col-span-2"},ie=s("span",{class:"ml-1 hidden sm:block"},"Add",-1),te={class:""},ae={class:"w-full text-sm font-medium divide-dashed divide-y text-gray-900 bg-white border border-gray-200 rounded-lg"},se={class:"flex text-xs sm:text-sm w-full px-4 py-2 space-x-1 items-center"},oe=["onClick"],re={key:1,class:"w-full px-4 py-2 space-x-4 bg-gray-100"},le=s("span",{class:"font-semibold text-gray-600 italic text-sm"},"No email has been added.",-1),ne=[le],de={components:{Head:w,Link:I},data(){return{confirmation:{is_open:!1,route_name:"",id:""},form_modal:!1,open_delete_modal:!1,confirmation_data:"",confirmation_route:"",processing:!1,errors:{name:!1,guideline_header:!1,guideline_body:!1,final_message:!1,email_input:!1},form:{id:"",name:"",guideline_header:"",guideline_body:"",final_message:"",email_input:"",pic_emails:[]}}},methods:{navigate(a){this.$inertia.visit(a)},addLanguage(){this.clearForm(),this.form_modal=!0},editLanguage(a){this.processing||(this.processing=!0,this.clearForm(),x.get(route("dt.settings.languages.edit"),{params:{language_id:a}}).then(e=>{this.form.id=e.data.language_info.id,this.form.name=e.data.language_info.name,this.form.guideline_header=e.data.language_info.guideline_header,this.form.guideline_body=e.data.language_info.guideline_body,this.form.final_message=e.data.language_info.final_message,this.form.pic_emails=e.data.pic_emails,this.form_modal=!0,this.processing=!1}).catch(e=>{this.processing=!1}))},deleteLanguage(a){this.confirmation.route_name="dt.settings.languages.destroy",this.confirmation.id=a,this.confirmation.is_open=!0},store(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.store"),this.form,{onSuccess:e=>{this.form_modal=!1,this.processing=!1}}))},update(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.update"),this.form,{onSuccess:e=>{this.form_modal=!1,this.processing=!1}}))},addEmail(){this.validateEmailInput()&&(this.form.pic_emails.push({email:this.form.email_input}),this.form.email_input="")},deleteEmail(a){this.form.pic_emails.splice(a,1)},clearForm(){this.form.id="",this.form.name="",this.form.guideline_header="",this.form.guideline_body="",this.form.final_message="",this.form.email_input="",this.form.pic_emails=[];for(let a in this.errors)this.errors[a]=!1},validateForm(){for(let a in this.errors)this.errors[a]=!1;for(let a in this.form)a==="id"||a==="email_input"||a==="pic_emails"||this.form[a].trim()===""&&(this.errors[a]=!0);return Object.values(this.errors).every(a=>!a)},validateEmailInput(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email_input);return this.errors.email_input=!e,e}}},si=Object.assign(de,{__name:"Index",setup(a){return(e,r)=>{const m=_("Button"),u=_("Label"),g=_("Input"),V=_("Textarea");return d(),f(v,null,[i(l(w),{title:"Diagnostic Test"}),i(E,null,{header:t(()=>[]),default:t(()=>[s("div",j,[i(m,{onClick:e.addLanguage},{default:t(()=>[i(l(C),{class:"h-4 w-4"}),O]),_:1},8,["onClick"])]),i(N,null,{content:t(()=>[i(l(B),null,{default:t(()=>[i(l(F),{class:"bg-gray-100"},{default:t(()=>[i(l(h),null,{default:t(()=>[i(l(y),null,{default:t(()=>[n("#")]),_:1}),i(l(y),null,{default:t(()=>[n("Name")]),_:1}),i(l(y),{class:"text-center"},{default:t(()=>[n("Action")]),_:1})]),_:1})]),_:1}),i(l(U),null,{default:t(()=>[e.$page.props.languages.data.length?D("",!0):(d(),b(l(h),{key:0},{default:t(()=>[i(l(p),{class:"text-center",colspan:"10"},{default:t(()=>[R]),_:1})]),_:1})),(d(!0),f(v,null,L(e.$page.props.languages.data,(o,c)=>(d(),b(l(h),null,{default:t(()=>[i(l(p),null,{default:t(()=>[n(k(e.$page.props.languages.from+c),1)]),_:2},1024),i(l(p),null,{default:t(()=>[n(k(o.name),1)]),_:2},1024),i(l(p),{class:"text-center space-x-2"},{default:t(()=>[i(m,{onClick:$=>e.editLanguage(o.id)},{default:t(()=>[n("Edit")]),_:2},1032,["onClick"]),i(m,{variant:"destructive",onClick:$=>e.deleteLanguage(o.id)},{default:t(()=>[n("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),i(P,{page_data:e.$page.props.languages},null,8,["page_data"]),i(S,{open:e.confirmation.is_open,onClose:r[0]||(r[0]=o=>e.confirmation.is_open=!1),routeName:e.confirmation.route_name,id:e.confirmation.id},{title:t(()=>[n("Delete Language")]),description:t(()=>[n("Are you sure want to delete this language?")]),_:1},8,["open","routeName","id"]),(d(),b(T,{open:e.form_modal,"onUpdate:open":r[9]||(r[9]=o=>e.form_modal=o),key:e.form.id},{title:t(()=>[n("Language Setting")]),content:t(()=>[s("div",G,[s("div",H,[i(u,{for:"language_name"},{default:t(()=>[n("Name"),M]),_:1}),i(g,{id:"language_name",type:"text",error:e.errors.name,modelValue:e.form.name,"onUpdate:modelValue":r[1]||(r[1]=o=>e.form.name=o)},null,8,["error","modelValue"])]),s("div",q,[i(u,{for:"guideline_header"},{default:t(()=>[n("Guideline Title"),z]),_:1}),i(g,{id:"guideline_header",type:"text",error:e.errors.guideline_header,modelValue:e.form.guideline_header,"onUpdate:modelValue":r[2]||(r[2]=o=>e.form.guideline_header=o)},null,8,["error","modelValue"])]),s("div",J,[i(u,{for:"guideline_body"},{default:t(()=>[n("Guideline Body"),K]),_:1}),i(V,{rows:6,id:"guideline_body",type:"text",error:e.errors.guideline_body,modelValue:e.form.guideline_body,"onUpdate:modelValue":r[3]||(r[3]=o=>e.form.guideline_body=o),placeholder:"Press enter to break a new line"},null,8,["error","modelValue"])]),s("div",Q,[i(u,{for:"final_message"},{default:t(()=>[n("Final Message"),W]),_:1}),i(V,{rows:3,id:"final_message",type:"text",error:e.errors.final_message,modelValue:e.form.final_message,"onUpdate:modelValue":r[4]||(r[4]=o=>e.form.final_message=o)},null,8,["error","modelValue"])]),s("div",X,[i(u,{for:"email_input"},{default:t(()=>[n("PIC Emails")]),_:1}),s("div",Y,[s("div",Z,[i(g,{id:"email_input",type:"text",modelValue:e.form.email_input,"onUpdate:modelValue":r[5]||(r[5]=o=>e.form.email_input=o),placeholder:"Enter PIC Email"},null,8,["modelValue"])]),s("div",ee,[i(m,{class:"py-2.5 px-4",onClick:r[6]||(r[6]=o=>e.addEmail())},{default:t(()=>[i(l(C),{class:"h-4 w-4"}),ie]),_:1})])]),s("div",te,[s("ul",ae,[e.form.pic_emails.length?(d(!0),f(v,{key:0},L(e.form.pic_emails,(o,c)=>(d(),f("li",se,[s("span",null,k(o.email),1),s("span",{class:"text-xs cursor-pointer uppercase text-red-500 hover:underline",onClick:$=>e.deleteEmail(c)},[i(l(A),{class:"w-4 h-4"})],8,oe)]))),256)):(d(),f("li",re,ne))])])])])]),footer:t(()=>[i(m,{variant:"outline",onClick:r[7]||(r[7]=o=>e.form_modal=!1)},{default:t(()=>[n("Cancel")]),_:1}),i(m,{onClick:r[8]||(r[8]=o=>e.form.id!=""?e.update():e.store())},{default:t(()=>[n("Save")]),_:1})]),_:1},8,["open"]))]),_:1})],64)}}});export{si as default};