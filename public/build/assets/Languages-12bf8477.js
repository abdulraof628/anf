import{q as l,x as d,y as e,v as n,P as r,z as w,F as c,C as y,t as k,V as a,G as _,K as u,bv as p,m as f}from"./@vue-b5d553e1.js";import"./Authenticated-f12ae66a.js";import{B as m}from"./Button-a75e4165.js";import{P as b}from"./Pagination-ab3fb2bd.js";import{M as v}from"./Modal-55ec914b.js";import{C as x}from"./ConfirmationModal-d78f2deb.js";import{a as C}from"./axios-9cbf0d09.js";import"./ApplicationLogo-e2b93f7b.js";import"./@inertiajs-df65e401.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./app-6e1c5045.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lucide-vue-next-967cc12e.js";import"./vue-final-modal-e9171ff2.js";import"./@heroicons-6bb93f0b.js";import"./@headlessui-1eabfa74.js";const V={class:"pt-6"},$={class:"flex mb-3"},L={class:"overflow-hidden"},B={class:"min-w-full divide-y divide-gray-200"},F=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"3"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",width:"5"},"Action")])],-1),M={class:"bg-white divide-y divide-gray-200"},T={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),N=[E],D={class:"px-6 py-4 whitespace-nowrap"},I={class:"text-sm text-gray-700"},j={class:"px-6 py-4 whitespace-nowrap"},P={class:"text-sm font-medium text-gray-900"},R={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},S={class:"flex justify-center"},U={class:"flex pr-1"},z={class:"flex"},A={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},G=e("h3",{class:"text-gray-800 tracking-wide font-semibold text-lg"}," Language Setting ",-1),O=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),q=[O],H={class:"w-full p-4 overflow-y-auto"},K={class:"grid grid-cols-1 gap-4"},J={class:""},Q=e("label",{for:"language_name",class:"block text-sm text-gray-700 font-bold"},[a(" Name "),e("span",{class:"text-red-500"},"*")],-1),W={class:"mt-1 flex rounded-md shadow-sm"},X={class:""},Y=e("label",{for:"guideline_header",class:"block text-sm text-gray-700 font-bold"},[a(" Guideline Title "),e("span",{class:"text-red-500"},"*")],-1),Z={class:"mt-1 flex rounded-md shadow-sm"},ee={class:""},te=e("label",{for:"guideline_body",class:"block text-sm text-gray-700 font-bold"},[a(" Guideline Body "),e("span",{class:"text-red-500"},"*"),a(" (Press enter to break a new line) ")],-1),oe={class:"mt-1 flex rounded-md shadow-sm"},se={class:""},ie=e("label",{for:"final_message",class:"block text-sm text-gray-700 font-bold"},[a(" Final Message "),e("span",{class:"text-red-500"},"*")],-1),ae={class:"mt-1 flex rounded-md shadow-sm"},re={class:"space-y-2"},le=e("label",{for:"email_input",class:"block text-sm text-gray-700 font-bold"}," PIC Emails",-1),ne={class:"mt-1 flex rounded-md shadow-sm space-x-2"},de={class:""},me={class:"w-full text-sm font-medium divide-dashed divide-y text-gray-900 bg-white border border-gray-200 rounded-lg"},ue={class:"w-full px-4 py-2 space-x-4"},pe=["onClick"],fe={key:1,class:"w-full px-4 py-2 space-x-4 bg-gray-100"},ge=e("span",{class:"font-semibold text-gray-600 italic text-sm"},"No email has been added.",-1),ce=[ge],_e={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},he={components:{Pagination:b,Modal:v,ConfirmationModal:x},data(){return{form_modal:!1,open_delete_modal:!1,confirmation_data:"",confirmation_route:"",processing:!1,errors:{name:!1,guideline_header:!1,guideline_body:!1,final_message:!1,email_input:!1},form:{id:"",name:"",guideline_header:"",guideline_body:"",final_message:"",email_input:"",pic_emails:[]}}},methods:{addLanguage(){this.clearForm(),this.form_modal=!0},editLanguage(o){this.processing||(this.processing=!0,this.clearForm(),C.get(route("dt.settings.languages.edit"),{params:{language_id:o}}).then(t=>{this.form.id=t.data.language_info.id,this.form.name=t.data.language_info.name,this.form.guideline_header=t.data.language_info.guideline_header,this.form.guideline_body=t.data.language_info.guideline_body,this.form.final_message=t.data.language_info.final_message,this.form.pic_emails=t.data.pic_emails,this.form_modal=!0,this.processing=!1}).catch(t=>{this.processing=!1}))},deleteLanguage(o){this.confirmation_data="dt.settings.languages.destroy",this.confirmation_route=o,this.open_delete_modal=!0},store(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.store"),this.form,{onSuccess:t=>{this.form_modal=!1,this.processing=!1}}))},update(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.update"),this.form,{onSuccess:t=>{this.form_modal=!1,this.processing=!1}}))},addEmail(){this.validateEmailInput()&&(this.form.pic_emails.push({email:this.form.email_input}),this.form.email_input="")},deleteEmail(o){this.form.pic_emails.splice(o,1)},clearForm(){this.form.id="",this.form.name="",this.form.guideline_header="",this.form.guideline_body="",this.form.final_message="",this.form.email_input="",this.form.pic_emails=[];for(let o in this.errors)this.errors[o]=!1},validateForm(){for(let o in this.errors)this.errors[o]=!1;for(let o in this.form)o==="id"||o==="email_input"||o==="pic_emails"||this.form[o].trim()===""&&(this.errors[o]=!0);return Object.values(this.errors).every(o=>!o)},validateEmailInput(){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email_input);return this.errors.email_input=!t,t}}},ft=Object.assign(he,{__name:"Languages",setup(o){return(t,s)=>(l(),d(c,null,[e("div",V,[e("div",$,[n(m,{type:"button",onClick:t.addLanguage},{default:r(()=>[a("New language")]),_:1},8,["onClick"])]),e("div",L,[e("table",B,[F,e("tbody",M,[t.$page.props.languages.data.length?w("",!0):(l(),d("tr",T,N)),(l(!0),d(c,null,y(t.$page.props.languages.data,(i,g)=>(l(),d("tr",{class:"hover:bg-gray-100",key:i.id},[e("td",D,[e("div",I,_(++g),1)]),e("td",j,[e("div",P,_(i.name),1)]),e("td",R,[e("div",S,[e("div",U,[n(m,{buttonType:"warning",onClick:h=>t.editLanguage(i.id)},{default:r(()=>[a(" Edit ")]),_:2},1032,["onClick"])]),e("div",z,[n(m,{buttonType:"danger",onClick:h=>t.deleteLanguage(i.id)},{default:r(()=>[a(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])])]),n(b,{page_data:t.$page.props.languages,params:t.params},null,8,["page_data","params"])]),(l(),k(v,{showModal:t.form_modal,modalType:"sm",onHideModal:s[9]||(s[9]=i=>t.form_modal=!1),key:t.form.id},{header:r(()=>[e("div",A,[G,e("button",{type:"button",onClick:s[0]||(s[0]=i=>t.form_modal=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},q)])]),content:r(()=>[e("div",H,[e("div",K,[e("div",J,[Q,e("div",W,[u(e("input",{type:"text",name:"language_name",id:"language_name",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=i=>t.form.name=i),autocomplete:"none"},null,2),[[p,t.form.name]])])]),e("div",X,[Y,e("div",Z,[u(e("input",{type:"text",name:"guideline_header",id:"guideline_header",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.guideline_header?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[2]||(s[2]=i=>t.form.guideline_header=i),autocomplete:"none"},null,2),[[p,t.form.guideline_header]])])]),e("div",ee,[te,e("div",oe,[u(e("textarea",{rows:"6",name:"guideline_body",id:"guideline_body",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.guideline_body?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=i=>t.form.guideline_body=i),autocomplete:"none"},null,2),[[p,t.form.guideline_body]])])]),e("div",se,[ie,e("div",ae,[u(e("textarea",{rows:"3",name:"final_message",id:"final_message",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.final_message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[4]||(s[4]=i=>t.form.final_message=i),autocomplete:"none"},null,2),[[p,t.form.final_message]])])]),e("div",re,[le,e("div",ne,[u(e("input",{type:"email",name:"email_input",id:"email_input",class:f(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.email_input?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[5]||(s[5]=i=>t.form.email_input=i),autocomplete:"none"},null,2),[[p,t.form.email_input]]),n(m,{class:"py-2.5 px-4",onClick:s[6]||(s[6]=i=>t.addEmail())},{default:r(()=>[a("Add")]),_:1})]),e("div",de,[e("ul",me,[t.form.pic_emails.length?(l(!0),d(c,{key:0},y(t.form.pic_emails,(i,g)=>(l(),d("li",ue,[e("span",null,_(i.email),1),e("span",{class:"text-xs cursor-pointer uppercase text-red-500 hover:underline",onClick:h=>t.deleteEmail(g)},"Delete",8,pe)]))),256)):(l(),d("li",fe,ce))])])])])])]),footer:r(()=>[e("div",_e,[n(m,{type:"button",buttonType:"info",onClick:s[7]||(s[7]=i=>t.form.id!=""?t.update():t.store())},{default:r(()=>[a("Save")]),_:1}),n(m,{buttonType:"gray",onClick:s[8]||(s[8]=i=>t.form_modal=!1)},{default:r(()=>[a("Cancel")]),_:1})])]),_:1},8,["showModal"])),n(x,{show:t.open_delete_modal,onClose:s[10]||(s[10]=i=>t.open_delete_modal=!1),confirmationAlert:"danger",confirmationTitle:"Delete Language",confirmationText:"Are you sure want to delete this language?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmation_data,confirmationData:t.confirmation_route},null,8,["show","confirmationRoute","confirmationData"])],64))}});export{ft as default};